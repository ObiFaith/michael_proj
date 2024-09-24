import { TableTabs } from '..';
import { games } from '@/constants';
import { Switch } from './ui/switch';
import { FaHome } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { ChevronRight, Menu, Trophy } from 'lucide-react';
import { FaTableTennisPaddleBall } from 'react-icons/fa6';
import { FirstPeriod, Matches, Recommended, SecondPeriod, UpcomingEvents } from '..';

// eslint-disable-next-line react/prop-types
const Table = ({ isCollapsed }) => {
	const [size, setSize] = useState(0);
	const [limit, setLimit] = useState(size);
	const [isMenu, setMenu] = useState(true);
	const [activeTab, setActiveTab] = useState(0);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const config = [
		{ header: 'Matches', component: <Matches /> },
		{ header: 'Recommended', component: <Recommended /> },
		{ header: 'Upcoming events', component: <UpcomingEvents /> },
		{ header: '1st Period', component: <FirstPeriod /> },
		{ header: '2nd Period', component: <SecondPeriod /> },
	];

	const displayTabs = () => {
		if (window.innerWidth >= 480 && window.innerWidth < 660) setSize(1);
		else if (window.innerWidth >= 660 && window.innerWidth < 900)
			setSize(isCollapsed ? 2 : 1);
		else if (window.innerWidth >= 900 && window.innerWidth < 1000)
			setSize(isCollapsed ? 3 : 2);
		else if (window.innerWidth >= 1000 && window.innerWidth < 1100)
			setSize(isCollapsed ? 4 : 3);
		else if (window.innerWidth >= 1100) setSize(5);
		setLimit(isCollapsed ? size + 2 : size + 1);
	};

	useEffect(() => {
		setMenu(size == games.length);
	}, [size]);

	return (
		<div className="transition-all">
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
					{/* Menu icon for small screens */}
					<span className="relative">
						<span
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className={`text-white ${isMenu ? 'hidden' : ''}`}
						>
							<Menu />
						</span>

						{/* Dropdown for remaining tabs */}
						{dropdownOpen && (
							<div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
								<ul className="flex flex-col">
									{games.slice(limit).map((entry, index) => (
										// Show all tabs in the dropdown except the already visible ones
										<li
											key={index}
											onClick={() => {
												setDropdownOpen(false);
												setActiveTab(size + index);
											}}
											className={`px-4 py-2 cursor-pointer ${
												activeTab === size + index
													? 'bg-secondary text-white'
													: 'text-black hover:bg-gray-200'
											}`}
										>
											{entry.header}
										</li>
									))}
								</ul>
							</div>
						)}
					</span>

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
