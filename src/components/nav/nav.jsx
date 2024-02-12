import { IconContext } from 'react-icons';
import { IoIosMenu } from 'react-icons/io';

const Nav = () => {
	return (
		<nav>
			<div className="text-xl hidden md:flex md:my-2 md:mr-5">
				<ul className="flex gap-2">
					<li className="pr-5 pl-5">
						<button>Resume</button>
					</li>
					<li className="pr-5">About</li>
					<li className="pr-5">Projects</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="mr-5 md:hidden">
				<IconContext.Provider value={{ size: '3em' }}>
					<div>
						<IoIosMenu />
					</div>
				</IconContext.Provider>
			</div>
		</nav>
	);
};

export default Nav;
