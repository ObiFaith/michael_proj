import { ChevronDown, Star } from 'lucide-react';
import { atlanta, como } from '@/assets';

const MatchDetails = () => {
	return (
		<div className="flex bg-white px-4 py-2">
			<div className="w-full mr-4">
				<div className="flex">
					<div className="pr-2 grid gap-1 border-r border-gray-300">
						<svg
							role="img"
							focusable="false"
							viewBox="0 0 15 14"
							style={{ fill: 'hsl(208,31%,81%)' }}
						>
							<path d="M14.6 4l-4-3.9a.4.4 0 00-.4 0 1.3 1.3 0 00-.3 1.5L6 5.1a1.7 1.7 0 00-2.5.1.4.4 0 000 .5l2.4 2.4-2.3 2.3-1.9 2-.8 1a.4.4 0 10.5.5l1-.8c1-.7 2-1.8 2.1-1.8L6.7 9 9 11.2a.4.4 0 00.5 0 1.7 1.7 0 00.1-2.4l3.6-4a1.3 1.3 0 001.5-.3.4.4 0 000-.5z"></path>
						</svg>
						<Star size={16} className="text-accent" />
					</div>
					<div className="flex justify-between w-full text-sm">
						<div className="grid gap-1 ml-2">
							<div className="flex items-center gap-1">
								<img src={atlanta} alt="atlanta_logo" />
								<h3>Jaurez</h3>
							</div>
							<div className="flex items-center gap-1">
								<img src={como} alt="como_logo" />
								<p>Tigres de la UANL</p>
							</div>
						</div>
						<div className="flex">
							<div className="font-bold pr-2 grid gap-1 border-r border-gray-300">
								<p>0</p>
								<p>0</p>
							</div>
							<div className="grid gap-1 ml-2 ">
								<p>0</p>
								<p>0</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex pt-1.5 items-end justify-between">
					<div className="text-xs">
						<span>24.29</span> /<span> 1st half</span> /
						<span> Round 9</span>
						<span></span>
					</div>
					<ChevronDown size={20} strokeWidth={2.5} />
				</div>
			</div>
			<hr />
			<div className="grid w-full *:flex *:justify-center *:items-center grid-cols-5 *:border-l border-gray-300">
				<div className="col-span-2 px-4">
					<span>5.78</span>
				</div>
				<div className="col-span-2">
					<span>5.78</span>
				</div>
				<div className="col-span-1">
					<span>5.78</span>
				</div>
			</div>
		</div>
	);
};

export default MatchDetails;
