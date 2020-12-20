import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Location({ location, isActive }) {
    const { name, image } = location;
    return (
        <Card className={`bg-transparent ${isActive ? 'active' : 'not-active'}`}>
            <Card.Img variant="top" className="img-fluid" src={image} />
            <Button className="bg-transparent booking">{name}</Button>
        </Card>
    );
}

export default Location;