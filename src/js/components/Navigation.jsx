import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<>
				<Navbar id="navbar" expand="lg" sticky="top">
					<Container fluid>
						<Navbar.Brand id="navbar-brand" className="heading-font" href="#">
							<span>S</span>ean <span>G</span>enge
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll"><i className="fa-solid fa-bars hamburger-icon"></i></Navbar.Toggle>
						<Navbar.Collapse id="navbarScroll">
							<Nav className="ms-auto my-2 my-lg-0" navbarScroll>
								<Nav.Link href="#about-me">About Me</Nav.Link>
								<Nav.Link href="#projects">Projects</Nav.Link>
								<Nav.Link href="#contact-me">Contact Me</Nav.Link>
								{/* <Nav.Link href="#resume" className="me-5">Resume</Nav.Link> */}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		  );
	}
};

export default Navigation;