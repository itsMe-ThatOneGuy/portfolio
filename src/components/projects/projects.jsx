import ProjectCard from './project-card';
import projects from '../../../data/demo-projects';

const Projects = () => {
	return (
		<section id="projects" className="scroll-m-10">
			<div className="flex flex-col bg-gradient-to-b from-dcyan to-vpurp h-fit">
				<div className="p-3 mx-3 mt-10">
					<h2 className="text-2xl font-bold text-plat">Projects / Work</h2>
				</div>
				<div>
					{projects.map((e) => {
						return <ProjectCard key={projects.indexOf(e)} project={e} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
