# Quick Setup Instructions

## Step 1: Get Your API Key (2 minutes)

1. Go to **https://console.anthropic.com/settings/keys**
2. Sign up or log in with your account
3. Click **"Create Key"**
4. Copy the API key (starts with `sk-ant-...`)

## Step 2: Add Your API Key

Open the `.env` file in this directory and replace `your_api_key_here` with your actual key:

```bash
# In: /Users/feraf/Projects/aural-ui/agents/.env
ANTHROPIC_API_KEY=sk-ant-api03-YOUR_ACTUAL_KEY_HERE
```

**Important:** Don't share this key or commit it to git!

## Step 3: Run Your First Review

Once your API key is set, run:

```bash
npm run review-system
```

This will:
- ✅ Review 8 priority components (button, input, modal, dropdown, tabs, card, navigation-bar, form-group)
- ✅ Audit accessibility (WCAG 2.1 AA)
- ✅ Analyze your main demo page
- ✅ Generate a comprehensive improvement plan
- ✅ Create a detailed report: `design-system-review.md`

## What the Agents Will Check

### Component Quality
- Token usage (semantic tokens only)
- BEM naming conventions
- All interactive states (hover, focus, active, disabled)
- Responsive design (mobile-first)
- Performance (CSS size, specificity)

### Accessibility (WCAG 2.1 AA)
- Keyboard navigation (Tab, Enter, Escape, Arrows)
- Touch targets (≥ 44x44px)
- Color contrast (≥ 4.5:1 text, ≥ 3:1 UI)
- Focus indicators (visible 2px solid)
- ARIA attributes (roles, labels, states)
- Screen reader compatibility

### Demo Page
- Overall UX and navigation
- Visual hierarchy
- Mobile responsiveness
- Documentation clarity
- Code examples quality

### Output

You'll get a comprehensive report with:
- **Overall health score** (0-100%)
- **Issues by severity** (Critical, High, Medium, Low)
- **Specific fixes** with code examples
- **Prioritized improvement plan** (Quick wins → Strategic enhancements)
- **Actionable next steps**

## Other Available Workflows

```bash
# Create a new component
npm run new-component

# Audit all components for accessibility
npm run audit-accessibility

# Interactive CLI menu
npm run dev
```

## Questions?

Check the main README.md for complete documentation.

---

**Ready?** Add your API key to `.env` and run `npm run review-system` 🚀
