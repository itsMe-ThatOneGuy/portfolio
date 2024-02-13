import { useState } from 'react';
import Nav from '../nav/nav';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

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
		<header className="sticky top-0 z-50">
			<div className="flex justify-between p-3 bg-grrey">
				<div className="text-2xl font-bold my-1 ml-5">
					<p className="tracking-wide text-plat">Matthew Smart</p>
				</div>
				<Nav handleClick={handleClick} mobileMenu={mobileMenu} />
			</div>
			<div className={!mobileMenu ? 'menu' : 'menu active'}>
				<ul className="relative flex flex-col items-center text-3xl top-32">
					<li className="pb-14">
						<button>Resume</button>
					</li>
					<li className="pb-14">About</li>
					<li className="pb-14">Projects</li>
					<li>Contact</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
