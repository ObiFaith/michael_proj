import { matches } from '@/constants';
import { MatchDetails, MatchHeading } from '..';

// eslint-disable-next-line react/prop-types
const Matches = ({ isCollapsed }) => {
	return (
		<>
			{matches.map(match => (
				<div key={match}>
					<MatchHeading {...match} />
					<MatchDetails
						games={match.games}
						isCollapsed={isCollapsed}
					/>
				</div>
			))}
		</>
	);
};

export default Matches;
