import { History, Open, Tabs } from '..';

const Bets = () => {
	return (
		<Tabs
			config={[
				{ header: 'Open', component: <Open /> },
				{ header: 'History', component: <History /> },
			]}
		/>
	);
};

export default Bets;
