import { gameImgs } from '@/assets';

const ImageSlides = () => {
	return (
		<div className="flex gap-2.5 rounded-t-sm pb-3 overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-track-[transparent] scrollbar-thumb-white/30">
			{gameImgs.map(game => (
				<div
					className="min-w-56 group cursor-pointer text-center bg-[#224f7c]"
					key={game.name}
				>
					<div
						style={{
							background: `url(${game.img}) no-repeat center/cover`,
						}}
						className="min-h-[121px]"
					>
						<div className="group-hover:bg-[#000]/50 min-h-[121px]"></div>
					</div>
					<div className="text-white font-medium text-xs py-1.5">
						<span>{game.name}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default ImageSlides;
