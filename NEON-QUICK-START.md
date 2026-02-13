# 🚀 Neon Edition - 5-Minute Quick Start

## Step 1: Include Files (30 seconds)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Core + Neon Theme -->
    <link rel="stylesheet" href="dist/aural-ui.css">
    <link rel="stylesheet" href="themes/neon.css">
    <link rel="stylesheet" href="utilities/fonts-neon.css">
    <link rel="stylesheet" href="components/deluxe-neon.css">
</head>
<body data-neon-effects>
    <!-- Your content here -->

    <script src="dist/aural-ui.js"></script>
    <script src="javascript/neon-effects.js"></script>
</body>
</html>
```

## Step 2: Copy-Paste Examples (3 minutes)

### Hero Section
```html
<section style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem;">
    <span class="badge-neon">v2.0 Neon</span>
    <h1 class="text-gradient-cyber-animated" style="font-size: 4rem; margin: 2rem 0;">
        YOUR PROJECT
    </h1>
    <p class="text-neon-cyan" style="font-size: 1.5rem; margin-bottom: 2rem;">
        The future starts now
    </p>
    <div style="display: flex; gap: 1rem;">
        <button class="btn-neon btn-pulse">Get Started</button>
        <button class="btn-neon-magenta">Learn More</button>
    </div>
</section>
```

### Feature Cards
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; padding: 2rem;">
    <div class="card-holographic" style="padding: 2rem;">
        <h3 class="text-neon-cyan">Feature One</h3>
        <p>Amazing capability description</p>
        <span class="badge-neon">New</span>
    </div>

    <div class="card-glass" style="padding: 2rem;">
        <h3 class="text-neon-magenta">Feature Two</h3>
        <p>Another great feature</p>
        <span class="badge-neon-magenta">Hot</span>
    </div>

    <div class="card-scan" style="padding: 2rem;">
        <h3 class="text-neon-green">Feature Three</h3>
        <p>One more awesome thing</p>
        <span class="badge-neon-green">Popular</span>
    </div>
</div>
```

### Form Section
```html
<div class="card-holographic" style="padding: 3rem; max-width: 500px; margin: 2rem auto;">
    <h2 class="text-gradient-cyber" style="margin-bottom: 2rem;">Contact Us</h2>

    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <input type="text" class="input-cyber" placeholder="Name...">
        <input type="email" class="input-cyber" placeholder="Email...">
        <textarea class="input-cyber" rows="4" placeholder="Message..."></textarea>
        <button class="btn-neon">Send Message</button>
    </div>
</div>
```

### Stats Display
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; padding: 2rem;">
    <div class="card-glass" style="padding: 2rem; text-align: center;">
        <div style="font-size: 3rem; font-weight: 700; font-family: var(--font-display);" class="text-neon-cyan">1M+</div>
        <div style="text-transform: uppercase; font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">Users</div>
    </div>

    <div class="card-glass" style="padding: 2rem; text-align: center;">
        <div style="font-size: 3rem; font-weight: 700; font-family: var(--font-display);" class="text-neon-magenta">99%</div>
        <div style="text-transform: uppercase; font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">Uptime</div>
    </div>

    <div class="card-glass" style="padding: 2rem; text-align: center;">
        <div style="font-size: 3rem; font-weight: 700; font-family: var(--font-display);" class="text-neon-green">24/7</div>
        <div style="text-transform: uppercase; font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">Support</div>
    </div>
</div>
```

## Step 3: Customize Colors (1 minute)

```html
<style>
/* Override with your brand colors */
:root {
    --primary-400: #00ff00;    /* Change cyan to your color */
    --secondary-400: #ff6b00;  /* Change magenta to your color */
}
</style>
```

## Step 4: Configure Effects (30 seconds)

```javascript
// Adjust effect intensity
Aural.NeonEffects.initAll({
    gradientMesh: { speed: 0.03 },        // Slower movement
    particles: { particleCount: 30 },      // Fewer particles (better performance)
    cursorGlow: { size: 300 }              // Larger cursor glow
});
```

## Quick Component Reference

| Component | Class | Example |
|-----------|-------|---------|
| Neon Button | `.btn-neon` | `<button class="btn-neon">Click</button>` |
| Holographic Card | `.card-holographic` | `<div class="card-holographic">Content</div>` |
| Cyber Input | `.input-cyber` | `<input class="input-cyber" placeholder="...">` |
| Gradient Text | `.text-gradient-cyber-animated` | `<h1 class="text-gradient-cyber-animated">Title</h1>` |
| Neon Badge | `.badge-neon` | `<span class="badge-neon">New</span>` |
| Glitch Text | `.text-glitch` | `<h2 class="text-glitch" data-text="GLITCH">GLITCH</h2>` |

## Color Class Reference

| Effect | Class |
|--------|-------|
| Cyan glow | `.text-neon-cyan` |
| Magenta glow | `.text-neon-magenta` |
| Green glow | `.text-neon-green` |
| Yellow glow | `.text-neon-yellow` |
| Red glow | `.text-neon-red` |
| Animated gradient | `.text-gradient-cyber-animated` |
| Holographic shimmer | `.text-holographic` |

## Performance Tips

```javascript
// Mobile optimization
if (window.innerWidth < 768) {
    Aural.NeonEffects.initGradientMesh(); // Mesh only, skip particles
} else {
    Aural.NeonEffects.initAll(); // All effects on desktop
}

// Respect user preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Don't initialize effects
} else {
    Aural.NeonEffects.initAll();
}
```

## That's It! 🎉

You now have a fully functional neon-themed website. View the complete demo at `docs/neon-demo.html` for more inspiration!
