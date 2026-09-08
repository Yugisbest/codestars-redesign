import { useState } from "react";

const hackathons = [
  {
    id: 1,
    title: "CodeStorm 2026",
    description:
      "Build innovative solutions using modern web technologies.",
    requiredSkills: ["React", "Node.js", "MongoDB", "UI/UX"],
  },
  {
    id: 2,
    title: "AI Innovation Challenge",
    description:
      "Create an AI-powered solution to solve a real-world problem.",
    requiredSkills: ["Python", "AI/ML", "Data Science", "React"],
  },
];

const mockUsers = [
  {
    id: 1,
    name: "Aarav Mehta",
    username: "aarav",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Riya Shah",
    username: "riya",
    skills: ["Python", "AI/ML", "Data Science"],
  },
  {
    id: 3,
    name: "Kabir Patel",
    username: "kabir",
    skills: ["Java", "DSA", "Backend"],
  },
  {
    id: 4,
    name: "Ananya Joshi",
    username: "ananya",
    skills: ["UI/UX", "React", "Figma"],
  },
];

function TeamBuilder() {
  const [selectedHackathon, setSelectedHackathon] = useState(
    hackathons[0]
  );

  const [user] = useState(() => {
    const savedUser = localStorage.getItem("codestars-user");

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Yug Dhameliya",
          username: "yug",
          skills: ["React", "JavaScript", "Node.js", "MongoDB"],
        };
  });

  const [invited, setInvited] = useState(() => {
    const savedInvites = localStorage.getItem(
      "codestars-team-invites"
    );

    return savedInvites ? JSON.parse(savedInvites) : [];
  });

  const userSkills = user.skills || [];
  const requiredSkills = selectedHackathon.requiredSkills;

  const missingSkills = requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  function calculateCompatibility(teammate) {
    const teammateSkills = teammate.skills.filter((skill) =>
      requiredSkills.includes(skill)
    );

    const fillsMissingSkills = teammateSkills.filter((skill) =>
      missingSkills.includes(skill)
    );

    const coverage =
      ((requiredSkills.length - missingSkills.length) /
        requiredSkills.length) *
      100;

    const teammateContribution =
      missingSkills.length > 0
        ? (fillsMissingSkills.length / missingSkills.length) * 100
        : 100;

    const score = Math.round(
      coverage * 0.4 + teammateContribution * 0.6
    );

    return {
      score: Math.min(score, 99),
      fillsMissingSkills,
    };
  }

  function inviteUser(user) {
    if (invited.includes(user.id)) return;

    const updatedInvites = [...invited, user.id];

    setInvited(updatedInvites);

    localStorage.setItem(
      "codestars-team-invites",
      JSON.stringify(updatedInvites)
    );
  }

  function withdrawInvitation(userId) {
    const updatedInvites = invited.filter(
      (id) => id !== userId
    );

    setInvited(updatedInvites);

    localStorage.setItem(
      "codestars-team-invites",
      JSON.stringify(updatedInvites)
    );
  }

  const recommendedUsers = mockUsers
    .filter((mockUser) => mockUser.username !== user.username)
    .map((mockUser) => {
      const compatibility =
        calculateCompatibility(mockUser);

      return {
        ...mockUser,
        ...compatibility,
      };
    })
    .sort((a, b) => b.score - a.score);

  return (
    <main className="team-builder-page">
      {/* Hero */}
      <section className="team-builder-hero">
        <span>🚀 CODESTARS TEAM BUILDER</span>

        <h1>Build Your Perfect Team</h1>

        <p>
          Find teammates with complementary skills and
          build a stronger hackathon team.
        </p>
      </section>

      {/* Hackathon Selection */}
      <section className="team-builder-section">
        <h2>Select Hackathon</h2>

        <div className="hackathon-selector">
          {hackathons.map((hackathon) => (
            <button
              key={hackathon.id}
              className={
                selectedHackathon.id === hackathon.id
                  ? "hackathon-option active"
                  : "hackathon-option"
              }
              onClick={() => setSelectedHackathon(hackathon)}
            >
              <strong>{hackathon.title}</strong>

              <span>{hackathon.description}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Your Skills */}
      <section className="team-builder-section">
        <h2>Your Skills</h2>

        <div className="skill-list">
          {userSkills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Skill Gap Analysis */}
      <section className="team-builder-section">
        <h2>Skill Gap Analysis</h2>

        <p className="team-builder-description">
          We compare your skills with the skills required
          for this hackathon.
        </p>

        <div className="required-skills">
          {requiredSkills.map((skill) => {
            const hasSkill = userSkills.includes(skill);

            return (
              <span
                key={skill}
                className={
                  hasSkill
                    ? "required-skill matched"
                    : "required-skill missing"
                }
              >
                {hasSkill ? "✓" : "!"} {skill}
              </span>
            );
          })}
        </div>

        {missingSkills.length > 0 ? (
          <div className="skill-gap-message">
            <strong>Missing skills:</strong>{" "}
            {missingSkills.join(", ")}
          </div>
        ) : (
          <div className="skill-gap-message">
            🎉 You already cover all required skills!
          </div>
        )}
      </section>

      {/* Recommendations */}
      <section className="team-builder-section">
        <h2>Recommended Teammates</h2>

        <p className="team-builder-description">
          Recommendations are based on how well a
          member's skills complement your current team.
        </p>

        <div className="teammate-grid">
          {recommendedUsers.map((teammate) => (
            <div
              className="teammate-card"
              key={teammate.id}
            >
              <div className="teammate-header">
                <div className="teammate-avatar">
                  {teammate.name.charAt(0)}
                </div>

                <div>
                  <h3>{teammate.name}</h3>

                  <span>@{teammate.username}</span>
                </div>
              </div>

              <div className="compatibility-score">
                <strong>{teammate.score}%</strong>

                <span>Compatibility</span>
              </div>

              <div className="teammate-skills">
                {teammate.skills.map((skill) => (
                  <span
                    key={skill}
                    className={
                      teammate.fillsMissingSkills.includes(
                        skill
                      )
                        ? "skill-tag recommended-skill"
                        : "skill-tag"
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {teammate.fillsMissingSkills.length > 0 && (
                <p className="fills-skills">
                  ✓ Fills:{" "}
                  {teammate.fillsMissingSkills.join(", ")}
                </p>
              )}

              <button
                className="invite-button"
                onClick={() =>
                  invited.includes(teammate.id)
                    ? withdrawInvitation(teammate.id)
                    : inviteUser(teammate)
                }
              >
                {invited.includes(teammate.id)
                  ? "✓ Invitation Sent — Withdraw"
                  : "Invite to Team"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* My Team Requests */}
      <section className="team-requests">
        <h2>My Team Requests</h2>

        {invited.length === 0 ? (
          <p className="empty-requests">
            You haven't invited anyone yet.
          </p>
        ) : (
          <div className="request-list">
            {invited.map((userId) => {
              const teammate = mockUsers.find(
                (item) => item.id === userId
              );

              if (!teammate) return null;

              return (
                <div
                  className="request-row"
                  key={teammate.id}
                >
                  <div className="request-user">
                    <div className="teammate-avatar">
                      {teammate.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{teammate.name}</strong>

                      <span>
                        @{teammate.username}
                      </span>
                    </div>
                  </div>

                  <button
                    className="withdraw-button"
                    onClick={() =>
                      withdrawInvitation(teammate.id)
                    }
                  >
                    Withdraw Invitation
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default TeamBuilder;