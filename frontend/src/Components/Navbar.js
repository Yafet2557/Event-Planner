// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create-event" activeClassName="active">Create Event</NavLink>
                </li>
                <li>
                    <NavLink to="/my-events" activeClassName="active">My Events</NavLink>
                </li>
                <li>
                    <NavLink to="/event-details">Event Details</NavLink>
                </li>
                <li>
                    <NavLink to="/edit-event">Edit Event</NavLink>
                </li>
                <li>
                    <NavLink to="/FAQ">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
