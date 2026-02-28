import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Data Display/Skeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Animated loading placeholders that mimic the structure of content before it loads, improving perceived performance and user experience.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rect', 'custom'],
      description: 'Skeleton shape variant'
    },
    width: {
      control: 'text',
      description: 'Width (CSS value, e.g., "200px", "80%")'
    },
    height: {
      control: 'text',
      description: 'Height (CSS value, e.g., "20px", "100px")'
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation style (default uses system animation)'
    },
    count: {
      control: 'number',
      description: 'Number of skeleton elements to display',
      min: 1,
      max: 10
    }
  }
};

export default meta;
type Story = StoryObj;

export const Text: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading content');

    const count = args.count || 3;
    const widths = ['100%', '80%', '60%'];

    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-text';
      if (args.width) {
        skeleton.style.width = args.width;
      } else if (i < widths.length) {
        skeleton.style.width = widths[i];
      }
      if (args.height) {
        skeleton.style.height = args.height;
      }
      container.appendChild(skeleton);
    }

    // Screen reader text
    const srText = document.createElement('span');
    srText.className = 'sr-only';
    srText.textContent = 'Loading content...';
    container.appendChild(srText);

    return container;
  },
  args: {
    variant: 'text',
    count: 3,
    width: '',
    height: ''
  }
};

export const Circle: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading avatars');

    const count = args.count || 3;
    const size = args.width || args.height || '48px';

    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-circle';
      skeleton.style.width = size;
      skeleton.style.height = size;
      container.appendChild(skeleton);
    }

    return container;
  },
  args: {
    variant: 'circle',
    count: 3,
    width: '48px',
    height: '48px'
  }
};

export const Rectangle: Story = {
  render: (args) => {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton skeleton-rect';
    skeleton.style.width = args.width || '300px';
    skeleton.style.height = args.height || '200px';
    skeleton.style.borderRadius = 'var(--radius-md)';
    skeleton.setAttribute('aria-busy', 'true');
    skeleton.setAttribute('aria-label', 'Loading image');

    return skeleton;
  },
  args: {
    variant: 'rect',
    width: '300px',
    height: '200px'
  }
};

export const Avatar: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading user profile');

    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '48px';
    avatar.style.height = '48px';
    avatar.style.flexShrink = '0';

    const textContainer = document.createElement('div');
    textContainer.style.flex = '1';
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.gap = 'var(--space-2)';

    const name = document.createElement('div');
    name.className = 'skeleton skeleton-text';
    name.style.width = '40%';

    const email = document.createElement('div');
    email.className = 'skeleton skeleton-text';
    email.style.width = '60%';

    textContainer.appendChild(name);
    textContainer.appendChild(email);

    container.appendChild(avatar);
    container.appendChild(textContainer);

    return container;
  }
};

export const Card: Story = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';
    card.setAttribute('aria-busy', 'true');
    card.setAttribute('aria-label', 'Loading card content');

    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '200px';
    image.style.borderRadius = 'var(--radius-md) var(--radius-md) 0 0';

    const body = document.createElement('div');
    body.style.padding = 'var(--space-4)';

    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '70%';
    title.style.height = '24px';
    title.style.marginBottom = 'var(--space-3)';

    const line1 = document.createElement('div');
    line1.className = 'skeleton skeleton-text';
    line1.style.width = '100%';
    line1.style.marginBottom = 'var(--space-2)';

    const line2 = document.createElement('div');
    line2.className = 'skeleton skeleton-text';
    line2.style.width = '90%';
    line2.style.marginBottom = 'var(--space-4)';

    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = 'var(--space-3)';

    const button1 = document.createElement('div');
    button1.className = 'skeleton skeleton-rect';
    button1.style.width = '80px';
    button1.style.height = '36px';
    button1.style.borderRadius = 'var(--radius-sm)';

    const button2 = document.createElement('div');
    button2.className = 'skeleton skeleton-rect';
    button2.style.width = '80px';
    button2.style.height = '36px';
    button2.style.borderRadius = 'var(--radius-sm)';

    buttonGroup.appendChild(button1);
    buttonGroup.appendChild(button2);

    body.appendChild(title);
    body.appendChild(line1);
    body.appendChild(line2);
    body.appendChild(buttonGroup);

    card.appendChild(image);
    card.appendChild(body);

    return card;
  }
};

