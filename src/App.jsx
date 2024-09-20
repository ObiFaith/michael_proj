import { useEffect, useState } from 'react';
import { BetInfo, Carousel, Header, ImageSlides, Sidebar } from '.';
import { slides } from './assets';

const App = () => {
	const [isCollapsed, setCollapsed] = useState(false);
	const handleResize = () => setCollapsed(window.innerWidth <= 768);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Header />
			<main
				className={`bg-background overflow-hidden gap-2.5 items-start p-2.5 grid ${
					isCollapsed
						? 'grid-cols-[36px_1fr_32px]'
						: 'grid-cols-[36px_1fr_250px] lg:grid-cols-[36px_7fr_2fr]'
				}`}
			>
				<Sidebar />
				<div className="grid gap-2.5">
					<Carousel slides={slides} options={{ loop: true }} />
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
