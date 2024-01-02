import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Your Event Planner</h1>
                <p>Welcome to the best event planning experience</p>
            </header>
            <main>
                <section className="features-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Plan and organize events effortlessly</li>
                        <li>Manage guest lists and RSVPs</li>
                        <li>Customize event details and settings</li>
                        <li>More to be added</li>
                    </ul>
                </section>
                <section className="cta-section">
                    <h2>Get Started Today</h2>
                    <p>Sign up or log in to start planning your events today!</p>
                    <div className="link-buttons">
                        <Link to="/sign-up">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default LandingPage;