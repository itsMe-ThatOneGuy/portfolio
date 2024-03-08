import { motion } from 'framer-motion';

const About = () => {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: -40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section id="about" className="scroll-m-8">
			<div className="flex flex-col items-center bg-gradient-to-b from-vpurp to-dcyan w-full lg:gap-y-11">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						clipPath: ['inset(0 0 100% 0)', 'inset(0)'],
						opacity: [0, 1],
					}}
					transition={{ delay: 0.3, duration: 0.7 }}
					viewport={{ once: true }}
					className="info-container flex flex-col justify-center w-4/5 mt-10 lg:mt-20 mb-16 p-5 rounded-3xl bg-grrey lg:w-1/2 lg:p-8"
				>
					<h2 className="text-lg mb-1 pb-2 text-plat">
						Hi, I am <span className="text-vpurp font-bold">Matthew Smart</span>
						!
					</h2>
					<p className="indent-5 text-plat lg:indent-8">
						I'm a self-taught web developer with over 3 years of experience. At
						a young age, I developed a love for technology and art. After some
						time of working in IT while pursuing a career in the arts and music,
						I discovered what I really enjoyed about these two aspects of my
						life; Solving problems and creating things. From that point I
						decided to learn to code. I started by making small games with
						Python before finding web development.
					</p>
				</motion.div>
				<div className="flex flex-col gap-5 justify-evenly items-center text-center w-full lg:grid lg:grid-cols-3 lg:w-[65%] lg:items-start lg:gap-11">
					<div className="flex flex-col justify-center mb-4 w-4/5 lg:w-full">
						<div>
							<motion.h2
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.7 }}
								viewport={{ once: true }}
								className="text-xl font-semibold mb-8 pb-4 text-plat"
							>
								Frontend
							</motion.h2>
						</div>
						<motion.div
							variants={container}
							initial="hidden"
							whileInView={'visible'}
							viewport={{ once: true }}
							className="grid grid-cols-4 items-center gap-3 text-6xl justify-center"
						>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-html5-plain colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-css3-plain colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-javascript-plain colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-react-original colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-tailwindcss-original colored"></i>
							</motion.div>
						</motion.div>
					</div>
					<div className="flex flex-col justify-center mb-4 w-4/5 lg:w-full">
						<div>
							<motion.h2
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.7 }}
								viewport={{ once: true }}
								className="text-xl font-semibold mb-8 pb-4 text-plat"
							>
								Backend
							</motion.h2>
						</div>
						<motion.div
							variants={container}
							initial="hidden"
							whileInView={'visible'}
							viewport={{ once: true }}
							className="grid grid-cols-4 items-center gap-3 text-6xl"
						>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-nodejs-plain-wordmark colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-express-original"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-mongodb-plain-wordmark colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-mongoose-original colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-mysql-plain-wordmark"></i>
							</motion.div>
						</motion.div>
					</div>
					<div className="flex flex-col justify-center mb-4 w-4/5 lg:w-full">
						<div>
							<motion.h2
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.7 }}
								viewport={{ once: true }}
								className="text-xl font-semibold mb-8 pb-4 text-plat"
							>
								Tools & technologies
							</motion.h2>
						</div>
						<motion.div
							variants={container}
							initial="hidden"
							whileInView={'visible'}
							viewport={{ once: true }}
							className="grid grid-cols-4 items-center gap-3 text-6xl"
						>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-npm-original-wordmark colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-git-plain colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<i className="devicon-jest-plain colored"></i>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex flex-col justify-center items-center"
							>
								<img
									className="w-11"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
								/>
								<p className="text-center text-sm">(BTW)</p>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
								/>
							</motion.div>
							<motion.div
								variants={item}
								className="flex justify-center items-center"
							>
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
								/>
							</motion.div>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
					}}
					transition={{ delay: 0.3, duration: 1 }}
					viewport={{ once: true }}
					className="mt-12 mb-16"
				>
					<a
						href="resume/Matthew_Smart_Resume-2024.pdf"
						rel="noreferrer"
						target="_blank"
					>
						<motion.button
							whileHover={{ scale: [1, 1.1] }}
							whileTap={{ scale: 0.9 }}
							className="py-3 px-6 bg-grrey border-2 border-plat rounded-full"
						>
							<h2 className="text-xl font-semibold">Resume</h2>
						</motion.button>
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