export const Table: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-3)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading table data');

    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '2fr 1fr 1fr 80px';
      row.style.gap = 'var(--space-6)';
      row.style.padding = 'var(--space-3)';
      row.style.borderBottom = '1px solid var(--color-border-subtle)';

      const widths = ['70%', '80%', '65%', '60px'];
      widths.forEach((width, index) => {
        const cell = document.createElement('div');
        if (index === 3) {
          cell.className = 'skeleton skeleton-rect';
          cell.style.height = '24px';
          cell.style.borderRadius = 'var(--radius-sm)';
        } else {
          cell.className = 'skeleton skeleton-text';
        }
        cell.style.width = width;
        row.appendChild(cell);
      });

      container.appendChild(row);
    }

    return container;
  }
};

export const List: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading list items');

    const nameWidths = ['40%', '50%', '35%', '45%'];

    for (let i = 0; i < 4; i++) {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-6)';
      item.style.alignItems = 'center';
      item.style.padding = 'var(--space-4)';
      item.style.background = 'var(--color-bg-primary)';
      item.style.borderRadius = 'var(--radius-md)';

      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';

      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';

      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = nameWidths[i];

      const description = document.createElement('div');
      description.className = 'skeleton skeleton-text';
      description.style.width = '70%';

      textContainer.appendChild(name);
      textContainer.appendChild(description);

      const icon = document.createElement('div');
      icon.className = 'skeleton skeleton-rect';
      icon.style.width = '24px';
      icon.style.height = '24px';
      icon.style.borderRadius = 'var(--radius-sm)';
      icon.style.flexShrink = '0';

      item.appendChild(avatar);
      item.appendChild(textContainer);
      item.appendChild(icon);

      container.appendChild(item);
    }

    return container;
  }
};

export const Form: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '500px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading form');

    for (let i = 0; i < 3; i++) {
      const field = document.createElement('div');
      field.style.display = 'flex';
      field.style.flexDirection = 'column';
      field.style.gap = 'var(--space-2)';

      const label = document.createElement('div');
      label.className = 'skeleton skeleton-text';
      label.style.width = '30%';
      label.style.height = '14px';

      const input = document.createElement('div');
      input.className = 'skeleton skeleton-rect';
      input.style.width = '100%';
      input.style.height = '44px';
      input.style.borderRadius = 'var(--radius-md)';

      field.appendChild(label);
      field.appendChild(input);

      container.appendChild(field);
    }

    const button = document.createElement('div');
    button.className = 'skeleton skeleton-rect';
    button.style.width = '120px';
    button.style.height = '44px';
    button.style.borderRadius = 'var(--radius-md)';
    button.style.marginTop = 'var(--space-4)';

    container.appendChild(button);

    return container;
  }
};

export const ArticlePreview: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '700px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading article');

    // Header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.gap = 'var(--space-6)';
    header.style.alignItems = 'center';

    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '40px';
    avatar.style.height = '40px';

    const authorInfo = document.createElement('div');
    authorInfo.style.flex = '1';
    authorInfo.style.display = 'flex';
    authorInfo.style.flexDirection = 'column';
    authorInfo.style.gap = 'var(--space-2)';

    const author = document.createElement('div');
    author.className = 'skeleton skeleton-text';
    author.style.width = '30%';

    const date = document.createElement('div');
    date.className = 'skeleton skeleton-text';
    date.style.width = '20%';
    date.style.height = '12px';

    authorInfo.appendChild(author);
    authorInfo.appendChild(date);

    header.appendChild(avatar);
    header.appendChild(authorInfo);

    // Title
    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '80%';
    title.style.height = '32px';

    // Excerpt
    const excerpt = document.createElement('div');
    excerpt.style.display = 'flex';
    excerpt.style.flexDirection = 'column';
    excerpt.style.gap = 'var(--space-2)';

    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'skeleton skeleton-text';
      line.style.width = i === 2 ? '70%' : '100%';
      excerpt.appendChild(line);
    }

    // Image
    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '300px';
    image.style.borderRadius = 'var(--radius-md)';

    // Tags
    const tags = document.createElement('div');
    tags.style.display = 'flex';
    tags.style.gap = 'var(--space-3)';

    for (let i = 0; i < 3; i++) {
      const tag = document.createElement('div');
      tag.className = 'skeleton skeleton-rect';
      tag.style.width = '60px';
      tag.style.height = '24px';
      tag.style.borderRadius = 'var(--radius-full)';
      tags.appendChild(tag);
    }

    container.appendChild(header);
    container.appendChild(title);
    container.appendChild(excerpt);
    container.appendChild(image);
    container.appendChild(tags);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = 'var(--space-6)';
      container.style.alignItems = 'center';
      container.setAttribute('aria-busy', 'true');
      container.setAttribute('aria-label', 'Loading content');

      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';

      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';

      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '60%';

      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '80%';

      textContainer.appendChild(line1);
      textContainer.appendChild(line2);

      container.appendChild(avatar);
      container.appendChild(textContainer);

      return container;
    });
  }
};

