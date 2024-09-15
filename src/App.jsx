import { BetInfo, Header, ImageSlides, Sidebar } from '.';

const App = () => {
	return (
		<>
			<Header />
			<main className="bg-background gap-2.5 grid grid-cols-[50px_1fr_250px] lg:grid-cols-[50px_7fr_2fr] p-2.5">
				<Sidebar />
				<ImageSlides />
				<BetInfo />
			</main>
		</>
	);
};

export default App;
