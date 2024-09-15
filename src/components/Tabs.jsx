import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Tabs = ({ config = [], isCollapsed }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [isOpen, setOpen] = useState(false);
	return (
		<div className={isCollapsed ? 'relative' : ''}>
			<div className={isCollapsed ? 'min-h-48' : 'flex'}>
				{config.map((entry, index) => (
					<div
						key={index}
						onClick={() => setActiveTab(index)}
						className={`flex py-1.5 w-full justify-center text-base items-center ${
							activeTab == index
								? 'bg-foreground rounded-tl-sm text-white'
								: 'bg-blue-400 rounded-tr-sm text-white/70 cursor-pointer'
						} ${isCollapsed ? 'min-h-24' : ''}`}
					>
						<span
							onClick={() => {
								if (isCollapsed) setOpen(!isOpen);
							}}
							className={isCollapsed ? '-rotate-90' : ''}
						>
							{entry.header}
						</span>
					</div>
				))}
			</div>
			<div
				className={`bg-blue-50 py-1 rounded-b-sm ${
					isCollapsed ? 'absolute top-0 right-[35px] min-w-72' : ''
				} ${isOpen ? 'block' : 'hidden'}`}
			>
				{config[activeTab].component}
			</div>
		</div>
	);
};

export default Tabs;
