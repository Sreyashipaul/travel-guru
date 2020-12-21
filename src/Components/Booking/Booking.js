import React, { useContext, useEffect, useState } from 'react';
import {  Col, Container, Card,Form, Jumbotron, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import fakeData from '../../fakeData/fakeData';
import { UserContext } from '../../App';

const Booking = () => {
  const { id } = useParams();
  const { bookingInfo, setBookingInfo } = useContext(UserContext);

 
  const history = useHistory();
  const [booking, setBooking] = useState({
    location: {},
    origin: '',
    destination: ''
  });

  useEffect(() => {
    const bookingLocation = fakeData.find(location => location.id.toString() === id)
    setBooking(previousState => ({ ...previousState, location: bookingLocation, destination: bookingLocation.name }))

  }, [id])

 

  const submitHandler = e => {
    setBookingInfo({ ...bookingInfo, ...booking })
    history.push(`/search/${id}`)
    e.preventDefault();
  }

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={6} xl={6}>
          <Jumbotron className="bg-transparent px-0">
            <h1 className="font-weight-bold">{booking.location.name}</h1>
            <p>{booking.location.description}</p>
          </Jumbotron>
        </Col>
        <Col xl={1} />
        <Card>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Button className="w-100" variant="warning" type="submit">Start Booking</Button>
              </Form>
            </Card.Body>
          </Card>
      </Row>
    </Container>
  );
};

export default Booking;