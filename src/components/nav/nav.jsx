import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

const Nav = (props) => {
	return (
		<nav>
			<div className="text-xl font-semibold hidden md:flex md:my-2 md:mr-5">
				<ul className="flex gap-2">
					<motion.li
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.7 }}
						className="pr-5"
					>
						<motion.a
							href="#about"
							whileHover={{ color: ['black', '#730071'] }}
							className="hover:underline underline-offset-4 decoration-wavy decoration-dcyan"
						>
							About
						</motion.a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.7 }}
						className="pr-5"
					>
						<motion.a
							href="#projects"
							whileHover={{ color: ['black', '#730071'] }}
							className="hover:underline decoration-wavy underline-offset-4 decoration-dcyan"
						>
							Projects
						</motion.a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.7 }}
						className="pr-5"
					>
						<motion.a
							href="#contact"
							whileHover={{ color: ['black', '#730071'] }}
							className="hover:underline decoration-wavy underline-offset-4 decoration-dcyan"
						>
							Contact
						</motion.a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.7 }}
						className="pr-5"
					>
						<motion.button
							whileHover={{ color: ['black', '#730071'] }}
							className="hover:underline decoration-wavy underline-offset-4 decoration-dcyan"
						>
							Resume
						</motion.button>
					</motion.li>
				</ul>
			</div>
			<div className="mr-5 md:hidden">
				<div
					onClick={() => {
						props.handleClick();
					}}
				>
					<IconContext.Provider value={{ size: '3em', color: '#390040' }}>
						{!props.mobileMenu ? <IoIosMenu /> : ''}
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '3em', color: 'red' }}>
						{props.mobileMenu ? <IoCloseSharp /> : ''}
					</IconContext.Provider>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
