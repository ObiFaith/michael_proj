import '../css/embla.css';
import { useCallback } from 'react';
import { DotButton, useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { davido } from '@/assets';

// eslint-disable-next-line react/prop-types
const Carousel = ({ slides = [], options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ delay: 3000 }),
	]);

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
		<section className="embla text-white relative">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map(index => (
						<div
							style={{
								background: `url(${davido}) no-repeat bottom right`,
							}}
							className="embla__slide"
							key={index}
						>
							<div className="min-h-[15.5rem] p-16">
								<h1 className="uppercase text-xl sm:text-2xl font-bold md:text-3xl">
									The first deposit bonus
								</h1>
								<p>
									Register and receive a bonus on the 1st
									deposit
								</p>
								<button className="bg-secondary text-white">
									Bonus offer details
								</button>
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
			<div className="embla__controls absolute bottom-0 mx-auto">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex
									? ' embla__dot--selected'
									: ''
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
