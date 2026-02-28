import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

declare const lucide: any;

const meta: Meta = {
  title: 'Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Image and content carousel with navigation controls, pagination, and smooth transitions. Supports multiple layouts, auto-play, and infinite loop modes.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to initialize Lucide icons and carousel
const initCarousel = () => {
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Initialize carousel functionality
    const carousels = document.querySelectorAll('.aural-carousel');

    carousels.forEach((carousel) => {
      const track = carousel.querySelector('.aural-carousel__track') as HTMLElement;
      const slides = carousel.querySelectorAll('.aural-carousel__slide');
      const prevBtn = carousel.querySelector('.aural-carousel__arrow--prev') as HTMLButtonElement;
      const nextBtn = carousel.querySelector('.aural-carousel__arrow--next') as HTMLButtonElement;
      const dots = carousel.querySelectorAll('.aural-carousel__dot');
      const counter = carousel.querySelector('.aural-carousel__counter') as HTMLElement;

      if (!track || !slides.length) return;

      let currentSlide = 0;

      function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {
          dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
        });

        if (counter) {
          counter.textContent = `${currentSlide + 1} / ${slides.length}`;
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
          updateCarousel();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
          updateCarousel();
        });
      }

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
        });
      });
    });
  }, 0);
};

export const BasicCarousel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-1">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 300px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Beautiful Design</h3>
              <p style="color: rgba(255,255,255,0.9);">Create stunning carousels with smooth animations</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 300px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Accessible</h3>
              <p style="color: rgba(255,255,255,0.9);">Built with WCAG AA compliance and keyboard navigation</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 300px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Customizable</h3>
              <p style="color: rgba(255,255,255,0.9);">Easy theming with CSS custom properties and utilities</p>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
        </div>
        <div class="aural-carousel__counter">1 / 3</div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const ImageCarousel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '900px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-images">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop" alt="Ocean sunset" style="width: 100%; height: 400px; object-fit: cover;">
          </div>
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=400&fit=crop" alt="Forest trail" style="width: 100%; height: 400px; object-fit: cover;">
          </div>
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop" alt="Northern lights" style="width: 100%; height: 400px; object-fit: cover;">
          </div>
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop" alt="Desert dunes" style="width: 100%; height: 400px; object-fit: cover;">
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 4"></button>
        </div>
        <div class="aural-carousel__counter">1 / 4</div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const WithCaptions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-captions">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); min-height: 300px;">
            <div class="aural-carousel__caption">
              <div class="aural-carousel__caption-title">Product Showcase</div>
              <div class="aural-carousel__caption-description">Feature your latest products with stunning visuals</div>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); min-height: 300px;">
            <div class="aural-carousel__caption">
              <div class="aural-carousel__caption-title">Announcements</div>
              <div class="aural-carousel__caption-description">Keep users informed with important updates</div>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); min-height: 300px;">
            <div class="aural-carousel__caption">
              <div class="aural-carousel__caption-title">Testimonials</div>
              <div class="aural-carousel__caption-description">Share customer stories and build trust</div>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
        </div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const PaginationOnly: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-pagination-only">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white;">Slide 1</h3>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 200px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white;">Slide 2</h3>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 200px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white;">Slide 3</h3>
            </div>
          </div>
        </div>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
        </div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const WithArrowsOnly: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-arrows-only">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 250px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Feature 1</h3>
              <p style="color: rgba(255,255,255,0.9);">Navigate using arrow buttons only</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 250px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Feature 2</h3>
              <p style="color: rgba(255,255,255,0.9);">Clean design without pagination dots</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 250px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Feature 3</h3>
              <p style="color: rgba(255,255,255,0.9);">Perfect for minimal interfaces</p>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__counter">1 / 3</div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const ProductCards: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-products">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="padding: var(--space-4);">
            <div class="card" style="text-align: center;">
              <div style="background: var(--color-bg-tertiary); padding: var(--space-8); border-radius: var(--radius-md);">
                <i data-lucide="headphones" style="width: 64px; height: 64px; color: var(--color-primary);"></i>
              </div>
              <div class="card-body">
                <h4 class="card-title">Wireless Headphones</h4>
                <p class="card-text">Premium sound quality</p>
                <p style="font-weight: var(--font-bold); color: var(--color-primary);">$199.99</p>
              </div>
            </div>
          </div>
          <div class="aural-carousel__slide" style="padding: var(--space-4);">
            <div class="card" style="text-align: center;">
              <div style="background: var(--color-bg-tertiary); padding: var(--space-8); border-radius: var(--radius-md);">
                <i data-lucide="watch" style="width: 64px; height: 64px; color: var(--color-primary);"></i>
              </div>
              <div class="card-body">
                <h4 class="card-title">Smart Watch</h4>
                <p class="card-text">Track your fitness</p>
                <p style="font-weight: var(--font-bold); color: var(--color-primary);">$299.99</p>
              </div>
            </div>
          </div>
          <div class="aural-carousel__slide" style="padding: var(--space-4);">
            <div class="card" style="text-align: center;">
              <div style="background: var(--color-bg-tertiary); padding: var(--space-8); border-radius: var(--radius-md);">
                <i data-lucide="camera" style="width: 64px; height: 64px; color: var(--color-primary);"></i>
              </div>
              <div class="card-body">
                <h4 class="card-title">Digital Camera</h4>
                <p class="card-text">Capture every moment</p>
                <p style="font-weight: var(--font-bold); color: var(--color-primary);">$599.99</p>
              </div>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous product">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next product">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to product 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to product 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to product 3"></button>
        </div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const AutoPlayExample: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-autoplay" role="region" aria-label="Auto-advancing carousel" aria-live="polite">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); min-height: 280px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 1</h3>
              <p style="color: rgba(255,255,255,0.9);">Auto-advances every 3 seconds</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); min-height: 280px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 2</h3>
              <p style="color: rgba(255,255,255,0.9);">Pauses on hover interaction</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); min-height: 280px;">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 3</h3>
              <p style="color: rgba(255,255,255,0.9);">Accessible and smooth</p>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
        </div>
        <div class="aural-carousel__counter">1 / 3</div>
      </div>
    `;

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }

      // Auto-play carousel implementation
      const carousel = container.querySelector('.aural-carousel') as HTMLElement;
      const track = carousel.querySelector('.aural-carousel__track') as HTMLElement;
      const slides = carousel.querySelectorAll('.aural-carousel__slide');
      const prevBtn = carousel.querySelector('.aural-carousel__arrow--prev') as HTMLButtonElement;
      const nextBtn = carousel.querySelector('.aural-carousel__arrow--next') as HTMLButtonElement;
      const dots = carousel.querySelectorAll('.aural-carousel__dot');
      const counter = carousel.querySelector('.aural-carousel__counter') as HTMLElement;

      let currentSlide = 0;
      let autoplayInterval: number | null = null;

      function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {
          dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
        });

        if (counter) {
          counter.textContent = `${currentSlide + 1} / ${slides.length}`;
        }
      }

      function startAutoplay() {
        stopAutoplay();
        autoplayInterval = window.setInterval(() => {
          currentSlide = (currentSlide + 1) % slides.length;
          updateCarousel();
        }, 3000);
      }

      function stopAutoplay() {
        if (autoplayInterval) {
          clearInterval(autoplayInterval);
          autoplayInterval = null;
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
          updateCarousel();
          stopAutoplay();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
          updateCarousel();
          stopAutoplay();
        });
      }

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
          stopAutoplay();
        });
      });

      // Pause on hover
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);

      // Start autoplay
      startAutoplay();
    }, 0);

    return container;
  }
};

export const ResponsiveCarousel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '100%';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-responsive">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=500&fit=crop" alt="Ocean sunset" style="width: 100%; height: auto; max-height: 500px; object-fit: cover;">
          </div>
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=500&fit=crop" alt="Forest trail" style="width: 100%; height: auto; max-height: 500px; object-fit: cover;">
          </div>
          <div class="aural-carousel__slide">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop" alt="Northern lights" style="width: 100%; height: auto; max-height: 500px; object-fit: cover;">
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
        </div>
        <div class="aural-carousel__counter">1 / 3</div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const MinimalCarousel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '700px';

    container.innerHTML = `
      <div class="aural-carousel" id="carousel-minimal">
        <div class="aural-carousel__track">
          <div class="aural-carousel__slide" style="background: var(--color-bg-secondary); padding: var(--space-8); min-height: 200px; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-bottom: var(--space-2);">Testimonial 1</h3>
              <p style="color: var(--color-text-secondary);">"This product has completely transformed how we work. Highly recommended!"</p>
              <p style="margin-top: var(--space-3); font-weight: var(--font-medium); color: var(--color-text-primary);">- Sarah Johnson</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: var(--color-bg-secondary); padding: var(--space-8); min-height: 200px; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-bottom: var(--space-2);">Testimonial 2</h3>
              <p style="color: var(--color-text-secondary);">"Amazing customer support and excellent quality. Will buy again!"</p>
              <p style="margin-top: var(--space-3); font-weight: var(--font-medium); color: var(--color-text-primary);">- Michael Chen</p>
            </div>
          </div>
          <div class="aural-carousel__slide" style="background: var(--color-bg-secondary); padding: var(--space-8); min-height: 200px; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
            <div class="aural-carousel__slide-content">
              <h3 style="font-size: var(--text-xl); font-weight: var(--font-semibold); color: var(--color-text-primary); margin-bottom: var(--space-2);">Testimonial 3</h3>
              <p style="color: var(--color-text-secondary);">"Best investment we've made this year. The results speak for themselves."</p>
              <p style="margin-top: var(--space-3); font-weight: var(--font-medium); color: var(--color-text-primary);">- Emily Rodriguez</p>
            </div>
          </div>
        </div>
        <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous testimonial">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next testimonial">
          <i data-lucide="chevron-right"></i>
        </button>
        <div class="aural-carousel__pagination">
          <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to testimonial 1"></button>
          <button class="aural-carousel__dot" aria-label="Go to testimonial 2"></button>
          <button class="aural-carousel__dot" aria-label="Go to testimonial 3"></button>
        </div>
      </div>
    `;

    initCarousel();
    return container;
  }
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const wrapper = document.createElement('div');

      wrapper.innerHTML = `
        <div class="aural-carousel" style="max-width: 100%;">
          <div class="aural-carousel__track">
            <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px;">
              <div class="aural-carousel__slide-content">
                <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 1</h3>
                <p style="color: rgba(255,255,255,0.9);">Beautiful carousel</p>
              </div>
            </div>
            <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 200px;">
              <div class="aural-carousel__slide-content">
                <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 2</h3>
                <p style="color: rgba(255,255,255,0.9);">Smooth transitions</p>
              </div>
            </div>
            <div class="aural-carousel__slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 200px;">
              <div class="aural-carousel__slide-content">
                <h3 style="font-size: var(--text-xl); font-weight: var(--font-bold); color: white; margin-bottom: var(--space-2);">Slide 3</h3>
                <p style="color: rgba(255,255,255,0.9);">Fully accessible</p>
              </div>
            </div>
          </div>
          <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
            <i data-lucide="chevron-right"></i>
          </button>
          <div class="aural-carousel__pagination">
            <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
            <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
            <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
          </div>
          <div class="aural-carousel__counter">1 / 3</div>
        </div>
      `;

      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        const carousel = wrapper.querySelector('.aural-carousel') as HTMLElement;
        const track = carousel.querySelector('.aural-carousel__track') as HTMLElement;
        const slides = carousel.querySelectorAll('.aural-carousel__slide');
        const prevBtn = carousel.querySelector('.aural-carousel__arrow--prev') as HTMLButtonElement;
        const nextBtn = carousel.querySelector('.aural-carousel__arrow--next') as HTMLButtonElement;
        const dots = carousel.querySelectorAll('.aural-carousel__dot');
        const counter = carousel.querySelector('.aural-carousel__counter') as HTMLElement;

        let currentSlide = 0;

        function updateCarousel() {
          track.style.transform = `translateX(-${currentSlide * 100}%)`;

          dots.forEach((dot, index) => {
            dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
          });

          if (counter) {
            counter.textContent = `${currentSlide + 1} / ${slides.length}`;
          }
        }

        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
            updateCarousel();
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
            updateCarousel();
          });
        }

        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
          });
        });
      }, 0);

      return wrapper;
    });
  }
};
