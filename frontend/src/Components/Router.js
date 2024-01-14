// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "../Event-Management/FAQ"
import Navbar from "./Navbar";
import CreateEventForm from "../Event-Management/CreateEvent";
import MyEventsPage from "../Event-Management/MyEvents";
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
                <Route path="/events/my-events" element={<MyEventsPage />} />   
                <Route path="/events/create" element={<CreateEventForm />} />
                <Route path="/events/:eventId/edit" element={<EditEventForm />} />
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
