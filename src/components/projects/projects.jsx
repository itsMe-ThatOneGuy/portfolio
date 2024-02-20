import { useState } from 'react';
import ProjectCard from './project-card';
import projects from '../../../data/demo-projects';

const Projects = () => {
	const [numberOfProjects, setNumberOfProjects] = useState(3);

	const handelClick = () => {
		let currentState = numberOfProjects;
		setNumberOfProjects(currentState + 3);
	};

	const generateList = () => {
		return projects.slice(0, numberOfProjects);
	};

	return (
		<section id="projects" className="scroll-m-5 w-full">
			<div className="flex flex-col items-center bg-gradient-to-b from-dcyan to-vpurp">
				<div className="lg:w-1/2">
					<div className="p-3 mx-3 mt-10">
						<h2 className="text-2xl font-bold text-plat">Projects / Work</h2>
					</div>
					<div className="mb-16">
						{generateList().map((e) => {
							return <ProjectCard key={projects.indexOf(e)} project={e} />;
						})}
					</div>
				</div>
				<div
					className={`mb-16 ${
						projects.length > numberOfProjects ? '' : 'hidden'
					}`}
				>
					<button
						onClick={() => {
							handelClick();
						}}
						className="py-3 px-6 bg-grrey border-2 border-plat rounded-full"
					>
						<h2 className="text-2xl">Show More</h2>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
