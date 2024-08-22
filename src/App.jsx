import { Header } from '.';
import { TooltipProvider } from './components/ui/tooltip';

const App = () => {
	return (
		<>
			<TooltipProvider>
				<Header />
			</TooltipProvider>
		</>
	);
};

export default App;
