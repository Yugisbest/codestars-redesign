// function TeamCard({ name, role }) {
//   return (
//     <div className="team-card">
//       <div className="team-avatar">
//         {name.charAt(0)}
//       </div>

//       <h3>{name}</h3>
//       <p>{role}</p>
//     </div>
//   );
// }

// export default TeamCard;

function TeamCard({ name, role, description }) {
  return (
    <div className="team-card">

      <div className="team-avatar">
        {name.charAt(0)}
      </div>

      <div className="team-role">
        {role}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

    </div>
  );
}

export default TeamCard;