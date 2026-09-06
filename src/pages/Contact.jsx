// function Contact() {
//   return <h1>Join CodeStars</h1>;
// }

// export default Contact;

//The above code was just to structure.

import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">

      <div className="page-header">
        <p>// JOIN CODESTARS</p>

        <h1>
          Let's build
          <br />
          <span>together.</span>
        </h1>

        <p className="page-description">
          Whether you want to join the community, collaborate on an
          event or simply have a question, we'd love to hear from you.
        </p>
      </div>


      {/* DIRECT CONTACT */}

      <section className="contact-direct">

        <div>
          <p className="contact-label">// EMAIL</p>
          <a href="mailto:djscodestars@gmail.com">
            djscodestars@gmail.com
          </a>
        </div>

        <div>
          <p className="contact-label">// LOCATION</p>
          <p>
            DJSCE
            <br />
            Mumbai, India
          </p>
        </div>

      </section>


      {/* CONTACT OPTIONS */}

      <section className="contact-info">

        <div>
          <span>01</span>
          <h3>General Enquiries</h3>
          <p>
            Have a question about CodeStars, our activities
            or upcoming events?
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Collaborate</h3>
          <p>
            Want to work with us on a technical event,
            workshop or project?
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Join the Community</h3>
          <p>
            Interested in learning, competing and building
            with other developers?
          </p>
        </div>

      </section>


      {/* CONTACT FORM */}

      <section className="contact-form-section">

        <div className="contact-form-heading">
          <p>// SEND A MESSAGE</p>

          <h2>
            Start a
            <br />
            <span>conversation.</span>
          </h2>
        </div>

        {submitted ? (

          <div className="form-success">
            <p>// MESSAGE RECEIVED</p>

            <h3>Thanks for reaching out.</h3>

            <p>
              Your message has been captured by this frontend
              prototype. In a production version, this form
              would connect to a backend or email service.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="secondary-button"
            >
              Send Another →
            </button>
          </div>

        ) : (

          <form onSubmit={handleSubmit} className="contact-form">

            <label>
              NAME
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              EMAIL
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              MESSAGE
              <textarea
                rows="6"
                placeholder="Tell us what you're working on..."
                required
              ></textarea>
            </label>

            <button type="submit" className="primary-button">
              Send Message →
            </button>

          </form>

        )}

      </section>

    </main>
  );
}

export default Contact;