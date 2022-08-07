import React from "react";
import Card from 'react-bootstrap/Card';

class Project extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
        const project = this.props.data;
        // Retrieve the file paths from the image
        const image = this.props.image?.default ?? "";
        const languages = this.props.data.languages.map((language, id) => <span className="tag" key={id}>{language}</span>);
        
		return (
			<>
                <Card className="project-card">
                    <Card.Img variant="top" src={image} />
                    <div className="project-card__buttons frosted-glass">
                        <a href={project.github} target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>
                        {project.deployed && (<a href={project.deployed} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i>Website</a>)}
                    </div>
                    <Card.Body className="project-card-body">
                        <Card.Title>{project.name}</Card.Title>
                        <div className="project-card-body__languages">{languages}</div>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
			</>
		  );
	}
};

export default Project;