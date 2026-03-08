import{e as x}from"./index-CCtUlOBE.js";var _=Object.freeze,Me=Object.defineProperty,Re=(e,a)=>_(Me(e,"raw",{value:_(a||e.slice())})),k;const Ve={title:"Components/Image Gallery",tags:["autodocs"],argTypes:{columns:{control:{type:"select"},options:["2","3","4"],description:"Number of columns in the grid",table:{type:{summary:"string"},defaultValue:{summary:"3"}}},withOverlay:{control:"boolean",description:"Show title and description overlays on hover",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},withTabindex:{control:"boolean",description:"Make items keyboard focusable",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}},parameters:{docs:{description:{component:`
# Image Gallery Component

Responsive image grid with hover overlays, captions, lightbox modal, and keyboard-accessible navigation. Perfect for photo collections, product catalogs, portfolios, and media libraries.

Image galleries provide an organized way to display multiple images with optional metadata, interactive previews, and full-screen viewing capabilities.

## When to Use

- **Photo portfolios**: Showcase photography or design work in organized grids
- **Product catalogs**: Display product images with prices and details
- **Media libraries**: Organize and browse image collections
- **Before/after galleries**: Show transformations or comparisons
- **Team photos**: Display staff or team member images with information

## When NOT to Use

- **Single images**: Use standalone `(k||(k=Re([` or Card with image instead
- **Hero images**: Use dedicated hero/banner components for large feature images
- **Icons or small graphics**: Use inline images or icon components
- **Slideshows**: Use Carousel component for sequential viewing

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Basic 3-column gallery -->
<div class="aural-gallery aural-gallery--cols-3">
  <div class="aural-gallery__item" tabindex="0">
    <img class="aural-gallery__image" src="image1.jpg" alt="Ocean sunset">
    <div class="aural-gallery__overlay">
      <div class="aural-gallery__title">Ocean Sunset</div>
      <div class="aural-gallery__description">Golden hour at the beach</div>
    </div>
  </div>

  <div class="aural-gallery__item" tabindex="0">
    <img class="aural-gallery__image" src="image2.jpg" alt="Mountain landscape">
    <div class="aural-gallery__overlay">
      <div class="aural-gallery__title">Alpine View</div>
      <div class="aural-gallery__description">Snow-capped peaks</div>
    </div>
  </div>
</div>

<!-- With lightbox integration -->
<script>
// Initialize lightbox on click
document.querySelectorAll('.aural-gallery__item').forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  });
});
<\/script>
\`\`\`

### React
\`\`\`jsx
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showOverlay?: boolean;
  onImageClick?: (index: number) => void;
}

function ImageGallery({
  images,
  columns = 3,
  showOverlay = true,
  onImageClick
}: ImageGalleryProps) {
  return (
    <div className={\`aural-gallery aural-gallery--cols-\${columns}\`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="aural-gallery__item"
          tabIndex={0}
          role="button"
          aria-label={\`\${image.title}: \${image.description}\`}
          onClick={() => onImageClick?.(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick?.(index);
            }
          }}
        >
          <img
            className="aural-gallery__image"
            src={image.src}
            alt={image.alt}
          />
          {showOverlay && (image.title || image.description) && (
            <div className="aural-gallery__overlay">
              {image.title && (
                <div className="aural-gallery__title">{image.title}</div>
              )}
              {image.description && (
                <div className="aural-gallery__description">
                  {image.description}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// With lightbox state management
function GalleryWithLightbox({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ImageGallery
        images={images}
        columns={3}
        onImageClick={setLightboxIndex}
      />

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
\`\`\`

### Vue
\`\`\`vue
<template>
  <div :class="[\`aural-gallery\`, \`aural-gallery--cols-\${columns}\`]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="aural-gallery__item"
      tabindex="0"
      role="button"
      :aria-label="\`\${image.title}: \${image.description}\`"
      @click="handleImageClick(index)"
      @keydown="handleKeydown($event, index)"
    >
      <img
        class="aural-gallery__image"
        :src="image.src"
        :alt="image.alt"
      />
      <div
        v-if="showOverlay && (image.title || image.description)"
        class="aural-gallery__overlay"
      >
        <div v-if="image.title" class="aural-gallery__title">
          {{ image.title }}
        </div>
        <div v-if="image.description" class="aural-gallery__description">
          {{ image.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: { type: Array, required: true },
  columns: { type: Number, default: 3 },
  showOverlay: { type: Boolean, default: true }
});

const emit = defineEmits(['image-click']);

function handleImageClick(index) {
  emit('image-click', index);
}

function handleKeydown(event, index) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    emit('image-click', index);
  }
}
<\/script>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  export let images = [];
  export let columns = 3;
  export let showOverlay = true;

  function handleImageClick(index) {
    // Dispatch custom event
    dispatch('imageClick', { index });
  }

  function handleKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick(index);
    }
  }
<\/script>

<div class="aural-gallery aural-gallery--cols-{columns}">
  {#each images as image, index}
    <div
      class="aural-gallery__item"
      tabindex="0"
      role="button"
      aria-label="{image.title}: {image.description}"
      on:click={() => handleImageClick(index)}
      on:keydown={(e) => handleKeydown(e, index)}
    >
      <img
        class="aural-gallery__image"
        src={image.src}
        alt={image.alt}
      />
      {#if showOverlay && (image.title || image.description)}
        <div class="aural-gallery__overlay">
          {#if image.title}
            <div class="aural-gallery__title">{image.title}</div>
          {/if}
          {#if image.description}
            <div class="aural-gallery__description">{image.description}</div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>
\`\`\`

## Accessibility

1. **Descriptive alt text**: All images must have meaningful alt attributes describing image content
2. **Keyboard focusable**: Gallery items have \`tabindex="0"\` for keyboard navigation
3. **Keyboard activation**: Enter and Space keys open lightbox or perform actions
4. **Arrow key navigation**: Left/Right arrows navigate between images in lightbox
5. **Escape key**: Closes lightbox and returns focus to gallery item
6. **ARIA labels**: Comprehensive labels describe image and overlay content
7. **Focus management**: Focus returns to clicked item when lightbox closes
8. **Role attributes**: Gallery items use \`role="button"\` when clickable
9. **Screen reader announcements**: Image counter announced (e.g., "Image 1 of 6")
10. **Hidden decorative icons**: Icons use \`aria-hidden="true"\` when decorative
11. **Touch targets**: Minimum 44×44px tap targets on mobile devices
12. **Color contrast**: Overlay text meets WCAG AA standards (4.5:1 minimum)
13. **Motion preferences**: Animations respect \`prefers-reduced-motion\` setting
14. **Zoom controls**: Keyboard shortcuts for zoom in/out in lightbox (+ and - keys)
15. **Image loading states**: Show loading indicators while images load

## Usage Guidelines

### Best Practices

- **Consistent aspect ratios**: Use same aspect ratio for all images in a grid (1:1 or 16:9)
- **Image optimization**: Compress and resize images appropriately (use WebP format)
- **Lazy loading**: Load images as they scroll into view for better performance
- **Responsive images**: Provide multiple sizes using srcset for different screen sizes
- **Alt text quality**: Write descriptive, meaningful alt text (not just filenames)
- **Grid spacing**: Use consistent gap between images (var(--space-4) recommended)

### Column Options

- **2 columns** (\`aural-gallery--cols-2\`): Large images, detailed viewing
- **3 columns** (\`aural-gallery--cols-3\`): Standard grid layout (default)
- **4 columns** (\`aural-gallery--cols-4\`): Compact thumbnail grid
- **Auto-responsive** (\`aural-gallery--auto\`): Automatic column calculation based on width

### Lightbox/Modal Behavior

- **Click to expand**: Clicking an image opens full-screen lightbox
- **Navigation controls**: Previous/Next buttons for browsing
- **Zoom functionality**: Click or double-tap to zoom in on image
- **Image counter**: Display "Image 3 of 12" for context
- **Caption display**: Show title and description below image
- **Close methods**: X button, Escape key, or click outside image

### Mobile Considerations

- Galleries automatically collapse to 2 columns on tablets (< 768px)
- Single column on mobile phones (< 640px) for better readability
- Reduced gap spacing on smaller screens
- Touch gestures supported (swipe to navigate, pinch to zoom)
- Full-screen lightbox on mobile for immersive viewing
- Overlay text remains readable with proper contrast
- Images maintain aspect ratio without distortion
        `],[` or Card with image instead
- **Hero images**: Use dedicated hero/banner components for large feature images
- **Icons or small graphics**: Use inline images or icon components
- **Slideshows**: Use Carousel component for sequential viewing

## Framework Examples

### Vanilla HTML
\\\`\\\`\\\`html
<!-- Basic 3-column gallery -->
<div class="aural-gallery aural-gallery--cols-3">
  <div class="aural-gallery__item" tabindex="0">
    <img class="aural-gallery__image" src="image1.jpg" alt="Ocean sunset">
    <div class="aural-gallery__overlay">
      <div class="aural-gallery__title">Ocean Sunset</div>
      <div class="aural-gallery__description">Golden hour at the beach</div>
    </div>
  </div>

  <div class="aural-gallery__item" tabindex="0">
    <img class="aural-gallery__image" src="image2.jpg" alt="Mountain landscape">
    <div class="aural-gallery__overlay">
      <div class="aural-gallery__title">Alpine View</div>
      <div class="aural-gallery__description">Snow-capped peaks</div>
    </div>
  </div>
</div>

<!-- With lightbox integration -->
<script>
// Initialize lightbox on click
document.querySelectorAll('.aural-gallery__item').forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  });
});
<\/script>
\\\`\\\`\\\`

### React
\\\`\\\`\\\`jsx
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showOverlay?: boolean;
  onImageClick?: (index: number) => void;
}

function ImageGallery({
  images,
  columns = 3,
  showOverlay = true,
  onImageClick
}: ImageGalleryProps) {
  return (
    <div className={\\\`aural-gallery aural-gallery--cols-\\\${columns}\\\`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="aural-gallery__item"
          tabIndex={0}
          role="button"
          aria-label={\\\`\\\${image.title}: \\\${image.description}\\\`}
          onClick={() => onImageClick?.(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick?.(index);
            }
          }}
        >
          <img
            className="aural-gallery__image"
            src={image.src}
            alt={image.alt}
          />
          {showOverlay && (image.title || image.description) && (
            <div className="aural-gallery__overlay">
              {image.title && (
                <div className="aural-gallery__title">{image.title}</div>
              )}
              {image.description && (
                <div className="aural-gallery__description">
                  {image.description}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// With lightbox state management
function GalleryWithLightbox({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ImageGallery
        images={images}
        columns={3}
        onImageClick={setLightboxIndex}
      />

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
\\\`\\\`\\\`

### Vue
\\\`\\\`\\\`vue
<template>
  <div :class="[\\\`aural-gallery\\\`, \\\`aural-gallery--cols-\\\${columns}\\\`]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="aural-gallery__item"
      tabindex="0"
      role="button"
      :aria-label="\\\`\\\${image.title}: \\\${image.description}\\\`"
      @click="handleImageClick(index)"
      @keydown="handleKeydown($event, index)"
    >
      <img
        class="aural-gallery__image"
        :src="image.src"
        :alt="image.alt"
      />
      <div
        v-if="showOverlay && (image.title || image.description)"
        class="aural-gallery__overlay"
      >
        <div v-if="image.title" class="aural-gallery__title">
          {{ image.title }}
        </div>
        <div v-if="image.description" class="aural-gallery__description">
          {{ image.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: { type: Array, required: true },
  columns: { type: Number, default: 3 },
  showOverlay: { type: Boolean, default: true }
});

const emit = defineEmits(['image-click']);

function handleImageClick(index) {
  emit('image-click', index);
}

function handleKeydown(event, index) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    emit('image-click', index);
  }
}
<\/script>
\\\`\\\`\\\`

### Svelte
\\\`\\\`\\\`svelte
<script>
  export let images = [];
  export let columns = 3;
  export let showOverlay = true;

  function handleImageClick(index) {
    // Dispatch custom event
    dispatch('imageClick', { index });
  }

  function handleKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick(index);
    }
  }
<\/script>

<div class="aural-gallery aural-gallery--cols-{columns}">
  {#each images as image, index}
    <div
      class="aural-gallery__item"
      tabindex="0"
      role="button"
      aria-label="{image.title}: {image.description}"
      on:click={() => handleImageClick(index)}
      on:keydown={(e) => handleKeydown(e, index)}
    >
      <img
        class="aural-gallery__image"
        src={image.src}
        alt={image.alt}
      />
      {#if showOverlay && (image.title || image.description)}
        <div class="aural-gallery__overlay">
          {#if image.title}
            <div class="aural-gallery__title">{image.title}</div>
          {/if}
          {#if image.description}
            <div class="aural-gallery__description">{image.description}</div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>
\\\`\\\`\\\`

## Accessibility

1. **Descriptive alt text**: All images must have meaningful alt attributes describing image content
2. **Keyboard focusable**: Gallery items have \\\`tabindex="0"\\\` for keyboard navigation
3. **Keyboard activation**: Enter and Space keys open lightbox or perform actions
4. **Arrow key navigation**: Left/Right arrows navigate between images in lightbox
5. **Escape key**: Closes lightbox and returns focus to gallery item
6. **ARIA labels**: Comprehensive labels describe image and overlay content
7. **Focus management**: Focus returns to clicked item when lightbox closes
8. **Role attributes**: Gallery items use \\\`role="button"\\\` when clickable
9. **Screen reader announcements**: Image counter announced (e.g., "Image 1 of 6")
10. **Hidden decorative icons**: Icons use \\\`aria-hidden="true"\\\` when decorative
11. **Touch targets**: Minimum 44×44px tap targets on mobile devices
12. **Color contrast**: Overlay text meets WCAG AA standards (4.5:1 minimum)
13. **Motion preferences**: Animations respect \\\`prefers-reduced-motion\\\` setting
14. **Zoom controls**: Keyboard shortcuts for zoom in/out in lightbox (+ and - keys)
15. **Image loading states**: Show loading indicators while images load

## Usage Guidelines

### Best Practices

- **Consistent aspect ratios**: Use same aspect ratio for all images in a grid (1:1 or 16:9)
- **Image optimization**: Compress and resize images appropriately (use WebP format)
- **Lazy loading**: Load images as they scroll into view for better performance
- **Responsive images**: Provide multiple sizes using srcset for different screen sizes
- **Alt text quality**: Write descriptive, meaningful alt text (not just filenames)
- **Grid spacing**: Use consistent gap between images (var(--space-4) recommended)

### Column Options

- **2 columns** (\\\`aural-gallery--cols-2\\\`): Large images, detailed viewing
- **3 columns** (\\\`aural-gallery--cols-3\\\`): Standard grid layout (default)
- **4 columns** (\\\`aural-gallery--cols-4\\\`): Compact thumbnail grid
- **Auto-responsive** (\\\`aural-gallery--auto\\\`): Automatic column calculation based on width

### Lightbox/Modal Behavior

- **Click to expand**: Clicking an image opens full-screen lightbox
- **Navigation controls**: Previous/Next buttons for browsing
- **Zoom functionality**: Click or double-tap to zoom in on image
- **Image counter**: Display "Image 3 of 12" for context
- **Caption display**: Show title and description below image
- **Close methods**: X button, Escape key, or click outside image

### Mobile Considerations

- Galleries automatically collapse to 2 columns on tablets (< 768px)
- Single column on mobile phones (< 640px) for better readability
- Reduced gap spacing on smaller screens
- Touch gestures supported (swipe to navigate, pinch to zoom)
- Full-screen lightbox on mobile for immersive viewing
- Overlay text remains readable with proper contrast
- Images maintain aspect ratio without distortion
        `]))).trim()}}}},n=[{src:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop",alt:"Ocean sunset",title:"Ocean Sunset",description:"Golden hour at the beach"},{src:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=300&fit=crop",alt:"Forest trail",title:"Forest Path",description:"Peaceful woodland trail"},{src:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop",alt:"Northern lights",title:"Aurora Borealis",description:"Northern lights display"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop",alt:"Desert dunes",title:"Desert Dunes",description:"Sand formations at sunrise"},{src:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop",alt:"Mountain lake",title:"Alpine Lake",description:"Crystal clear mountain water"},{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"Snowy peaks",title:"Mountain Peak",description:"Snow-covered summit"}],qe=[{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",alt:"Product 1",title:"Premium Watch",description:"$299.00"},{src:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",alt:"Product 2",title:"Sunglasses",description:"$149.00"},{src:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",alt:"Product 3",title:"Running Shoes",description:"$89.00"},{src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop",alt:"Product 4",title:"Sneakers",description:"$119.00"},{src:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",alt:"Product 5",title:"Backpack",description:"$79.00"},{src:"https://images.unsplash.com/photo-1545127398-14699f92334b?w=300&h=300&fit=crop",alt:"Adidas Headphones",title:"Headphones",description:"$199.00"}],Fe=[{src:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",alt:"Web Design Project",title:"E-Commerce Redesign",description:"UI/UX Design • 2024"},{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",alt:"Dashboard Project",title:"Analytics Dashboard",description:"Data Visualization • 2024"},{src:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=350&fit=crop",alt:"Mobile App",title:"Fitness Mobile App",description:"Mobile Design • 2024"},{src:"https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1e5?w=500&h=350&fit=crop",alt:"Branding Project",title:"Brand Identity",description:"Branding • 2024"}],Ue=[{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=300&fit=crop",alt:"Abstract art"},{src:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=300&h=300&fit=crop",alt:"Colorful pattern"},{src:"https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=300&h=300&fit=crop",alt:"Modern design"},{src:"https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=300&h=300&fit=crop",alt:"Geometric shapes"}],i=e=>{const a=e.images.map(t=>{const o=e.withOverlay&&t.title?`
        <div class="aural-gallery__overlay">
          <div class="aural-gallery__title">${t.title}</div>
          ${t.description?`<div class="aural-gallery__description">${t.description}</div>`:""}
        </div>
      `:"";return`
      <div class="aural-gallery__item"${e.withTabindex?' tabindex="0"':""}>
        <img class="aural-gallery__image" src="${t.src}" alt="${t.alt}">
        ${o}
      </div>
    `}).join("");return`
    <div class="aural-gallery aural-gallery--cols-${e.columns}">
      ${a}
    </div>
  `},r={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n},render:i,play:async({canvasElement:e})=>{const a=e.querySelector(".aural-gallery");await x(a).toBeTruthy(),await x(a==null?void 0:a.classList.contains("aural-gallery--cols-3")).toBe(!0);const t=e.querySelectorAll(".aural-gallery__item");await x(t.length).toBe(6),await x(t[0].getAttribute("tabindex")).toBe("0")}},s={args:{columns:"2",withOverlay:!0,withTabindex:!0,images:n.slice(0,4)},render:i,parameters:{docs:{description:{story:"Two-column grid layout ideal for larger images and more prominent content."}}}},f={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n},render:i,parameters:{docs:{description:{story:"Standard three-column grid providing good balance between density and image size."}}}},w={args:{columns:"4",withOverlay:!1,withTabindex:!1,images:Ue},render:i,parameters:{docs:{description:{story:"Four-column grid for compact display. Often used without overlays for simple thumbnail grids."}}}},l={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n},render:i,parameters:{docs:{description:{story:"Hover over images to reveal overlay content. Overlays include titles and descriptions."}}}},c={args:{columns:"3",withOverlay:!1,withTabindex:!1,images:n.map(e=>({src:e.src,alt:e.alt}))},render:i,parameters:{docs:{description:{story:"Clean gallery without overlays. Best for pure image display without additional context."}}}},d={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:qe},render:i,parameters:{docs:{description:{story:"Product showcase with pricing information in overlays. Perfect for e-commerce catalogs."}}}},m={args:{columns:"2",withOverlay:!0,withTabindex:!0,images:Fe},render:i,parameters:{docs:{description:{story:"Portfolio layout with larger images. Overlays show project names and categories."}}}},g={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n},render:e=>`
      ${i(e)}
      <style>
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .lightbox.active {
          opacity: 1;
          pointer-events: all;
        }

        .lightbox__content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox__image {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox__close,
        .lightbox__prev,
        .lightbox__next {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .lightbox__close:hover,
        .lightbox__prev:hover,
        .lightbox__next:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .lightbox__close {
          top: 20px;
          right: 20px;
        }

        .lightbox__prev {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox__next {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox__counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
        }

        .lightbox__caption {
          position: absolute;
          bottom: 60px;
          left: 20px;
          right: 20px;
          text-align: center;
          color: white;
        }

        .lightbox__title {
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          margin-bottom: 4px;
        }

        .lightbox__description {
          font-size: var(--text-sm);
          opacity: 0.8;
        }
      </style>

      <div class="lightbox" id="lightbox">
        <div class="lightbox__content">
          <img class="lightbox__image" id="lightbox-image" src="" alt="">
          <button class="lightbox__close" id="lightbox-close" aria-label="Close lightbox">
            <i data-lucide="x"></i>
          </button>
          <button class="lightbox__prev" id="lightbox-prev" aria-label="Previous image">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="lightbox__next" id="lightbox-next" aria-label="Next image">
            <i data-lucide="chevron-right"></i>
          </button>
          <div class="lightbox__counter" id="lightbox-counter">1 / 6</div>
          <div class="lightbox__caption" id="lightbox-caption">
            <div class="lightbox__title"></div>
            <div class="lightbox__description"></div>
          </div>
        </div>
      </div>

      <script type="module">
        (function() {
          const galleryItems = document.querySelectorAll('.aural-gallery__item');
          const lightbox = document.getElementById('lightbox');
          const lightboxImage = document.getElementById('lightbox-image');
          const lightboxCounter = document.getElementById('lightbox-counter');
          const lightboxCaption = document.getElementById('lightbox-caption');
          const closeBtn = document.getElementById('lightbox-close');
          const prevBtn = document.getElementById('lightbox-prev');
          const nextBtn = document.getElementById('lightbox-next');

          let currentIndex = 0;
          const images = ${JSON.stringify(e.images)};

          function openLightbox(index) {
            currentIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Initialize Lucide icons
            if (window.lucide) {
              window.lucide.createIcons();
            }
          }

          function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
          }

          function updateLightbox() {
            const image = images[currentIndex];
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCounter.textContent = \`\${currentIndex + 1} / \${images.length}\`;

            const titleEl = lightboxCaption.querySelector('.lightbox__title');
            const descEl = lightboxCaption.querySelector('.lightbox__description');
            titleEl.textContent = image.title || '';
            descEl.textContent = image.description || '';
          }

          function navigate(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            updateLightbox();
          }

          // Add click handlers to gallery items
          galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
            item.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            });
          });

          // Lightbox controls
          closeBtn.addEventListener('click', closeLightbox);
          prevBtn.addEventListener('click', () => navigate(-1));
          nextBtn.addEventListener('click', () => navigate(1));

          // Click outside to close
          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
              closeLightbox();
            }
          });

          // Keyboard navigation
          document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
          });
        })();
      <\/script>
    `,parameters:{docs:{description:{story:"Click any image to open the lightbox. Navigate with arrow keys or buttons. Shows image counter and captions."}}}},u={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n},render:e=>`
      <div style="position: relative;">
        <div style="position: absolute; top: -40px; right: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">
          <i data-lucide="images" style="width: 16px; height: 16px; vertical-align: middle;"></i>
          ${e.images.length} images
        </div>
        ${i(e)}
      </div>
      <script type="module">
        if (window.lucide) {
          window.lucide.createIcons();
        }
      <\/script>
    `,parameters:{docs:{description:{story:"Display total image count above the gallery."}}}},p={args:{columns:"3",withOverlay:!1,withTabindex:!0,images:n.slice(0,3)},render:e=>{const a=e.images.map(t=>`
        <div>
          <div class="aural-gallery__item" tabindex="0">
            <img class="aural-gallery__image" src="${t.src}" alt="${t.alt}">
          </div>
          <div style="margin-top: var(--space-2); text-align: center;">
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); margin-bottom: 2px;">
              ${t.title}
            </div>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">
              ${t.description}
            </div>
          </div>
        </div>
      `).join("");return`
      <div class="aural-gallery aural-gallery--cols-${e.columns}">
        ${a}
      </div>
    `},parameters:{docs:{description:{story:"Alternative layout with captions always visible below images."}}}},h={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:[{src:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",alt:"Ocean sunset",title:"Ocean Sunset",description:"Golden hour"},{src:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=250&fit=crop",alt:"Forest trail",title:"Forest Path",description:"Woodland"},{src:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=350&fit=crop",alt:"Northern lights",title:"Aurora",description:"Northern lights"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop",alt:"Desert dunes",title:"Desert",description:"Sand dunes"},{src:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=450&fit=crop",alt:"Mountain lake",title:"Alpine Lake",description:"Crystal water"},{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=280&fit=crop",alt:"Snowy peaks",title:"Mountain",description:"Snow summit"}]},render:e=>`
      <style>
        .masonry-gallery {
          column-count: 3;
          column-gap: var(--space-4);
        }

        .masonry-gallery .aural-gallery__item {
          break-inside: avoid;
          margin-bottom: var(--space-4);
          display: inline-block;
          width: 100%;
        }

        @media (max-width: 768px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        @media (max-width: 480px) {
          .masonry-gallery {
            column-count: 1;
          }
        }
      </style>

      <div class="masonry-gallery">
        ${e.images.map(t=>`
        <div class="aural-gallery__item" tabindex="0">
          <img class="aural-gallery__image" src="${t.src}" alt="${t.alt}" style="height: auto;">
          <div class="aural-gallery__overlay">
            <div class="aural-gallery__title">${t.title}</div>
            <div class="aural-gallery__description">${t.description}</div>
          </div>
        </div>
      `).join("")}
      </div>
    `,parameters:{docs:{description:{story:"Masonry layout with variable height images creating a Pinterest-style grid."}}}},y={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n.slice(0,3)},render:e=>`
      ${i(e)}
      <style>
        .zoom-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .zoom-lightbox.active {
          display: flex;
        }

        .zoom-lightbox__container {
          position: relative;
          overflow: auto;
          max-width: 90vw;
          max-height: 90vh;
        }

        .zoom-lightbox__image {
          display: block;
          max-width: 100%;
          transition: transform 0.3s ease;
          cursor: zoom-in;
        }

        .zoom-lightbox__image.zoomed {
          cursor: zoom-out;
        }

        .zoom-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: var(--space-2);
          background: rgba(0, 0, 0, 0.7);
          padding: var(--space-2);
          border-radius: var(--radius-md);
        }

        .zoom-btn {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .zoom-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .zoom-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>

      <div class="zoom-lightbox" id="zoom-lightbox">
        <div class="zoom-lightbox__container" id="zoom-container">
          <img class="zoom-lightbox__image" id="zoom-image" src="" alt="">
        </div>
        <button class="zoom-close" id="zoom-close" aria-label="Close">
          <i data-lucide="x"></i>
        </button>
        <div class="zoom-controls">
          <button class="zoom-btn" id="zoom-in" aria-label="Zoom in">
            <i data-lucide="zoom-in"></i>
          </button>
          <button class="zoom-btn" id="zoom-out" aria-label="Zoom out">
            <i data-lucide="zoom-out"></i>
          </button>
          <button class="zoom-btn" id="zoom-reset" aria-label="Reset zoom">
            <i data-lucide="maximize-2"></i>
          </button>
        </div>
      </div>

      <script type="module">
        (function() {
          const items = document.querySelectorAll('.aural-gallery__item');
          const lightbox = document.getElementById('zoom-lightbox');
          const image = document.getElementById('zoom-image');
          const closeBtn = document.getElementById('zoom-close');
          const zoomInBtn = document.getElementById('zoom-in');
          const zoomOutBtn = document.getElementById('zoom-out');
          const zoomResetBtn = document.getElementById('zoom-reset');

          let scale = 1;

          function openLightbox(src, alt) {
            image.src = src;
            image.alt = alt;
            lightbox.classList.add('active');
            scale = 1;
            image.style.transform = \`scale(\${scale})\`;

            if (window.lucide) {
              window.lucide.createIcons();
            }
          }

          function closeLightbox() {
            lightbox.classList.remove('active');
          }

          function zoom(delta) {
            scale = Math.max(0.5, Math.min(3, scale + delta));
            image.style.transform = \`scale(\${scale})\`;
            image.classList.toggle('zoomed', scale > 1);
          }

          items.forEach(item => {
            item.addEventListener('click', () => {
              const img = item.querySelector('.aural-gallery__image');
              openLightbox(img.src, img.alt);
            });
          });

          closeBtn.addEventListener('click', closeLightbox);
          zoomInBtn.addEventListener('click', () => zoom(0.25));
          zoomOutBtn.addEventListener('click', () => zoom(-0.25));
          zoomResetBtn.addEventListener('click', () => {
            scale = 1;
            image.style.transform = 'scale(1)';
            image.classList.remove('zoomed');
          });

          image.addEventListener('click', () => {
            if (scale === 1) zoom(0.5);
            else {
              scale = 1;
              image.style.transform = 'scale(1)';
              image.classList.remove('zoomed');
            }
          });

          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
          });
        })();
      <\/script>
    `,parameters:{docs:{description:{story:"Lightbox with zoom controls. Click image to toggle zoom, or use the zoom buttons."}}}},b={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n.slice(0,3)},render:e=>{const a=e.images.map((t,o)=>`
        <div
          class="aural-gallery__item"
          tabindex="0"
          role="button"
          aria-label="${t.title}: ${t.description}"
          data-index="${o}"
        >
          <img class="aural-gallery__image" src="${t.src}" alt="${t.alt}">
          <div class="aural-gallery__overlay">
            <div class="aural-gallery__title">${t.title}</div>
            <div class="aural-gallery__description">${t.description}</div>
          </div>
        </div>
      `).join("");return`
      <div
        class="aural-gallery aural-gallery--cols-${e.columns}"
        role="region"
        aria-label="Photo gallery"
      >
        ${a}
      </div>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style="position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;"
      >
        <span id="gallery-status"></span>
      </div>

      <script type="module">
        (function() {
          const items = document.querySelectorAll('.aural-gallery__item');
          const status = document.getElementById('gallery-status');

          items.forEach((item, index) => {
            item.addEventListener('focus', () => {
              const label = item.getAttribute('aria-label');
              status.textContent = \`Image \${index + 1} of \${items.length}: \${label}\`;
            });

            item.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                status.textContent = \`Opening \${item.getAttribute('aria-label')}\`;
              }

              // Arrow key navigation
              if (e.key === 'ArrowRight' && index < items.length - 1) {
                e.preventDefault();
                items[index + 1].focus();
              }
              if (e.key === 'ArrowLeft' && index > 0) {
                e.preventDefault();
                items[index - 1].focus();
              }
            });
          });
        })();
      <\/script>
    `},parameters:{docs:{description:{story:"Full accessibility support with ARIA labels, keyboard navigation (arrow keys), and screen reader announcements."}}}},v={args:{columns:"3",withOverlay:!0,withTabindex:!0,images:n.slice(0,6)},render:e=>{const a=["dark","light","neon","prismatic","minimal","warm","kinetic"],t=i(e);return`
      <style>
        .theme-grid {
          display: grid;
          gap: var(--space-8);
        }

        .theme-example {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-border-subtle);
        }

        .theme-label {
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
          margin-bottom: var(--space-4);
        }
      </style>

      <div class="theme-grid">
        ${a.map(o=>`
          <div class="theme-example" data-theme="${o}">
            <div class="theme-label">${o} Theme</div>
            ${t}
          </div>
        `).join("")}
      </div>
    `},parameters:{docs:{description:{story:"Compare how the Image Gallery component appears across all available Aural UI themes."}}}};var I,z,L,C,E;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages
  },
  render: createGallery,
  play: async ({
    canvasElement
  }) => {
    const gallery = canvasElement.querySelector('.aural-gallery');

    // Verify gallery exists
    await expect(gallery).toBeTruthy();

    // Verify correct column class
    await expect(gallery?.classList.contains('aural-gallery--cols-3')).toBe(true);

    // Verify items have tabindex
    const items = canvasElement.querySelectorAll('.aural-gallery__item');
    await expect(items.length).toBe(6);
    await expect(items[0].getAttribute('tabindex')).toBe('0');
  }
}`,...(L=(z=r.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:`## Default Gallery

