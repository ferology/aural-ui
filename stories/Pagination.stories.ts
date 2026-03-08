import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Pagination Component

Navigation controls for browsing through multiple pages of content, providing clear wayfinding in large datasets and collections.

Use Pagination when displaying large sets of data (search results, product catalogs, blog posts, table rows) that need to be split across multiple pages to maintain performance and usability. Unlike infinite scroll, Pagination gives users control over their position, allows jumping to specific pages, and provides a sense of the total dataset size.

Pagination components balance between showing enough page options for easy navigation while avoiding overwhelming users with too many buttons. They support previous/next navigation for sequential browsing, direct page jumps for targeted access, and first/last shortcuts for extreme navigation. Ellipsis (...) indicates hidden pages when the total count is large.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="pagination" aria-label="Pagination">
  <!-- Previous button -->
  <a
    href="?page=1"
    class="pagination-prev"
    aria-label="Go to previous page"
  >
    <i data-lucide="chevron-left" aria-hidden="true"></i>
    Previous
  </a>

  <!-- Always show first page -->
  <a href="?page=1" class="pagination-item" aria-label="Go to page 1">
    1
  </a>

  <!-- Ellipsis for skipped pages -->
  <span class="pagination-ellipsis" aria-hidden="true">...</span>

  <!-- Sibling pages around current -->
  <a href="?page=4" class="pagination-item" aria-label="Go to page 4">
    4
  </a>
  <a
    href="?page=5"
    class="pagination-item pagination-active"
    aria-current="page"
    aria-label="Current page, page 5"
  >
    5
  </a>
  <a href="?page=6" class="pagination-item" aria-label="Go to page 6">
    6
  </a>

  <span class="pagination-ellipsis" aria-hidden="true">...</span>

  <!-- Always show last page -->
  <a href="?page=20" class="pagination-item" aria-label="Go to page 20">
    20
  </a>

  <!-- Next button -->
  <a
    href="?page=6"
    class="pagination-next"
    aria-label="Go to next page"
  >
    Next
    <i data-lucide="chevron-right" aria-hidden="true"></i>
  </a>
</nav>

