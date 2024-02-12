const About = () => {
	return (
		<section>
			<div className="flex flex-col items-center">
				<div className="flex flex-col justify-center w-4/5 mt-20 mb-12">
					<h2 className="text-lg mb-3 pb-2">Hi, I am Matthew Smart!</h2>
					<p className="indent-10 ">
						I'm a self-taught web developer with over 3 years of experience. At
						a young age, I developed a love for technology and art. After some
						time of working in IT while pursuing a career in the arts and music,
						I discovered what I really enjoyed about these two aspects of my
						life; Solving problems and creating things. From that point I
						decided to learn to code. I started by making small games with
						Python before finding web development.
					</p>
				</div>
				<div className="flex flex-col gap-5 justify-evenly items-center text-center">
					<div className="flex flex-col justify-center p-3 w-4/5">
						<div>
							<h2 className="text-lg font-semibold mb-3 pb-2">Frontend</h2>
						</div>
						<div className="flex flex-wrap justify-center items-center gap-3 text-6xl">
							<i className="devicon-html5-plain colored"></i>
							<i className="devicon-css3-plain colored"></i>
							<i className="devicon-javascript-plain colored"></i>
							<i className="devicon-react-original colored"></i>
							<i className="devicon-tailwindcss-original colored"></i>
						</div>
					</div>
					<div className="flex flex-col justify-center p-3 w-4/5">
						<div>
							<h2 className="text-lg font-semibold mb-3 pb-2">Backend</h2>
						</div>
						<div className=" flex flex-wrap justify-center items-center gap-3 text-6xl">
							<i className="devicon-nodejs-plain-wordmark colored"></i>
							<i className="devicon-express-original colored"></i>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
							/>
							<i className="devicon-mongodb-plain-wordmark colored"></i>
							<i className="devicon-mongoose-original colored"></i>
							<i className="devicon-mysql-plain-wordmark colored"></i>
						</div>
					</div>
					<div className="flex flex-col justify-center p-3 w-4/5">
						<div>
							<h2 className="text-lg font-semibold mb-3 pb-2">
								Tools & technologies
							</h2>
						</div>
						<div className="flex flex-wrap justify-center items-center gap-3 text-6xl">
							<i className="devicon-npm-original-wordmark colored"></i>
							<i className="devicon-git-plain colored"></i>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
							/>
							<i className="devicon-jest-plain colored"></i>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
							/>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
							/>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
							/>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
							/>
							<div>
								<img
									className="w-11"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
								/>
								<p className="text-center text-sm">(BTW)</p>
							</div>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
							/>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
							/>
							<img
								className="w-14"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
							/>
						</div>
					</div>
				</div>
				<div className="mt-12 mb-20">
					<h2 className="text-lg font-semibold">
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
