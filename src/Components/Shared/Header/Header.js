import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import header from '../../../Images/header.jpg'
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import { GiMuscleUp } from 'react-icons/gi';




let navStyle = {
    backgroundImage: `url(${header})`
 }

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={navStyle}  variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 text-danger" href="#home"><GiMuscleUp/> Iron Lifters</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Categories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;