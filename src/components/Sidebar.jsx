import { Trophy } from 'lucide-react';
import { FaAward } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { FaHockeyPuck } from "react-icons/fa";
import { IoBasketballSharp } from 'react-icons/io5';
import { MdSportsVolleyball } from "react-icons/md";
import { IoIosFootball, IoIosTennisball } from 'react-icons/io';

const Sidebar = () => {
	return (
		<div className="grid gap-2 w-[5%]">
			<div className="*:bg-foreground *:text-white *:size-9 *:rounded-sm *:p-1.5 grid gap-0.5">
				<AiFillLike />
				<Trophy />
				<FaAward />
			</div>
			<div className="grid gap-0.5">
				<span></span>
				<span className="text-xs flex justify-center size-9 items-center rounded-sm tracking-tight font-medium text-foreground bg-blue-50">
					1142
				</span>
				<div className="*:bg-white *:size-9 *:text-foreground *:rounded-sm *:p-1.5 grid gap-0.5">
					<IoIosFootball />
					<IoIosTennisball />
					<IoBasketballSharp />
					<MdSportsVolleyball />
					<FaHockeyPuck size={16} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
