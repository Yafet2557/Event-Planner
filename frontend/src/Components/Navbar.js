// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/events/my-events" >My Events</NavLink>
                </li>
                <li>
                    <NavLink to="/events/create">Create Event</NavLink>
                </li>
                <li>
                    <NavLink to="/events/:eventId/edit">Edit Event</NavLink>
                </li>
                <li>
                    <NavLink to="/FAQ">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
