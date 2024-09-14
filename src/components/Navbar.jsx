import { spin_throne } from '@/assets';
import { navLinks } from '@/constants';
import { ChevronDown } from 'lucide-react';
import { GiStrawberry } from 'react-icons/gi';
const Navbar = () => {
	return (
		<div className="flex items-center mx-auto text-white">
			<img width={28} src={spin_throne} alt="spin-of-thrones" />
			<nav className="flex gap-4 items-center lg:px-8 md:px-4 px-2">
				<ul className="flex gap-3">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={`flex cursor-pointer items-center font-medium text-xs ${
								navLinks.length - 1 !== index
									? 'max-lg:hidden'
									: ''
							}`}
						>
							<span>{link.name}</span>
							<ChevronDown size={16} />
						</li>
					))}
				</ul>
				<div className="flex gap-1.5 md:gap-3 items-center text-xs">
					<GiStrawberry className="md:size-6 size-4" />
					Fruits
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
