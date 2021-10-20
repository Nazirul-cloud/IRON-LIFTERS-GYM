import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import trainer1 from '../../Images/trainer-1.jpg'
import trainer2 from '../../Images/trainer-2.jpg'
import trainer3 from '../../Images/trainer-3.jpg'

const Trainer = () => {
    return (
        <div>
            <div className="text-center pt-5 pb-4" >
        <h2 className="fw-bold fs-2 text-danger">CHOOSE YOUR PRICING PLAN</h2>
        <small className="text-dark">These reports started to surface when Congress was having hearings about the painkiller, Vioxx. A Food and Drug Administration staff member.</small>
        </div>
        <div className=" d-flex justify-content-center">
        <Row xs={1} md={3} className="gx-5 m-5">
            <Card className="mx-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={trainer1} />
                <Card.Body>
                    <Card.Title className="fw-bold">Noah Leonard <small>- Trainer</small></Card.Title>
                    <Card.Text>
                    You’ll look at graphs and charts in Task One, how to approach the task
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center mx-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={trainer2} />
                <Card.Body>
                    <Card.Title className="fw-bold" >Evelyn Fields - <br />  <small>Gymer</small></Card.Title>
                    <Card.Text>
                    You’ll look at graphs and charts in Task One, how to approach the task
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center mx-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={trainer3} />
                <Card.Body>
                    <Card.Title className="fw-bold">Becky Taylor  <small>- Manager</small></Card.Title>
                    <Card.Text>
                    You’ll look at graphs and charts in Task One, how to approach the task
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
        </div>
        </div>
    );
};

export default Trainer;