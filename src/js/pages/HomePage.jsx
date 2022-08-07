import React from "react";
import AboutMe from '../components/AboutMe.jsx';
import Projects from '../components/Projects.jsx';
import ContactMe from "../components/ContactMe.jsx";
import Footer from "../components/Footer.jsx";
import Container from 'react-bootstrap/Container';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
	render() {
        
		return (
			<>
            <Container className="main-container offWhite-bg primary-border">
                <AboutMe />
                <Projects />
                <ContactMe />
            </Container>
                
                <Footer />
            </>
		  );
	}
};

export default Home;