import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Tabs = ({ config = [] }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className='rounded-sm'>
			<div className="flex *:w-full">
				{config.map((entry, index) => (
					<div
						key={index}
						onClick={() => setActiveTab(index)}
						className={`flex py-1.5 justify-center text-sm items-center ${
							activeTab == index
								? 'bg-foreground rounded-tl-sm text-white'
								: 'bg-blue-400 rounded-tr-sm text-white/70 cursor-pointer'
						}`}
					>
						{entry.header}
					</div>
				))}
			</div>
			<div className='bg-blue-50 px-2.5 py-1'>{config[activeTab].component}</div>
		</div>
	);
};

export default Tabs;
