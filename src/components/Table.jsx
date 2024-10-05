import { useState } from 'react';
import { gameIcons } from '@/constants';
import { Switch } from './ui/switch';
import { FaHome } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaTableTennisPaddleBall } from 'react-icons/fa6';
import {
	ChevronDown,
	ChevronRight,
	Gamepad2,
	Menu,
	Trophy,
} from 'lucide-react';
import {
	TableTabs,
	FirstPeriod,
	Matches,
	Recommended,
	SecondPeriod,
	UpcomingEvents,
} from '..';

// eslint-disable-next-line react/prop-types
const Table = ({ isCollapsed }) => {
	const [size, setSize] = useState(1);
	const [limit, setLimit] = useState(size);
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
		if (window.innerWidth >= 540 && window.innerWidth < 768) setSize(2);
		else if (window.innerWidth >= 768 && window.innerWidth < 900)
			setSize(isCollapsed ? 2 : 1);
		else if (window.innerWidth >= 900 && window.innerWidth < 1020)
			setSize(isCollapsed ? 3 : 2);
		else if (window.innerWidth >= 1020 && window.innerWidth < 1160)
			setSize(isCollapsed ? 4 : 3);
		else if (window.innerWidth >= 1160) setSize(5);

		if (window.innerWidth >= 768)
			setLimit(isCollapsed ? size + 2 : size + 1);
		else setLimit(size + 1);
	};
	return (
		<div className="transition-all">
			<div className="flex px-2.5 items-center gap-6 sm:gap-8 sm:justify-between bg-foreground">
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
						className="bg-background max-sm:invisible text-sm indent-2 outline-none p-1 rounded-sm w-full text-white border border-background hover:border-blue-400"
					/>
					<IoSearch className="text-white absolute right-2 top-2.5" />
				</div>
			</div>
			<div className="bg-blue-400 flex items-center px-2.5 text-xs md:text-sm">
				<div className="border-r sm:min-w-40 py-2.5 pr-2.5 mr-2.5 sm:items-center flex gap-1 border-background text-white">
					<Switch />
					<p className="max-sm:hidden">With live streams</p>
				</div>
				<div className="flex sm:justify-between w-full text-white/70">
					<div className="flex gap-4 items-center">
						{gameIcons.slice(0, limit).map((game, index) => (
							<div
								key={index}
								className="flex cursor-pointer items-center gap-2"
							>
								{game.icons}
								<p>{game.name}</p>
							</div>
						))}
						{/* Menu icon for small screens */}
						<span className="relative transition-all">
							<span className="flex items-center gap-2.5">
								<span
									onClick={() =>
										setDropdownOpen(!dropdownOpen)
									}
									className={`text-white cursor-pointer *:size-5 flex gap-0.5 sm:gap-1 ${
										limit == gameIcons.length
											? 'hidden'
											: ''
									}`}
								>
									<Menu />
									<ChevronDown />
								</span>
								<span className="border-x px-1.5 sm:px-5">
									<Gamepad2 size={20} />
								</span>
							</span>

							{/* Dropdown for remaining tabs */}
							{dropdownOpen && (
								<div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
									<ul className="flex flex-col">
										{gameIcons
											.slice(limit)
											.map((game, index) => (
												// Show all tabs in the dropdown except the already visible ones
												<li
													key={index}
													onClick={() =>
														setDropdownOpen(false)
													}
													className="px-4 py-2 font-bold cursor-pointer text-blue-400"
												>
													{game.name}
												</li>
											))}
									</ul>
								</div>
							)}
						</span>
					</div>
				</div>
			</div>
			<div>
				{/* {config[activeTab].component} */}
				<Matches isCollapsed={isCollapsed} />
			</div>
		</div>
	);
};

export default Table;
