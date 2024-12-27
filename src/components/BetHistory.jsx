/* eslint-disable react/prop-types */
import { gameIcons } from '@/constants';
import { ChartColumn } from 'lucide-react';
import { IoIosFootball } from 'react-icons/io';

const BetHistory = ({ match }) => {
  const gameIcon = gameIcons.find(
    game => game.name.toLowerCase() === match.gameType.toLowerCase()
  )?.icons || <IoIosFootball size={16} />;

  return (
    <div className="grid gap-1.5">
      <div className="flex items-center gap-1 justify-between">
        <div className="flex gap-1">
          {gameIcon}
          <p className="text-xs md:text-sm">{match.heading}</p>
        </div>
        <ChartColumn size={16} />
      </div>
      <p className="text-blue-400 text-xs md:text-sm font-semibold">
        {match.teams[0].name} - {match.teams[1].name}
      </p>
      <div>
        <div className="*:text-xs flex items-center gap-2 md:text-sm">
          <span className="font-medium py-0.5 bg-blue-50 text-blue-400 px-3 rounded-sm">
            {match.point}
          </span>
          <span>{match.track}</span>
          <span>
            {match.teams[0].name} - {match.teams[1].name}
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-xs">Score</p>
          <p className="font-medium text-sm">
            {match.teams[0].score.first_half + match.teams[1].score.first_half}:
            {match.teams[0].score.second_half +
              match.teams[1].score.second_half}{' '}
            ({match.teams[0].score.first_half}:{match.teams[1].score.first_half}
            ,{match.teams[0].score.second_half}:
            {match.teams[1].score.second_half})
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs">Status</p>
          <p
            className={`font-medium text-sm ${
              match.status.toLowerCase() === 'loss'
                ? 'text-destructive'
                : 'text-secondary'
            }`}
          >
            {match.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
