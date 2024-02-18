import { IconContext } from 'react-icons';
import { IoMailOutline } from 'react-icons/io5';
import { FaInstagram, FaGhost } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { GiPinballFlipper } from 'react-icons/gi';

const Contact = () => {
	return (
		<section id="contact" className="-scroll-m-6">
			<div className="flex flex-col bg-gradient-to-b from-vpurp to-purp">
				<div className="p-3 mb-8 mx-2 mt-10">
					<h2 className="text-2xl font-bold text-plat">Contact / Connect</h2>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<img
							className="w-52 rounded-full border-2 border-vpurp mb-6 drop-shadow-xl"
							src="../../../public/profile.jpg"
						/>
					</div>
					<div>
						<ul className="flex flex-col p-5">
							<li className="flex items-center gap-5 mb-5">
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider
										value={{ size: '2em', color: 'skyblue' }}
									>
										<IoMailOutline />
									</IconContext.Provider>
								</div>
								<a href="m&#97;ilto&#58;matt&#104;&#101;%77sma%&#55;2t&#49;&#37;&#51;3&#64;&#103;&#37;6D%6&#49;%&#54;9l&#46;c&#111;&#37;6D">
									<p className="text-lg text-plat font-semibold text-center">
										matthews&#109;art1&#51;&#64;gm&#97;il&#46;com
									</p>
								</a>
							</li>
							<li className="flex items-center gap-5 mb-5">
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider
										value={{ size: '2em', color: '#171515' }}
									>
										<FiGithub />
									</IconContext.Provider>
								</div>
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
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider
										value={{ size: '2em', color: '#0A66C2' }}
									>
										<FaLinkedinIn />
									</IconContext.Provider>
								</div>
								<a
									href="https://www.linkedin.com/in/matthew-smart13"
									rel="noreferrer"
									target="_blank"
								>
									<p className="text-lg text-plat font-semibold">
										Matthew Smart
									</p>
								</a>
							</li>
							<li className="flex items-center text-plat gap-5 mb-5">
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider
										value={{ size: '2em', color: '#cd486b' }}
									>
										<FaInstagram />
									</IconContext.Provider>
								</div>
								<a
									href="https://www.instagram.com/itsme_thatoneguy/"
									rel="noreferrer"
									target="_blank"
								>
									<p className="text-lg font-semibold">itsme_thatoneguy</p>
								</a>
							</li>
							<li className="flex items-center gap-5 mb-5">
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider value={{ size: '2em' }}>
										<FaXTwitter />
									</IconContext.Provider>
								</div>
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
								<div className="bg-dcyan rounded-full p-3 text-center">
									<IconContext.Provider
										value={{ size: '2em', color: 'silver' }}
									>
										<GiPinballFlipper />
									</IconContext.Provider>
								</div>
								<a
									href="https://www.ifpapinball.com/player.php?p=60330"
									rel="noreferrer"
									target="_blank"
								>
									<p className="text-lg text-plat font-semibold">
										matthew smart
									</p>
								</a>
							</li>
						</ul>
					</div>
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
