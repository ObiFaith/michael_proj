import {
	Matches,
	FirstPeriod,
	Recommended,
	SecondPeriod,
	UpcomingEvents,
	TableTabs,
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

// eslint-disable-next-line react/prop-types
const Table = ({ isCollapsed }) => {
	const [activeTab, setActiveTab] = useState(0);
	const config = [
		{ header: 'Matches', component: <Matches /> },
		{ header: 'Recommended', component: <Recommended /> },
		{ header: 'Upcoming events', component: <UpcomingEvents /> },
		{ header: '1st Period', component: <FirstPeriod /> },
		{ header: '2nd Period', component: <SecondPeriod /> },
	];
	const games = [
		{ name: 'Football', icons: <IoIosFootball size={16} /> },
		{ name: 'Tennis', icons: <IoIosTennisball size={16} /> },
		{ name: 'Basketball', icons: <IoBasketballSharp size={16} /> },
		{ name: 'Ice Hockey', icons: <FaHockeyPuck size={16} /> },
		{ name: 'Volleyball', icons: <FaVolleyballBall size={16} /> },
		{ name: 'Table Tennis', icons: <IoBasketballSharp size={16} /> },
	];
	const [size, setSize] = useState(1);
	const [limit, setLimit] = useState(size);
	const displayTabs = () => {
		if (window.innerWidth >= 480 && window.innerWidth < 640) setSize(1);
		if (window.innerWidth >= 640 && window.innerWidth < 1000) setSize(2);
		if (window.innerWidth >= 1000 && window.innerWidth < 1025) setSize(3);
		if (window.innerWidth >= 1025 && window.innerWidth < 1200) setSize(4);
		if (window.innerWidth >= 1200) setSize(5);
		setLimit(isCollapsed ? size + 1 : size);
	};

	return (
		<div>
			<div className="flex px-2.5 items-center gap-6 sm:gap-8 md:justify-between bg-foreground">
				<div className="flex">
					<div className="pr-4 border-r flex *:size-[18px] items-center gap-0.5 text-white border-background">
						<FaHome />
						<ChevronRight />
						<FaTableTennisPaddleBall />
						<ChevronRight />
						<Trophy className="opacity-60" />
					</div>
					<TableTabs
						size={size}
						config={config}
						activeTab={activeTab}
						displayTabs={displayTabs}
						setActiveTab={setActiveTab}
					/>
				</div>
				<div className="relative rounded-sm py-1">
					<input
						type="text"
						placeholder="Search by match"
						className="bg-background text-sm indent-2 outline-none p-1 rounded-sm w-full text-white border border-background hover:border-blue-400"
					/>
					<IoSearch className="text-white absolute right-2 top-2.5" />
				</div>
			</div>
			<div className="bg-blue-400 flex items-center px-2.5 text-white text-sm">
				<div className="border-r py-2.5 pr-2.5 mr-2.5 items-center flex gap-1 border-background">
					<Switch />
					<p>With live streams</p>
				</div>
				<div className="flex gap-4 text-white/70">
					{games.slice(0, limit).map((game, index) => (
						<div key={index} className="flex items-center gap-2">
							{game.icons}
							<p>{game.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className="pb-32">{config[activeTab].component}</div>
		</div>
	);
};

export default Table;
