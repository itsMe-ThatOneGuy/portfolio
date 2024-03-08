import { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { IconContext } from 'react-icons';
import { CiLink } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const sequence = [
	[
		'img',
		{
			clipPath: ['inset(0 0 100% 0)', 'inset(0)'],
			opacity: [0, 1],
		},
		{ duration: 0.7, delay: 0.3 },
	],
	['.title-container', { y: [-40, 0], opacity: [0, 1] }, { duration: 0.7 }],
	[
		'li',
		{ y: [40, 0], opacity: [0, 1] },
		{ duration: 0.7, delay: stagger(0.15) },
	],
];

const ProjectCard = (props) => {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { once: true });

	useEffect(() => {
		animate(sequence);
	}, [isInView, animate]);

	return (
		<div
			ref={scope}
			className="flex flex-col space-y-2 p-6 lg:grid lg:grid-cols-2 lg:gap-3"
		>
			<div>
				<img
					width={'343px'}
					height={'166px'}
					className="w-full rounded h-64"
					src={props.project.img}
				/>
			</div>
			<div className="inline-block p-3">
				<div className="title-container mb-4">
					<h2 className="text-xl text-plat font-semibold mb-2 underline decoration-dcyan">
						{props.project.title}
					</h2>
					<h3 className="text-lg font-medium text-grrey">
						{props.project.sub}
					</h3>
				</div>
				<div>
					<div className="mb-4">
						<ul className="flex flex-wrap gap-1.5 text-sm text-plat">
							{props.project.tools.map((e) => {
								return (
									<li
										key={
											props.project.tools.indexOf(e) +
											Math.random() * 10 +
											Math.random() * 10
										}
										className="tools p-1 bg-purp"
									>
										{e}
									</li>
								);
							})}
						</ul>
					</div>
					<div>
						<ul className="flex justify-end items-center gap-5">
							<IconContext.Provider value={{ size: '2.5em' }}>
								<motion.li
									whileHover={{ scale: [1, 1.5] }}
									whileTap={{ scale: 1.1 }}
									className="links font-semibold hover:text-grrey"
								>
									<a href={props.project.live} rel="noreferrer" target="_blank">
										<CiLink />
									</a>
								</motion.li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<motion.li
									whileHover={{ scale: [1, 1.3] }}
									whileTap={{ scale: 0.9 }}
									className="links font-semibold hover:text-grrey"
								>
									<a href={props.project.repo} rel="noreferrer" target="_blank">
										<FiGithub />
									</a>
								</motion.li>
							</IconContext.Provider>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
