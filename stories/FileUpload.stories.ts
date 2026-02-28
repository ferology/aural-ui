import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/File Upload',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# File Upload Component

Drag-and-drop file upload with progress tracking, validation, and preview support.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="file-upload">
  <label class="file-upload__zone">
    <input type="file" class="file-upload__input" multiple>
    <div class="file-upload__content">
      <i data-lucide="upload" class="file-upload__icon"></i>
      <span class="file-upload__text">Drop files or click to browse</span>
    </div>
  </label>
  <div class="file-upload__list"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
const FileUpload = ({ onUpload, accept, multiple = false }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onUpload?.(selectedFiles);
  };

  return (
    <div className="file-upload">
      <label className="file-upload__zone">
        <input
          type="file"
          className="file-upload__input"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
        <div className="file-upload__content">
          <span className="file-upload__icon">📁</span>
          <span className="file-upload__text">Drop files or click to browse</span>
        </div>
      </label>
      <div className="file-upload__list">
        {files.map((file, i) => (
          <div key={i} className="file-upload__item">
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., "image/*", ".pdf,.doc")'
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    maxSize: {
      control: 'text',
      description: 'Maximum file size (e.g., "10MB")'
    },
    dragDrop: {
      control: 'boolean',
      description: 'Enable drag and drop functionality'
    },
    showPreview: {
      control: 'boolean',
      description: 'Show file preview thumbnails'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Upload zone size'
    },
    variant: {
      control: 'select',
      options: ['default', 'button', 'image-grid'],
      description: 'Upload zone style variant'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to initialize file upload functionality
function initFileUpload(container: HTMLElement) {
  const zone = container.querySelector('.file-upload__zone') as HTMLElement;
  const input = container.querySelector('.file-upload__input') as HTMLInputElement;
  const list = container.querySelector('.file-upload__list') as HTMLElement;

  if (!zone || !input || !list) return;

  let files: File[] = [];

  // Drag and drop handlers
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('file-upload__zone--active');
  });

  zone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    zone.classList.remove('file-upload__zone--active');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('file-upload__zone--active');

    const droppedFiles = Array.from(e.dataTransfer?.files || []);
    handleFiles(droppedFiles);
  });

  // File input change handler
  input.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    const selectedFiles = Array.from(target.files || []);
    handleFiles(selectedFiles);
  });

  function handleFiles(newFiles: File[]) {
    if (input.multiple) {
      files = [...files, ...newFiles];
    } else {
      files = [newFiles[0]];
    }
    renderFiles();
  }

  function renderFiles() {
    list.innerHTML = '';

    files.forEach((file, index) => {
      const item = createFileItem(file, index);
      list.appendChild(item);
    });
  }

  function createFileItem(file: File, index: number) {
    const item = document.createElement('div');
    item.className = 'file-upload__item file-upload__item--pending';
    item.setAttribute('data-index', index.toString());

    const preview = document.createElement('div');
    preview.className = 'file-upload__preview';

    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      preview.appendChild(img);
    } else {
      const icon = document.createElement('span');
      icon.textContent = getFileIcon(file.type);
      icon.className = 'file-upload__preview-icon';
      icon.setAttribute('aria-hidden', 'true');
      preview.appendChild(icon);
    }

    const info = document.createElement('div');
    info.className = 'file-upload__info';

    const filename = document.createElement('div');
    filename.className = 'file-upload__filename';
    filename.textContent = file.name;

    const meta = document.createElement('div');
    meta.className = 'file-upload__meta';

    const size = document.createElement('span');
    size.className = 'file-upload__filesize';
    size.textContent = formatFileSize(file.size);

    const status = document.createElement('span');
    status.className = 'file-upload__status';
    status.textContent = '⏱ Pending';

    meta.appendChild(size);
    meta.appendChild(status);

    info.appendChild(filename);
    info.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'file-upload__actions';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'file-upload__action file-upload__action--remove';
    removeBtn.setAttribute('aria-label', `Remove ${file.name}`);
    removeBtn.textContent = '×';
    removeBtn.onclick = (e) => {
      e.preventDefault();
      removeFile(index);
    };

    actions.appendChild(removeBtn);

    item.appendChild(preview);
    item.appendChild(info);
    item.appendChild(actions);

    return item;
  }

  function removeFile(index: number) {
    files.splice(index, 1);
    renderFiles();
  }

  function getFileIcon(mimeType: string): string {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎬';
    if (mimeType.startsWith('audio/')) return '🎵';
    if (mimeType.includes('pdf')) return '📄';
    if (mimeType.includes('zip') || mimeType.includes('rar')) return '📦';
    return '📁';
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}

