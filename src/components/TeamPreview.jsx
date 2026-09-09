import TeamCard from "./TeamCard";
import team from "../data/team";

function TeamPreview() {
  return (
    <section className="team-preview">

      <div className="section-heading">
        <div>
          <p>// THE COMMUNITY</p>
          <h2>Build with CodeStars.</h2>
          <span>
            Meet developers, discover complementary skills and
            build your next project together.
          </span>
        </div>

        <a href="/team-builder" className="section-link">
          Find Teammates →
        </a>
      </div>

      <div className="team-grid">
        {team.slice(0, 4).map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>

    </section>
  );
}

export default TeamPreview;