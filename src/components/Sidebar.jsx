import { FaAward } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { FaHockeyPuck } from 'react-icons/fa';
import { Gamepad2, Trophy } from 'lucide-react';
import { FaBaseballBatBall } from 'react-icons/fa6';
import { IoBasketballSharp } from 'react-icons/io5';
import { MdSportsVolleyball } from 'react-icons/md';
import { IoIosAmericanFootball } from "react-icons/io";
import { FaTableTennisPaddleBall } from 'react-icons/fa6';
import { IoIosFootball, IoIosTennisball } from 'react-icons/io';

const Sidebar = () => {
	return (
		<aside className="grid gap-2 w-[5%]">
			<div className="*:bg-foreground *:text-white *:size-8 *:rounded-sm *:p-1.5 grid gap-0.5">
				<AiFillLike />
				<Trophy />
				<FaAward />
			</div>
			<div className="grid gap-0.5">
				<div className="bg-foreground size-8 rounded-sm flex justify-center items-center">
					<span className="bg-secondary p-1 rounded-full"></span>
				</div>
				<span className="text-xs flex justify-center size-8 items-center rounded-sm tracking-tight font-medium text-foreground bg-blue-50">
					1142
				</span>
				<div className="*:bg-white *:size-8 *:text-foreground *:rounded-sm *:p-1.5 grid gap-0.5">
					<IoIosFootball />
					<IoIosTennisball />
					<IoBasketballSharp />
					<FaHockeyPuck />
					<MdSportsVolleyball />
					<FaTableTennisPaddleBall />
					<div className="size-8">
						<FaBaseballBatBall />
					</div>
					<Gamepad2 />
					<IoIosAmericanFootball />
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