export const Default: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = `file-upload${args.size ? ` file-upload--${args.size}` : ''}${args.variant !== 'default' ? ` file-upload--${args.variant}` : ''}`;

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Upload files');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = args.multiple ?? true;
    input.disabled = args.disabled ?? false;
    if (args.accept) {
      input.accept = args.accept;
    }

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '⬆️';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Drop files here or click to browse';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = args.multiple ? 'Support for multiple files' : 'Single file upload';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    if (args.maxSize) {
      const constraints = document.createElement('div');
      constraints.className = 'file-upload__constraints';
      constraints.textContent = `Maximum file size: ${args.maxSize}`;
      fileUpload.appendChild(constraints);
    }
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize functionality
    setTimeout(() => initFileUpload(fileUpload), 0);

    return container;
  },
  args: {
    accept: '',
    multiple: true,
    disabled: false,
    maxSize: '',
    dragDrop: true,
    showPreview: true,
    size: 'md',
    variant: 'default'
  }
};

export const DragDrop: Story = {
  ...Default,
  args: {
    multiple: true,
    dragDrop: true,
    showPreview: true
  }
};

export const Multiple: Story = {
  ...Default,
  args: {
    multiple: true,
    maxSize: '10MB'
  }
};

export const WithPreview: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Upload images with preview');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '🖼️';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Drop images here or click to browse';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'PNG, JPG, GIF up to 10MB';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const constraints = document.createElement('div');
    constraints.className = 'file-upload__constraints';
    constraints.textContent = 'Maximum file size: 10MB';

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(constraints);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize functionality
    setTimeout(() => initFileUpload(fileUpload), 0);

    return container;
  }
};

export const ImageOnly: Story = {
  ...Default,
  args: {
    accept: 'image/*',
    multiple: true,
    maxSize: '10MB'
  }
};

export const PdfOnly: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Upload PDF documents');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = '.pdf';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '📄';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload PDF documents';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Only PDF files allowed';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const constraints = document.createElement('div');
    constraints.className = 'file-upload__constraints';
    constraints.textContent = 'Accepted: PDF - Max 5MB';

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(constraints);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize functionality
    setTimeout(() => initFileUpload(fileUpload), 0);

    return container;
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
    multiple: true
  }
};

export const Small: Story = {
  ...Default,
  args: {
    size: 'sm',
    multiple: true
  }
};

export const Large: Story = {
  ...Default,
  args: {
    size: 'lg',
    multiple: true
  }
};

export const WithProgress: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Upload files with progress tracking');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '☁️';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload with progress tracking';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Watch files upload with progress bars';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize with simulated progress
    setTimeout(() => {
      initFileUpload(fileUpload);

      // Add event listener to simulate upload progress
      input.addEventListener('change', () => {
        setTimeout(() => {
          const items = list.querySelectorAll('.file-upload__item');
          items.forEach((item, index) => {
            setTimeout(() => {
              // Add uploading state
              item.classList.remove('file-upload__item--pending');
              item.classList.add('file-upload__item--uploading');

              const info = item.querySelector('.file-upload__info');
              const progress = document.createElement('div');
              progress.className = 'file-upload__progress';
              progress.innerHTML = `
                <div class="file-upload__progress-bar">
                  <div class="file-upload__progress-fill" style="width: 0%"></div>
                </div>
              `;
              info?.appendChild(progress);

              const status = item.querySelector('.file-upload__status');
              if (status) {
                status.textContent = '⏳ Uploading...';
              }

              // Simulate progress
              let progressValue = 0;
              const progressFill = progress.querySelector('.file-upload__progress-fill') as HTMLElement;
              const interval = setInterval(() => {
                progressValue += Math.random() * 30;
                if (progressValue >= 100) {
                  progressValue = 100;
                  clearInterval(interval);

                  // Mark as complete
                  setTimeout(() => {
                    item.classList.remove('file-upload__item--uploading');
                    item.classList.add('file-upload__item--success');
                    if (status) {
                      status.textContent = '✓ Complete';
                    }
                  }, 300);
                }
                if (progressFill) {
                  progressFill.style.width = progressValue + '%';
                }
              }, 200);
            }, index * 500);
          });
        }, 100);
      });
    }, 0);

    return container;
  }
};

