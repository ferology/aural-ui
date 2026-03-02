/**
 * Color Contrast Analyzer for Aural UI
 * Calculates WCAG contrast ratios and identifies accessibility issues
 */

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Calculate relative luminance
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    if (!rgb1 || !rgb2) return null;

    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);

    return (lighter + 0.05) / (darker + 0.05);
}

// Format ratio for display
function formatRatio(ratio) {
    return ratio ? ratio.toFixed(2) + ':1' : 'N/A';
}

// Check if ratio passes WCAG level
function checkWCAG(ratio, level = 'AA', textSize = 'normal') {
    if (!ratio) return { pass: false, level: 'FAIL' };

    const requirements = {
        'AAA': { normal: 7, large: 4.5 },
        'AA': { normal: 4.5, large: 3 }
    };

    const required = requirements[level][textSize];
    const pass = ratio >= required;

    return {
        pass,
        level: pass ? level : 'FAIL',
        ratio: formatRatio(ratio),
        required: formatRatio(required)
    };
}

// Get better color suggestion
function suggestBetterColor(bgColor, textColor, targetRatio = 4.5) {
    const bgRgb = hexToRgb(bgColor);
    if (!bgRgb) return null;

    const bgLum = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

    // If background is dark, we need lighter text
    if (bgLum < 0.5) {
        // Gradually lighten the text color
        for (let factor = 1; factor <= 20; factor++) {
            const textRgb = hexToRgb(textColor);
            if (!textRgb) return null;

            const newR = Math.min(255, textRgb.r + factor * 10);
            const newG = Math.min(255, textRgb.g + factor * 10);
            const newB = Math.min(255, textRgb.b + factor * 10);

            const newHex = '#' + [newR, newG, newB].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');

            const ratio = getContrastRatio(bgColor, newHex);
            if (ratio >= targetRatio) {
                return { color: newHex, ratio: formatRatio(ratio) };
            }
        }
    } else {
        // Gradually darken the text color
        for (let factor = 1; factor <= 20; factor++) {
            const textRgb = hexToRgb(textColor);
            if (!textRgb) return null;

            const newR = Math.max(0, textRgb.r - factor * 10);
            const newG = Math.max(0, textRgb.g - factor * 10);
            const newB = Math.max(0, textRgb.b - factor * 10);

            const newHex = '#' + [newR, newG, newB].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');

            const ratio = getContrastRatio(bgColor, newHex);
            if (ratio >= targetRatio) {
                return { color: newHex, ratio: formatRatio(ratio) };
            }
        }
    }

    return null;
}

// Theme color definitions
const themes = {
    dark: {
        name: 'Dark Theme',
        colors: {
            'primary-400': '#5ebd8f',
            'bg-primary': '#0f0f1a',
            'bg-secondary': '#1a1a2e',
            'bg-tertiary': '#252540',
            'bg-hover': '#35355a',
            'text-primary': '#f5f5fa',
            'text-secondary': '#a0a0b8',
            'text-muted': '#707080'
        }
    },
    light: {
        name: 'Light Theme',
        colors: {
            'primary-400': '#5ebd8f',
            'bg-primary': '#ffffff',
            'bg-secondary': '#f9fafb',
            'bg-tertiary': '#f3f4f6',
            'text-primary': '#111827',
            'text-secondary': '#4b5563',
            'text-muted': '#9ca3af'
        }
    },
    neon: {
        name: 'Neon Theme',
        colors: {
            'primary-400': '#00ffff',
            'secondary-400': '#ff00ff',
            'success-400': '#00ff88',
            'bg-primary': '#000000',
            'bg-secondary': '#0a0a0a',
            'text-primary': '#ffffff',
            'text-secondary': '#00ffff',
            'text-tertiary': '#ff00ff'
        }
    },
    'neon-refined': {
        name: 'Neon Refined Theme',
        colors: {
            'gradient-teal-start': '#0ea5a5',
            'gradient-teal-end': '#14d9d9',
            'bg-base': '#050508',
            'bg-layer-1': '#0a0a12',
            'text-primary': '#f8fafc',
            'text-secondary': '#cbd5e1',
            'text-muted': '#94a3b8'
        }
    },
    kinetic: {
        name: 'Kinetic Theme',
        colors: {
            'primary': '#cdff00',
            'bg-primary': '#000000',
            'bg-secondary': '#0a0a0a',
            'text-primary': '#ffffff',
            'text-secondary': '#d4d4d4',
            'text-tertiary': '#737373'
        }
    },
    'high-contrast': {
        name: 'High Contrast Theme',
        colors: {
            'primary-400': '#0096ff',
            'success-400': '#00ff00',
            'error-400': '#ff0000',
            'warning-400': '#ffe600',
            'bg-primary': '#000000',
            'text-primary': '#ffffff',
            'text-secondary': '#e0e0e0',
            'text-muted': '#a0a0a0'
        }
    },
    'colorblind-friendly': {
        name: 'Colorblind Friendly Theme',
        colors: {
            'primary-400': '#1a8cff',
            'secondary-400': '#ffa31a',
            'success-400': '#1a8cff',
            'error-400': '#ff8c1a',
            'warning-400': '#ffde1a',
            'bg-primary': '#0f1419',
            'bg-secondary': '#1a1f2e',
            'text-primary': '#f5f7fa',
            'text-secondary': '#b0b8c8'
        }
    }
};