<script>
  // Initialize Lucide icons
  lucide.createIcons();
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showPrevNextText?: boolean;
  variant?: 'default' | 'rounded' | 'simple' | 'compact';
  size?: 'sm' | 'md' | 'lg';
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  showPrevNextText = true,
  variant = 'default',
  size = 'md'
}: PaginationProps) {
  const generatePageRange = () => {
    const range: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    if (showFirstLast) {
      range.push(1);

      const leftSibling = Math.max(currentPage - siblingCount, 2);
      const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

      if (leftSibling > 2) range.push('...');

      for (let i = leftSibling; i <= rightSibling; i++) {
        range.push(i);
      }

      if (rightSibling < totalPages - 1) range.push('...');

      range.push(totalPages);
    } else {
      const leftBound = Math.max(1, currentPage - siblingCount);
      const rightBound = Math.min(totalPages, currentPage + siblingCount);

      for (let i = leftBound; i <= rightBound; i++) {
        range.push(i);
      }
    }

    return range;
  };

  const pages = generatePageRange();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, page: number) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handlePageChange(page);
        break;
      case 'ArrowLeft':
        if (currentPage > 1) handlePageChange(currentPage - 1);
        break;
      case 'ArrowRight':
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
        break;
      case 'Home':
        handlePageChange(1);
        break;
      case 'End':
        handlePageChange(totalPages);
        break;
    }
  };

  return (
    <nav
      className={\`pagination pagination-\${variant} pagination-\${size}\`}
      aria-label="Pagination"
    >
      {showPrevNext && (
        <button
          className={\`pagination-prev \${
            currentPage === 1 ? 'pagination-disabled' : ''
          }\`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label={currentPage === 1 ? 'No previous page' : 'Go to previous page'}
        >
          <ChevronLeft aria-hidden="true" />
          {showPrevNextText && ' Previous'}
        </button>
      )}

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={\`ellipsis-\${index}\`} className="pagination-ellipsis" aria-hidden="true">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={\`pagination-item \${
              page === currentPage ? 'pagination-active' : ''
            }\`}
            onClick={() => handlePageChange(page as number)}
            onKeyDown={(e) => handleKeyDown(e, page as number)}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={
              page === currentPage
                ? \`Current page, page \${page}\`
                : \`Go to page \${page}\`
            }
          >
            {page}
          </button>
        )
      )}

      {showPrevNext && (
        <button
          className={\`pagination-next \${
            currentPage === totalPages ? 'pagination-disabled' : ''
          }\`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label={
            currentPage === totalPages ? 'No next page' : 'Go to next page'
          }
        >
          {showPrevNextText && 'Next '}
          <ChevronRight aria-hidden="true" />
        </button>
      )}
    </nav>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <nav :class="['pagination', \`pagination-\${variant}\`, \`pagination-\${size}\`]" aria-label="Pagination">
    <button
      v-if="showPrevNext"
      :class="['pagination-prev', { 'pagination-disabled': currentPage === 1 }]"
      @click="handlePageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      :aria-label="currentPage === 1 ? 'No previous page' : 'Go to previous page'"
    >
      <ChevronLeft aria-hidden="true" />
      <span v-if="showPrevNextText"> Previous</span>
    </button>

    <template v-for="(page, index) in pages" :key="index">
      <span v-if="page === '...'" class="pagination-ellipsis" aria-hidden="true">
        ...
      </span>
      <button
        v-else
        :class="['pagination-item', { 'pagination-active': page === currentPage }]"
        @click="handlePageChange(page)"
        @keydown="handleKeyDown($event, page)"
        :aria-current="page === currentPage ? 'page' : undefined"
        :aria-label="
          page === currentPage
            ? \`Current page, page \${page}\`
            : \`Go to page \${page}\`
        "
      >
        {{ page }}
      </button>
    </template>

    <button
      v-if="showPrevNext"
      :class="['pagination-next', { 'pagination-disabled': currentPage === totalPages }]"
      @click="handlePageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
      :aria-label="currentPage === totalPages ? 'No next page' : 'Go to next page'"
    >
      <span v-if="showPrevNextText">Next </span>
      <ChevronRight aria-hidden="true" />
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
    siblingCount: { type: Number, default: 1 },
    showFirstLast: { type: Boolean, default: true },
    showPrevNext: { type: Boolean, default: true },
    showPrevNextText: { type: Boolean, default: true },
    variant: { type: String, default: 'default' },
    size: { type: String, default: 'md' }
  },
  emits: ['pageChange'],
  computed: {
    pages() {
      const range = [];

      if (this.totalPages <= 7) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
        return range;
      }

      if (this.showFirstLast) {
        range.push(1);

        const leftSibling = Math.max(this.currentPage - this.siblingCount, 2);
        const rightSibling = Math.min(this.currentPage + this.siblingCount, this.totalPages - 1);

        if (leftSibling > 2) range.push('...');

        for (let i = leftSibling; i <= rightSibling; i++) {
          range.push(i);
        }

        if (rightSibling < this.totalPages - 1) range.push('...');

        range.push(this.totalPages);
      } else {
        const leftBound = Math.max(1, this.currentPage - this.siblingCount);
        const rightBound = Math.min(this.totalPages, this.currentPage + this.siblingCount);

        for (let i = leftBound; i <= rightBound; i++) {
          range.push(i);
        }
      }

      return range;
    }
  },
  methods: {
    handlePageChange(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('pageChange', page);
      }
    },
    handleKeyDown(e, page) {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.handlePageChange(page);
          break;
        case 'ArrowLeft':
          if (this.currentPage > 1) this.handlePageChange(this.currentPage - 1);
          break;
        case 'ArrowRight':
          if (this.currentPage < this.totalPages) this.handlePageChange(this.currentPage + 1);
          break;
        case 'Home':
          this.handlePageChange(1);
          break;
        case 'End':
          this.handlePageChange(this.totalPages);
          break;
      }
    }
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  export let currentPage = 1;
  export let totalPages = 10;
  export let siblingCount = 1;
  export let showFirstLast = true;
  export let showPrevNext = true;
  export let showPrevNextText = true;
  export let variant = 'default';
  export let size = 'md';

  $: pages = generatePageRange();

  function generatePageRange() {
    const range = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    if (showFirstLast) {
      range.push(1);

      const leftSibling = Math.max(currentPage - siblingCount, 2);
      const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

      if (leftSibling > 2) range.push('...');

      for (let i = leftSibling; i <= rightSibling; i++) {
        range.push(i);
      }

      if (rightSibling < totalPages - 1) range.push('...');

      range.push(totalPages);
    } else {
      const leftBound = Math.max(1, currentPage - siblingCount);
      const rightBound = Math.min(totalPages, currentPage + siblingCount);

      for (let i = leftBound; i <= rightBound; i++) {
        range.push(i);
      }
    }

    return range;
  }

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      currentPage = page;
    }
  }

  function handleKeyDown(e, page) {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handlePageChange(page);
        break;
      case 'ArrowLeft':
        if (currentPage > 1) handlePageChange(currentPage - 1);
        break;
      case 'ArrowRight':
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
        break;
      case 'Home':
        handlePageChange(1);
        break;
      case 'End':
        handlePageChange(totalPages);
        break;
    }
  }
</script>

<nav class="pagination pagination-{variant} pagination-{size}" aria-label="Pagination">
  {#if showPrevNext}
    <button
      class="pagination-prev"
      class:pagination-disabled={currentPage === 1}
      on:click={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label={currentPage === 1 ? 'No previous page' : 'Go to previous page'}
    >
      <ChevronLeft aria-hidden="true" />
      {#if showPrevNextText} Previous{/if}
    </button>
  {/if}

  {#each pages as page, index (index)}
    {#if page === '...'}
      <span class="pagination-ellipsis" aria-hidden="true">...</span>
    {:else}
      <button
        class="pagination-item"
        class:pagination-active={page === currentPage}
        on:click={() => handlePageChange(page)}
        on:keydown={(e) => handleKeyDown(e, page)}
        aria-current={page === currentPage ? 'page' : undefined}
        aria-label={page === currentPage
          ? \`Current page, page \${page}\`
          : \`Go to page \${page}\`}
      >
        {page}
      </button>
    {/if}
  {/each}

  {#if showPrevNext}
    <button
      class="pagination-next"
      class:pagination-disabled={currentPage === totalPages}
      on:click={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label={currentPage === totalPages ? 'No next page' : 'Go to next page'}
    >
      {#if showPrevNextText}Next {/if}
      <ChevronRight aria-hidden="true" />
    </button>
  {/if}
</nav>
\`\`\`

## Accessibility

- **Use <nav> with aria-label="Pagination"**: Identify the navigation region for screen readers to announce it as pagination controls
- **Set aria-current="page"**: Mark the current page button with aria-current="page" for clear screen reader announcement
- **Provide descriptive aria-label**: Label each page button ("Go to page 5") and current page ("Current page, page 5")
- **Previous/Next button labels**: Use "Go to previous page" and "Go to next page", or "No previous/next page" when disabled
- **Keyboard navigation**: Support Arrow Left/Right to navigate between pages, Home/End to jump to first/last page
- **Focus visibility**: Ensure visible focus indicators on all buttons (2px outline with 2px offset, high contrast)
- **Disabled state**: Set aria-disabled="true" and disabled attribute on previous/next buttons when at first/last page
- **Touch targets**: Make all buttons at least 44×44px for touch accessibility (page numbers, prev/next buttons)
- **Ellipsis accessibility**: Use aria-hidden="true" on ellipsis (...) as they are decorative, not interactive
- **Enter and Space keys**: Support both Enter and Space to activate page buttons for consistency
- **Live region updates**: Consider aria-live="polite" to announce page changes ("Showing page 5 of 20")
- **Avoid page refresh**: Use client-side routing or AJAX to load new content without full page reload
- **Keyboard shortcuts**: Support number keys (1-9) to jump to first 9 pages, optionally
- **Focus management**: Move focus to top of new content after page change, or to first result item
- **Compact mode icons**: If using icon-only prev/next buttons, ensure aria-label describes action clearly

## Usage Guidelines

- **When to use:**
  - Search results with 20+ items split across multiple pages
  - Product catalogs or listings with 50+ items
  - Data tables with many rows (50+ rows) for performance
  - Blog archives or article lists with numerous posts
  - Admin dashboards showing paginated records or logs

- **When NOT to use:**
  - Fewer than 20 items: Show all items on one page instead
  - Content that benefits from continuous scrolling: Use infinite scroll for social feeds
  - Step-by-step wizards: Use Stepper component for linear workflows
  - Tab-based content: Use Tabs for segmented, non-sequential content

- **Best practices:**
  - Show 5-7 page buttons maximum (including first/last) to avoid overwhelming users
  - Always display first and last page numbers with ellipsis (...) for context
  - Keep previous/next buttons visible and functional except when disabled
  - Display current page number clearly with distinct styling (background color, bold)
  - Show total page count or result count for user orientation ("Page 5 of 20" or "Showing 1-20 of 487 results")
  - Maintain page state in URL (e.g., ?page=5) for bookmarking and sharing
  - Provide items-per-page selector (10, 25, 50, 100) for user control
  - Consider server-side rendering for SEO and fast initial page load

- **Mobile considerations:**
  - Use compact variant with icon-only prev/next buttons to save horizontal space
  - Show fewer page buttons on mobile (e.g., 3-5 instead of 7) for narrower screens
  - Ensure touch targets are minimum 44×44px for all buttons
  - Consider sticky pagination at bottom of viewport for easier access
  - Test on narrow screens (320px width) to ensure buttons don't overflow or wrap

- **Page range logic:**
  - siblingCount: Number of page buttons shown on each side of current page (default: 1)
  - showFirstLast: Always show first and last page numbers with ellipsis (recommended: true)
  - Example with siblingCount=1 and currentPage=5: 1 ... 4 [5] 6 ... 20
  - Adjust siblingCount based on available space (mobile: 0-1, desktop: 1-2)
  - Show all pages if totalPages ≤ 7 to avoid unnecessary ellipsis
        `.trim(),
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 100 },
      description:
        'Current active page number (1-based index), highlighted with aria-current="page" and distinct styling',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description:
        'Total number of pages in the dataset, determines range of page buttons and when to disable next button',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description:
        'Number of page buttons to show on each side of current page (0 = only current, 1 = current ± 1, 2 = current ± 2). Recommended: 1 for mobile, 1-2 for desktop',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Pagination button size: sm (compact, 32px height), md (standard, 40px height), lg (prominent, 48px height)',
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'simple', 'compact'],
      description:
        'Visual style variant: default (bordered boxes), rounded (circular buttons), simple (minimal borders), compact (icon-only prev/next)',
    },
    showFirstLast: {
      control: 'boolean',
      description:
        'Always show first and last page numbers (1 and totalPages) with ellipsis (...) for omitted pages. Recommended: true for better orientation',
    },
    showPrevNext: {
      control: 'boolean',
      description:
        'Show Previous and Next navigation buttons (with arrow icons), disabled at first/last page respectively',
    },
    showPrevNextText: {
      control: 'boolean',
      description:
        'Show "Previous" and "Next" text labels in navigation buttons alongside icons. Set false for icon-only (saves space on mobile)',
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to generate page range
function generatePageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
  showFirstLast: boolean = true
): (number | string)[] {
  const range: (number | string)[] = [];

  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    return range;
  }

  if (showFirstLast) {
    // Always show first page
    range.push(1);

    // Calculate left and right sibling pages
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    if (showLeftDots) {
      range.push('...');
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      range.push(i);
    }

    if (showRightDots) {
      range.push('...');
    }

    // Always show last page
    range.push(totalPages);
  } else {
    const leftBound = Math.max(1, currentPage - siblingCount);
    const rightBound = Math.min(totalPages, currentPage + siblingCount);

    for (let i = leftBound; i <= rightBound; i++) {
      range.push(i);
    }
  }

  return range;
}

