import { IconContext } from 'react-icons';
import { IoMailOutline } from 'react-icons/io5';
import { FaInstagram, FaGhost } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { GiPinballFlipper } from 'react-icons/gi';

const Contact = () => {
	return (
		<section id="contact">
			<div className="flex flex-col bg-gradient-to-b from-vpurp to-purp">
				<div className="p-3 mb-8 mx-2 mt-10">
					<h2 className="text-2xl font-bold text-plat">Contact / Connect</h2>
				</div>
				<div className="flex flex-col items-center">
					<img
						className="w-52 rounded-full border-2 border-vpurp mb-6 drop-shadow-xl"
						src="../../../public/profile.jpg"
					/>
				</div>
				<div className="mx-auto">
					<ul className="flex flex-col p-5">
						<li className="flex items-center gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em', color: 'skyblue' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IoMailOutline />
								</div>
							</IconContext.Provider>
							<a href="m&#97;ilto&#58;matt&#104;&#101;%77sma%&#55;2t&#49;&#37;&#51;3&#64;&#103;&#37;6D%6&#49;%&#54;9l&#46;c&#111;&#37;6D">
								<p className="text-lg text-plat font-semibold text-center">
									matthews&#109;art1&#51;&#64;gm&#97;il&#46;com
								</p>
							</a>
						</li>
						<li className="flex items-center gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em', color: '#171515' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<FiGithub />
								</div>
							</IconContext.Provider>
							<a
								href="https://github.com/itsMe-ThatOneGuy"
								rel="noreferrer"
								target="_blank"
							>
								<p className="text-lg text-plat font-semibold">
									itsMe-ThatOneGuy
								</p>
							</a>
						</li>
						<li className="flex items-center gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em', color: '#0A66C2' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<FaLinkedinIn />
								</div>
							</IconContext.Provider>
							<a
								href="https://www.linkedin.com/in/matthew-smart13"
								rel="noreferrer"
								target="_blank"
							>
								<p className="text-lg text-plat font-semibold">Matthew Smart</p>
							</a>
						</li>
						<li className="flex items-center text-plat gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em', color: '#cd486b' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<FaInstagram />
								</div>
							</IconContext.Provider>
							<a
								href="https://www.instagram.com/itsme_thatoneguy/"
								rel="noreferrer"
								target="_blank"
							>
								<p className="text-lg font-semibold">itsme_thatoneguy</p>
							</a>
						</li>
						<li className="flex items-center gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<FaXTwitter />
								</div>
							</IconContext.Provider>
							<a
								href="https://twitter.com/thatSmart_Guy"
								rel="noreferrer"
								target="_blank"
							>
								<p className="text-lg text-plat font-semibold">
									@thatSmart_guy
								</p>
							</a>
						</li>
						<li className="flex items-center gap-5 mb-5">
							<IconContext.Provider value={{ size: '2em', color: 'silver' }}>
								<div className="bg-dcyan rounded-full p-3 text-center">
									<GiPinballFlipper />
								</div>
							</IconContext.Provider>
							<a
								href="https://www.ifpapinball.com/player.php?p=60330"
								rel="noreferrer"
								target="_blank"
							>
								<p className="text-lg text-plat font-semibold">matthew smart</p>
							</a>
						</li>
					</ul>
				</div>
				<div className="mb-11 text-plat mx-auto">
					<IconContext.Provider value={{ size: '3em' }}>
						<FaGhost />
					</IconContext.Provider>
				</div>
			</div>
		</section>
	);
};

export default Contact;
