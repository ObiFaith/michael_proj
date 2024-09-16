import { useState } from 'react';
import { BetInfo, Header, ImageSlides, Sidebar, Carousel } from '.';

const App = () => {
	const [isCollapsed, setCollapsed] = useState(false);
	return (
		<>
			<Header />
			<main
				className={`bg-background overflow-hidden gap-2.5 items-start p-2.5 grid ${
					isCollapsed
						? 'grid-cols-[32px_1fr_32px]'
						: 'grid-cols-[32px_1fr_250px] lg:grid-cols-[32px_7fr_2fr]'
				}`}
			>
				<Sidebar />
				<div className="grid gap-2.5">
					<Carousel
						slides={Array.from(Array(5).keys())}
						options={{ loop: true }}
					/>
					<ImageSlides />
				</div>
				<BetInfo
					isCollapsed={isCollapsed}
					setCollapsed={setCollapsed}
				/>
			</main>
		</>
	);
};

export default App;
