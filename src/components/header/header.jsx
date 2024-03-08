import { useState } from 'react';
import userScroll from '../../hooks/userScroll';
import { motion } from 'framer-motion';
import Nav from '../nav/nav';
import { FaGhost } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const scrollDirection = userScroll();

	const body = document.querySelector('body');
	const toggleBodyOverflow = () => {
		!mobileMenu
			? body.classList.add('active')
			: body.classList.remove('active');
	};

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
		toggleBodyOverflow();
	};

	const handleClick = () => {
		toggleMobileMenu();
	};

	return (
		<header
			className={`sticky z-50 ${
				scrollDirection === 'down' ? '-top-24' : 'top-0'
			} transition-all ease-in-out duration-500`}
		>
			<div className="flex justify-between p-2 bg-grrey">
				<div className="text-2xl font-bold my-1 ml-5 flex gap-1 items-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.1, duration: 1 }}
					>
						<IconContext.Provider value={{ color: '#730071' }}>
							<FaGhost />
						</IconContext.Provider>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							clipPath: ['inset(0 100% 0 0)', 'inset(0)'],
							opacity: 1,
						}}
						transition={{ delay: 0.5, duration: 0.6 }}
					>
						<a
							href="#home"
							className="tracking-wide text-plat hover:underline underline-offset-2 decoration-wavy decoration-dcyan"
						>
							Matthew Smart
						</a>
					</motion.div>
				</div>
				<Nav handleClick={handleClick} mobileMenu={mobileMenu} />
			</div>
			<div className={!mobileMenu ? 'menu' : 'menu active'}>
				<ul className="relative flex flex-col items-center text-3xl font-semibold top-20">
					<li className="pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#home"
						>
							Home
						</a>
					</li>
					<li className="pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#about"
						>
							About
						</a>
					</li>
					<li className="pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#projects"
						>
							Projects
						</a>
					</li>
					<li className="pb-14">
						<a
							onClick={() => {
								handleClick();
							}}
							href="#contact"
						>
							Contact
						</a>
					</li>
					<li className="pb-14">
						<button>Resume</button>
					</li>
					<li className="pb-14">
						<IconContext.Provider value={{ color: '#E6E8E6' }}>
							<FaGhost />
						</IconContext.Provider>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
