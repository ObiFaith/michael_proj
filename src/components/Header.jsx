import { logo } from '@/assets';
import { DollarSign, RefreshCcwIcon } from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Header = () => {
	return (
		<header className="flex bg-blue-900 py-6">
			<div className="border-white border-2">
				<img src={logo} alt="logo" />
			</div>
			<div className=""></div>
			<div className="flex gap-4 items-center">
				<div className="flex rounded-sm bg-blue-600 px-2">
					<RefreshCcwIcon
						strokeWidth={3}
						size={14}
						className="my-auto text-gray-100"
					/>
					<div className="w-0.5 bg-blue-400 mx-2"></div>
					<Select>
						<Tooltip>
							<TooltipTrigger>
								<SelectTrigger className="bg-transparent gap-4 outline-none text-gray-100 border-0 p-0">
									<SelectValue
										className="text-blue-400"
										placeholder="Main Account (NGN)"
									/>
								</SelectTrigger>
							</TooltipTrigger>
							<TooltipContent>
								<p>Select account</p>
							</TooltipContent>
						</Tooltip>
						<SelectContent className="text-blue-800">
							<SelectItem value="naira" className="px-4 py-2">
								<div className="flex gap-10">
                  <span>Main Account (NGN)</span>
                  <span>1.3</span>
                </div>
							</SelectItem>
							<SelectItem value="usd">
								Other Currencies (USD)
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-2">
					<div className="bg-green-500 rounded-sm p-1.5">
						<DollarSign color="white" />
					</div>
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
				</div>
				<div className=""></div>
			</div>
		</header>
	);
};

export default Header;
