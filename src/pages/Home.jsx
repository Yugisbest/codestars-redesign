import Hero from "../components/Hero";
import Stats from "../components/Stats";
import EventsPreview from "../components/EventsPreview";
import TeamPreview from "../components/TeamPreview";
import JoinSection from "../components/JoinSection";

function Home() {
  return (
    <main>
      <Hero />
      <Stats/>
      <EventsPreview />
      <TeamPreview />
      <JoinSection />
    </main>
  );
}

export default Home;