import Hero from "../components/Hero";
import Stats from "../components/Stats";
import EventsPreview from "../components/EventsPreview";
import TeamPreview from "../components/TeamPreview";
import JoinSection from "../components/JoinSection";
import DailyChallenge from "../components/DailyChallenge";

function Home() {
  return (
    <main className="home-page">
      <Hero />

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