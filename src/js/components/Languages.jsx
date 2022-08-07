import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class Languages extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<>
				<Container id="languages">
					<div className="h3"><span>L</span>anguages</div>
					<ListGroup className="languages-list">
                        <ListGroup.Item className="languages-list__item">Javascript (ECMA6)</ListGroup.Item>
                        <ListGroup.Item className="languages-list__item">React</ListGroup.Item>
						<ListGroup.Item className="languages-list__item">Express.js</ListGroup.Item>
						<ListGroup.Item className="languages-list__item">Heroku</ListGroup.Item>
						<ListGroup.Item className="languages-list__item">SQL</ListGroup.Item>
                        <ListGroup.Item className="languages-list__item">CSS</ListGroup.Item>
                        <ListGroup.Item className="languages-list__item">SCSS</ListGroup.Item>
                    </ListGroup>
				</Container>
			</>
		  );
	}
};

export default Languages;