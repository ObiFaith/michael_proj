import { ChevronsRight } from 'lucide-react';
import { Bets, BetSlip, Tabs } from '..';

const BetInfo = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="justify-center items-center py-2 flex gap-1 rounded-sm hover:text-white  text-white/70 hover:bg-foreground bg-blue-400">
				<p className="text-sm">Collapse block</p>
				<ChevronsRight size={14} />
			</div>
			<Tabs
				config={[
					{ header: 'Bet slip', component: <BetSlip /> },
					{ header: 'My bets', component: <Bets /> },
				]}
			/>
			<div className=""></div>
		</div>
	);
};

export default BetInfo;