// Helper function to render pagination
function renderPagination(args: any): HTMLElement {
  const {
    currentPage = 1,
    totalPages = 10,
    siblingCount = 1,
    size = 'md',
    variant = 'default',
    showFirstLast = true,
    showPrevNext = true,
    showPrevNextText = true,
    onPageChange,
  } = args;

  const nav = document.createElement('nav');
  nav.className = 'pagination';
  nav.setAttribute('aria-label', 'Pagination');

  // Add variant class
  if (variant !== 'default') {
    nav.classList.add(`pagination-${variant}`);
  }

  // Add size class
  if (size !== 'md') {
    nav.classList.add(`pagination-${size}`);
  }

  // Previous button
  if (showPrevNext) {
    const prevBtn = document.createElement('a');
    prevBtn.href = '#';
    prevBtn.className = 'pagination-prev';
    prevBtn.setAttribute(
      'aria-label',
      currentPage === 1 ? 'No previous page' : 'Go to previous page'
    );

    if (currentPage === 1) {
      prevBtn.classList.add('pagination-disabled');
      prevBtn.setAttribute('aria-disabled', 'true');
    }

    const chevronLeft = document.createElement('i');
    chevronLeft.setAttribute('data-lucide', 'chevron-left');
    chevronLeft.setAttribute('aria-hidden', 'true');
    prevBtn.appendChild(chevronLeft);

    if (showPrevNextText) {
      prevBtn.appendChild(document.createTextNode(' Previous'));
    }

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1 && onPageChange) {
        onPageChange(currentPage - 1);
      }
    });

    nav.appendChild(prevBtn);
  }

  // Page numbers
  const pages = generatePageRange(currentPage, totalPages, siblingCount, showFirstLast);

  pages.forEach((page) => {
    if (page === '...') {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '...';
      ellipsis.setAttribute('aria-hidden', 'true');
      nav.appendChild(ellipsis);
    } else {
      const pageBtn = document.createElement('a');
      pageBtn.href = '#';
      pageBtn.className = 'pagination-item';
      pageBtn.textContent = String(page);

      if (page === currentPage) {
        pageBtn.classList.add('pagination-active');
        pageBtn.setAttribute('aria-current', 'page');
        pageBtn.setAttribute('aria-label', `Current page, page ${page}`);
      } else {
        pageBtn.setAttribute('aria-label', `Go to page ${page}`);
      }

      pageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (page !== currentPage && onPageChange) {
          onPageChange(page);
        }
      });

      nav.appendChild(pageBtn);
    }
  });

  // Next button
  if (showPrevNext) {
    const nextBtn = document.createElement('a');
    nextBtn.href = '#';
    nextBtn.className = 'pagination-next';
    nextBtn.setAttribute(
      'aria-label',
      currentPage === totalPages ? 'No next page' : 'Go to next page'
    );

    if (currentPage === totalPages) {
      nextBtn.classList.add('pagination-disabled');
      nextBtn.setAttribute('aria-disabled', 'true');
    }

    if (showPrevNextText) {
      nextBtn.appendChild(document.createTextNode('Next '));
    }

    const chevronRight = document.createElement('i');
    chevronRight.setAttribute('data-lucide', 'chevron-right');
    chevronRight.setAttribute('aria-hidden', 'true');
    nextBtn.appendChild(chevronRight);

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages && onPageChange) {
        onPageChange(currentPage + 1);
      }
    });

    nav.appendChild(nextBtn);
  }

  // Initialize Lucide icons after a short delay
  setTimeout(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, 0);

  return nav;
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const WithFirstLast: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const CompactView: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'compact',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: false,
  },
};

