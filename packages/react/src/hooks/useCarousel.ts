import { useRef, useEffect, useCallback, useState } from 'react';

export interface CarouselOptions {
  /** Auto-advance slides */
  autoplay?: boolean;
  /** Delay between auto-advances (ms) */
  autoplayDelay?: number;
  /** Loop slides */
  loop?: boolean;
  /** Number of slides per view */
  perView?: number;
  /** Callback when slide changes */
  onChange?: (index: number) => void;
}

export interface CarouselController {
  /** Go to next slide */
  next: () => void;
  /** Go to previous slide */
  prev: () => void;
  /** Go to specific slide */
  goTo: (index: number) => void;
  /** Start autoplay */
  play: () => void;
  /** Pause autoplay */
  pause: () => void;
  /** Current slide index */
  currentIndex: number;
  /** Total number of slides */
  totalSlides: number;
}

export interface UseCarouselReturn {
  /** Carousel controller object */
  controller: CarouselController | null;
  /** Ref to attach to carousel element */
  carouselRef: React.RefObject<HTMLDivElement>;
}

/**
 * useCarousel Hook
 *
 * Manages carousel state and provides control methods.
 *
 * @param id - Carousel element ID
 * @param options - Configuration options
 * @returns Carousel ref and controller object
 *
 * @example
 * ```tsx
 * const { carouselRef, controller } = useCarousel('my-carousel', {
 *   autoplay: true,
 *   loop: true
 * });
 *
 * return (
 *   <div>
 *     <div id="my-carousel" ref={carouselRef} className="aural-carousel">
 *       <div className="aural-carousel__track">
 *         <div className="aural-carousel__slide">Slide 1</div>
 *         <div className="aural-carousel__slide">Slide 2</div>
 *       </div>
 *     </div>
 *     <button onClick={() => controller?.prev()}>Prev</button>
 *     <button onClick={() => controller?.next()}>Next</button>
 *   </div>
 * );
 * ```
 */
export function useCarousel(
  id: string,
  options: CarouselOptions = {}
): UseCarouselReturn {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [controller, setController] = useState<CarouselController | null>(null);
  const controllerRef = useRef<any>(null);

  useEffect(() => {
    // @ts-ignore
    if (typeof window.Aural === 'undefined' || !carouselRef.current) return;

    // Initialize carousel
    // @ts-ignore
    const carouselInstance = window.Aural.initCarousel(id, options);

    if (carouselInstance) {
      controllerRef.current = carouselInstance;
      setController(carouselInstance);
    }

    return () => {
      // Cleanup if needed
      if (controllerRef.current?.pause) {
        controllerRef.current.pause();
      }
    };
  }, [id, options.autoplay, options.autoplayDelay, options.loop, options.perView]);

  return {
    carouselRef,
    controller
  };
}
