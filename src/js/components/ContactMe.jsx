import React from "react";
import Container from 'react-bootstrap/Container';

class ContactMe extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<>
				<section id="contact-me">
					<Container>
						<div className="h1">Contact Me</div>
						<div className="socials">
							<a href="mailto:seangenge@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                            <a href="https://www.linkedin.com/in/seangenge/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/SeanGenge" target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
					</Container>
				</section>
			</>
		  );
	}
};

export default ContactMe;