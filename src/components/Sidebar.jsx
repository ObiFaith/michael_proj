import { AiFillLike } from 'react-icons/ai';
import { GiShuttlecock } from 'react-icons/gi';
import { Gamepad2, Trophy } from 'lucide-react';
import { FaHockeyPuck, FaAward, FaVolleyballBall } from 'react-icons/fa';
import { IoBasketballSharp, IoAmericanFootball } from 'react-icons/io5';
import { FaBaseballBatBall, FaTableTennisPaddleBall } from 'react-icons/fa6';
import { IoIosFootball, IoIosBaseball, IoIosTennisball } from 'react-icons/io';

const Sidebar = () => {
	return (
		<aside className="grid gap-2 w-[5%]">
			<div className="*:bg-foreground *:text-white *:size-8 *:rounded-sm *:p-1.5 grid gap-0.5">
				<AiFillLike />
				<Trophy />
				<FaAward />
			</div>
			<div className="grid">
				<div className="rounded-t-sm">
					<div className="bg-foreground size-8 rounded-t-sm flex justify-center items-center">
						<span className="bg-secondary p-1 rounded-full"></span>
					</div>
					<span className="text-xs flex justify-center size-8 items-center tracking-tight font-medium text-foreground bg-blue-50">
						847
					</span>
				</div>
				<div className="*:bg-white *:border-b *:border-blue-50 *:size-8 *:text-foreground *:p-1.5">
					<IoIosFootball />
					<IoIosTennisball />
					<IoBasketballSharp />
					<div className="flex items-center justify-center">
						<FaHockeyPuck />
					</div>
					<FaVolleyballBall />
					<FaTableTennisPaddleBall />
					<div>
						<FaBaseballBatBall />
					</div>
					<Gamepad2 />
					<IoAmericanFootball />
					<div className="rotate-180">
						<GiShuttlecock className="rotate-45" />
					</div>
					<IoIosBaseball className="rotate-90" />
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
