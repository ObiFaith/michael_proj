import { Star } from 'lucide-react';

const MatchDetails = () => {
	return (
		<div className="flex bg-white px-4 py-2">
			<div className="w-full">
				<div className="">
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
					</div>
					<div className=""></div>
				</div>
				<div className=""></div>
			</div>
			<hr />
			<div className="w-full"></div>
		</div>
	);
};

export default MatchDetails;
