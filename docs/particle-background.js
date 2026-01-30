/**
 * Flowing Wave Lines Background
 * A lightweight canvas-based animated flowing wave lines effect
 *
 * @version 1.0.0
 */

class ParticleBackground {
    constructor(options = {}) {
        this.options = {
            containerId: options.containerId || 'particle-background',
            lineColor: options.lineColor || 'rgba(147, 51, 234, 0.6)', // Purple
            particleColor: options.particleColor || 'rgba(200, 150, 255, 0.8)',
            lineWidth: options.lineWidth || 2,
            lineCount: options.lineCount || 15,
            waveAmplitude: options.waveAmplitude || 80,
            waveSpeed: options.waveSpeed || 0.01,
            particleCount: options.particleCount || 6,
            particleSize: options.particleSize || 3,
            ...options
        };

        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        this.time = 0;
        this.lines = [];

        this.init();
    }

    init() {
        // Create canvas
        const container = document.getElementById(this.options.containerId);
        if (!container) {
            console.error(`Container #${this.options.containerId} not found`);
            return;
        }

        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);

        // Set canvas size
        this.resize();

        // Create lines
        this.createLines();

        // Event listeners
        window.addEventListener('resize', () => this.resize());

        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.createLines();
    }

    createLines() {
        this.lines = [];
        const centerY = this.canvas.height * 0.28; // Position at 28% from top instead of center
        const spacing = this.canvas.height / (this.options.lineCount + 1);

        for (let i = 0; i < this.options.lineCount; i++) {
            this.lines.push({
                baseY: centerY + (i - this.options.lineCount / 2) * spacing * 0.3,
                speed: 0.5 + Math.random() * 0.5,
                offset: Math.random() * Math.PI * 2,
                amplitude: this.options.waveAmplitude * (0.3 + Math.random() * 0.7),
                frequency: 0.003 + Math.random() * 0.002,
                particles: this.createParticlesForLine()
            });
        }
    }

    createParticlesForLine() {
        const particles = [];
        for (let i = 0; i < this.options.particleCount; i++) {
            particles.push({
                x: Math.random(),
                speed: 0.0003 + Math.random() * 0.0005
            });
        }
        return particles;
    }

    getWaveY(x, line, time) {
        // Create flowing sine waves with multiple harmonics
        let y = line.baseY;

        // Primary wave
        y += Math.sin(x * line.frequency + time * line.speed + line.offset) * line.amplitude;

        // Secondary wave for more organic feel
        y += Math.sin(x * line.frequency * 1.5 - time * line.speed * 0.7 + line.offset * 0.5) * (line.amplitude * 0.3);

        // Tertiary wave for complexity
        y += Math.sin(x * line.frequency * 0.5 + time * line.speed * 1.3 + line.offset * 1.5) * (line.amplitude * 0.2);

        return y;
    }

    drawLine(line) {
        // Create path for the wave line
        const path = new Path2D();

        for (let x = 0; x <= this.canvas.width; x += 2) {
            const y = this.getWaveY(x, line, this.time);

            if (x === 0) {
                path.moveTo(x, y);
            } else {
                path.lineTo(x, y);
            }
        }

        // Draw glow effect (multiple passes with increasing blur)
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = this.options.lineColor;
        this.ctx.strokeStyle = this.options.lineColor;
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.stroke(path);

        // Draw brighter core
        this.ctx.shadowBlur = 10;
        this.ctx.strokeStyle = this.options.lineColor.replace(/[\d.]+\)$/g, '0.8)');
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.stroke(path);

        // Reset shadow
        this.ctx.shadowBlur = 0;

        // Draw particles on the line
        this.ctx.fillStyle = this.options.particleColor;
        line.particles.forEach(particle => {
            // Update particle position
            particle.x += particle.speed;
            if (particle.x > 1) particle.x = 0;

            const x = particle.x * this.canvas.width;
            const y = this.getWaveY(x, line, this.time);

            // Draw particle with glow
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.options.particleSize, 0, Math.PI * 2);
            this.ctx.fill();

            // Add glow effect
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, this.options.particleSize * 3);
            gradient.addColorStop(0, this.options.particleColor);
            gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.options.particleSize * 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        // Clear canvas (transparent, let CSS background show through)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw all lines
        this.lines.forEach(line => this.drawLine(line));

        // Update time
        this.time += this.options.waveSpeed;

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        window.removeEventListener('resize', () => this.resize());
    }
}

// Auto-initialize if data attribute is present
document.addEventListener('DOMContentLoaded', () => {
    const autoInit = document.querySelector('[data-particle-background]');
    if (autoInit) {
        const options = {
            containerId: autoInit.id || 'particle-background',
            particleCount: parseInt(autoInit.dataset.particleCount) || 50,
            particleColor: autoInit.dataset.particleColor || 'rgba(147, 51, 234, 0.5)',
            connectionColor: autoInit.dataset.connectionColor || 'rgba(147, 51, 234, 0.2)',
            speed: parseFloat(autoInit.dataset.speed) || 0.5,
            interactive: autoInit.dataset.interactive !== 'false'
        };
        new ParticleBackground(options);
    }
});
