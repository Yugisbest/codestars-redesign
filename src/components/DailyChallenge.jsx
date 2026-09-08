import { useEffect, useState } from "react";

const challenge = {
  id: "two-sum",
  title: "Two Sum",
  difficulty: "Easy",
  topic: "Arrays",
  points: 50,
  description:
    "Given an array of integers and a target value, find two numbers that add up to the target.",
};

function DailyChallenge() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("codestars-user");

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Yug Dhameliya",
          username: "yug",
          xp: 1250,
          solved: 42,
          streak: 7,
        };
  });

  const [completed, setCompleted] = useState(() => {
    return localStorage.getItem(
      `codestars-challenge-${challenge.id}`
    ) === "true";
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("codestars-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function completeChallenge() {
    if (completed) return;

    const updatedUser = {
      ...user,
      xp: user.xp + challenge.points,
      solved: user.solved + 1,
      streak: user.streak + 1,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "codestars-user",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem(
      `codestars-challenge-${challenge.id}`,
      "true"
    );

    setCompleted(true);
  }

  return (
    <section className="daily-challenge">

      <div className="challenge-header">

        <div>
          <span className="challenge-label">
            🎯 DAILY CHALLENGE
          </span>

          <h2>{challenge.title}</h2>
        </div>

        <div className="challenge-streak">
          🔥 {user.streak} Day Streak
        </div>

      </div>

      <p className="challenge-description">
        {challenge.description}
      </p>

      <div className="challenge-info">
        <span>⚡ {challenge.difficulty}</span>
        <span>📚 {challenge.topic}</span>
        <span>🏆 +{challenge.points} XP</span>
      </div>

      {completed ? (
        <div className="challenge-completed">
          🎉 Challenge Completed!
        </div>
      ) : (
        <button
          className="challenge-button"
          onClick={completeChallenge}
        >
          Solve Challenge →
        </button>
      )}

    </section>
  );
}

export default DailyChallenge;