// function EventCard({ title, category, date }) {
//   return (
//     <article className="event-card">
//       <span>{category}</span>

//       <h3>{title}</h3>

//       <p>{date}</p>

//       <button>View Event →</button>
//     </article>
//   );
// }

// export default EventCard;

// import { Link } from "react-router-dom";

// function EventCard({ title, category, date }) {
//   return (
//     <article className="event-card">
//       <span>{category}</span>

//       <h3>{title}</h3>

//       <p>{date}</p>

//       <Link to="/events" className="event-button">
//         View Event →
//       </Link>
//     </article>
//   );
// }

// export default EventCard;

import { Link } from "react-router-dom";

function EventCard({ title, category, description, tag }) {
  return (
    <article className="event-card">

      <div className="event-card-top">
        <span>{category}</span>
        <span className="event-number">{tag}</span>
      </div>

      <h3>{title}</h3>

      <p className="event-description">
        {description}
      </p>

      <Link to="/events" className="event-button">
        View Event →
      </Link>

    </article>
  );
}

export default EventCard;