import { Link } from "react-router-dom";

function JoinSection() {
    return (
        <section className="join-section">
            <p>// YOUR NEXT MOVE</p>

            <h2>Ready to build something?</h2>

            <p className="join-description">
                Join a community of developers, compete in challenges,
                and build projects that matter.
            </p>

            {/* <a href="/contact" className="primary-button">
        Join CodeStars →
      </a> */}
            <Link to="/contact" className="primary-button">
                Join CodeStars →
            </Link>
        </section>
    );
}

export default JoinSection;