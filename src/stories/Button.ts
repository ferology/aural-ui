export interface ButtonProps {
  /** Button variant type */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** How large should the button be? */
  size?: 'sm' | 'md' | 'lg';
  /** Button contents */
  label: string;
  /** Icon name (Lucide icon) */
  icon?: string;
  /** Icon-only button */
  iconOnly?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const createButton = ({
  variant = 'primary',
  size = 'md',
  label,
  icon,
  iconOnly = false,
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn';

  // Add variant class
  btn.classList.add(`btn-${variant}`);

  // Add size class (only for sm and lg, md is default)
  if (size === 'sm') {
    btn.classList.add('btn-sm');
  } else if (size === 'lg') {
    btn.classList.add('btn-lg');
  }

  // Add icon-only class
  if (iconOnly) {
    btn.classList.add('btn-icon');
  }

  // Add loading class and spinner
  if (loading) {
    btn.classList.add('btn-loading');
    const spinner = document.createElement('span');
    spinner.className = 'btn-spinner';
    btn.appendChild(spinner);
  }

  // Add icon if provided
  if (icon && !loading) {
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', icon);
    btn.appendChild(iconElement);
  }

  // Add label text (unless icon-only)
  if (!iconOnly) {
    const textNode = document.createTextNode(label);
    btn.appendChild(textNode);
  } else {
    // For icon-only buttons, add title for accessibility
    btn.title = label;
  }

  // Set disabled state
  if (disabled) {
    btn.disabled = true;
  }

  // Add click handler
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  return btn;
};
