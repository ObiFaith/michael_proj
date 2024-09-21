import { History, Open, Tabs } from '..';

const Bets = () => {
	return (
		<div className="px-5 py-2.5">
			<Tabs
				config={[
					{ header: 'Open', component: <Open /> },
					{ header: 'History', component: <History /> },
				]}
			/>
		</div>
	);
};

export default Bets;
