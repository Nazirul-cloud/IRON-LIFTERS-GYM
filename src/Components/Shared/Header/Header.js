import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import header from '../../../Images/header.jpg'
import { GiMuscleUp } from 'react-icons/gi';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';






let navStyle = {
    backgroundImage: `url(${header})`
 }

const Header = () => {
    const { user,logOut } = useAuth();
    return (
        <>
            <Navbar style={navStyle}  variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 text-danger" href="#home"><GiMuscleUp/> IRON LIFTERS GYM</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end header">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/trainer">Trainers</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        {user?.email ?
                            <Button className="mx-2" onClick={logOut} size="sm" variant="outline-danger">Logout</Button> :
                            <NavLink  to="/signup">Login</NavLink>}
                        <Navbar.Text className="text-primary fw-bold">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;