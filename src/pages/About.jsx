// function About() {
//   return <h1>About CodeStars</h1>;
// }

// export default About;

//The above code was to structure. Og code is written below

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

