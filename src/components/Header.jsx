import { logo } from '@/assets';
import {
	ChevronDown,
	DollarSign,
	Gift,
	Mail,
	RefreshCcwIcon,
	Settings,
	User,
} from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Navbar } from '..';

const Header = () => {
	return (
		<header className="flex gap-5 items-center font-roboto bg-blue-400 py-4 px-2.5 overflow-x-hidden">
			<div className="flex gap-4 items-center w-full">
				<div className="w-24 self-end">
					<img src={logo} alt="logo" />
				</div>
				<Navbar />
			</div>
			<div className="flex md:gap-4 gap-2 items-center">
				<div className="flex min-w-48 rounded-sm bg-foreground px-2">
					<RefreshCcwIcon
						strokeWidth={3}
						size={10}
						className="my-auto text-gray-100"
					/>
					<div className="w-[1px] bg-gray-400 h-6 my-auto mx-2"></div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div className="flex gap-4 py-0.5 items-center">
								<div className="grid gap-0.5">
									<p className="text-xs text-gray-300">
										Main account (NGN)
									</p>
									<p className="text-xs text-white">1.3</p>
								</div>
								<ChevronDown color="white" size={16} />
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-80">
							<DropdownMenuGroup>
								<DropdownMenuItem className="flex-col pt-0">
									<div className="flex justify-between w-full">
										<p className="text-xs">
											Main Account (NGN)
										</p>
										<p className="text-xs">1.3</p>
									</div>
									<div className="flex justify-between w-full">
										<p className="text-xs">
											Unsettled bets
										</p>
										<p className="text-xs">0</p>
									</div>
								</DropdownMenuItem>
								<DropdownMenuItem className="pt-0">
									<div className="flex justify-between w-full">
										<p className="text-xs">
											Other currencies (USD)
										</p>
										<p className="text-xs">0</p>
									</div>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="flex gap-1 md:gap-2">
					<div className="bg-secondary rounded-sm p-1.5">
						<DollarSign size={20} color="white" strokeWidth={2} />
					</div>
					<div className="bg-foreground rounded-sm p-1.5">
						<Gift size={20} color="white" strokeWidth={2} />
					</div>
					<div className="bg-foreground flex items-center gap-0.5 rounded-sm p-1.5">
						<Mail size={20} color="white" strokeWidth={2} />
						<ChevronDown size={18} color="white" />
					</div>
					<div className="bg-foreground flex items-center gap-0.5 rounded-sm p-1.5">
						<User size={20} color="white" strokeWidth={2} />
						<ChevronDown size={18} color="white" />
					</div>
				</div>
				<div className="bg-foreground flex items-center gap-0.5 rounded-sm p-1.5">
					<Settings size={20} color="white" strokeWidth={2} />
					<ChevronDown size={18} color="white" />
				</div>
			</div>
		</header>
	);
};

export default Header;
