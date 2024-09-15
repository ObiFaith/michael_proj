import { Settings } from 'lucide-react';
import { useState } from 'react';

const BetSlip = () => {
	const [betNo, setBetNo] = useState(500);
	const [isOneBet] = useState(false);
	return (
		<div>
			<div className="px-2.5">
				<div className="flex items-center justify-between">
					<p className="text-xs font-medium uppercase">Your Bets</p>
					<p className="bg-blue-200 p-1 rounded-sm">
						<Settings size={14} className="text-foreground" />
					</p>
				</div>
				<div className="mt-1 mb-2 text-center py-14 px-8 text-sm bg-white">
					{isOneBet ? (
						<div>
							<p className="font-medium text-base">
								One-click bet enabled
							</p>
							<p>
								A bet with the stake you set below will be
								placed automatically when you click on a market
							</p>
						</div>
					) : (
						<p>
							Add events to the bet slip or enter a code to load
							events
						</p>
					)}
				</div>
			</div>
			<p className="border-dashed pb-1 border border-t-blue-400"></p>
			<div className="px-2.5">
				<>
					<div className="flex justify-between text-xs">
						<p className="uppercase">One-click bet</p>
						<input type="radio" name="one-bet" />
					</div>
					{isOneBet && (
						<div className="px-2 border my-2 border-blue-100 bg-white flex items-center justify-between">
							<span
								className={`cursor-pointer pr-2 ${
									betNo === 100 ? 'cursor-not-allowed' : ''
								}`}
								onClick={() => {
									if (betNo > 100)
										setBetNo(betNo => betNo - 100);
								}}
							>
								-
							</span>
							<span className="border-x w-full text-sm text-center border-blue-100">
								{betNo}
							</span>
							<span
								className="cursor-pointer pl-2"
								onClick={() => setBetNo(betNo => betNo + 100)}
							>
								+
							</span>
						</div>
					)}
				</>
				<p className="border-t-[0.5px] border-blue-100 mt-2.5 mb-1"></p>
				<div className="text-center pb-2">
					<span className="border-dashed border text-sm border-b-blue-400">
						Save/load events
					</span>
				</div>
			</div>
		</div>
	);
};

export default BetSlip;
