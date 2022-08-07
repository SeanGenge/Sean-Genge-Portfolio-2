import React from "react";
import projectsList from '../projects';
import Project from "./Project.jsx";
import { importAll } from '../util/images';
import Container from 'react-bootstrap/Container';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			projects: projectsList,
			images: []
		}
	}
	
	componentDidMount() {
		this.setState({
			images: importAll(require.context('../../../public/images/projects', false, /\.(png|jpe?g|svg)$/))
		}, () => console.log(this.state.images));
	}
	
	render() {
		let projects = this.state.projects.map((project, id) => <Project key={id} data={project} image={this.state.images[project.image]} />);
		
		return (
			<>
				<section id="projects">
					<Container>
						<div className="h1">Projects</div>
						<div className="projects-list">
							{projects}
						</div>
					</Container>
				</section>
			</>
		  );
	}
};

export default Projects;