/**
 * @aural-ui/vue
 *
 * Vue 3 components and composables for Aural UI
 * Thin wrappers around the battle-tested vanilla core
 */

// Components
export { default as AuralModal } from './components/AuralModal.vue';
export { default as AuralButton } from './components/AuralButton.vue';
export { default as AuralDropdown } from './components/AuralDropdown.vue';
export { default as AuralTabs } from './components/AuralTabs.vue';
export { default as AuralAccordion } from './components/AuralAccordion.vue';
export { default as AuralInput } from './components/AuralInput.vue';
export { default as AuralDrawer } from './components/AuralDrawer.vue';
export { default as AuralCard } from './components/AuralCard.vue';
export { default as AuralTooltip } from './components/AuralTooltip.vue';
export { default as AuralPopover } from './components/AuralPopover.vue';
export { default as AuralBadge } from './components/AuralBadge.vue';
export { default as AuralAvatar } from './components/AuralAvatar.vue';
export { default as AuralAlert } from './components/AuralAlert.vue';
export { default as AuralSelect } from './components/AuralSelect.vue';
export { default as AuralSpinner } from './components/AuralSpinner.vue';
export { default as AuralProgress } from './components/AuralProgress.vue';
export { default as AuralDivider } from './components/AuralDivider.vue';

// Composables
export { useModal } from './composables/useModal';
export type { UseModalReturn } from './composables/useModal';

export { useToast } from './composables/useToast';
export type { UseToastReturn, ShowToastOptions, ToastType } from './composables/useToast';

export { useDropdown } from './composables/useDropdown';
export type { UseDropdownReturn } from './composables/useDropdown';

export { useCarousel } from './composables/useCarousel';
export type { UseCarouselReturn, CarouselOptions, CarouselController } from './composables/useCarousel';

// TODO: Directives
// export { vTooltip } from './directives/v-tooltip';

// TODO: Plugin
// export { default as AuralUIPlugin } from './plugin';

export const version = '1.0.0';
