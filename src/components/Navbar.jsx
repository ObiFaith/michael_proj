import { navLinks } from '@/constants';
import { ChevronDown } from 'lucide-react';
import { GiStrawberry } from 'react-icons/gi';
const Navbar = () => {
	return (
		<div className="flex items-center mx-auto text-white">
			<div>
				<img
					width={28}
					src="https://v3.traincdn.com/genfiles/cms/desktop/media_asset/607b54e01a9d00e79177cde0e561ef08.svg"
					alt="spin-of-thrones"
				/>
			</div>
			<nav className="px-8">
				<ul className="flex gap-3">
					{navLinks.map(link => (
						<li
							key={link}
							className="flex cursor-pointer items-center font-medium text-xs"
						>
							<span>{link.name}</span>
							<ChevronDown size={16} />
						</li>
					))}
				</ul>
			</nav>
			<div className="flex gap-3 items-center">
				<GiStrawberry size={24} />
				Fruits
			</div>
		</div>
	);
};

export default Navbar;
