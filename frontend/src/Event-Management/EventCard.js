// EventCard.js

import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap';
import ReactImg from '../img/upcoming-events.webp'; // Replace with the actual path
import '../css/EventCard.css'; // Import the provided CSS file

const EventCard = ({ event }) => {
  return (
    <div className="column">
      <Card className="card">
        <Card.Img variant="top" src={ReactImg} className="event-card-image" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>
            {event.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date: {event.date}</ListGroupItem>
          <ListGroupItem>Time: {event.time}</ListGroupItem>
          <ListGroupItem>Location: {event.location}</ListGroupItem>
          <ListGroupItem>Visibility: {event.visibility}</ListGroupItem>
          <ListGroupItem>Creator: {event.creator.first_name} {event.creator.last_name}</ListGroupItem>
        </ListGroup>
        <Button variant='primary'>Register for event</Button>
      </Card>
    </div>
  );
};

export default EventCard;
