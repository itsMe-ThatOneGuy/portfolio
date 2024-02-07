import Nav from '../nav/nav';

const Header = () => {
	return (
		<header className="flex justify-between p-3">
			<div className="text-2xl font-bold mt-2 ml-5">
				<p>Matthew Smart</p>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
