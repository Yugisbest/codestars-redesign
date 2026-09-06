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
        <p>// GET IN TOUCH</p>

        <h1>
          Let's build
          <br />
          <span>together.</span>
        </h1>

        <p className="page-description">
          Interested in CodeStars? Have an idea, question,
          or want to be part of the community? Reach out.
        </p>
      </div>

      <div className="contact-info">

        <div>
          <span>01</span>
          <h3>General Enquiries</h3>
          <p>Have a question about CodeStars or our activities?</p>
        </div>

        <div>
          <span>02</span>
          <h3>Collaborate</h3>
          <p>Want to work with us on a technical event or project?</p>
        </div>

        <div>
          <span>03</span>
          <h3>Join the Community</h3>
          <p>Interested in learning, competing and building with us?</p>
        </div>

      </div>

      {submitted ? (
        <div className="contact-success">
          <span>✓</span>
          <h2>Thanks for reaching out.</h2>

          <p>
            Your message has been submitted successfully.
            We'll get back to you soon.
          </p>

          <button onClick={() => setSubmitted(false)}>
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>

          <label>
            Your name
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Your email
            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Message
            <textarea
              placeholder="Tell us something..."
              rows="6"
              required
            />
          </label>

          <button type="submit">
            Send Message →
          </button>

        </form>
      )}

    </main>
  );
}

export default Contact;