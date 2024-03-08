import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoMailOutline } from 'react-icons/io5';
import { FaInstagram, FaGhost } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { GiPinballFlipper } from 'react-icons/gi';

const Contact = () => {
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

	const icon = {
		hidden: { y: -40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	const text = {
		hidden: { opacity: 0 },
		visible: {
			clipPath: ['inset(0 100% 0 0)', 'inset(0)'],
			opacity: 1,
		},
	};

	return (
		<section id="contact" className="-scroll-m-6">
			<div className="flex flex-col lg:items-center bg-gradient-to-b from-vpurp to-purp">
				<div className="lg:w-1/2 flex flex-col lg:mt-6">
					<div className="p-3 lg:mb-16 mx-3 mt-10">
						<motion.h2
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 1 }}
							viewport={{ once: true }}
							className="text-2xl font-bold text-plat"
						>
							Contact / Connect
						</motion.h2>
					</div>
					<div className="flex flex-col items-center lg:flex-row lg:gap-14 mx-auto mt-6">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{
								clipPath: ['inset(0 0 100% 0)', 'inset(0)'],
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ delay: 0.5, duration: 0.7, ease: 'linear' }}
						>
							<img
								className="w-52 rounded-full border-2 border-vpurp mb-6 drop-shadow-xl"
								src="profile.jpg"
							/>
						</motion.div>
						<div className="lg:mb-11">
							<motion.ul
								variants={container}
								initial="hidden"
								whileInView={'visible'}
								viewport={{ once: true }}
								className="flex flex-col p-5 lg:grid lg:grid-cols-2 lg:gap-3"
							>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<IoMailOutline />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a href="m&#97;ilto&#58;matt&#104;&#101;%77sma%&#55;2t&#49;&#37;&#51;3&#64;&#103;&#37;6D%6&#49;%&#54;9l&#46;c&#111;&#37;6D">
											<p className="text-lg text-plat font-semibold text-center hover:underline underline-offset-4 decoration-dcyan">
												matthews&#109;art1&#51;&#64;gm&#97;il
											</p>
										</a>
									</motion.div>
								</li>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<FiGithub />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a
											href="https://github.com/itsMe-ThatOneGuy"
											rel="noreferrer"
											target="_blank"
										>
											<p className="text-lg text-plat font-semibold hover:underline underline-offset-4 decoration-dcyan">
												itsMe-ThatOneGuy
											</p>
										</a>
									</motion.div>
								</li>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<FaLinkedinIn />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a
											href="https://www.linkedin.com/in/matthew-smart13"
											rel="noreferrer"
											target="_blank"
										>
											<p className="text-lg text-plat font-semibold hover:underline underline-offset-4 decoration-dcyan">
												Matthew Smart
											</p>
										</a>
									</motion.div>
								</li>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<FaInstagram />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a
											href="https://www.instagram.com/itsme_thatoneguy/"
											rel="noreferrer"
											target="_blank"
										>
											<p className="text-lg text-plat font-semibold hover:underline underline-offset-4 decoration-dcyan">
												itsme_thatoneguy
											</p>
										</a>
									</motion.div>
								</li>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<FaXTwitter />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a
											href="https://twitter.com/thatSmart_Guy"
											rel="noreferrer"
											target="_blank"
										>
											<p className="text-lg text-plat font-semibold hover:underline underline-offset-4 decoration-dcyan">
												@thatSmart_guy
											</p>
										</a>
									</motion.div>
								</li>
								<li className="flex items-center gap-5 mb-5">
									<motion.div
										variants={icon}
										className="bg-dcyan rounded-full p-3 text-center"
									>
										<IconContext.Provider value={{ size: '2em' }}>
											<GiPinballFlipper />
										</IconContext.Provider>
									</motion.div>
									<motion.div variants={text}>
										<a
											href="https://www.ifpapinball.com/player.php?p=60330"
											rel="noreferrer"
											target="_blank"
										>
											<p className="text-lg text-plat font-semibold hover:underline underline-offset-4 decoration-dcyan">
												matthew smart
											</p>
										</a>
									</motion.div>
								</li>
							</motion.ul>
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						whileHover={{ opacity: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						viewport={{ once: true }}
						className="mb-20 mt-10 text-plat mx-auto"
					>
						<IconContext.Provider value={{ size: '3em' }}>
							<FaGhost />
						</IconContext.Provider>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
