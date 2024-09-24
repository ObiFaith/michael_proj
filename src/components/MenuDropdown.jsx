/* eslint-disable react/prop-types */
import { Menu } from 'lucide-react';

const MenuDropdown = ({
	size,
	isMenu,
	activeTab,
	data = [],
	setActiveTab,
	dropdownOpen,
	setDropdownOpen,
}) => {
	return (
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
						{data.slice(size).map((entry, index) => (
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
	);
};

export default MenuDropdown;
