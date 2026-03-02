import{c as ta}from"./createThemeGrid-DWAncU4Q.js";const la={title:"Components/Carousel",tags:["autodocs"],parameters:{docs:{description:{component:"Image and content carousel with navigation controls, pagination, and smooth transitions."}}}},d=()=>{setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons(),document.querySelectorAll(".aural-carousel").forEach(t=>{const v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");if(!v||!r.length)return;let e=0;function l(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((o,s)=>{o.classList.toggle("aural-carousel__dot--active",s===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,l()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,l()}),n.forEach((o,s)=>{o.addEventListener("click",()=>{e=s,l()})})})},0)},p={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,d(),a}},b={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="900px",a.innerHTML=`
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
    `,d(),a}},h={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="800px",a.innerHTML=`
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
    `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons();const t=a.querySelector(".aural-carousel"),v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");let e=0,l=null;function o(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((k,E)=>{k.classList.toggle("aural-carousel__dot--active",E===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}function s(){_(),l=window.setInterval(()=>{e=(e+1)%r.length,o()},3e3)}function _(){l&&(clearInterval(l),l=null)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,o(),_()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,o(),_()}),n.forEach((k,E)=>{k.addEventListener("click",()=>{e=E,o(),_()})}),t.addEventListener("mouseenter",_),t.addEventListener("mouseleave",s),s()},0),a}},x={render:()=>{const a=document.createElement("div");return a.style.padding="2rem",a.style.maxWidth="100%",a.innerHTML=`
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
      `,setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons();const t=a.querySelector(".aural-carousel"),v=t.querySelector(".aural-carousel__track"),r=t.querySelectorAll(".aural-carousel__slide"),i=t.querySelector(".aural-carousel__arrow--prev"),c=t.querySelector(".aural-carousel__arrow--next"),n=t.querySelectorAll(".aural-carousel__dot"),u=t.querySelector(".aural-carousel__counter");let e=0;function l(){v.style.transform=`translateX(-${e*100}%)`,n.forEach((o,s)=>{o.classList.toggle("aural-carousel__dot--active",s===e)}),u&&(u.textContent=`${e+1} / ${r.length}`)}i&&i.addEventListener("click",()=>{e=e>0?e-1:r.length-1,l()}),c&&c.addEventListener("click",()=>{e=e<r.length-1?e+1:0,l()}),n.forEach((o,s)=>{o.addEventListener("click",()=>{e=s,l()})})},0),a})};var G,C,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var T,A,z;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(A=b.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var q,H,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,B,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(B=g.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var N,$,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var j,F,O;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(F=y.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var D,X,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(X=f.parameters)==null?void 0:X.docs)==null?void 0:R.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(V=w.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,aa,ea;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ea=(aa=S.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};const oa=["BasicCarousel","ImageCarousel","WithCaptions","PaginationOnly","WithArrowsOnly","ProductCards","AutoPlayExample","ResponsiveCarousel","MinimalCarousel","ThemeComparison"];export{f as AutoPlayExample,p as BasicCarousel,b as ImageCarousel,w as MinimalCarousel,g as PaginationOnly,y as ProductCards,x as ResponsiveCarousel,S as ThemeComparison,m as WithArrowsOnly,h as WithCaptions,oa as __namedExportsOrder,la as default};
