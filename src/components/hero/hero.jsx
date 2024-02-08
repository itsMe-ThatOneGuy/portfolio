import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className="h-[calc(100vh-52px)] flex flex-col justify-evenly">
			<div className="flex flex-col items-center h-fit">
				<img
					className="rounded-full w-52 border-2 border-black drop-shadow-2xl"
					src="../../../public/profile.jpg"
				/>
			</div>

			<div className="flex flex-col justify-evenly items-center px-3 mx-5">
				<div className="text-center mb-5">
					<h1 className="text-3xl font-extrabold">
						Fullstack Developement & Design
					</h1>
					<h2 className="text-1xl font-normal font-mono pt-3">
						Solving problems and creating beautiful designs
					</h2>
				</div>

				<div className="flex justify-center">
					<ul className="flex">
						<IconContext.Provider value={{ size: '3em', color: '#171515' }}>
							<li className="px-3">
								<a
									href="https://github.com/itsMe-ThatOneGuy"
									rel="noreferrer"
									target="_blank"
								>
									<FaGithub />
								</a>
							</li>
						</IconContext.Provider>
						<IconContext.Provider value={{ size: '3em', color: '#0A66C2' }}>
							<li className="px-3">
								<a
									href="https://www.linkedin.com/in/matthew-smart13"
									rel="noreferrer"
									target="_blank"
								>
									<FaLinkedin />
								</a>
							</li>
						</IconContext.Provider>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<button className="bg-gray-200 text-center p-3 px-7 text-lg tracking-widest font-bold border-2 border-black rounded-full">
					Resume
				</button>
			</div>
		</section>
	);
};

export default Hero;
