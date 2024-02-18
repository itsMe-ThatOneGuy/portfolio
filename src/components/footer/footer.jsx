import { IconContext } from 'react-icons';
import { RiArrowUpDoubleLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="bg-grrey h-fit">
			<div className="flex flex-col justify-center items-center p-5">
				<div>
					<IconContext.Provider value={{ size: '2em', color: '#E6E8E6' }}>
						<a href="#home">
							<RiArrowUpDoubleLine />
						</a>
					</IconContext.Provider>
				</div>
				<div className="p-1">
					<p className="text-plat font-semibold">
						<span className="text-vpurp text-lg">©</span> Matthew Smart{' '}
						<span className="text-vpurp">2024</span>
					</p>
				</div>
				<div className="text-xs p-3 flex flex-col items-center">
					<p>Designed and Developed by me.</p>
					<p>
						Coded in <span className="text-vpurp font-bold">NeoVim</span>, built
						with <span className="text-vpurp font-bold">React.js</span> and{' '}
						<span className="text-vpurp font-bold">TailwindCSS</span>.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
