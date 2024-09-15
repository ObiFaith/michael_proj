import { Settings } from 'lucide-react';

const BetSlip = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-sm uppercase font-light tracking-wide">
					Your Bets
				</h2>
				<p className="bg-blue-200 p-1 rounded-sm">
					<Settings size={14} className="text-foreground" />
				</p>
			</div>
			<div className=""></div>
			<div className=""></div>
		</div>
	);
};

export default BetSlip;
