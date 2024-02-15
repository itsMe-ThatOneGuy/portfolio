import ProjectCard from './project-card';

const Projects = () => {
	return (
		<section className="bg-gradient-to-b from-dcyan to-vpurp h-fit">
			<div className="p-3 mx-2">
				<h1 className="text-2xl font-bold text-plat">Projects / Work</h1>
			</div>
			<ProjectCard />
			<ProjectCard />
		</section>
	);
};

export default Projects;
