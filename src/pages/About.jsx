function About() {
  return (
    <main className="about-page">

      <div className="page-header">
        <p>// ABOUT CODESTARS</p>

        <h1>
          We build
          <br />
          <span>developers.</span>
        </h1>

        <p className="page-description">
          CodeStars is a community where developers learn,
          solve problems, compete and build together.
        </p>
      </div>

      <section className="about-intro">
        <div className="about-intro-label">
          <span>01</span>
          <span>OUR MISSION</span>
        </div>

        <p>
          We believe the best way to become a better developer
          is to keep building, keep solving and keep learning
          with people who challenge you.
        </p>
      </section>

      <section className="about-content">

        <div>
          <p className="about-number">01</p>
          <h2>Learn</h2>
          <p>
            Strengthen your fundamentals through technical
            sessions, peer learning and practical experience.
          </p>
        </div>

        <div>
          <p className="about-number">02</p>
          <h2>Compete</h2>
          <p>
            Test your problem-solving skills through coding
            contests and competitive programming.
          </p>
        </div>

        <div>
          <p className="about-number">03</p>
          <h2>Build</h2>
          <p>
            Turn ideas into real projects and learn how to
            work effectively with other developers.
          </p>
        </div>

      </section>

      <section className="about-services">

        <div className="about-intro-label">
          <span>04</span>
          <span>WHAT WE DO</span>
        </div>

        <div className="services-grid">

          <div className="service-item">
            <span>01</span>
            <h3>Competitive Programming</h3>
            <p>
              Practice algorithms, data structures and problem solving
              through coding challenges and contests.
            </p>
          </div>

          <div className="service-item">
            <span>02</span>
            <h3>Workshops & Learning</h3>
            <p>
              Learn new technologies and strengthen your fundamentals
              through technical sessions and peer learning.
            </p>
          </div>

          <div className="service-item">
            <span>03</span>
            <h3>Projects & Building</h3>
            <p>
              Turn ideas into practical projects and gain experience
              working with real development tools.
            </p>
          </div>

          <div className="service-item">
            <span>04</span>
            <h3>Community & Events</h3>
            <p>
              Connect with fellow developers, participate in events
              and learn by collaborating with others.
            </p>
          </div>

        </div>

      </section>

      <section className="about-quote">
        <span>// CODESTARS PHILOSOPHY</span>

        <h2>
          Don't just learn to code.
          <br />
          <strong>Learn to build.</strong>
        </h2>
      </section>

    </main>
  );
}

export default About;

