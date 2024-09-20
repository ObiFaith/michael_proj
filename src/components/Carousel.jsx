import '../css/embla.css';
import { useCallback } from 'react';
import { DotButton, useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

// eslint-disable-next-line react/prop-types
const Carousel = ({ slides = [], options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback(emblaApi => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className="embla text-white transition-all relative outline-none">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div
							style={{
								background: `url(${slide.img}) no-repeat right/cover`,
							}}
							className="embla__slide min-h-[15.5rem]"
							key={index}
						>
							<div className="py-6 bg-[#000]/25 max-sm:bg-[#000]/50 grid items-center h-full">
								<div className="min-w-full w-full grid gap-2 *:pl-10 md:*:max-w-[500px] pb-3 ms-auto">
									<h1 className="uppercase text-2xl sm:text-3xl font-bold md:text-4xl">
										{slide.heading}
									</h1>
									<p>{slide.text}</p>
									<div>
										<button className="bg-secondary px-5 py-1.5 text-white">
											{slide.btn}
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="absolute w-full top-1/4">
				<div className="flex justify-between">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>
			</div>
			<div className="absolute bottom-6 w-full">
				<div className="embla__dots gap-3 transition-all">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`w-3 h-3 rounded-full
								${index === selectedIndex ? 'w-7 bg-white' : 'bg-white/50'}
							`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
