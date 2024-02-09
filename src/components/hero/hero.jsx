import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className="h-[calc(100vh-74px)]">
			<div className="background-container h-full flex flex-col justify-evenly items-center">
				<div className="content-container flex flex-col items-center">
					<div className="image-container">
						<img
							className="w-52 rounded-full border-2 border-black mb-16"
							src="../../../public/profile.jpg"
						/>
					</div>
					<div className="content-container text-center">
						<div className="title-container p-3">
							<h1 className="text-3xl font-extrabold mb-2">
								Fullstack Developement & Design
							</h1>
							<h2 className="text-1xl font-normal mb-3">
								Solving Problems by Creating Beautiful Solutions
							</h2>
						</div>
						<div className="link-container">
							<ul className="flex justify-center gap-5">
								<IconContext.Provider
									value={{ size: '2.5em', color: '#171515' }}
								>
									<li>
										<a
											href="https://github.com/itsMe-ThatOneGuy"
											rel="noreferrer"
											target="_blank"
										>
											<FaGithub />
										</a>
									</li>
								</IconContext.Provider>
								<IconContext.Provider
									value={{ size: '2.5em', color: '#0A66C2' }}
								>
									<li>
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
				</div>
				<div className="button-container">
					<button className="text-center p-3 px-7 text-lg tracking-widest font-bold border-2 border-black rounded-full">
						Resume
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
