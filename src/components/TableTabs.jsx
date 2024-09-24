import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Table = ({ config = [], activeTab, setActiveTab, displayTabs, size }) => {
	const [isMenu, setMenu] = useState(true);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		displayTabs();
		window.addEventListener('resize', displayTabs);
		return () => {
			window.removeEventListener('resize', displayTabs);
		};
	}, [displayTabs]);

	useEffect(() => {
		setMenu(size == config.length);
	}, [size, config]);

	return (
		<div>
			<div className="flex relative items-center gap-2 w-full justify-between px-2">
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
								{config.slice(size).map((entry, index) => (
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
				{/* Tabs displayed progressively based on screen size */}
				<div className="flex items-center flex-wrap gap-3 text-sm">
					{config.slice(0, size).map((entry, index) => (
						<div
							key={index}
							onClick={() => {
								setActiveTab(index);
								setDropdownOpen(false);
							}}
							className={`cursor-pointer ${
								activeTab === index
									? 'text-white flex min-h-9 pb-1.5 border-b-2 border-secondary'
									: 'text-white/70'
							}`}
						>
							<div className="self-end">{entry.header}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Table;
