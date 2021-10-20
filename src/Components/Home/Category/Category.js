import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const { id, name, price, description, img } = category;

    return (
     
            <Col>
               <Card className="h-100">
                <Card.Img className="p-2 rounded" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="bg-secondary">{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/details/${description}`}> 
                           <Button size="sm" variant="outline-danger">READ MORE</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
             </Col>
       
    );
};

export default Category;