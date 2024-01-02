// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "../Event-Management/FAQ"
import Navbar from "./Navbar";
import CreateEventForm from "../Event-Management/CreateEvent";
import MyEventsPage from "../Event-Management/MyEvents";
import EventDetailsPage from "../Event-Management/EventDetails";
import EditEventForm from "../Event-Management/EditEvent";
import LandingPage from "../Event-Management/LandingPage";
import Login from "../Auth Pages/login"
import Signup from "../Auth Pages/Signup"
import Footer from "../Components/Footer"
const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<LandingPage/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/create-event" element={<CreateEventForm />} />
                <Route path="/my-events" element={<MyEventsPage />} />
                <Route path="/event-details" element={<EventDetailsPage />} />
                <Route path="/edit-event" element={<EditEventForm />} />
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Router;
