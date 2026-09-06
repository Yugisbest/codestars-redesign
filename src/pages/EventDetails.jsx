import { Link, useParams } from "react-router-dom";
import events from "../data/events";

function EventDetails() {
  const { eventName } = useParams();

  const event = events.find(
    (item) =>
      item.title.toLowerCase().replaceAll(" ", "-") === eventName
  );

  if (!event) {
    return (
      <main className="not-found-page">
        <p className="not-found-code">// EVENT NOT FOUND</p>

        <h1>
          Event not
          <br />
          <span>found.</span>
        </h1>

        <Link to="/events" className="primary-button">
          ← Back to Events
        </Link>
      </main>
    );
  }

  return (
    <main className="event-details-page">

      <div className="event-details-header">
        <div>
          <p className="event-category">
            // {event.category}
          </p>

          <h1>
            {event.title}
          </h1>

          <p className="event-details-description">
            {event.description}
          </p>
        </div>

        <span className="event-large-number">
          {event.tag}
        </span>
      </div>

      <section className="event-information">

        <div className="event-info-box">
          <span>MODE</span>
          <strong>{event.mode}</strong>
        </div>

        <div className="event-info-box">
          <span>STATUS</span>
          <strong>{event.status}</strong>
        </div>

      </section>

      <section className="event-about">

        <p>// ABOUT THE EVENT</p>

        <h2>What is {event.title}?</h2>

        <p>
          {event.details}
        </p>

      </section>

      <div className="event-actions">

        <Link to="/events" className="secondary-button">
          ← Back to Events
        </Link>

        <Link to="/contact" className="primary-button">
          Register / Enquire →
        </Link>

      </div>

    </main>
  );
}

export default EventDetails;