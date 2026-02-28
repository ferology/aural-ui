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
      <span class="file-upload__text">Drop files here or click to browse</span>
      <span class="file-upload__subtext">Support for multiple files</span>
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

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    onUpload?.(droppedFiles);
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
          <i data-lucide="upload" className="file-upload__icon"></i>
          <span className="file-upload__text">Drop files or click to browse</span>
        </div>
      </label>
      <div className="file-upload__list"></div>
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

// Helper function to create Lucide icon
function createIcon(iconName: string): HTMLElement {
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', iconName);
  icon.className = 'file-upload__icon';
  return icon;
}

// Helper function to create preview icon
function createPreviewIcon(iconName: string): HTMLElement {
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', iconName);
  icon.className = 'file-upload__preview-icon';
  return icon;
}

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
    simulateUpload();
  }

  function renderFiles() {
    list.innerHTML = '';

    files.forEach((file, index) => {
      const item = createFileItem(file, index);
      list.appendChild(item);
    });

    // Initialize Lucide icons
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
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
      const icon = createPreviewIcon(getFileIcon(file.type));
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
    const clockIcon = document.createElement('i');
    clockIcon.setAttribute('data-lucide', 'clock');
    status.appendChild(clockIcon);
    status.appendChild(document.createTextNode(' Pending'));

    meta.appendChild(size);
    meta.appendChild(status);

    info.appendChild(filename);
    info.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'file-upload__actions';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'file-upload__action file-upload__action--remove';
    removeBtn.setAttribute('aria-label', `Remove ${file.name}`);
    const removeIcon = document.createElement('i');
    removeIcon.setAttribute('data-lucide', 'x');
    removeBtn.appendChild(removeIcon);
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

  function simulateUpload() {
    files.forEach((file, index) => {
      const item = list.querySelector(`[data-index="${index}"]`);
      if (!item || !item.classList.contains('file-upload__item--pending')) return;

      // Add progress bar
      const info = item.querySelector('.file-upload__info');
      const progress = document.createElement('div');
      progress.className = 'file-upload__progress';

      const progressBar = document.createElement('div');
      progressBar.className = 'file-upload__progress-bar';

      const progressFill = document.createElement('div');
      progressFill.className = 'file-upload__progress-fill';
      progressFill.style.width = '0%';

      progressBar.appendChild(progressFill);
      progress.appendChild(progressBar);
      info?.appendChild(progress);

      // Update status
      item.classList.remove('file-upload__item--pending');
      item.classList.add('file-upload__item--uploading');
      const status = item.querySelector('.file-upload__status');
      if (status) {
        status.innerHTML = '';
        const loaderIcon = document.createElement('i');
        loaderIcon.setAttribute('data-lucide', 'loader-2');
        status.appendChild(loaderIcon);
        status.appendChild(document.createTextNode(' Uploading...'));
      }

      // Initialize Lucide icons for new elements
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }

      // Simulate progress
      let progressValue = 0;
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
              status.innerHTML = '';
              const checkIcon = document.createElement('i');
              checkIcon.setAttribute('data-lucide', 'check-circle');
              status.appendChild(checkIcon);
              status.appendChild(document.createTextNode(' Complete'));

              // Initialize Lucide icons for new elements
              if (typeof (window as any).lucide !== 'undefined') {
                (window as any).lucide.createIcons();
              }
            }
          }, 300);
        }
        progressFill.style.width = progressValue + '%';
      }, 200);
    });
  }

  function removeFile(index: number) {
    files.splice(index, 1);
    renderFiles();
  }

  function getFileIcon(mimeType: string): string {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'music';
    if (mimeType.includes('pdf')) return 'file-text';
    if (mimeType.includes('zip') || mimeType.includes('rar')) return 'archive';
    return 'file';
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

    const icon = createIcon('upload');
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

    // Initialize functionality and Lucide icons
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

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

export const ImageUploadWithPreview: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('image');
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

    // Initialize functionality and Lucide icons
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const SmallSize: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--sm';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Small upload zone';

    content.appendChild(icon);
    content.appendChild(text);
    zone.appendChild(input);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const LargeSize: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--lg';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Large upload zone';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Prominent display for primary upload actions';

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

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

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

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('upload');
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

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

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

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('image');
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

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const SingleFileUpload: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    // No multiple attribute - single file only

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('file-text');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload a single file';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'PDF, DOC, DOCX up to 5MB';

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

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithFileTypeRestrictions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = '.pdf,.doc,.docx';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('file-text');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload documents';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Only PDF and DOC files allowed';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);

    const constraints = document.createElement('div');
    constraints.className = 'file-upload__constraints';
    constraints.textContent = 'Accepted: PDF, DOC, DOCX - Max 5MB';

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(constraints);
    fileUpload.appendChild(list);

    container.appendChild(fileUpload);

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const WithUploadProgress: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('upload-cloud');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload with progress tracking';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Simulates upload with progress bar';

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

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
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
    preview.id = 'avatar-preview';

    const userIcon = document.createElement('i');
    userIcon.setAttribute('data-lucide', 'user');
    userIcon.style.width = '48px';
    userIcon.style.height = '48px';
    userIcon.style.color = 'var(--color-text-tertiary)';
    preview.appendChild(userIcon);

    const uploadSection = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'file';
    input.id = 'avatar-upload-input';
    input.accept = 'image/*';
    input.style.display = 'none';

    const label = document.createElement('label');
    label.htmlFor = 'avatar-upload-input';
    label.className = 'btn btn-primary';
    label.style.cursor = 'pointer';

    const cameraIcon = document.createElement('i');
    cameraIcon.setAttribute('data-lucide', 'camera');
    label.appendChild(cameraIcon);
    label.appendChild(document.createTextNode(' Change Avatar'));

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

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    return container;
  }
};

export const FormIntegration: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = 'var(--space-4)';

    // Project Name Field
    const formGroup1 = document.createElement('div');
    formGroup1.className = 'form-group';

    const label1 = document.createElement('label');
    label1.className = 'label';
    label1.textContent = 'Project Name';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.className = 'input';
    input1.placeholder = 'Enter project name';

    formGroup1.appendChild(label1);
    formGroup1.appendChild(input1);

    // File Upload Field
    const formGroup2 = document.createElement('div');
    formGroup2.className = 'form-group';

    const label2 = document.createElement('label');
    label2.className = 'label';
    label2.textContent = 'Project Files';

    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';

    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';

    const input2 = document.createElement('input');
    input2.type = 'file';
    input2.className = 'file-upload__input';
    input2.multiple = true;

    const content = document.createElement('div');
    content.className = 'file-upload__content';

    const icon = createIcon('folder-up');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload project files';

    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'All file types accepted';

    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input2);
    zone.appendChild(content);

    const list = document.createElement('div');
    list.className = 'file-upload__list';

    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);

    formGroup2.appendChild(label2);
    formGroup2.appendChild(fileUpload);

    // Submit Button
    const submitDiv = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = 'Submit Project';
    submitDiv.appendChild(submitBtn);

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(submitDiv);

    container.appendChild(form);

    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

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

      const input = document.createElement('input');
      input.type = 'file';
      input.className = 'file-upload__input';
      input.multiple = args.multiple ?? true;
      if (args.accept) {
        input.accept = args.accept;
      }

      const content = document.createElement('div');
      content.className = 'file-upload__content';

      const icon = createIcon('upload');
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
