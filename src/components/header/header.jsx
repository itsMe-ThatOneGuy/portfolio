import Nav from '../nav/nav';

const Header = () => {
	return (
		<header className="flex justify-between border-2 border-black">
			<div>
				<p>Matthew Smart</p>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