A basic 3-column grid gallery with hover overlays showing image titles and descriptions.
Items are keyboard focusable with tabindex="0".`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var $,O,B,S,A;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    columns: '2',
    withOverlay: true,
    withTabindex: true,
    images: natureImages.slice(0, 4)
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Two-column grid layout ideal for larger images and more prominent content.'
      }
    }
  }
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:`## Grid Layouts

Different grid column configurations from 2 to 4 columns.`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var G,P,T;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Standard three-column grid providing good balance between density and image size.'
      }
    }
  }
}`,...(T=(P=f.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,j,W;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: '4',
    withOverlay: false,
    withTabindex: false,
    images: abstractImages
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Four-column grid for compact display. Often used without overlays for simple thumbnail grids.'
      }
    }
  }
}`,...(W=(j=w.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var N,M,R,q,F;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Hover over images to reveal overlay content. Overlays include titles and descriptions.'
      }
    }
  }
}`,...(R=(M=l.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:`## With Overlays

Gallery with hover overlays displaying titles and descriptions.`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var U,K,V,Z,H;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: false,
    withTabindex: false,
    images: natureImages.map(img => ({
      src: img.src,
      alt: img.alt
    }))
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Clean gallery without overlays. Best for pure image display without additional context.'
      }
    }
  }
}`,...(V=(K=c.parameters)==null?void 0:K.docs)==null?void 0:V.source},description:{story:`## Without Overlays

