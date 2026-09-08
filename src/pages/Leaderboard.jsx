import { useState } from "react";

const defaultUsers = [
  {
    id: 1,
    name: "Aarav Mehta",
    username: "aarav",
    xp: 2450,
    solved: 86,
    streak: 21,
  },
  {
    id: 2,
    name: "Riya Shah",
    username: "riya",
    xp: 2180,
    solved: 79,
    streak: 18,
  },
  {
    id: 3,
    name: "Kabir Patel",
    username: "kabir",
    xp: 1890,
    solved: 67,
    streak: 14,
  },
  {
    id: 4,
    name: "Yug Dhameliya",
    username: "yug",
    xp: 1300,
    solved: 43,
    streak: 8,
  },
  {
    id: 5,
    name: "Ananya Joshi",
    username: "ananya",
    xp: 1150,
    solved: 39,
    streak: 9,
  },
  {
    id: 6,
    name: "Dev Malhotra",
    username: "dev",
    xp: 980,
    solved: 35,
    streak: 6,
  },
];

function Leaderboard() {
  const [filter, setFilter] = useState("Global");

  const savedUser = localStorage.getItem("codestars-user");

  const currentUser = savedUser
    ? JSON.parse(savedUser)
    : {
        name: "Yug Dhameliya",
        username: "yug",
        xp: 1300,
        solved: 43,
        streak: 8,
      };

  const users = defaultUsers
    .filter((user) => user.username !== currentUser.username)
    .concat({
      id: 999,
      name: currentUser.name,
      username: currentUser.username,
      xp: currentUser.xp,
      solved: currentUser.solved,
      streak: currentUser.streak,
    })
    .sort((a, b) => b.xp - a.xp);

  const currentRank =
    users.findIndex(
      (user) => user.username === currentUser.username
    ) + 1;

  return (
    <main className="leaderboard-page">

      <section className="leaderboard-hero">
        <span className="leaderboard-label">
          🏆 CODESTARS RANKINGS
        </span>

        <h1>Leaderboard</h1>

        <p>
          Compete with CodeStars members, solve problems,
          earn XP and climb the rankings.
        </p>
      </section>

      <div className="leaderboard-filters">
        {["Global", "Friends", "Weekly", "Monthly"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="your-rank">
        <div>
          <span>Your Rank</span>
          <strong>#{currentRank}</strong>
        </div>

        <div>
          <span>XP</span>
          <strong>{currentUser.xp}</strong>
        </div>

        <div>
          <span>Solved</span>
          <strong>{currentUser.solved}</strong>
        </div>

        <div>
          <span>Streak</span>
          <strong>🔥 {currentUser.streak}</strong>
        </div>
      </section>

      <section className="leaderboard-card">

        <div className="leaderboard-header">
          <span>Rank</span>
          <span>Coder</span>
          <span>XP</span>
          <span>Solved</span>
          <span>Streak</span>
        </div>

        {users.map((user, index) => (
          <div
            className={`leaderboard-row ${
              user.username === currentUser.username
                ? "current-user"
                : ""
            }`}
            key={user.id}
          >

            <div className="rank">
              {index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : `#${index + 1}`}
            </div>

            <div className="coder-info">
              <div className="coder-avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <strong>{user.name}</strong>
                <span>@{user.username}</span>
              </div>
            </div>

            <strong>{user.xp} XP</strong>

            <span>{user.solved}</span>

            <span>🔥 {user.streak}</span>

          </div>
        ))}

      </section>

    </main>
  );
}

export default Leaderboard;