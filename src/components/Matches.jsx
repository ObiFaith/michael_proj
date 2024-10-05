import { matches } from '@/constants';
import { MatchDetails, MatchHeading } from '..';

const Matches = () => {
	return (
		<>
			{matches.map(match => (
				<div key={match}>
					<MatchHeading
						heading={match.heading}
						category={match.category}
					/>
					<MatchDetails games={match.games} />
				</div>
			))}
		</>
	);
};

export default Matches;