Simple image grid without hover overlays - clean and minimal.`,...(H=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:H.description}}};var X,Y,J,Q,ee;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: productImages
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Product showcase with pricing information in overlays. Perfect for e-commerce catalogs.'
      }
    }
  }
}`,...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:`## Product Gallery Pattern

E-commerce product gallery with prices displayed on hover.`,...(ee=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:ee.description}}};var te,ae,ie,ne,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    columns: '2',
    withOverlay: true,
    withTabindex: true,
    images: portfolioImages
  },
  render: createGallery,
  parameters: {
    docs: {
      description: {
        story: 'Portfolio layout with larger images. Overlays show project names and categories.'
      }
    }
  }
}`,...(ie=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:`## Portfolio Gallery Pattern

Portfolio showcase with project titles and categories.`,...(oe=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var re,se,le,ce,de;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages
  },
  render: args => {
    const gallery = createGallery(args);
    return \`
      \${gallery}
      <style>
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .lightbox.active {
          opacity: 1;
          pointer-events: all;
        }

        .lightbox__content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox__image {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox__close,
        .lightbox__prev,
        .lightbox__next {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .lightbox__close:hover,
        .lightbox__prev:hover,
        .lightbox__next:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .lightbox__close {
          top: 20px;
          right: 20px;
        }

        .lightbox__prev {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox__next {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox__counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
        }

        .lightbox__caption {
          position: absolute;
          bottom: 60px;
          left: 20px;
          right: 20px;
          text-align: center;
          color: white;
        }

        .lightbox__title {
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          margin-bottom: 4px;
        }

        .lightbox__description {
          font-size: var(--text-sm);
          opacity: 0.8;
        }
      </style>

      <div class="lightbox" id="lightbox">
        <div class="lightbox__content">
          <img class="lightbox__image" id="lightbox-image" src="" alt="">
          <button class="lightbox__close" id="lightbox-close" aria-label="Close lightbox">
            <i data-lucide="x"></i>
          </button>
          <button class="lightbox__prev" id="lightbox-prev" aria-label="Previous image">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="lightbox__next" id="lightbox-next" aria-label="Next image">
            <i data-lucide="chevron-right"></i>
          </button>
          <div class="lightbox__counter" id="lightbox-counter">1 / 6</div>
          <div class="lightbox__caption" id="lightbox-caption">
            <div class="lightbox__title"></div>
            <div class="lightbox__description"></div>
          </div>
        </div>
      </div>

      <script type="module">
        (function() {
          const galleryItems = document.querySelectorAll('.aural-gallery__item');
          const lightbox = document.getElementById('lightbox');
          const lightboxImage = document.getElementById('lightbox-image');
          const lightboxCounter = document.getElementById('lightbox-counter');
          const lightboxCaption = document.getElementById('lightbox-caption');
          const closeBtn = document.getElementById('lightbox-close');
          const prevBtn = document.getElementById('lightbox-prev');
          const nextBtn = document.getElementById('lightbox-next');

          let currentIndex = 0;
          const images = \${JSON.stringify(args.images)};

          function openLightbox(index) {
            currentIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Initialize Lucide icons
            if (window.lucide) {
              window.lucide.createIcons();
            }
          }

          function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
          }

          function updateLightbox() {
            const image = images[currentIndex];
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCounter.textContent = \\\`\\\${currentIndex + 1} / \\\${images.length}\\\`;

            const titleEl = lightboxCaption.querySelector('.lightbox__title');
            const descEl = lightboxCaption.querySelector('.lightbox__description');
            titleEl.textContent = image.title || '';
            descEl.textContent = image.description || '';
          }

          function navigate(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            updateLightbox();
          }

          // Add click handlers to gallery items
          galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
            item.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            });
          });

          // Lightbox controls
          closeBtn.addEventListener('click', closeLightbox);
          prevBtn.addEventListener('click', () => navigate(-1));
          nextBtn.addEventListener('click', () => navigate(1));

          // Click outside to close
          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
              closeLightbox();
            }
          });

          // Keyboard navigation
          document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
          });
        })();
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Click any image to open the lightbox. Navigate with arrow keys or buttons. Shows image counter and captions.'
      }
    }
  }
}`,...(le=(se=g.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:`## With Lightbox Navigation

Gallery with lightbox functionality, navigation controls, and zoom.`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var me,ge,ue,pe,he;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages
  },
  render: args => {
    return \`
      <div style="position: relative;">
        <div style="position: absolute; top: -40px; right: 0; color: var(--color-text-secondary); font-size: var(--text-sm);">
          <i data-lucide="images" style="width: 16px; height: 16px; vertical-align: middle;"></i>
          \${args.images.length} images
        </div>
        \${createGallery(args)}
      </div>
      <script type="module">
        if (window.lucide) {
          window.lucide.createIcons();
        }
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Display total image count above the gallery.'
      }
    }
  }
}`,...(ue=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:ue.source},description:{story:`## With Image Counter

Gallery with visible image count indicator.`,...(he=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};var ye,be,ve,xe,fe;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: false,
    withTabindex: true,
    images: natureImages.slice(0, 3)
  },
  render: args => {
    const items = args.images.map(image => {
      return \`
        <div>
          <div class="aural-gallery__item" tabindex="0">
            <img class="aural-gallery__image" src="\${image.src}" alt="\${image.alt}">
          </div>
          <div style="margin-top: var(--space-2); text-align: center;">
            <div style="font-weight: var(--font-semibold); color: var(--color-text-primary); margin-bottom: 2px;">
              \${image.title}
            </div>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">
              \${image.description}
            </div>
          </div>
        </div>
      \`;
    }).join('');
    return \`
      <div class="aural-gallery aural-gallery--cols-\${args.columns}">
        \${items}
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternative layout with captions always visible below images.'
      }
    }
  }
}`,...(ve=(be=p.parameters)==null?void 0:be.docs)==null?void 0:ve.source},description:{story:`## With Captions Below

Gallery with captions displayed below images instead of overlays.`,...(fe=(xe=p.parameters)==null?void 0:xe.docs)==null?void 0:fe.description}}};var we,_e,ke,Ie,ze;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: [{
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop',
      alt: 'Ocean sunset',
      title: 'Ocean Sunset',
      description: 'Golden hour'
    }, {
      src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=250&fit=crop',
      alt: 'Forest trail',
      title: 'Forest Path',
      description: 'Woodland'
    }, {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=350&fit=crop',
      alt: 'Northern lights',
      title: 'Aurora',
      description: 'Northern lights'
    }, {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
      alt: 'Desert dunes',
      title: 'Desert',
      description: 'Sand dunes'
    }, {
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=450&fit=crop',
      alt: 'Mountain lake',
      title: 'Alpine Lake',
      description: 'Crystal water'
    }, {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=280&fit=crop',
      alt: 'Snowy peaks',
      title: 'Mountain',
      description: 'Snow summit'
    }]
  },
  render: args => {
    const items = args.images.map(image => {
      return \`
        <div class="aural-gallery__item" tabindex="0">
          <img class="aural-gallery__image" src="\${image.src}" alt="\${image.alt}" style="height: auto;">
          <div class="aural-gallery__overlay">
            <div class="aural-gallery__title">\${image.title}</div>
            <div class="aural-gallery__description">\${image.description}</div>
          </div>
        </div>
      \`;
    }).join('');
    return \`
      <style>
        .masonry-gallery {
          column-count: 3;
          column-gap: var(--space-4);
        }

        .masonry-gallery .aural-gallery__item {
          break-inside: avoid;
          margin-bottom: var(--space-4);
          display: inline-block;
          width: 100%;
        }

        @media (max-width: 768px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        @media (max-width: 480px) {
          .masonry-gallery {
            column-count: 1;
          }
        }
      </style>

      <div class="masonry-gallery">
        \${items}
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Masonry layout with variable height images creating a Pinterest-style grid.'
      }
    }
  }
}`,...(ke=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:ke.source},description:{story:`## Masonry Layout

Pinterest-style masonry layout with variable height images.`,...(ze=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:ze.description}}};var Le,Ce,Ee,$e,Oe;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages.slice(0, 3)
  },
  render: args => {
    const gallery = createGallery(args);
    return \`
      \${gallery}
      <style>
        .zoom-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .zoom-lightbox.active {
          display: flex;
        }

        .zoom-lightbox__container {
          position: relative;
          overflow: auto;
          max-width: 90vw;
          max-height: 90vh;
        }

        .zoom-lightbox__image {
          display: block;
          max-width: 100%;
          transition: transform 0.3s ease;
          cursor: zoom-in;
        }

        .zoom-lightbox__image.zoomed {
          cursor: zoom-out;
        }

        .zoom-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: var(--space-2);
          background: rgba(0, 0, 0, 0.7);
          padding: var(--space-2);
          border-radius: var(--radius-md);
        }

        .zoom-btn {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .zoom-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .zoom-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>

      <div class="zoom-lightbox" id="zoom-lightbox">
        <div class="zoom-lightbox__container" id="zoom-container">
          <img class="zoom-lightbox__image" id="zoom-image" src="" alt="">
        </div>
        <button class="zoom-close" id="zoom-close" aria-label="Close">
          <i data-lucide="x"></i>
        </button>
        <div class="zoom-controls">
          <button class="zoom-btn" id="zoom-in" aria-label="Zoom in">
            <i data-lucide="zoom-in"></i>
          </button>
          <button class="zoom-btn" id="zoom-out" aria-label="Zoom out">
            <i data-lucide="zoom-out"></i>
          </button>
          <button class="zoom-btn" id="zoom-reset" aria-label="Reset zoom">
            <i data-lucide="maximize-2"></i>
          </button>
        </div>
      </div>

      <script type="module">
        (function() {
          const items = document.querySelectorAll('.aural-gallery__item');
          const lightbox = document.getElementById('zoom-lightbox');
          const image = document.getElementById('zoom-image');
          const closeBtn = document.getElementById('zoom-close');
          const zoomInBtn = document.getElementById('zoom-in');
          const zoomOutBtn = document.getElementById('zoom-out');
          const zoomResetBtn = document.getElementById('zoom-reset');

          let scale = 1;

          function openLightbox(src, alt) {
            image.src = src;
            image.alt = alt;
            lightbox.classList.add('active');
            scale = 1;
            image.style.transform = \\\`scale(\\\${scale})\\\`;

            if (window.lucide) {
              window.lucide.createIcons();
            }
          }

          function closeLightbox() {
            lightbox.classList.remove('active');
          }

          function zoom(delta) {
            scale = Math.max(0.5, Math.min(3, scale + delta));
            image.style.transform = \\\`scale(\\\${scale})\\\`;
            image.classList.toggle('zoomed', scale > 1);
          }

          items.forEach(item => {
            item.addEventListener('click', () => {
              const img = item.querySelector('.aural-gallery__image');
              openLightbox(img.src, img.alt);
            });
          });

          closeBtn.addEventListener('click', closeLightbox);
          zoomInBtn.addEventListener('click', () => zoom(0.25));
          zoomOutBtn.addEventListener('click', () => zoom(-0.25));
          zoomResetBtn.addEventListener('click', () => {
            scale = 1;
            image.style.transform = 'scale(1)';
            image.classList.remove('zoomed');
          });

          image.addEventListener('click', () => {
            if (scale === 1) zoom(0.5);
            else {
              scale = 1;
              image.style.transform = 'scale(1)';
              image.classList.remove('zoomed');
            }
          });

          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
          });
        })();
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lightbox with zoom controls. Click image to toggle zoom, or use the zoom buttons.'
      }
    }
  }
}`,...(Ee=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source},description:{story:`## With Zoom Controls

Gallery with zoom functionality in lightbox view.`,...(Oe=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:Oe.description}}};var Be,Se,Ae,Ge,Pe;b.parameters={...b.parameters,docs:{...(Be=b.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages.slice(0, 3)
  },
  render: args => {
    const items = args.images.map((image, index) => {
      return \`
        <div
          class="aural-gallery__item"
          tabindex="0"
          role="button"
          aria-label="\${image.title}: \${image.description}"
          data-index="\${index}"
        >
          <img class="aural-gallery__image" src="\${image.src}" alt="\${image.alt}">
          <div class="aural-gallery__overlay">
            <div class="aural-gallery__title">\${image.title}</div>
            <div class="aural-gallery__description">\${image.description}</div>
          </div>
        </div>
      \`;
    }).join('');
    return \`
      <div
        class="aural-gallery aural-gallery--cols-\${args.columns}"
        role="region"
        aria-label="Photo gallery"
      >
        \${items}
      </div>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style="position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;"
      >
        <span id="gallery-status"></span>
      </div>

      <script type="module">
        (function() {
          const items = document.querySelectorAll('.aural-gallery__item');
          const status = document.getElementById('gallery-status');

          items.forEach((item, index) => {
            item.addEventListener('focus', () => {
              const label = item.getAttribute('aria-label');
              status.textContent = \\\`Image \\\${index + 1} of \\\${items.length}: \\\${label}\\\`;
            });

            item.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                status.textContent = \\\`Opening \\\${item.getAttribute('aria-label')}\\\`;
              }

              // Arrow key navigation
              if (e.key === 'ArrowRight' && index < items.length - 1) {
                e.preventDefault();
                items[index + 1].focus();
              }
              if (e.key === 'ArrowLeft' && index > 0) {
                e.preventDefault();
                items[index - 1].focus();
              }
            });
          });
        })();
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Full accessibility support with ARIA labels, keyboard navigation (arrow keys), and screen reader announcements.'
      }
    }
  }
}`,...(Ae=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:`## Accessibility Features

Gallery demonstrating full accessibility support with ARIA labels and keyboard navigation.`,...(Pe=(Ge=b.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.description}}};var Te,De,je,We,Ne;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    columns: '3',
    withOverlay: true,
    withTabindex: true,
    images: natureImages.slice(0, 6)
  },
  render: args => {
    const themes = ['dark', 'light', 'neon', 'prismatic', 'minimal', 'warm', 'kinetic'];
    const gallery = createGallery(args);
    return \`
      <style>
        .theme-grid {
          display: grid;
          gap: var(--space-8);
        }

        .theme-example {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-border-subtle);
        }

        .theme-label {
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
          margin-bottom: var(--space-4);
        }
      </style>

      <div class="theme-grid">
        \${themes.map(theme => \`
          <div class="theme-example" data-theme="\${theme}">
            <div class="theme-label">\${theme} Theme</div>
            \${gallery}
          </div>
        \`).join('')}
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Compare how the Image Gallery component appears across all available Aural UI themes.'
      }
    }
  }
}`,...(je=(De=v.parameters)==null?void 0:De.docs)==null?void 0:je.source},description:{story:`## Theme Comparison

View the Image Gallery component across all Aural UI themes.`,...(Ne=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Ne.description}}};const Ze=["Default","TwoColumns","ThreeColumns","FourColumns","WithOverlays","WithoutOverlays","ProductGallery","PortfolioGallery","WithLightbox","WithCounter","WithCaptionsBelow","MasonryLayout","WithZoom","AccessibilityFeatures","ThemeComparison"];export{b as AccessibilityFeatures,r as Default,w as FourColumns,h as MasonryLayout,m as PortfolioGallery,d as ProductGallery,v as ThemeComparison,f as ThreeColumns,s as TwoColumns,p as WithCaptionsBelow,u as WithCounter,g as WithLightbox,l as WithOverlays,y as WithZoom,c as WithoutOverlays,Ze as __namedExportsOrder,Ve as default};
