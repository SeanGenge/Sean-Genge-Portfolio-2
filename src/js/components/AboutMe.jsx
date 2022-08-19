import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Languages from "./Languages.jsx";

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let name = "Sean Genge";
		
		return (
			<>
				<section id="about-me">
					<Container>
						<Row className="heading-group">
							<div className="heading-name heading-font">
								<span>S</span>ean <span>G</span>enge
							</div>
							<div className="h2 text-center">
								A full-stack web developer
							</div>
							<img className="pfp" src="/images/pfp.jpg" />
						</Row>
						<Row>
							<Col sm={12} md={7}>
								<div className="h1">About Me</div>
								<p className="info">
									Hi, I'm Sean. I enjoy programming and puzzles. With a computer science background, I have dabbled with lots of different programming lanugages. These range from C, Java, Python and C#. Later I came to learn web development and fell in love with it. 
								</p>
								<p className="info">
									I enjoy solving and finding innovative solutions to programming problems while also making sure the solutions are of decent speed without compromising the code quality.
								</p>
							</Col>
							<Col sm={12} md={4}>
								<Languages />
							</Col>
						</Row>
					</Container>
				</section>
			</>
		  );
	}
};

export default AboutMe;