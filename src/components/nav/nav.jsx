import { IconContext } from 'react-icons';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

const Nav = (props) => {
	return (
		<nav>
			<div className="text-xl hidden md:flex md:my-2 md:mr-5">
				<ul className="flex gap-2">
					<li className="pr-5">
						<a href="#about">About</a>
					</li>
					<li className="pr-5">
						<a href="#projects">Projects</a>
					</li>
					<li className="pr-5">
						<a href="#contact">Contact</a>
					</li>
					<li className="pr-5">
						<button>Resume</button>
					</li>
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