// Common color combinations to test
const combinations = [
    // Primary color tests
    { bg: 'bg-primary', text: 'primary-400', context: 'Primary button text on dark bg', size: 'large' },
    { bg: 'bg-secondary', text: 'primary-400', context: 'Primary color on secondary bg', size: 'normal' },
    { bg: 'primary-400', text: 'bg-primary', context: 'Button background (inverted)', size: 'large' },
    { bg: 'primary-400', text: 'text-primary', context: 'Primary button with white text', size: 'large' },

    // Text readability
    { bg: 'bg-primary', text: 'text-primary', context: 'Primary text on primary bg', size: 'normal' },
    { bg: 'bg-primary', text: 'text-secondary', context: 'Secondary text on primary bg', size: 'normal' },
    { bg: 'bg-primary', text: 'text-muted', context: 'Muted text on primary bg', size: 'normal' },
    { bg: 'bg-secondary', text: 'text-primary', context: 'Primary text on secondary bg', size: 'normal' },

    // Interactive states
    { bg: 'bg-hover', text: 'text-primary', context: 'Hover state text', size: 'normal' },
    { bg: 'bg-hover', text: 'primary-400', context: 'Hover state with primary color', size: 'normal' },

    // Links and accents
    { bg: 'bg-primary', text: 'primary-400', context: 'Links on dark background', size: 'normal' },
    { bg: 'bg-tertiary', text: 'primary-400', context: 'Primary on tertiary bg', size: 'normal' }
];

// Generate report
console.log('═══════════════════════════════════════════════════════════');
console.log('  AURAL UI - COLOR CONTRAST ANALYSIS REPORT');
console.log('═══════════════════════════════════════════════════════════\n');

const results = {};

for (const [themeKey, theme] of Object.entries(themes)) {
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  ${theme.name.toUpperCase()}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

    results[themeKey] = { passed: 0, failed: 0, issues: [] };

    for (const combo of combinations) {
        const bgColor = theme.colors[combo.bg];
        const textColor = theme.colors[combo.text];

        if (!bgColor || !textColor) continue;

        const ratio = getContrastRatio(bgColor, textColor);
        const wcagAA = checkWCAG(ratio, 'AA', combo.size);
        const wcagAAA = checkWCAG(ratio, 'AAA', combo.size);

        const status = wcagAA.pass ? '✓ PASS' : '✗ FAIL';
        const statusColor = wcagAA.pass ? '' : ' ⚠️';

        console.log(`${status}${statusColor} ${combo.context}`);
        console.log(`    Background: ${bgColor} (${combo.bg})`);
        console.log(`    Text Color: ${textColor} (${combo.text})`);
        console.log(`    Contrast Ratio: ${formatRatio(ratio)}`);
        console.log(`    WCAG AA (${combo.size}): ${wcagAA.level} (requires ${wcagAA.required})`);
        console.log(`    WCAG AAA (${combo.size}): ${wcagAAA.level} (requires ${wcagAAA.required})`);

        if (!wcagAA.pass) {
            const suggestion = suggestBetterColor(bgColor, textColor, combo.size === 'large' ? 3.0 : 4.5);
            if (suggestion) {
                console.log(`    💡 Suggested: ${suggestion.color} (ratio: ${suggestion.ratio})`);
            }

            results[themeKey].failed++;
            results[themeKey].issues.push({
                context: combo.context,
                bg: bgColor,
                text: textColor,
                ratio: formatRatio(ratio),
                required: wcagAA.required,
                suggestion: suggestion?.color
            });
        } else {
            results[themeKey].passed++;
        }

        console.log('');
    }

    const total = results[themeKey].passed + results[themeKey].failed;
    const percentage = ((results[themeKey].passed / total) * 100).toFixed(1);
    console.log(`  Summary: ${results[themeKey].passed}/${total} combinations passed (${percentage}%)\n`);
}

// Final summary
console.log('\n═══════════════════════════════════════════════════════════');
console.log('  OVERALL SUMMARY');
console.log('═══════════════════════════════════════════════════════════\n');

for (const [themeKey, result] of Object.entries(results)) {
    const total = result.passed + result.failed;
    const percentage = ((result.passed / total) * 100).toFixed(1);
    const status = result.failed === 0 ? '✓' : '✗';
    console.log(`${status} ${themes[themeKey].name}: ${result.passed}/${total} passed (${percentage}%)`);
}

console.log('\n═══════════════════════════════════════════════════════════\n');

// Export results for use in HTML report
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { results, themes, getContrastRatio, formatRatio, checkWCAG, suggestBetterColor };
}