export const AvatarUpload: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    const avatarContainer = document.createElement('div');
    avatarContainer.style.display = 'flex';
    avatarContainer.style.alignItems = 'center';
    avatarContainer.style.gap = 'var(--space-4)';

    const preview = document.createElement('div');
    preview.style.width = '120px';
    preview.style.height = '120px';
    preview.style.borderRadius = '50%';
    preview.style.background = 'var(--color-bg-tertiary)';
    preview.style.display = 'flex';
    preview.style.alignItems = 'center';
    preview.style.justifyContent = 'center';
    preview.style.overflow = 'hidden';
    preview.innerHTML = '<span style="font-size: 48px;" aria-hidden="true">👤</span>';

    const uploadSection = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'file';
    input.id = 'avatar-upload-input';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.setAttribute('aria-label', 'Upload avatar image');

    const label = document.createElement('label');
    label.htmlFor = 'avatar-upload-input';
    label.className = 'btn btn-primary';
    label.style.cursor = 'pointer';
    label.innerHTML = '<span aria-hidden="true">📷</span> <span>Change Avatar</span>';

    // Handle avatar preview
    input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.innerHTML = `<img src="${e.target?.result}" style="width: 100%; height: 100%; object-fit: cover;" alt="Avatar preview">`;
        };
        reader.readAsDataURL(file);
      }
    });

    uploadSection.appendChild(input);
    uploadSection.appendChild(label);

    avatarContainer.appendChild(preview);
    avatarContainer.appendChild(uploadSection);

    container.appendChild(avatarContainer);

    return container;
  }
};

export const ButtonStyle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--button';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Choose files to upload');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '⬆️';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Choose Files';

    content.appendChild(icon);
    content.appendChild(text);
    zone.appendChild(input);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize functionality
    setTimeout(() => initFileUpload(fileUpload), 0);

    return container;
  }
};

export const ImageGrid: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--image-grid';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Upload images to grid');

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = document.createElement('span');
    icon.className = 'file-upload__icon';
    icon.textContent = '🖼️';
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload Images';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Display as grid';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    // Initialize functionality
    setTimeout(() => initFileUpload(fileUpload), 0);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const fileUpload = document.createElement('div');
      fileUpload.className = `file-upload${args.size ? ` file-upload--${args.size}` : ''}`;

      const zone = document.createElement('label');
      zone.className = 'file-upload__zone';
      zone.setAttribute('role', 'button');
      zone.setAttribute('tabindex', '0');
      zone.setAttribute('aria-label', 'Upload files');

      const input = document.createElement('input');
      input.type = 'file';
      input.className = 'file-upload__input';
      input.multiple = args.multiple ?? true;
      if (args.accept) {
        input.accept = args.accept;
      }

      const content = document.createElement('div');
      content.className = 'file-upload__content';

      const icon = document.createElement('span');
      icon.className = 'file-upload__icon';
      icon.textContent = '⬆️';
      icon.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.className = 'file-upload__text';
      text.textContent = 'Drop files or browse';

      content.appendChild(icon);
      content.appendChild(text);
      zone.appendChild(input);
      zone.appendChild(content);

      const list = document.createElement('div');
      list.className = 'file-upload__list';

      fileUpload.appendChild(zone);
      fileUpload.appendChild(list);

      return fileUpload;
    });
  },
  args: {
    accept: '',
    multiple: true,
    size: 'md'
  },
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types'
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple files'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Upload zone size'
    }
  }
};
