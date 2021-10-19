import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404.png'


const NotFound = () => {
    return (
        <div style={{ padding: '20px'}} >
            
            <h1 className="text-danger" style={{ weight: '900'}}>Page Not Found !</h1>
            <img style={{ width: '65%'}}  src={notfound} alt="" />
            <br />
            <Link to ='/'><Button className="fw-bold mb-5" variant="outline-danger">GO BACK</Button> </Link>

        </div>
    );
};

export default NotFound;