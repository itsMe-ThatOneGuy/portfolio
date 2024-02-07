import { IconContext } from 'react-icons';
import { IoIosMenu } from 'react-icons/io';

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<button>Resume</button>
				</li>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;
