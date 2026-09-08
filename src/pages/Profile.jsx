import { useState } from "react";

const defaultUser = {
    name: "Yug Dhameliya",
    username: "yug",
    bio: "Data Science student who loves competitive programming and building things.",
    college: "DJSCE",
    location: "Mumbai",
    xp: 1250,
    solved: 42,
    streak: 7,
    skills: ["React", "JavaScript", "Node.js", "MongoDB"],
};

function Profile() {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("codestars-user");
        return savedUser ? JSON.parse(savedUser) : defaultUser;
    });

    const [editing, setEditing] = useState(false);
    const [editForm, setEditForm] = useState(user);

    function updateField(field, value) {
        setEditForm({
            ...editForm,
            [field]: value,
        });
    }

    function saveProfile() {
        setUser(editForm);
        localStorage.setItem(
            "codestars-user",
            JSON.stringify(editForm)
        );
        setEditing(false);
    }

    function cancelEdit() {
        setEditForm(user);
        setEditing(false);
    }

    return (
        <main className="profile-page">

            {/* Profile Header */}
            <section className="profile-header">

                <div className="profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="profile-info">
                    <h1>{user.name}</h1>

                    <p className="profile-username">
                        @{user.username}
                    </p>

                    <p className="profile-bio">
                        {user.bio}
                    </p>

                    <div className="profile-details">
                        <span>🎓 {user.college}</span>
                        <span>📍 {user.location}</span>
                    </div>
                </div>

                <button
                    className="edit-profile-button"
                    onClick={() => {
                        setEditForm(user);
                        setEditing(true);
                    }}
                >
                    Edit Profile
                </button>

            </section>

            {/* Edit Profile */}
            {editing && (
                <section className="profile-edit">

                    <h2>Edit Profile</h2>

                    <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                            updateField("name", e.target.value)
                        }
                        placeholder="Name"
                    />

                    <input
                        type="text"
                        value={editForm.username}
                        onChange={(e) =>
                            updateField("username", e.target.value)
                        }
                        placeholder="Username"
                    />

                    <textarea
                        value={editForm.bio}
                        onChange={(e) =>
                            updateField("bio", e.target.value)
                        }
                        placeholder="Bio"
                    />

                    <input
                        type="text"
                        value={editForm.college}
                        onChange={(e) =>
                            updateField("college", e.target.value)
                        }
                        placeholder="College"
                    />

                    <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) =>
                            updateField("location", e.target.value)
                        }
                        placeholder="Location"
                    />

                    <div className="profile-edit-actions">

                        <button onClick={cancelEdit}>
                            Cancel
                        </button>

                        <button onClick={saveProfile}>
                            Save Changes
                        </button>

                    </div>

                </section>
            )}

            {/* Stats */}
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

            {/* Progress Dashboard */}
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
                            width: `${Math.min((user.xp / 1500) * 100, 100)}%`,
                        }}
                    ></div>
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

            {/* Skills */}
            <section className="profile-section">

                <h2>Skills</h2>

                <div className="skills-list">
                    {user.skills.map((skill) => (
                        <span
                            key={skill}
                            className="skill-tag"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </section>

            {/* Achievements */}
            <section className="profile-section">

                <h2>Achievements</h2>

                <div className="achievements-grid">

                    <div className="achievement-card">
                        🏆
                        <h3>First Solve</h3>
                        <p>Solved your first challenge.</p>
                    </div>

                    <div className="achievement-card">
                        🔥
                        <h3>7 Day Streak</h3>
                        <p>Completed challenges for 7 days.</p>
                    </div>

                    <div className="achievement-card">
                        🚀
                        <h3>Hackathon Ready</h3>
                        <p>Participated in a hackathon.</p>
                    </div>

                    <div className="achievement-card">
                        ⭐
                        <h3>1000 XP</h3>
                        <p>Reached 1000 XP.</p>
                    </div>

                </div>

            </section>
            {/* Community */}

<section className="profile-section profile-community">

  <div>
    <h2>Community</h2>
    <p>
      Connect with other CodeStars and build your network.
    </p>
  </div>

  <div className="community-actions">

    <a href="/friends" className="community-button">
      🤝 Friends
    </a>

    <a href="/leaderboard" className="community-button">
      🏆 Leaderboard
    </a>

  </div>

</section>
        </main>
    );
}

export default Profile;