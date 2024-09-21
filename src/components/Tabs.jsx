import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Tabs = ({ config = [], isCollapsed, isBgClr = false }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [isSlipOpen, setSlipOpen] = useState(!isCollapsed);
	const [isMyBetOpen, setMyBetOpen] = useState(!isCollapsed);

	return (
		<div className={isCollapsed ? 'relative' : 'transition-all'}>
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
						className={`flex py-1.5 rounded-t-sm px-2.5 font-medium w-full justify-center text-sm items-center cursor-pointer ${
							activeTab == index
								? isBgClr
									? 'bg-foreground text-white'
									: 'bg-blue-200 border-b-2 border-secondary'
								: isBgClr
								? 'bg-blue-400 text-white/70'
								: 'bg-blue-200'
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
