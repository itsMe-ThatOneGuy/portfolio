import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className="h-[calc(100vh-74px)]">
			<div className="h-full flex flex-col justify-evenly items-center bg-gradient-to-b from-purp to-vpurp">
				<div className="flex flex-col items-center">
					<div className="image-container">
						<img
							className="w-52 rounded-full border-2 border-vpurp mb-6 drop-shadow-xl"
							src="../../../public/profile.jpg"
						/>
					</div>
					<div className="text-center py-2 rounded-3xl bg-grrey w-4/5">
						<div className="p-3">
							<h1 className="text-3xl text-plat font-extrabold mb-2 underline decoration-dcyan decoration-2">
								Fullstack Developement & Design
							</h1>
							<h2 className="text-xl font-semibold mb-2">
								Solving Problems by Creating Beautiful Solutions
							</h2>
						</div>
						<div className="mb-3">
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
				<div>
					<button className="text-center p-3 px-7 mt-14 text-lg tracking-widest font-bold border-2 border-black rounded-full bg-grrey text-plat">
						Resume
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
