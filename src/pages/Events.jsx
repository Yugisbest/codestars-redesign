// function Events() {
//   return <h1>CodeStars Events</h1>;
// }

// export default Events;

//The code about was just to structure our website

//The real code is below:

import EventCard from "../components/EventCard";
import events from "../data/events";

function Events() {
  return (
    <main className="events-page">

      <div className="page-header">
        <p>// CODESTARS EVENTS</p>
        <h1>Compete.<br />Build.<br />Win.</h1>
        <p className="page-description">
          Explore coding competitions, technical events and challenges
          organized by CodeStars.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          // <EventCard
          //   key={event.title}
          //   title={event.title}
          //   category={event.category}
          //   date={event.date}
          // />
          <EventCard
            key={event.title}
            title={event.title}
            category={event.category}
            description={event.description}
            tag={event.tag}
          />
        ))}
      </div>

    </main>
  );
}

export default Events;