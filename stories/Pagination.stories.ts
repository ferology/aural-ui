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

Navigation controls for browsing through multiple pages of content. Essential for managing large datasets and improving user experience.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev" aria-label="Go to previous page">
    <i data-lucide="chevron-left"></i>
    Previous
  </a>
  <a href="#" class="pagination-item" aria-label="Go to page 1">1</a>
  <a href="#" class="pagination-item pagination-active" aria-current="page">2</a>
  <a href="#" class="pagination-item" aria-label="Go to page 3">3</a>
  <a href="#" class="pagination-next" aria-label="Go to next page">
    Next
    <i data-lucide="chevron-right"></i>
  </a>
</nav>
\`\`\`

**React:**
\`\`\`jsx
const [page, setPage] = useState(1);
<Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
\`\`\`

**Vue:**
\`\`\`vue
<Pagination :currentPage="page" :totalPages="10" @pageChange="page = $event" />
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Current active page number'
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages'
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Number of page buttons to show before and after current page'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Pagination size variant'
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'simple', 'compact'],
      description: 'Pagination visual style'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Always show first and last page numbers with ellipsis'
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show Previous/Next buttons'
    },
    showPrevNextText: {
      control: 'boolean',
      description: 'Show "Previous"/"Next" text in buttons (or just icons)'
    }
  }
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
    onPageChange
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
    prevBtn.setAttribute('aria-label', currentPage === 1 ? 'No previous page' : 'Go to previous page');

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
    nextBtn.setAttribute('aria-label', currentPage === totalPages ? 'No next page' : 'Go to next page');

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

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const WithFirstLast: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const CompactView: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: false
  }
};

export const LargeDataset: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const Small: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: false
  }
};

export const Large: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const FirstPage: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const LastPage: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    let pagination = renderPagination({
      ...args,
      onPageChange: (newPage: number) => {
        args.currentPage = newPage;
        const newPagination = renderPagination({
          ...args,
          onPageChange: (p: number) => args.currentPage = p
        });
        container.replaceChild(newPagination, container.firstChild!);
      }
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
    showPrevNextText: true
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';

    const variants = [
      { id: 'default', label: 'Default' },
      { id: 'rounded', label: 'Rounded' },
      { id: 'simple', label: 'Simple' },
      { id: 'compact', label: 'Compact' }
    ];

    variants.forEach(variant => {
      const section = document.createElement('div');

      const label = document.createElement('p');
      label.textContent = variant.label;
      label.style.cssText = 'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';

      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: 'md',
        variant: variant.id,
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: variant.id !== 'compact'
      });

      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem; align-items: flex-start;';

    const sizes = [
      { id: 'sm', label: 'Small' },
      { id: 'md', label: 'Medium' },
      { id: 'lg', label: 'Large' }
    ];

    sizes.forEach(size => {
      const section = document.createElement('div');

      const label = document.createElement('p');
      label.textContent = size.label;
      label.style.cssText = 'font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-bottom: 1rem;';

      const pagination = renderPagination({
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        size: size.id,
        variant: 'default',
        showFirstLast: false,
        showPrevNext: true,
        showPrevNextText: size.id !== 'sm'
      });

      section.appendChild(label);
      section.appendChild(pagination);
      container.appendChild(section);
    });

    return container;
  }
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
    showPrevNextText: true
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'simple', 'compact'],
      description: 'Pagination style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Pagination size'
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Current page number'
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages'
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Pages shown around current'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last with ellipsis'
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show prev/next buttons'
    },
    showPrevNextText: {
      control: 'boolean',
      description: 'Show text in prev/next'
    }
  }
};
