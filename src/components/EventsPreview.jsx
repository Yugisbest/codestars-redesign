import EventCard from "./EventCard";
import events from "../data/events";

function EventsPreview() {
  return (
    <section className="events-preview">

      <div className="section-heading">
        <p>// EVENTS</p>
        <h2>What's happening.</h2>
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

    </section>
  );
}

export default EventsPreview;