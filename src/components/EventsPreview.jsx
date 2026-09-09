import EventCard from "./EventCard";
import events from "../data/events";

function EventsPreview() {
  return (
    <section className="events-preview">

      <div className="section-heading">
        <div>
          <p>// EVENTS</p>
          <h2>What's happening.</h2>
          <span>
            Explore upcoming events, workshops and opportunities.
          </span>
        </div>

        <a href="/events" className="section-link">
          View all events →
        </a>
      </div>

      <div className="events-grid">
        {events.slice(0, 3).map((event) => (
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