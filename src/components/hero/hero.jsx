import { IconContext } from 'react-icons';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';

const Hero = () => {
	return (
		<section id="home" className="h-[calc(100vh-74px)]">
			<div className="h-full flex flex-col justify-evenly items-center bg-gradient-to-b from-purp to-vpurp">
				<div className="flex flex-col items-center">
					<div className="p-3 text-center">
						<h1 className="text-3xl text-plat font-extrabold mb-2 underline decoration-dcyan decoration-2">
							Fullstack Developement & Design
						</h1>
						<h2 className="text-xl text-grrey font-semibold mb-3">
							Solving Problems by Creating Beautiful Solutions
						</h2>
					</div>
					<div>
						<ul className="flex gap-6">
							<IconContext.Provider value={{ size: '2em' }}>
								<li className="bg-dcyan rounded-full p-3 text-center">
									<a>
										<IoDocumentTextOutline />
									</a>
								</li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<li className="bg-dcyan rounded-full p-3">
									<a
										href="https://github.com/itsMe-ThatOneGuy"
										rel="noreferrer"
										target="_blank"
									>
										<FiGithub />
									</a>
								</li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<li className="bg-dcyan rounded-full p-3">
									<a
										href="https://www.linkedin.com/in/matthew-smart13"
										rel="noreferrer"
										target="_blank"
									>
										<FaLinkedinIn />
									</a>
								</li>
							</IconContext.Provider>
						</ul>
					</div>
				</div>
				<div className="mb-11">
					<img
						className="w-52 rounded-full drop-shadow-xl"
						src="../../../public/myicon.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