export const LargeDataset: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const Small: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'sm',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: false,
  },
};

export const Large: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    size: 'lg',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const FirstPage: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const LastPage: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => (args.currentPage = p),
        });
        container.replaceChild(newPagination, container.firstChild!);
      },
    });

    container.appendChild(pagination);
    return container;
  },
  args: {
    currentPage: 10,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';

    const variants = [
      { id: 'default', label: 'Default' },
      { id: 'rounded', label: 'Rounded' },
      { id: 'simple', label: 'Simple' },
      { id: 'compact', label: 'Compact' },
    ];

    variants.forEach((variant) => {
      const section = document.createElement('div');

      const label = document.createElement('p');
      label.textContent = variant.label;
      label.style.cssText =
        'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';

      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: 'md',
        variant: variant.id,
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: variant.id !== 'compact',
      });

      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });

    return container;
  },
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText =
      'display: flex; flex-direction: column; gap: 2rem; padding: 2rem; align-items: flex-start;';

    const sizes = [
      { id: 'sm', label: 'Small' },
      { id: 'md', label: 'Medium' },
      { id: 'lg', label: 'Large' },
    ];

    sizes.forEach((size) => {
      const section = document.createElement('div');

      const label = document.createElement('p');
      label.textContent = size.label;
      label.style.cssText =
        'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';

      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: size.id,
        variant: 'default',
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: size.id !== 'sm',
      });

      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });

    return container;
  },
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      return renderPagination(args);
    });
  },
  args: {
    currentPage: 2,
    totalPages: 10,
    siblingCount: 1,
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPrevNextText: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'simple', 'compact'],
      description: 'Pagination style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Pagination size',
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Current page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Pages shown around current',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last with ellipsis',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show prev/next buttons',
    },
    showPrevNextText: {
      control: 'boolean',
      description: 'Show text in prev/next',
    },
  },
};
