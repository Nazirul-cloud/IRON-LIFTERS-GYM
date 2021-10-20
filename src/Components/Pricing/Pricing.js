
import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';

const Pricing = () => {
    return (
        
       <div>
            <div className="text-center pt-5 pb-4" >
                <h2 className="fw-bold fs-2 text-danger">CHOOSE YOUR PRICING PLAN</h2>
                <small className="text-dark">These reports started to surface when Congress was having hearings about the painkiller, Vioxx. A Food and Drug Administration staff member.</small>
            </div>

            <Row xs={1} md={3} className="gx-5 m-4 mb-5">
                <Card className="text-center">
                    <Card.Header className="fw-bold text-danger">NORMAL</Card.Header>
                    <Card.Body>
                        <Card.Title> <span className="fw-bold fs-1 text-danger">$55</span> <br /> MONTHLY</Card.Title>
                        <Card.Text> Unlimited access to the gym </Card.Text>
                        <p>1 classes per week</p>
                        <p>FREE drinking package</p>
                        <p>1 Free personal training</p>
                        <Button variant="outline-danger">GET STARTED</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Header className="fw-bold text-danger">PROFESSIONAL</Card.Header>
                    <Card.Body>
                        <Card.Title> <span className="fw-bold fs-1 text-danger">$95</span> <br /> MONTHLY</Card.Title>
                        <Card.Text> Unlimited access to the gym </Card.Text>
                        <p>2 classes per week</p>
                        <p>FREE drinking package</p>
                        <p>2 Free personal training</p>
                        <Button variant="outline-danger">GET STARTED</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Header className="fw-bold text-danger">ADVANCED</Card.Header>
                    <Card.Body>
                        <Card.Title> <span className="fw-bold fs-1 text-danger">$165</span> <br /> MONTHLY</Card.Title>
                        <Card.Text> Unlimited access to the gym </Card.Text>
                        <p>6 classes per week</p>
                        <p>FREE drinking package</p>
                        <p>6 Free personal training</p>
                        <Button variant="outline-danger">GET STARTED</Button>
                    </Card.Body>
                </Card>
                
            </Row>
       </div>
    );
};

export default Pricing;