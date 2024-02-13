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
			<div className="flex justify-between p-3 bg-grrey opacity-90">
				<div className="text-2xl font-bold my-1 ml-5">
					<p className="tracking-wide text-plat">Matthew Smart</p>
				</div>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
