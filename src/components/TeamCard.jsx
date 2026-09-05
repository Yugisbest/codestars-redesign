function TeamCard({ name, role }) {
  return (
    <div className="team-card">
      <div className="team-avatar">
        {name.charAt(0)}
      </div>

      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default TeamCard;