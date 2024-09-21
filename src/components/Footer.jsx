import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { footerDropDown } from '@/constants';

const Footer = () => {
	return (
		<footer className="px-2.5 text-white">
			<Accordion
				type="single"
				collapsible
				className="w-full text-sm grid gap-2.5 *:bg-blue-400 *:rounded-sm"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="uppercase font-bold px-4">
						{footerDropDown.name}
					</AccordionTrigger>
					<hr className="border-t border-background" />
					<AccordionContent className="p-4 grid gap-x-12 grid-cols-2">
						{footerDropDown.data.map((data, index) => (
							<div key={index}>
								<div className="flex pb-2.5 items-start gap-1.5">
									<span className="p-1 mt-1.5 rounded-full bg-blue-100/50"></span>
									<h3 className="font-bold text-sm">
										{data.list}
									</h3>
								</div>
								{data.items.length > 0 && (
									<ul className='pl-4'>
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
					<AccordionTrigger className="uppercase font-bold px-4">
						Popular events and sports news
					</AccordionTrigger>
					<hr className="border-t border-background" />
					<AccordionContent className="p-4">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</footer>
	);
};

export default Footer;
