import { games } from '@/constants';

// eslint-disable-next-line react/prop-types
const MatchHeading = ({ category, heading }) => {
	return (
		<div className="bg-blue-200 py-4 flex text-background">
			<div className="w-2/5 px-2.5">
				{games.map(game => game.name === category && game.icons)}
			</div>
			<div className="w-3/5"></div>
		</div>
	);
};

export default MatchHeading;
