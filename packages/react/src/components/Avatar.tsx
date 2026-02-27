import React from 'react';

export interface AvatarProps {
  /** Avatar image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Initials to display */
  initials?: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Avatar shape */
  shape?: 'circle' | 'square' | 'rounded';
  /** Additional CSS classes */
  className?: string;
  /** Status indicator */
  status?: 'online' | 'offline' | 'busy' | 'away';
}

/**
 * Avatar Component
 *
 * User profile image or initials.
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar initials="JD" status="online" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  initials,
  size = 'md',
  shape = 'circle',
  className = '',
  status
}) => {
  const avatarClasses = [
    'avatar',
    `avatar-${size}`,
    `avatar-${shape}`,
    status ? 'avatar-with-status' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : initials ? (
        <span className="avatar-initials">{initials}</span>
      ) : (
        <span className="avatar-placeholder">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </span>
      )}
      {status && <span className={`avatar-status avatar-status-${status}`} />}
    </div>
  );
};
