// MyEvents.js

import React, { useEffect, useState } from "react";
import EventCard from "../Event-Management/EventCard";
import axios from "axios";
import { Container, Stack } from 'react-bootstrap';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      const token = localStorage.getItem("token");

      if (token) {
        const reqHeader = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        axios.get("http://127.0.0.1:8000/api/events/all", reqHeader)
          .then((response) => {
            setEvents(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("Request failed: ", error);
            setLoading(false);
          });
      } else {
        console.log("Token not found in local storage");
      }
    };

    fetchEvents();
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Stack direction="horizontal" gap={4}>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Stack>
    </Container>
  );
};

export default MyEvents;
