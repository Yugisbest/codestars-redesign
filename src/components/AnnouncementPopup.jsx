import { useEffect, useState } from "react";

function AnnouncementPopup() {
    const [visible, setVisible] = useState(() => {
        const dismissed = localStorage.getItem("codestars-announcement-dismissed");

        return dismissed !== "true";
    });

    const targetDate = new Date("2026-09-12T19:00:00");

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    // if (!visible) return null;

    // To add bell feature in announcementPopup, we coded this if statement.
    if (!visible) {
        return (
            <button
                className="announcement-bell"
                onClick={() => setVisible(true)}
                aria-label="Open announcements"
            >
                🔔
            </button>
        );
    }

    return (
        <div className="announcement-popup">
            <button
                className="announcement-close"
                onClick={() => {
                    setVisible(false);
                    localStorage.setItem("codestars-announcement-dismissed", "true");
                }}
                aria-label="Close announcement"
            >
                ×
            </button>

            <div className="announcement-badge">
                🔥 CONTEST ALERT
            </div>

            <h3>CodeStars Weekly #07</h3>

            <p>
                Think fast. Code smart. Compete with fellow
                programmers in our upcoming contest.
            </p>

            {timeLeft ? (
                <div className="countdown">
                    <div>
                        <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
                        <span>Days</span>
                    </div>

                    <div>
                        <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
                        <span>Hrs</span>
                    </div>

                    <div>
                        <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
                        <span>Min</span>
                    </div>

                    <div>
                        <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
                        <span>Sec</span>
                    </div>
                </div>
            ) : (
                <p className="contest-live">
                    🚀 Contest is live!
                </p>
            )}

            <button className="announcement-btn">
                Register Now →
            </button>
        </div>
    );
}

export default AnnouncementPopup;