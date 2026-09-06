import TeamCard from "../components/TeamCard";
import team from "../data/team";

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
            Strengthen your fundamentals through resources,
            workshops and peer learning.
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
            Turn ideas into real projects and develop the
            skills needed to become a better engineer.
          </p>
        </div>

      </section>

      {/* COMMITTEE STRUCTURE */}

      <section className="team-section">

        <div className="section-heading">
          <p>// COMMITTEE STRUCTURE</p>

          <h2>
            The people behind
            <br />
            <span>CodeStars.</span>
          </h2>

          <p>
            A multidisciplinary team working together across
            technology, events, content, creatives and outreach.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>

      </section>

      {/* FACULTY + DEPARTMENT */}

      <section className="support-section">

        <div className="support-card">
          <span>01</span>

          <p>// FACULTY MENTORSHIP</p>

          <h3>Faculty Guidance</h3>

          <p>
            Faculty mentors provide academic guidance and
            institutional support for CodeStars initiatives,
            competitions and technical activities.
          </p>
        </div>

        <div className="support-card">
          <span>02</span>

          <p>// DEPARTMENT SUPPORT</p>

          <h3>Academic Ecosystem</h3>

          <p>
            CodeStars works within the college's academic
            ecosystem to promote programming, competitive
            problem solving and technical learning.
          </p>
        </div>

      </section>

      <section className="about-services">

        <div>
          <span>01</span>
          <h3>Competitive Programming</h3>
          <p>
            Learn algorithms, data structures and problem
            solving through regular challenges.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Technical Events</h3>
          <p>
            Participate in contests, workshops and technical
            experiences designed for developers.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Community</h3>
          <p>
            Learn alongside students who are equally interested
            in technology and building things.
          </p>
        </div>

      </section>

      <section className="about-quote">
        <p>// THE CODESTARS MINDSET</p>

        <h2>
          Don't just learn
          <br />
          <span>how to code.</span>
        </h2>

        <p>
          Learn how to think, build and solve problems.
        </p>
      </section>

    </main>
  );
}

export default About;

