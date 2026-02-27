import { ref, onMounted, onUnmounted, Ref } from 'vue';

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
  controller: Ref<CarouselController | null>;
}

/**
 * useCarousel Composable
 *
 * Manages carousel state and provides control methods.
 *
 * @param id - Carousel element ID
 * @param options - Configuration options
 * @returns Carousel controller object
 *
 * @example
 * ```vue
 * <script setup>
 * import { useCarousel } from '@aural-ui/vue';
 *
 * const carousel = useCarousel('my-carousel', {
 *   autoplay: true,
 *   loop: true
 * });
 * </script>
 *
 * <template>
 *   <div>
 *     <div id="my-carousel" class="aural-carousel">
 *       <div class="aural-carousel__track">
 *         <div class="aural-carousel__slide">Slide 1</div>
 *         <div class="aural-carousel__slide">Slide 2</div>
 *       </div>
 *     </div>
 *     <button @click="carousel.controller.value?.prev()">Prev</button>
 *     <button @click="carousel.controller.value?.next()">Next</button>
 *   </div>
 * </template>
 * ```
 */
export function useCarousel(
  id: string,
  options: CarouselOptions = {}
): UseCarouselReturn {
  const controller = ref<CarouselController | null>(null);

  onMounted(() => {
    // @ts-ignore
    if (typeof window.Aural === 'undefined') return;

    // Initialize carousel
    // @ts-ignore
    const carouselInstance = window.Aural.initCarousel(id, options);

    if (carouselInstance) {
      controller.value = carouselInstance;
    }
  });

  onUnmounted(() => {
    // Cleanup if needed
    if (controller.value?.pause) {
      controller.value.pause();
    }
  });

  return {
    controller
  };
}
