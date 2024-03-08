import { motion } from 'framer-motion';
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
				<div className="lg:w-1/2 lg:mt-6">
					<div className="p-3 mx-3 mb-8 lg:mb-16 mt-10">
						<motion.h2
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 1 }}
							viewport={{ once: true }}
							className="text-2xl font-bold text-plat"
						>
							Projects / Work
						</motion.h2>
					</div>
					<div className="mb-16 lg:mb-20 mt-6">
						{generateList().map((e) => {
							return <ProjectCard key={projects.indexOf(e)} project={e} />;
						})}
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
					}}
					transition={{ delay: 0.3, duration: 1 }}
					viewport={{ once: true }}
					className={`mb-16 lg:mb-20 ${
						projects.length > numberOfProjects ? '' : 'hidden'
					}`}
				>
					<motion.button
						onClick={() => {
							handelClick();
						}}
						whileHover={{ scale: [1, 1.1] }}
						whileTap={{ scale: 0.9 }}
						className="py-3 px-6 bg-grrey border-2 border-plat rounded-full"
					>
						<h2 className="text-xl font-semibold">Show More</h2>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
