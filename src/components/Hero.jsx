import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState([
        "Welcome to CodeStars terminal.",
        "Type 'help' to see available commands."
    ]);

    const navigate = useNavigate();

    function handleCommand(event) {
        event.preventDefault();

        const cmd = command.trim().toLowerCase();

        if (!cmd) return;

        if (cmd === "help") {
            setOutput([
                "Available commands:",
                "help — show commands",
                "events — view events",
                "about — about CodeStars",
                "contact — contact us",
                "clear — clear terminal"
            ]);
        }

        else if (cmd === "events" || cmd === "events list") {
            setOutput(["Opening events..."]);
            navigate("/events");
        }

        else if (cmd === "about" || cmd === "about us") {
            setOutput(["Opening about page..."]);
            navigate("/about");
        }

        else if (cmd === "contact" || cmd === "join") {
            setOutput(["Opening contact page..."]);
            navigate("/contact");
        }

        else if (cmd === "clear") {
            setOutput([]);
        }

        else {
            setOutput([`Command not found: ${cmd}`]);
        }

        setCommand("");
    }

    return (
        <section className="hero">

            <div className="hero-content">
                {/* <p className="hero-label">// DJS CODESTARS</p> */}
                <div className="hero-status">
                    <span className="status-dot"></span>
                    OPEN FOR BUILDERS
                </div>

                <p className="hero-label">// DJS CODESTARS</p>
                <h1>
                    CODE.
                    <br />
                    <span>COMPETE.</span>
                    <br />
                    CREATE.
                </h1>

                <p className="hero-description">
                    A community of developers, problem solvers and builders
                    pushing each other to become better.
                </p>

                <div className="hero-buttons">
                    {/* <a href="/events" className="primary-button">
            Explore Events →
          </a>

          <a href="/contact" className="secondary-button">
            Join CodeStars
          </a> */}
                    <Link to="/events" className="primary-button">
                        Explore Events →
                    </Link>

                    <Link to="/contact" className="secondary-button">
                        Join CodeStars
                    </Link>
                </div>
            </div>

            <div className="hero-terminal">

                <div className="terminal-header">
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
                </div>

                <div className="terminal-body">

                    {output.map((line, index) => (
                        <p key={index} className="terminal-output">
                            {line}
                        </p>
                    ))}

                    <form onSubmit={handleCommand}>
                        <span>$ </span>

                        <input
                            value={command}
                            onChange={(event) => setCommand(event.target.value)}
                            autoFocus
                            aria-label="Terminal command"
                        />
                    </form>

                </div>

            </div>

        </section>
    );
}

export default Hero;