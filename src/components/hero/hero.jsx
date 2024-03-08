import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa6';

const Hero = () => {
	return (
		<section
			id="home"
			className="h-[calc(100vh-65px)] scroll-m-[65px] lg:h-[calc(100vh-65px)] lg:scroll-m-[65px]"
		>
			<div className="h-full flex flex-col justify-evenly items-center bg-gradient-to-b from-purp to-vpurp lg:justify-end">
				<div className="flex flex-col items-center lg:mb-36">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.7, ease: 'linear' }}
						className="p-3 text-center"
					>
						<h1 className="text-3xl text-plat font-extrabold mb-2 underline decoration-dcyan decoration-2 lg:mb-3">
							Fullstack Developement & Design
						</h1>
						<h2 className="text-xl text-grrey font-bold mb-3 lg:mb-5">
							Solving Problems With Beautiful Solutions
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5, duration: 0.7, ease: 'linear' }}
					>
						<ul className="flex gap-6">
							<IconContext.Provider value={{ size: '2em' }}>
								<motion.li
									whileHover={{
										scale: [null, 1.5, 1.4],
										background: ['#558C8C', '#390040'],
										color: ['black', '#558C8C'],
									}}
									transition={{ duration: 0.25 }}
									className="bg-dcyan rounded-full p-3 text-center"
								>
									<a>
										<IoDocumentTextOutline />
									</a>
								</motion.li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<motion.li
									whileHover={{
										scale: [null, 1.5, 1.4],
										background: ['#558C8C', '#390040'],
										color: ['black', '#558C8C'],
									}}
									transition={{ duration: 0.3 }}
									className="bg-dcyan rounded-full p-3"
								>
									<a
										href="https://github.com/itsMe-ThatOneGuy"
										rel="noreferrer"
										target="_blank"
									>
										<FiGithub />
									</a>
								</motion.li>
							</IconContext.Provider>
							<IconContext.Provider value={{ size: '2em' }}>
								<motion.li
									whileHover={{
										scale: [null, 1.5, 1.4],
										background: ['#558C8C', '#390040'],
										color: ['black', '#558C8C'],
									}}
									transition={{ duration: 0.3 }}
									className="bg-dcyan rounded-full p-3 "
								>
									<a
										href="https://www.linkedin.com/in/matthew-smart13"
										rel="noreferrer"
										target="_blank"
									>
										<FaLinkedinIn />
									</a>
								</motion.li>
							</IconContext.Provider>
						</ul>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						clipPath: ['inset(0 0 100% 0)', 'inset(0)'],
						opacity: 1,
					}}
					transition={{ delay: 2, duration: 0.7, ease: 'linear' }}
					className="mb-11 lg:mb-28"
				>
					<img
						className="w-52 rounded-full border-2 border-vpurp drop-shadow-xl"
						src="../../../public/myicon.png"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
