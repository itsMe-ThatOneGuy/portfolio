const About = () => {
	return (
		<section id="about" className="scroll-m-10">
			<div className="flex flex-col items-center bg-gradient-to-b from-vpurp to-dcyan w-full">
				<div className="flex flex-col justify-center w-4/5 mt-10 mb-16 p-5 rounded-3xl bg-grrey">
					<h2 className="text-lg mb-1 pb-2 text-plat">
						Hi, I am <span className="text-vpurp font-bold">Matthew Smart</span>
						!
					</h2>
					<p className="indent-5 text-plat">
						I'm a self-taught web developer with over 3 years of experience. At
						a young age, I developed a love for technology and art. After some
						time of working in IT while pursuing a career in the arts and music,
						I discovered what I really enjoyed about these two aspects of my
						life; Solving problems and creating things. From that point I
						decided to learn to code. I started by making small games with
						Python before finding web development.
					</p>
				</div>
				<div className="flex flex-col gap-5 justify-evenly items-center text-center w-full">
					<div className="flex flex-col justify-center mb-4 w-4/5">
						<div>
							<h2 className="text-xl font-semibold mb-3 pb-4 text-plat">
								Frontend
							</h2>
						</div>
						<div className="grid grid-cols-4 items-center gap-3 text-6xl">
							<div className="flex justify-center items-center">
								<i className="devicon-html5-plain colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-css3-plain colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-javascript-plain colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-react-original colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-tailwindcss-original colored"></i>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center mb-4 w-4/5">
						<div>
							<h2 className="text-xl font-semibold mb-3 pb-4 text-plat">
								Backend
							</h2>
						</div>
						<div className="grid grid-cols-4 items-center gap-3 text-6xl">
							<div className="flex justify-center items-center">
								<i className="devicon-nodejs-plain-wordmark colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-express-original"></i>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-mongodb-plain-wordmark colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-mongoose-original colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-mysql-plain-wordmark"></i>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center mb-4 w-4/5">
						<div>
							<h2 className="text-xl font-semibold mb-3 pb-4 text-plat">
								Tools & technologies
							</h2>
						</div>
						<div className="grid grid-cols-4 items-center gap-3 text-6xl">
							<div className="flex justify-center items-center">
								<i className="devicon-npm-original-wordmark colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-git-plain colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<i className="devicon-jest-plain colored"></i>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
								/>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img
									className="w-11"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
								/>
								<p className="text-center text-sm">(BTW)</p>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
								/>
							</div>
							<div className="flex justify-center items-center">
								<img
									className="w-14"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 mb-12">
					<h2 className="text-xl font-semibold">
						<span>
							<a>RESUME</a>
						</span>{' '}
						/{' '}
						<span>
							<a
								href="https://github.com/itsMe-ThatOneGuy"
								rel="noreferrer"
								target="_blank"
							>
								GITHUB
							</a>
						</span>{' '}
						/{' '}
						<span>
							<a
								href="https://github.com/itsMe-ThatOneGuy"
								rel="noreferrer"
								target="_blank"
							>
								LINKEDIN
							</a>
						</span>
					</h2>
				</div>
			</div>
		</section>
	);
};

export default About;
