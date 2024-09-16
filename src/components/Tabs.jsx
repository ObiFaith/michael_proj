import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Tabs = ({ config = [], isCollapsed }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [isSlipOpen, setSlipOpen] = useState(!isCollapsed);
	const [isMyBetOpen, setMyBetOpen] = useState(!isCollapsed);

	return (
		<div className={isCollapsed ? 'relative' : ''}>
			<div className={isCollapsed ? '' : 'flex'}>
				{config.map((entry, index) => (
					<div
						key={index}
						onClick={() => {
							setActiveTab(index);
							activeTab == 0
								? setSlipOpen(!isSlipOpen)
								: setMyBetOpen(!isMyBetOpen);
						}}
						className={`flex py-1.5 w-full justify-center text-base items-center cursor-pointer ${
							activeTab == index
								? 'bg-foreground rounded-tl-sm text-white'
								: 'bg-blue-400 rounded-tr-sm text-white/70'
						} ${isCollapsed ? 'min-h-24 flex flex-col gap-2' : ''}`}
					>
						{isCollapsed
							? entry.header
									.split(' ')
									.reverse()
									.map(item => (
										<span key={item} className="-rotate-90">
											{item}
										</span>
									))
							: entry.header}
					</div>
				))}
			</div>
			<div
				className={`bg-blue-50 py-1 rounded-b-sm ${
					isCollapsed ? 'absolute top-0 right-[35px] min-w-72' : ''
				} ${
					isSlipOpen && activeTab == 0 && isCollapsed ? 'hidden' : ''
				}  ${
					isMyBetOpen && activeTab == 1 && isCollapsed ? 'hidden' : ''
				}`}
			>
				{config[activeTab].component}
			</div>
		</div>
	);
};

export default Tabs;
