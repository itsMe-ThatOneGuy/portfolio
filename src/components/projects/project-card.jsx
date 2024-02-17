import { IconContext } from 'react-icons';
import { CiLink } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = (props) => {
	console.log(props);

	return (
		<div className="flex flex-col space-y-2 p-6">
			<img
				width={'343px'}
				height={'166px'}
				className="w-full rounded h-64"
				src={props.project.img}
			/>
			<div className="inline-block p-3">
				<div className="mb-4">
					<h2 className="text-xl text-plat mb-2 underline decoration-dcyan">
						{props.project.title}
					</h2>
					<h3 className="text-lg text-grrey">{props.project.sub}</h3>
				</div>
				<div>
					<div className="mb-4">
						<ul className="flex flex-wrap gap-1 text-sm text-vpurp">
							{props.project.tools.map((e) => {
								return (
									<li
										key={props.project.tools.indexOf(e)}
										className="p-1 bg-plat"
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
								<li className="font-semibold">
									<a href={props.project.live} rel="noreferrer" target="_blank">
										<CiLink />
									</a>
								</li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<li className="font-semibold">
									<a href={props.project.repo} rel="noreferrer" target="_blank">
										<FiGithub />
									</a>
								</li>
							</IconContext.Provider>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
