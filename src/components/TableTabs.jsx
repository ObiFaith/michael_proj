import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TableTabs = ({ config = [] }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<div className="">
				<div className="flex *:w-full">
					{config.map((entry, index) => (
						<div
							key={index}
							onClick={() => setActiveTab(index)}
							className={`flex gap-3 items-center border-b-2 *:cursor-pointer justify-center py-2 ${
								activeTab == index
									? 'text-primary-500 border-primary-500 bg-primary-50'
									: 'text-gray-scale-400'
							}`}
						>
							{entry.header}
						</div>
					))}
				</div>
			</div>
			<div className="">{config[activeTab].component}</div>
		</>
	);
};

export default TableTabs;
