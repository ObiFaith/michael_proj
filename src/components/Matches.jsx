import { matches } from '@/constants';
import { MatchDetails, MatchHeading } from '..';

const Matches = () => {
	return (
		<div>
			{matches.map(match => (
				<div key={match}>
					<MatchHeading
						heading={match.heading}
						category={match.category}
					/>
					<MatchDetails games={match.games} />
				</div>
			))}
		</div>
	);
};

export default Matches;
