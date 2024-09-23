import { useEffect, useState } from 'react';
import {
	BetInfo,
	Carousel,
	Footer,
	Header,
	ImageSlides,
	Sidebar,
	Table,
} from '.';
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
			<section
				className={`bg-background overflow-hidden gap-2.5 items-start p-2.5 grid ${
					isCollapsed
						? 'grid-cols-[32px_1fr_32px]'
						: 'grid-cols-[32px_1fr_250px] lg:grid-cols-[32px_7fr_2fr]'
				}`}
			>
				<Sidebar />
				<div className="grid gap-4">
					<Carousel slides={slides} options={{ loop: true }} />
					<ImageSlides />
					<Table />
				</div>
				<BetInfo
					isCollapsed={isCollapsed}
					setCollapsed={setCollapsed}
				/>
			</section>
			<Footer />
		</>
	);
};

export default App;
