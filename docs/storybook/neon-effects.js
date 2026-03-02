/**
 * AURAL UI - Neon Interactive Background Effects
 *
 * Creates immersive background effects:
 * - Gradient mesh that follows cursor
 * - Particle system with glow effects
 * - Magnetic button interactions
 */

(function() {
    'use strict';

    const NeonEffects = {
        /* ========================================
           GRADIENT MESH BACKGROUND
           ======================================== */
        initGradientMesh: function(options = {}) {
            const defaults = {
                container: document.body,
                colors: [
                    { color: 'rgba(0, 255, 255, 0.15)', size: '600px' },
                    { color: 'rgba(255, 0, 255, 0.12)', size: '800px' },
                    { color: 'rgba(0, 255, 136, 0.10)', size: '700px' }
                ],
                speed: 0.05,
                enableMouseTracking: true
            };

            const settings = { ...defaults, ...options };

            // Create canvas for gradient mesh
            const canvas = document.createElement('canvas');
            canvas.id = 'neon-gradient-mesh';
            canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                pointer-events: none;
            `;
            settings.container.prepend(canvas);

            const ctx = canvas.getContext('2d');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let targetX = mouseX;
            let targetY = mouseY;

            // Resize canvas
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Track mouse
            if (settings.enableMouseTracking) {
                document.addEventListener('mousemove', (e) => {
                    targetX = e.clientX;
                    targetY = e.clientY;
                });
            }

            // Gradient positions
            const gradients = settings.colors.map((color, i) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: color.color,
                size: parseInt(color.size)
            }));

            // Animation loop
            function animate() {
                // Smooth mouse tracking
                mouseX += (targetX - mouseX) * settings.speed;
                mouseY += (targetY - mouseY) * settings.speed;

                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Update and draw gradients
                gradients.forEach((grad, i) => {
                    // Move gradient
                    grad.x += grad.vx;
                    grad.y += grad.vy;

                    // Bounce off edges
                    if (grad.x < 0 || grad.x > canvas.width) grad.vx *= -1;
                    if (grad.y < 0 || grad.y > canvas.height) grad.vy *= -1;

                    // Slight attraction to mouse
                    if (settings.enableMouseTracking) {
                        const dx = mouseX - grad.x;
                        const dy = mouseY - grad.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 400) {
                            grad.x += dx * 0.001;
                            grad.y += dy * 0.001;
                        }
                    }

                    // Draw radial gradient
                    const gradient = ctx.createRadialGradient(
                        grad.x, grad.y, 0,
                        grad.x, grad.y, grad.size
                    );
                    gradient.addColorStop(0, grad.color);
                    gradient.addColorStop(1, 'transparent');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                });

                requestAnimationFrame(animate);
            }

            animate();

            return {
                destroy: () => {
                    canvas.remove();
                    window.removeEventListener('resize', resizeCanvas);
                }
            };
        },

        /* ========================================
           PARTICLE SYSTEM
           ======================================== */
        initParticleSystem: function(options = {}) {
            const defaults = {
                container: document.body,
                particleCount: 50,
                colors: ['#00ffff', '#ff00ff', '#00ff88', '#ffff00'],
                maxSize: 3,
                minSize: 1,
                speed: 0.5,
                connectionDistance: 150,
                enableConnections: true,
                glowIntensity: 0.6
            };

            const settings = { ...defaults, ...options };

            // Create canvas
            const canvas = document.createElement('canvas');
            canvas.id = 'neon-particles';
            canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                pointer-events: none;
            `;
            settings.container.prepend(canvas);

            const ctx = canvas.getContext('2d');
            let particles = [];

            // Resize canvas
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initParticles();
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Particle class
            class Particle {
                constructor() {
                    this.reset();
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }

                reset() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * settings.speed;
                    this.vy = (Math.random() - 0.5) * settings.speed;
                    this.size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
                    this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)];
                    this.alpha = Math.random() * 0.5 + 0.5;
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Wrap around edges
                    if (this.x < 0) this.x = canvas.width;
                    if (this.x > canvas.width) this.x = 0;
                    if (this.y < 0) this.y = canvas.height;
                    if (this.y > canvas.height) this.y = 0;
                }

                draw() {
                    // Draw glow
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.size * 4
                    );
                    gradient.addColorStop(0, this.color);
                    gradient.addColorStop(1, 'transparent');

                    ctx.globalAlpha = this.alpha * settings.glowIntensity;
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
                    ctx.fill();

                    // Draw particle core
                    ctx.globalAlpha = this.alpha;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Initialize particles
            function initParticles() {
                particles = [];
                for (let i = 0; i < settings.particleCount; i++) {
                    particles.push(new Particle());
                }
            }
            initParticles();

            // Draw connections between nearby particles
            function drawConnections() {
                if (!settings.enableConnections) return;

                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < settings.connectionDistance) {
                            const opacity = (1 - distance / settings.connectionDistance) * 0.3;
                            ctx.globalAlpha = opacity;
                            ctx.strokeStyle = particles[i].color;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                drawConnections();

                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });

                requestAnimationFrame(animate);
            }

            animate();

            return {
                destroy: () => {
                    canvas.remove();
                    window.removeEventListener('resize', resizeCanvas);
                }
            };
        },

        /* ========================================
           MAGNETIC BUTTONS
           ======================================== */
        initMagneticButtons: function(selector = '.btn-magnetic') {
            const buttons = document.querySelectorAll(selector);

            buttons.forEach(button => {
                let buttonRect;

                button.addEventListener('mouseenter', () => {
                    buttonRect = button.getBoundingClientRect();
                });

                button.addEventListener('mousemove', (e) => {
                    const x = e.clientX - buttonRect.left - buttonRect.width / 2;
                    const y = e.clientY - buttonRect.top - buttonRect.height / 2;

                    const distance = Math.sqrt(x * x + y * y);
                    const maxDistance = 50;

                    if (distance < maxDistance) {
                        const pull = 1 - distance / maxDistance;
                        const moveX = x * pull * 0.3;
                        const moveY = y * pull * 0.3;

                        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
                    }
                });

                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0, 0) scale(1)';
                });
            });
        },

        /* ========================================
           CURSOR GLOW
           ======================================== */
        initCursorGlow: function(options = {}) {
            const defaults = {
                color: 'rgba(0, 255, 255, 0.4)',
                size: 200,
                blur: 100
            };

            const settings = { ...defaults, ...options };

            const glow = document.createElement('div');
            glow.id = 'cursor-glow';
            glow.style.cssText = `
                position: fixed;
                width: ${settings.size}px;
                height: ${settings.size}px;
                border-radius: 50%;
                background: radial-gradient(circle, ${settings.color} 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: screen;
                filter: blur(${settings.blur}px);
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(glow);

            let mouseX = 0;
            let mouseY = 0;
            let glowX = 0;
            let glowY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                glow.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                glow.style.opacity = '0';
            });

            function animateGlow() {
                glowX += (mouseX - glowX) * 0.15;
                glowY += (mouseY - glowY) * 0.15;

                glow.style.left = glowX + 'px';
                glow.style.top = glowY + 'px';

                requestAnimationFrame(animateGlow);
            }
            animateGlow();

            return {
                destroy: () => glow.remove()
            };
        },

        /* ========================================
           SCAN LINE EFFECT
           ======================================== */
        initScanLines: function() {
            const scanlines = document.createElement('div');
            scanlines.id = 'scanlines';
            scanlines.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
                background: repeating-linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.15),
                    rgba(0, 0, 0, 0.15) 1px,
                    transparent 1px,
                    transparent 2px
                );
                opacity: 0.3;
            `;
            document.body.appendChild(scanlines);

            return {
                destroy: () => scanlines.remove()
            };
        },

        /* ========================================
           INITIALIZE ALL EFFECTS
           ======================================== */
        initAll: function(options = {}) {
            const effects = {
                gradientMesh: this.initGradientMesh(options.gradientMesh),
                particles: this.initParticleSystem(options.particles),
                cursorGlow: this.initCursorGlow(options.cursorGlow),
                scanLines: this.initScanLines()
            };

            this.initMagneticButtons();

            return {
                destroy: () => {
                    Object.values(effects).forEach(effect => {
                        if (effect && effect.destroy) effect.destroy();
                    });
                }
            };
        }
    };

    // Expose to global Aural namespace
    if (typeof window.Aural === 'undefined') {
        window.Aural = {};
    }
    window.Aural.NeonEffects = NeonEffects;

    // Auto-initialize if data attribute is present
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.hasAttribute('data-neon-effects')) {
            NeonEffects.initAll();
        }
    });

})();
