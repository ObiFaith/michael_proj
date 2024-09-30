import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Gamepad2 } from 'lucide-react';
import { BsSendFill } from 'react-icons/bs';
import { LuInstagram } from 'react-icons/lu';
import { beAware, partners } from '@/assets';
import { IoIosFootball } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrFacebookOption } from 'react-icons/gr';
import { footerDropDown, footerLinks, popularEvents } from '@/constants';

const Footer = () => {
	return (
		<footer className="px-2.5 text-white text-sm grid gap-2.5">
			<Accordion
				type="single"
				collapsible
				className="w-full text-xs sm:text-sm grid gap-2.5 *:bg-blue-400 *:rounded-sm"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="uppercase text-start font-bold px-4">
						{footerDropDown.name}
					</AccordionTrigger>
					<hr className="border-t border-background" />
					<AccordionContent className="p-4 grid md:gap-x-6 lg:gap-x-12 md:grid-cols-2">
						{footerDropDown.data.map((data, index) => (
							<div key={index}>
								<div className="flex pb-2.5 items-start gap-2">
									<span className="p-1 mt-1.5 rounded-full bg-blue-100/50"></span>
									<h3 className="font-bold text-sm">
										{data.list}
									</h3>
								</div>
								{data.items.length > 0 && (
									<ul className="pl-4">
										{data.items.map((item, index) => (
											<li
												className="pb-4 text-xs"
												key={index}
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="uppercase text-start font-bold px-4">
						Popular events and sports news
					</AccordionTrigger>
					<hr className="border-t border-background" />
					<AccordionContent className="p-4 gap-4 max-sm:flex-col  flex *:w-full">
						{popularEvents.map((event, index) => (
							<div key={index}>
								<h3 className="font-medium pb-2.5 text-sm">
									{event.name.toUpperCase()}
								</h3>
								<ul className="hover:text-white/50">
									{event.lists.map(item => (
										<li
											className="pb-1 text-xs hover:text-white cursor-pointer"
											key={item}
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
						<div>
							<h3 className="font-medium pb-2.5 text-sm">LINE</h3>
							<ul className="hover:text-white/50">
								{popularEvents[1].lists.map(item => (
									<li
										className="pb-1 text-xs hover:text-white cursor-pointer"
										key={item}
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="bg-blue-400 p-4 rounded-sm max-sm:flex-col  flex gap-4 *:w-full">
				{footerLinks.map((event, index) => (
					<div key={index}>
						<h3 className="font-medium pb-2.5 text-sm">
							{event.name.toUpperCase()}
						</h3>
						<ul className="hover:text-white/50">
							{event.items.map(item => (
								<li
									className="pb-1 text-xs hover:text-white cursor-pointer"
									key={item}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="p-4 bg-blue-400 overflow-x-hidden">
				<h3 className="text-sm uppercase font-medium pb-2.5">
					Partners
				</h3>
				<div className="flex pb-2.5 gap-3 scroll">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="bg-[#1d4267]/25 relative rounded-sm p-6 flex justify-center items-center max-h-[120px] min-w-[120px] w-full"
						>
							<span className="absolute text-white/70 top-2 right-2">
								{index > 8 ? (
									<Gamepad2 size={14} />
								) : (
									<IoIosFootball />
								)}
							</span>
							<img
								width={70}
								height={70}
								className="object-cover"
								src={partner}
								alt={partner.split('.')[0]}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex max-md:flex-col gap-3 *:rounded-sm *:p-4 *:bg-blue-400">
				<p className="md:w-[70%] text-white/60">
					This website is owned and operated by BEAUFORTBET NIGERIA
					LIMITED, which operates under licenses Nº: 0001018 dated
					September 12, 2019 and №: 1260761 dated November 30, 2023
					issued by the National Lottery Regulatory Commission of the
					Republic of Nigeria.
				</p>
				<div className="md:w-[30%]">
					<img src={beAware} alt="BeGambleAware.org" />
				</div>
			</div>
			<div className="p-4 bg-blue-400 text-white/60">
				Copyright &copy; {new Date().getFullYear()} «1xBet». <br />
				1xBet uses cookies to ensure the best user experience. By
				remaining on the website, you consent to the use of your cookie
				files on 1xBet.{' '}
				<span className="text-white underline">Find out more</span>
			</div>
			<div className="*:rounded-sm max-sm:flex-col flex gap-3">
				<div className="p-4 w-full lg:w-[85%] flex gap-x-5 bg-blue-400 items-center justify-center">
					<svg
						width={52}
						fill="#bbc"
						data-v-136c6d8e=""
						viewBox="0 0 65 60"
						focusable="false"
						role="img"
					>
						<path d="M56.4 26.1h-.5v-2A24 24 0 0032.1 0 24 24 0 008.1 24v2.1h-.5A7.7 7.7 0 000 33.9v8c0 4.2 3.4 7.7 7.7 7.7h1.5c.8 4 4.4 7 8.6 7h5c.8 2 2.6 3.4 4.8 3.4h4c2.9 0 5.2-2.4 5.2-5.3s-2.3-5.2-5.2-5.2h-4c-2.2 0-4 1.4-4.8 3.3h-5c-2.1 0-4-1.3-4.7-3.2h.8c1 0 1.9-.9 1.9-2V28c0-1-.8-1.9-1.9-1.9h-2v-2C12 12.9 21 3.8 32 3.8h.1c11 0 20 9.1 20 20.3v2h-2c-1 0-1.9.8-1.9 1.9v19.7c0 1 .9 1.9 1.9 1.9h6.3c4.2 0 7.6-3.5 7.6-7.8v-8c0-4.2-3.4-7.7-7.6-7.7z"></path>
					</svg>
					<div className="text-center">
						<p className="uppercase font-medium">Support</p>
						<p className="text-white/60 text-xl">08000077777</p>
					</div>
				</div>
				<div className="grid gap-3">
					<div className="flex gap-3 *:w-full">
						<div className="flex p-4 bg-blue-400 rounded-sm gap-2 *:p-2 items-center *:text-blue-400 *:bg-white/80 *:rounded-full">
							<div>
								<RiTwitterXFill size={20} />
							</div>
							<div>
								<LuInstagram size={20} />
							</div>
							<div>
								<GrFacebookOption size={20} />
							</div>
							<div>
								<BsSendFill size={20} />
							</div>
							<div>
								<IoLogoWhatsapp size={20} />
							</div>
						</div>
						<p className="text-lg p-4 max-sm:px-6 flex items-center justify-center font-bold bg-blue-400 rounded-sm">
							18+
						</p>
					</div>
					<p className="bg-foreground text-center py-1.5 uppercase">
						Mobile Version
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
