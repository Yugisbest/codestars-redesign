import { useState } from "react";

const defaultUser = {
  name: "Yug Dhameliya",
  username: "yug",
  bio: "Data Science student who loves competitive programming and building things.",
  college: "DJSCE",
  branch: "Data Science",
  year: "2nd Year",
  location: "Mumbai",
  xp: 1300,
  solved: 43,
  streak: 8,
  skills: ["React", "JavaScript", "Node.js", "MongoDB"],
};

function Profile() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("codestars-user");
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editForm, setEditForm] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
    college: user.college,
    branch: user.branch,
    year: user.year,
    location: user.location,
  });

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function startEditing() {
    setEditForm({
      name: user.name,
      username: user.username,
      bio: user.bio,
      college: user.college,
      branch: user.branch,
      year: user.year,
      location: user.location,
    });

    setIsEditing(true);
  }

  function cancelEditing() {
    setIsEditing(false);
  }

  function saveProfile(e) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      ...editForm,
    };

    setUser(updatedUser);
    localStorage.setItem(
      "codestars-user",
      JSON.stringify(updatedUser)
    );

    setIsEditing(false);
  }

  const xpProgress = Math.min((user.xp / 1500) * 100, 100);

  return (
    <main className="profile-page">

      <section className="profile-header">

        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div className="profile-info">
          <span className="profile-label">
            // CODESTARS PROFILE
          </span>

          <h1>{user.name}</h1>

          <p className="profile-username">
            @{user.username}
          </p>

          <p className="profile-bio">
            {user.bio}
          </p>

          <div className="profile-details">
            <span>🎓 {user.college}</span>
            <span>💻 {user.branch}</span>
            <span>📚 {user.year}</span>
            <span>📍 {user.location}</span>
          </div>
        </div>

        <button
          className="edit-profile-button"
          onClick={startEditing}
        >
          Edit Profile
        </button>

      </section>

      {isEditing && (
        <section className="profile-edit">

          <h2>Edit Profile</h2>

          <form onSubmit={saveProfile}>

            <label>
              Name
              <input
                name="name"
                value={editForm.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Username
              <input
                name="username"
                value={editForm.username}
                onChange={handleChange}
              />
            </label>

            <label>
              Bio
              <textarea
                name="bio"
                value={editForm.bio}
                onChange={handleChange}
              />
            </label>

            <label>
              College
              <input
                name="college"
                value={editForm.college}
                onChange={handleChange}
              />
            </label>

            <label>
              Branch
              <select
                name="branch"
                value={editForm.branch}
                onChange={handleChange}
              >
                <option value="Computer Science">
                  Computer Science
                </option>
                <option value="Data Science">
                  Data Science
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics & Telecommunication">
                  Electronics & Telecommunication
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
              </select>
            </label>

            <label>
              Year
              <select
                name="year"
                value={editForm.year}
                onChange={handleChange}
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </label>

            <label>
              Location
              <input
                name="location"
                value={editForm.location}
                onChange={handleChange}
              />
            </label>

            <div className="profile-edit-actions">
              <button type="button" onClick={cancelEditing}>
                Cancel
              </button>

              <button type="submit">
                Save Profile
              </button>
            </div>

          </form>

        </section>
      )}

      <section className="profile-stats">

        <div className="stat-card">
          <span>⚡</span>
          <strong>{user.xp}</strong>
          <p>XP</p>
        </div>

        <div className="stat-card">
          <span>🧩</span>
          <strong>{user.solved}</strong>
          <p>Problems Solved</p>
        </div>

        <div className="stat-card">
          <span>🔥</span>
          <strong>{user.streak}</strong>
          <p>Day Streak</p>
        </div>

      </section>

      <section className="profile-section progress-dashboard">

        <h2>Progress</h2>

        <div className="level-info">

          <div>
            <span>Level 13</span>
            <p>{user.xp} / 1500 XP</p>
          </div>

          <strong>⚡ {user.xp} XP</strong>

        </div>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{
              width: `${xpProgress}%`,
            }}
          />
        </div>

        <div className="progress-grid">

          <div className="progress-item">
            <span>🧩</span>
            <strong>{user.solved}</strong>
            <p>Problems Solved</p>
          </div>

          <div className="progress-item">
            <span>🔥</span>
            <strong>{user.streak}</strong>
            <p>Current Streak</p>
          </div>

          <div className="progress-item">
            <span>🎯</span>
            <strong>50</strong>
            <p>XP per Challenge</p>
          </div>

        </div>

      </section>

      <section className="profile-section">

        <h2>Skills</h2>

        <div className="skills-list">
          {user.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

      </section>

      <section className="profile-section">

        <h2>Achievements</h2>

        <div className="achievements-grid">

          <div className="achievement-card">
            <span>🚀</span>
            <h3>First Solve</h3>
            <p>Solved your first coding problem.</p>
          </div>

          <div className="achievement-card">
            <span>🔥</span>
            <h3>7 Day Streak</h3>
            <p>Maintained a coding streak for 7 days.</p>
          </div>

          <div className="achievement-card">
            <span>⚡</span>
            <h3>1000 XP</h3>
            <p>Reached 1000 XP on CodeStars.</p>
          </div>

          <div className="achievement-card">
            <span>🏆</span>
            <h3>Community Member</h3>
            <p>Joined the CodeStars developer community.</p>
          </div>

        </div>

      </section>

      <section className="profile-section profile-community">

        <div>
          <h2>Community</h2>

          <p>
            Connect with other CodeStars and build your network.
          </p>
        </div>

        <div className="community-actions">

          <a
            href="/friends"
            className="community-button"
          >
            🤝 Friends
          </a>

          <a
            href="/leaderboard"
            className="community-button"
          >
            🏆 Leaderboard
          </a>

          <a
            href="/team-builder"
            className="community-button"
          >
            🚀 Team Builder
          </a>

        </div>

      </section>

    </main>
  );
}

export default Profile;