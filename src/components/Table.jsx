import {
	Matches,
	FirstPeriod,
	Recommended,
	SecondPeriod,
	UpcomingEvents,
} from '..';
import { useState } from 'react';
import { Switch } from './ui/switch';
import { FaHome } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaHockeyPuck } from 'react-icons/fa';
import { FaVolleyballBall } from 'react-icons/fa';
import { IoBasketballSharp } from 'react-icons/io5';
import { ChevronRight, Trophy } from 'lucide-react';
import { FaTableTennisPaddleBall } from 'react-icons/fa6';
import { IoIosFootball, IoIosTennisball } from 'react-icons/io';

const Table = () => {
	const [activeTab, setActiveTab] = useState(0);
	const TableTabs = [
		{ header: 'Matches', component: <Matches /> },
		{ header: 'Recommended', component: <Recommended /> },
		{ header: 'Upcoming events', component: <UpcomingEvents /> },
		{ header: '1st Period', component: <FirstPeriod /> },
		{ header: '2nd Period', component: <SecondPeriod /> },
	];

	return (
		<div>
			<div className="flex justify-between bg-foreground">
				<div className="flex">
					<div className="pl-2.5 pr-4 border-r flex *:size-[18px] items-center gap-0.5 text-white border-background">
						<FaHome />
						<ChevronRight />
						<FaTableTennisPaddleBall />
						<ChevronRight />
						<Trophy className="opacity-60" />
					</div>
					<div className="flex transition-all gap-2.5 text-sm pl-2.5">
						{TableTabs.map((entry, index) => (
							<div
								key={index}
								onClick={() => setActiveTab(index)}
								className={`flex gap-3 items-center cursor-pointer justify-center ${
									activeTab == index
										? 'text-white border-b-2 border-secondary'
										: 'text-white/70'
								}`}
							>
								{entry.header}
							</div>
						))}
					</div>
				</div>
				<div className="relative rounded-sm py-1">
					<input
						type="text"
						placeholder="Search by match"
						className="bg-background text-sm indent-2 outline-none p-1 rounded-sm w-full text-white border border-background hover:border-blue-400"
					/>
					<IoSearch className="text-white absolute right-2 top-1.5" />
				</div>
			</div>
			<div className="bg-blue-400 flex items-center px-2.5 text-white text-sm">
				<div className="border-r py-2.5 pr-2.5 mr-2.5 items-center flex gap-1 border-background">
					<Switch />
					<p>With live streams</p>
				</div>
				<div className="flex gap-4 text-white/70">
					<div className="flex items-center gap-2">
						<IoIosFootball size={16} /> <p>Football</p>
					</div>
					<div className="flex items-center gap-2">
						<IoIosTennisball size={16} />
						<p>Tennis</p>
					</div>
					<div className="flex items-center gap-2">
						<IoBasketballSharp size={16} />
						<p>Basketball</p>
					</div>
					<div className="flex items-center gap-2">
						<FaHockeyPuck size={16} />
						<p>Ice Hockey</p>
					</div>
					<div className="flex items-center gap-2">
						<FaVolleyballBall size={16} />
						<p>VolleyballBall</p>
					</div>
					<div className="flex items-center gap-2">
						<FaTableTennisPaddleBall size={16} />
						<p>Table Tennis</p>
					</div>
				</div>
			</div>
			<div className="">{TableTabs[activeTab].component}</div>
		</div>
	);
};

export default Table;
