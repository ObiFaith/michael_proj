import { ChevronDown, Star } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const MatchDetails = ({ games = [], isCollapsed }) => {
	return (
		<div className="grid bg-white">
			{games.map(game => (
				<div key={game} className="flex">
					<div className="md:w-2/5 w-1/3">
						<div className="flex py-2">
							<div className="pr-2 pl-2.5 grid gap-1 border-r border-gray-300">
								<svg
									role="img"
									focusable="false"
									viewBox="0 0 15 14"
									style={{ fill: 'hsl(208,31%,81%)' }}
								>
									<path d="M14.6 4l-4-3.9a.4.4 0 00-.4 0 1.3 1.3 0 00-.3 1.5L6 5.1a1.7 1.7 0 00-2.5.1.4.4 0 000 .5l2.4 2.4-2.3 2.3-1.9 2-.8 1a.4.4 0 10.5.5l1-.8c1-.7 2-1.8 2.1-1.8L6.7 9 9 11.2a.4.4 0 00.5 0 1.7 1.7 0 00.1-2.4l3.6-4a1.3 1.3 0 001.5-.3.4.4 0 000-.5z"></path>
								</svg>
								<Star size={16} className="text-accent" />
							</div>
							<div className="flex justify-between w-full">
								<div className="grid gap-1 ml-2">
									{game.teams.map((team, index) => (
										<div
											key={index}
											className="flex items-center gap-1"
										>
											<img
												src={team.logo}
												alt={team.name + ' logo'}
											/>
											<h3
												className={`text-xs md:text-sm ${
													isCollapsed
														? 'max-sm:hidden'
														: ''
												}`}
											>
												{team.name}
											</h3>
										</div>
									))}
								</div>
								<div className="flex text-sm">
									<div className="font-bold pr-2 grid gap-1 border-r border-gray-300">
										<p>{game.teams[0].score.first_half}</p>
										<p>{game.teams[1].score.first_half}</p>
									</div>
									<div className="grid gap-1 pl-2 pr-4">
										<p>{game.teams[0].score.second_half}</p>
										<p>{game.teams[1].score.second_half}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex pl-2.5 pr-2 justify-between">
							<div className="text-xs flex flex-wrap gap-x-1">
								{game.extra_info.map((info, index) => (
									<p key={info}>
										{info}{' '}
										{index !== game.extra_info.length - 1 &&
											'/'}
									</p>
								))}
							</div>
							<ChevronDown size={20} strokeWidth={2} />
						</div>
					</div>
					<hr />
					<div className="grid *:pb-2 w-2/3 md:w-3/5 *:flex *:gap-1 lg:*:gap-2 text-center *:items-center grid-cols-5 *:border-l border-gray-300">
						<div className="col-span-4 sm:col-span-2 px-1 lg:px-2.5 *:w-full">
							{Object.values(game.points)
								.slice(0, 3)
								.map(point => (
									<p
										key={point}
										className="bg-blue-50 text-blue-400 py-1 rounded-sm"
									>
										{point}
									</p>
								))}
						</div>
						<div className="col-span-2 max-sm:hidden px-1 lg:px-2.5 *:w-full">
							{Object.values(game.points)
								.slice(3, 6)
								.map(point => (
									<p
										key={point}
										className="bg-blue-50 text-blue-400 py-1 rounded-sm"
									>
										{point}
									</p>
								))}
						</div>
						<div className="col-span-1 justify-center">
							<p className="font-medium underline underline-offset-1 text-blue-400 py-1">
								{Object.values(game.points).pop()}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MatchDetails;
