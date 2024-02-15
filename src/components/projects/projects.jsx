import ProjectCard from './project-card';
import projects from '../../../data/demo-projects';

const Projects = () => {
	console.log(projects);

	return (
		<section className="bg-gradient-to-b from-dcyan to-vpurp h-fit">
			<div className="p-3 mx-2">
				<h1 className="text-2xl font-bold text-plat">Projects / Work</h1>
			</div>
			{projects.map((e) => {
				return <ProjectCard key={projects.indexOf(e)} project={e} />;
			})}
		</section>
	);
};

export default Projects;
