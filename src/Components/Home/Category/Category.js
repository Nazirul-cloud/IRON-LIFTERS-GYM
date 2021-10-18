import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Category = ({category}) => {
    const { id, name, price, description, img } = category;

    return (
     
            <Col>
               <Card className="bg-dark text-light">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="text-center text-light">
                    <Card.Title className="fw-bold bg-secondary">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button className="fw-bold" variant="outline-danger">Read More</Button>
                </Card.ImgOverlay>
                </Card>
             </Col>
       
    );
};

export default Category;