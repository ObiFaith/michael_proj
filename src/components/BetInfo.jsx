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
			{isCollapsed ? (
				<div className="text-sm max-w-8 grid gap-3 rotate-180 uppercase py-4 rounded-sm text-white bg-foreground">
					<div className="rotate-90">bet</div>
					<div className="rotate-90">slip</div>
					<div className="rotate-90">sales</div>
				</div>
			) : (
				<p className="text-sm text-center uppercase py-2 rounded-sm text-white bg-foreground">
					bet slip sales
				</p>
			)}
		</div>
	);
};

export default BetInfo;
