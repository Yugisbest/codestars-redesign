import { useState } from "react";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import EventsPreview from "../components/EventsPreview";
import TeamPreview from "../components/TeamPreview";
import JoinSection from "../components/JoinSection";
import DailyChallenge from "../components/DailyChallenge";

function Home() {
    const [user] = useState(() => {
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
  return (
    <main className="home-page">
      <Hero />

      <section className="home-dashboard">
        <div className="dashboard-heading">
          <div>
            <span>YOUR DASHBOARD</span>
            <h2>Welcome back, {user.name.split(" ")[0]} 👋</h2>
            <p>Keep learning, solving and building.</p>
          </div>

          <a href="/profile" className="dashboard-profile-link">
            View Profile →
          </a>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <span>⚡</span>
            <strong>{user.xp}</strong>
            <p>XP</p>
          </div>

          <div className="dashboard-card">
            <span>🧩</span>
            <strong>{user.solved}</strong>
            <p>Problems Solved</p>
          </div>

          <div className="dashboard-card">
            <span>🔥</span>
            <strong>{user.streak}</strong>
            <p>Day Streak</p>
          </div>

          <div className="dashboard-card">
            <span>🏆</span>
            <strong>Rank #4</strong>
            <p>Community</p>
          </div>
        </div>
      </section>

      <section className="home-stats-section">
        <Stats />
      </section>

      <section className="home-challenge-section">
        <DailyChallenge />
      </section>

      <section className="home-events-section">
        <EventsPreview />
      </section>

      <section className="home-team-section">
        <TeamPreview />
      </section>

      <JoinSection />
    </main>
  );
}

export default Home;