export const LoadingSimulation: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '600px';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Load Content';
    button.style.marginBottom = 'var(--space-6)';

    const contentContainer = document.createElement('div');

    button.addEventListener('click', () => {
      button.disabled = true;
      button.textContent = 'Loading...';

      // Show skeleton
      contentContainer.innerHTML = '';
      contentContainer.setAttribute('aria-busy', 'true');
      contentContainer.setAttribute('aria-live', 'polite');

      const card = document.createElement('div');
      card.className = 'card';

      const cardBody = document.createElement('div');
      cardBody.style.padding = 'var(--space-4)';

      const header = document.createElement('div');
      header.style.display = 'flex';
      header.style.gap = 'var(--space-6)';
      header.style.alignItems = 'center';
      header.style.marginBottom = 'var(--space-4)';

      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';

      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';

      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = '40%';

      const role = document.createElement('div');
      role.className = 'skeleton skeleton-text';
      role.style.width = '60%';

      textContainer.appendChild(name);
      textContainer.appendChild(role);

      header.appendChild(avatar);
      header.appendChild(textContainer);

      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '100%';
      line1.style.marginBottom = 'var(--space-2)';

      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '90%';
      line2.style.marginBottom = 'var(--space-2)';

      const line3 = document.createElement('div');
      line3.className = 'skeleton skeleton-text';
      line3.style.width = '70%';

      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = 'Loading user profile...';

      cardBody.appendChild(header);
      cardBody.appendChild(line1);
      cardBody.appendChild(line2);
      cardBody.appendChild(line3);
      cardBody.appendChild(srText);

      card.appendChild(cardBody);
      contentContainer.appendChild(card);

      // Load actual content after 2 seconds
      setTimeout(() => {
        contentContainer.removeAttribute('aria-busy');
        contentContainer.innerHTML = '';

        const loadedCard = document.createElement('div');
        loadedCard.className = 'card';

        const loadedBody = document.createElement('div');
        loadedBody.style.padding = 'var(--space-4)';

        const loadedHeader = document.createElement('div');
        loadedHeader.style.display = 'flex';
        loadedHeader.style.gap = 'var(--space-6)';
        loadedHeader.style.alignItems = 'center';
        loadedHeader.style.marginBottom = 'var(--space-4)';

        const loadedAvatar = document.createElement('div');
        loadedAvatar.style.width = '48px';
        loadedAvatar.style.height = '48px';
        loadedAvatar.style.borderRadius = '50%';
        loadedAvatar.style.background = 'var(--color-primary)';
        loadedAvatar.style.display = 'flex';
        loadedAvatar.style.alignItems = 'center';
        loadedAvatar.style.justifyContent = 'center';
        loadedAvatar.style.color = 'white';
        loadedAvatar.style.fontWeight = 'var(--font-semibold)';
        loadedAvatar.textContent = 'JD';

        const loadedTextContainer = document.createElement('div');
        loadedTextContainer.style.flex = '1';

        const loadedName = document.createElement('div');
        loadedName.style.fontWeight = 'var(--font-semibold)';
        loadedName.style.color = 'var(--color-text-primary)';
        loadedName.style.marginBottom = 'var(--space-1)';
        loadedName.textContent = 'John Doe';

        const loadedRole = document.createElement('div');
        loadedRole.style.fontSize = 'var(--text-sm)';
        loadedRole.style.color = 'var(--color-text-secondary)';
        loadedRole.textContent = 'Product Designer';

        loadedTextContainer.appendChild(loadedName);
        loadedTextContainer.appendChild(loadedRole);

        loadedHeader.appendChild(loadedAvatar);
        loadedHeader.appendChild(loadedTextContainer);

        const loadedText = document.createElement('p');
        loadedText.style.color = 'var(--color-text-secondary)';
        loadedText.style.lineHeight = '1.6';
        loadedText.style.margin = '0';
        loadedText.textContent = 'Passionate about creating beautiful and functional user interfaces. Love working with modern design systems and accessibility-first approaches.';

        loadedBody.appendChild(loadedHeader);
        loadedBody.appendChild(loadedText);

        loadedCard.appendChild(loadedBody);
        contentContainer.appendChild(loadedCard);

        button.disabled = false;
        button.textContent = 'Load Content';

        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Content loaded successfully';
        contentContainer.appendChild(announcement);
      }, 2000);
    });

    wrapper.appendChild(button);
    wrapper.appendChild(contentContainer);

    return wrapper;
  }
};
