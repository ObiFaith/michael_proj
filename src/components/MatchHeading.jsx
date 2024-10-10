import { gameIcons } from '@/constants';

// eslint-disable-next-line react/prop-types
const MatchHeading = ({ category, heading, image, point_labels = [] }) => {
	return (
		<div className="bg-blue-200 py-1.5 flex items-center text-background">
			<div className="md:w-2/5 w-1/3 flex items-center gap-4 px-2.5">
				<div className="*:size-5">
					{gameIcons.map(
						game => game.name === category && game.icons
					)}
				</div>
				<div className="flex gap-2 items-center">
					<img
						width={16}
						height={16}
						src={image}
						alt={heading}
						className="object-cover"
					/>
					<p className="text-xs md:text-sm max-sm:hidden">{heading}</p>
				</div>
			</div>
			<div className="md:w-3/5 w-2/3 grid grid-cols-5 text-xs font-medium">
				<div className="flex justify-around md:justify-evenly col-span-4 sm:col-span-2">
					{point_labels.slice(0, 3).map(label => (
						<p key={label}>{label}</p>
					))}
				</div>
				<div className="flex max-sm:hidden justify-around md:justify-evenly col-span-2">
					{point_labels.slice(3, 6).map(label => (
						<p key={label}>{label}</p>
					))}
				</div>
				<div className="flex justify-around md:justify-evenly col-span-1">
					<p>{point_labels[point_labels.length - 1]}</p>
				</div>
			</div>
		</div>
	);
};

export default MatchHeading;
