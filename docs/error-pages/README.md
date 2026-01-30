# Error Pages

Pre-built error page templates for common HTTP status codes and states.

## Available Templates

### 404 - Page Not Found
- **File:** `404.html`
- **Use case:** When a requested page doesn't exist
- **Features:**
  - Clear error message
  - Home and back navigation
  - Theme-aware styling

### 500 - Internal Server Error
- **File:** `500.html`
- **Use case:** Server-side errors
- **Features:**
  - Refresh page button
  - Home navigation
  - Error gradient styling

### 403 - Access Forbidden
- **File:** `403.html`
- **Use case:** Permission denied scenarios
- **Features:**
  - Shield icon for security context
  - Clear access message
  - Navigation options

### Maintenance Mode
- **File:** `maintenance.html`
- **Use case:** Scheduled maintenance or updates
- **Features:**
  - Pulsing wrench animation
  - Status badge with blinking indicator
  - Friendly messaging

### Coming Soon
- **File:** `coming-soon.html`
- **Use case:** Pre-launch pages, unreleased features
- **Features:**
  - Email notification signup
  - Social media links
  - Gradient title
  - Interactive form

## Usage

### Direct Usage

```html
<!-- Redirect users to error page -->
<script>
  window.location.href = '/error-pages/404.html';
</script>
```

### Server Configuration

#### Apache (.htaccess)
```apache
ErrorDocument 404 /error-pages/404.html
ErrorDocument 403 /error-pages/403.html
ErrorDocument 500 /error-pages/500.html
```

#### Nginx
```nginx
error_page 404 /error-pages/404.html;
error_page 403 /error-pages/403.html;
error_page 500 /error-pages/500.html;

location = /error-pages/404.html {
    internal;
}
```

#### Node.js/Express
```javascript
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/error-pages/404.html');
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(__dirname + '/error-pages/500.html');
});
```

## Customization

All error pages support theme customization through the Aural UI theme system:

```javascript
// Pages automatically detect and apply saved theme
// Supports: dark, light, high-contrast, colorblind
```

### Modifying Content

Each page can be customized by editing:
- **Title** - `.error-title` class
- **Description** - `.error-description` class
- **Icon** - Lucide icon (`data-lucide` attribute)
- **Actions** - Button links and handlers

### Example Customization

```html
<!-- 404.html -->
<h2 class="error-title">Oops! Lost in Space</h2>
<p class="error-description">
  This page took a wrong turn at the asteroid belt.
</p>
```

## Features

- ✅ Theme-aware (auto-syncs with localStorage)
- ✅ Fully responsive (mobile-optimized)
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Lucide icons included
- ✅ Smooth animations
- ✅ Clean, professional design

## Preview

View all error pages live:
- [404 Example](./404.html)
- [500 Example](./500.html)
- [403 Example](./403.html)
- [Maintenance Example](./maintenance.html)
- [Coming Soon Example](./coming-soon.html)

## Best Practices

1. **404 Pages**
   - Provide search functionality
   - Link to popular pages
   - Maintain site navigation

2. **500 Pages**
   - Keep it simple (server is struggling)
   - Avoid external resources
   - Provide retry option

3. **Maintenance Pages**
   - Show estimated downtime
   - Provide status page link
   - Keep design minimal

4. **Coming Soon**
   - Build anticipation
   - Collect emails
   - Show social proof

## Integration with Aural UI

Error pages use the complete Aural UI design system:
- CSS variables for theming
- Component classes (btn, input, etc.)
- Responsive utilities
- Animation system
- Icon library (Lucide)

## License

MIT - Free to use and customize
