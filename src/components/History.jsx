import { BetHistory } from '..';
import { betHistory } from '@/constants';

const History = () => {
  const { overall, amount, currency, id, matches, dateTime } = betHistory;

  return (
    <div className="bg-white px-3 py-3 mt-1">
      <div className="*:border-b *:text-sm *:pb-2 *:mb-2 *:border-gray-200">
        <p className="underline font-bold">Bet slip No {id}</p>
        <div>
          <p className="flex gap-2 justify-between items-center">
            <span>{dateTime}</span>
            <span className="font-semibold">
              {matches.find(match => match.status.toLowerCase() === 'loss') ? (
                <span className="text-destructive">Loss</span>
              ) : (
                <span className="text-secondary">Win</span>
              )}
            </span>
          </p>
          <p className="flex gap-2 justify-between items-center">
            <span>Accumulator</span>
            <span className="font-semibold">
              {amount} {currency}
            </span>
          </p>
          <p className="flex gap-2 justify-between items-center">
            <span>Overall odds</span>
            <span className="font-semibold">{overall}</span>
          </p>
          <p className="flex gap-2 justify-between items-center">
            <span>Potential winnings</span>
            <span className="font-semibold">
              {Math.round(amount * overall)} {currency}
            </span>
          </p>
        </div>
      </div>
      <div className="grid gap-3">
        {matches.map(match => (
          <BetHistory key={match.heading} match={match} />
        ))}
      </div>
    </div>
  );
};

export default History;
