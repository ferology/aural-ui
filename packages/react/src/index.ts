/**
 * @aural-ui/react
 *
 * React components and hooks for Aural UI
 * Thin wrappers around the battle-tested vanilla core
 */

// Components
export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Dropdown } from './components/Dropdown';
export type { DropdownProps, DropdownItem } from './components/Dropdown';

export { Tabs } from './components/Tabs';
export type { TabsProps, Tab } from './components/Tabs';

export { Accordion } from './components/Accordion';
export type { AccordionProps, AccordionItem } from './components/Accordion';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Drawer } from './components/Drawer';
export type { DrawerProps } from './components/Drawer';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { Popover } from './components/Popover';
export type { PopoverProps } from './components/Popover';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Select } from './components/Select';
export type { SelectProps, SelectOption } from './components/Select';

export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

export { Progress } from './components/Progress';
export type { ProgressProps } from './components/Progress';

export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

// Hooks
export { useModal } from './hooks/useModal';
export type { UseModalReturn } from './hooks/useModal';

export { useToast } from './hooks/useToast';
export type { UseToastReturn, ShowToastOptions, ToastType } from './hooks/useToast';

export { useDropdown } from './hooks/useDropdown';
export type { UseDropdownReturn } from './hooks/useDropdown';

export { useCarousel } from './hooks/useCarousel';
export type { UseCarouselReturn, CarouselOptions, CarouselController } from './hooks/useCarousel';

// TODO: Implement context
// export { AuralProvider } from './context/AuralProvider';

export const version = '1.0.0';
