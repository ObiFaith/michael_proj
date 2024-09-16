import { ThumbsUp, Trophy } from 'lucide-react';
import { IoBasketballSharp } from 'react-icons/io5';
import { FaVolleyballBall } from 'react-icons/fa';
import { IoIosFootball, IoIosTennisball } from 'react-icons/io';

const Sidebar = () => {
	return (
		<div className="grid gap-2 w-[5%]">
			<div className="*:bg-foreground *:size-8 *:rounded-sm *:p-1 grid gap-0.5">
				<ThumbsUp color="white" />
				<Trophy color="white" />
			</div>
			<div className="grid gap-0.5">
				<span></span>
				<span className="text-xs flex justify-center size-8 items-center rounded-sm tracking-tight font-medium text-foreground bg-blue-50">
					1142
				</span>
				<div className="*:bg-white *:size-8 *:text-foreground *:rounded-sm *:p-1.5 grid gap-0.5">
					<IoIosFootball />
					<IoIosTennisball />
					<IoBasketballSharp />
					<FaVolleyballBall />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
