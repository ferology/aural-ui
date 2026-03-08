import{c as ta}from"./createThemeGrid-DWAncU4Q.js";const la={title:"Components/Carousel",tags:["autodocs"],parameters:{docs:{description:{component:`
# Carousel Component

Slideshow component for cycling through images, cards, or content panels with navigation controls, pagination dots, and smooth transitions.

Use Carousels to showcase featured content, product galleries, testimonials, or hero sections in a space-efficient way. They're perfect for highlighting multiple items of equal importance when you have limited vertical space. Carousels work well for image galleries, promotional banners, portfolio pieces, or customer reviews where users can browse at their own pace.

Carousels include arrow navigation, dot pagination, and optional auto-play functionality. They support touch gestures on mobile devices and keyboard navigation for accessibility. While often debated in UX, carousels remain effective for image galleries, product showcases, and situations where users explicitly expect to browse through content.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-carousel" id="image-carousel">
  <!-- Slides track -->
  <div class="aural-carousel__track">
    <div class="aural-carousel__slide">
      <img src="image1.jpg" alt="Slide 1 description" style="width: 100%; height: 400px; object-fit: cover;">
    </div>
    <div class="aural-carousel__slide">
      <img src="image2.jpg" alt="Slide 2 description" style="width: 100%; height: 400px; object-fit: cover;">
    </div>
    <div class="aural-carousel__slide">
      <img src="image3.jpg" alt="Slide 3 description" style="width: 100%; height: 400px; object-fit: cover;">
    </div>
  </div>

  <!-- Navigation arrows -->
  <button class="aural-carousel__arrow aural-carousel__arrow--prev" type="button" aria-label="Previous slide">
    <i data-lucide="chevron-left"></i>
  </button>
  <button class="aural-carousel__arrow aural-carousel__arrow--next" type="button" aria-label="Next slide">
    <i data-lucide="chevron-right"></i>
  </button>

  <!-- Pagination dots -->
  <div class="aural-carousel__pagination">
    <button class="aural-carousel__dot aural-carousel__dot--active" aria-label="Go to slide 1"></button>
    <button class="aural-carousel__dot" aria-label="Go to slide 2"></button>
    <button class="aural-carousel__dot" aria-label="Go to slide 3"></button>
  </div>

  <!-- Optional counter -->
  <div class="aural-carousel__counter">1 / 3</div>
</div>

<script>
  // Initialize carousel with custom controls
  const carousel = document.querySelector('#image-carousel');
  const track = carousel.querySelector('.aural-carousel__track');
  const slides = carousel.querySelectorAll('.aural-carousel__slide');
  const prevBtn = carousel.querySelector('.aural-carousel__arrow--prev');
  const nextBtn = carousel.querySelector('.aural-carousel__arrow--next');
  const dots = carousel.querySelectorAll('.aural-carousel__dot');

  let currentSlide = 0;

  function updateCarousel() {
    track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useEffect } from 'react';

function ImageCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="aural-carousel">
      <div className="aural-carousel__track" style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}>
        {images.map((img, index) => (
          <div key={index} className="aural-carousel__slide">
            <img src={img.src} alt={img.alt} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <button
        className="aural-carousel__arrow aural-carousel__arrow--prev"
        type="button"
        aria-label="Previous slide"
        onClick={prevSlide}
      >
        <i data-lucide="chevron-left"></i>
      </button>

      <button
        className="aural-carousel__arrow aural-carousel__arrow--next"
        type="button"
        aria-label="Next slide"
        onClick={nextSlide}
      >
        <i data-lucide="chevron-right"></i>
      </button>

      <div className="aural-carousel__pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={\`aural-carousel__dot \${index === currentSlide ? 'aural-carousel__dot--active' : ''}\`}
            aria-label={\`Go to slide \${index + 1}\`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <div className="aural-carousel__counter">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-carousel">
    <div class="aural-carousel__track" :style="{ transform: \`translateX(-\${currentSlide * 100}%)\` }">
      <div v-for="(img, index) in images" :key="index" class="aural-carousel__slide">
        <img :src="img.src" :alt="img.alt" style="width: 100%; height: 400px; object-fit: cover;">
      </div>
    </div>

    <button
      class="aural-carousel__arrow aural-carousel__arrow--prev"
      type="button"
      aria-label="Previous slide"
      @click="prevSlide"
    >
      <i data-lucide="chevron-left"></i>
    </button>

    <button
      class="aural-carousel__arrow aural-carousel__arrow--next"
      type="button"
      aria-label="Next slide"
      @click="nextSlide"
    >
      <i data-lucide="chevron-right"></i>
    </button>

    <div class="aural-carousel__pagination">
      <button
        v-for="(img, index) in images"
        :key="index"
        :class="['aural-carousel__dot', { 'aural-carousel__dot--active': index === currentSlide }]"
        :aria-label="\`Go to slide \${index + 1}\`"
        @click="goToSlide(index)"
      ></button>
    </div>

    <div class="aural-carousel__counter">{{ currentSlide + 1 }} / {{ images.length }}</div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = this.currentSlide < this.images.length - 1 ? this.currentSlide + 1 : 0;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.images.length - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let images = [];
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
  }

  function prevSlide() {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
  }

  function goToSlide(index) {
    currentSlide = index;
  }
<\/script>

<div class="aural-carousel">
  <div class="aural-carousel__track" style="transform: translateX(-{currentSlide * 100}%)">
    {#each images as img, index}
      <div class="aural-carousel__slide">
        <img src={img.src} alt={img.alt} style="width: 100%; height: 400px; object-fit: cover;">
      </div>
    {/each}
  </div>

  <button
    class="aural-carousel__arrow aural-carousel__arrow--prev"
    type="button"
    aria-label="Previous slide"
    on:click={prevSlide}
  >
    <i data-lucide="chevron-left"></i>
  </button>

  <button
    class="aural-carousel__arrow aural-carousel__arrow--next"
    type="button"
    aria-label="Next slide"
    on:click={nextSlide}
  >
    <i data-lucide="chevron-left"></i>
  </button>

  <div class="aural-carousel__pagination">
    {#each images as _, index}
      <button
        class="aural-carousel__dot {index === currentSlide ? 'aural-carousel__dot--active' : ''}"
        aria-label="Go to slide {index + 1}"
        on:click={() => goToSlide(index)}
      ></button>
    {/each}
  </div>

  <div class="aural-carousel__counter">{currentSlide + 1} / {images.length}</div>
</div>
\`\`\`

## Accessibility

- **Keyboard navigation**: Left/Right arrow keys navigate between slides, Tab key moves focus through controls
- **ARIA live region**: Use \`aria-live="polite"\` on carousel for auto-play to announce slide changes to screen readers
- **Descriptive labels**: Arrow buttons have \`aria-label="Previous slide"\` and \`aria-label="Next slide"\`
- **Dot pagination**: Each dot has \`aria-label="Go to slide N"\` for screen reader context
- **Image alt text**: All carousel images must have descriptive alt text explaining content
- **Pause auto-play**: Auto-play carousels pause on hover, focus, or user interaction (critical for accessibility)
- **Play/pause control**: Provide visible pause button for auto-play carousels
- **Touch targets**: All interactive elements (arrows, dots) meet 44×44px minimum size
- **Focus indicators**: Visible focus rings on all interactive controls with 2px outline
- **Reduced motion**: Carousel animations respect \`prefers-reduced-motion\` setting (no auto-play, instant transitions)
- **Skip carousel**: Consider "Skip to content" link before carousel for keyboard users
- **Slide counter**: Visible counter (e.g., "1 / 5") provides context on current position and total slides

## Usage Guidelines

- **When to use:**
  - Image galleries or product photo sets (3-10 images)
  - Featured content or promotional banners on homepage
  - Customer testimonials or success stories (3-7 items)
  - Portfolio showcases or case study highlights
  - Before/after comparisons or sequential progress images
  - Hero sections with multiple value propositions

- **When NOT to use:**
  - For critical information that all users must see — use static layout
  - For primary navigation — use Navbar or Tabs instead
  - For more than 10 slides — consider image grid or separate gallery page
  - For text-heavy content — users won't read through many slides
  - For SEO-critical content — carousels often have poor engagement and search visibility
  - For mobile-first designs — swipeable cards or vertical scrolling often performs better

- **Best practices:**
  - Limit to 3-7 slides for optimal engagement (users rarely click past 3)
  - Make first slide your strongest/most important content
  - Use high-quality, fast-loading images (optimize for web)
  - Provide clear navigation arrows visible on hover
  - Include pagination dots for position awareness
  - Auto-advance at 5-7 second intervals maximum (if using auto-play)
  - Pause auto-play on hover or focus (required for accessibility)
  - Ensure slides have consistent heights to prevent layout shift
  - Add captions or titles to provide context for images
  - Test carousel performance on mobile (touch gestures, responsiveness)

- **Mobile considerations:**
  - Carousels automatically support touch/swipe gestures on mobile devices
  - Navigation arrows remain visible on mobile (don't rely on hover)
  - Pagination dots provide visual feedback for swipe progress
  - Ensure images are optimized for mobile bandwidth (use responsive images)
  - Test carousel height on small screens (avoid excessive vertical space)
  - Consider vertical scrolling cards as alternative to carousel on mobile
        `.trim()}}}},d=()=>{setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons(),document.querySelectorAll(".aural-carousel").forEach(t=>{const v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");if(!v||!r.length)return;let e=0;function l(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((o,s)=>{o.classList.toggle("aural-carousel__dot--active",s===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,l()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,l()}),n.forEach((o,s)=>{o.addEventListener("click",()=>{e=s,l()})})})},0)},p={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},h={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="900px",a.innerHTML=`
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
    `,d(),a}},b={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},g={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},m={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},y={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},f={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons();const t=a.querySelector(".aural-carousel"),v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");let e=0,l=null;function o(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((k,C)=>{k.classList.toggle("aural-carousel__dot--active",C===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}function s(){_(),l=window.setInterval(()=>{e=(e+1)%r.length,o()},3e3)}function _(){l&&(clearInterval(l),l=null)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,o(),_()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,o(),_()}),n.forEach((k,C)=>{k.addEventListener("click",()=>{e=C,o(),_()})}),t.addEventListener("mouseenter",_),t.addEventListener("mouseleave",s),s()},0),a}},x={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="100%",a.innerHTML=`
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
    `,d(),a}},w={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="700px",a.innerHTML=`
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
    `,d(),a}},S={render:()=>ta(()=>{const a=document.createElement("div");return a.innerHTML=`
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
      `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons();const t=a.querySelector(".aural-carousel"),v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");let e=0;function l(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((o,s)=>{o.classList.toggle("aural-carousel__dot--active",s===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,l()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,l()}),n.forEach((o,s)=>{o.addEventListener("click",()=>{e=s,l()})})},0),a})};var E,G,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(T=(G=p.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var L,A,q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '900px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(q=(A=h.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var z,P,N;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var B,M,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,$,j;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var F,I,O;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(O=(I=y.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var X,D,R;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
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
    \`;
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
        track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
        dots.forEach((dot, index) => {
          dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
        });
        if (counter) {
          counter.textContent = \`\${currentSlide + 1} / \${slides.length}\`;
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
}`,...(R=(D=f.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var U,V,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '100%';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(K=(V=x.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var J,Q,Y;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '700px';
    container.innerHTML = \`
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
    \`;
    initCarousel();
    return container;
  }
}`,...(Y=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,aa,ea;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = \`
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
      \`;
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
          track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
          dots.forEach((dot, index) => {
            dot.classList.toggle('aural-carousel__dot--active', index === currentSlide);
          });
          if (counter) {
            counter.textContent = \`\${currentSlide + 1} / \${slides.length}\`;
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
}`,...(ea=(aa=S.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};const oa=["BasicCarousel","ImageCarousel","WithCaptions","PaginationOnly","WithArrowsOnly","ProductCards","AutoPlayExample","ResponsiveCarousel","MinimalCarousel","ThemeComparison"];export{f as AutoPlayExample,p as BasicCarousel,h as ImageCarousel,w as MinimalCarousel,g as PaginationOnly,y as ProductCards,x as ResponsiveCarousel,S as ThemeComparison,m as WithArrowsOnly,b as WithCaptions,oa as __namedExportsOrder,la as default};
