import TeamCard from "./TeamCard";
import team from "../data/team";

function TeamPreview() {
  return (
    <section className="team-preview">
      <div className="section-heading">
        <p>// THE COMMUNITY</p>
        <h2>Built by developers.</h2>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamPreview;