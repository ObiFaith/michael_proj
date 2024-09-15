import { ChevronsRight } from 'lucide-react';
import { Bets, BetSlip, Tabs } from '..';

// eslint-disable-next-line react/prop-types
const BetInfo = ({ isCollapsed, setCollapsed }) => {
	return (
		<div className="grid gap-2.5 transition-all">
			<div
				onClick={() => setCollapsed(!isCollapsed)}
				className="justify-center cursor-pointer items-center py-2 flex gap-1 rounded-sm hover:text-white text-white/70 hover:bg-foreground bg-blue-400"
			>
				{!isCollapsed && <p className="text-sm">Collapse block</p>}
				<ChevronsRight size={14} />
			</div>
			<Tabs
				isCollapsed={isCollapsed}
				config={[
					{ header: 'Bet slip', component: <BetSlip /> },
					{ header: 'My bets', component: <Bets /> },
				]}
			/>
			<p className="text-sm text-center uppercase py-2 rounded-sm text-white bg-foreground">
				bet slip sales
			</p>
		</div>
	);
};

export default BetInfo;
