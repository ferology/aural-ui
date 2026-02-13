# Aural UI Agents - Quick Start with Ollama

Get started with the Aural UI agent system in 5 minutes! 🚀

---

## 1️⃣ Install Ollama

**macOS/Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from https://ollama.ai/download

---

## 2️⃣ Start Ollama

```bash
ollama serve
```

Leave this terminal running.

---

## 3️⃣ Pull a Model (in new terminal)

**Recommended starter model (fast & good quality):**
```bash
ollama pull llama3.2
```

**Alternative models:**
```bash
# Smaller/faster (1GB)
ollama pull llama3.2:1b

# Better quality (5GB)
ollama pull llama3.3

# Best for code (4GB)
ollama pull qwen2.5-coder
```

---

## 4️⃣ Install Dependencies

```bash
cd agents
npm install
```

---

## 5️⃣ Run the Agent System

```bash
npm run dev
```

You should see:
```
╔═══════════════════════════════════════╗
║   Aural UI - Enterprise Agent Team   ║
╚═══════════════════════════════════════╝

✅ Connected to Ollama (model: llama3.2)
```

---

## 🎯 Available Workflows

### Review Design System
```bash
npm run review-system
```
Comprehensive review of components and demo pages for quality and accessibility.

### Create New Component
```bash
npm run new-component
```
Interactive workflow to generate a new component with AI assistance.

### Audit Accessibility
```bash
npm run audit-accessibility
```
WCAG 2.1 AA compliance audit for existing components.

---

## ⚙️ Configuration (Optional)

Edit `.env` to customize:

```bash
# Change Ollama URL (if remote)
OLLAMA_BASE_URL=http://localhost:11434

# Change model
OLLAMA_MODEL=llama3.3

# Adjust creativity (0.0 = deterministic, 1.0 = creative)
DEFAULT_TEMPERATURE=0.5

# Maximum response length
DEFAULT_MAX_TOKENS=4096
```

---

## ❓ Troubleshooting

### "Cannot connect to Ollama"

1. Check Ollama is running:
   ```bash
   ollama list
   ```

2. If not running:
   ```bash
   ollama serve
   ```

### "Model not found"

Pull the model first:
```bash
ollama pull llama3.2
```

### Slow Performance

Use a smaller model:
```bash
ollama pull llama3.2:1b
```

Update `.env`:
```bash
OLLAMA_MODEL=llama3.2:1b
```

---

## 📊 Model Comparison

| Model | Size | Speed | Quality | Best For |
|-------|------|-------|---------|----------|
| llama3.2:1b | 1GB | ⚡⚡⚡ | ⭐⭐ | Testing |
| llama3.2 | 2GB | ⚡⚡ | ⭐⭐⭐ | General use |
| llama3.3 | 5GB | ⚡ | ⭐⭐⭐⭐ | Quality |
| qwen2.5-coder | 4GB | ⚡⚡ | ⭐⭐⭐⭐ | Code generation |
| mixtral | 26GB | 🐌 | ⭐⭐⭐⭐⭐ | Highest quality |

---

## 🔗 Helpful Commands

```bash
# List installed models
ollama list

# Remove a model
ollama rm MODEL_NAME

# Show model details
ollama show MODEL_NAME

# Check running models
ollama ps
```

---

## 📚 Full Documentation

For detailed setup, troubleshooting, and advanced configuration:
- **Setup Guide:** `OLLAMA_SETUP_GUIDE.md`
- **Migration Details:** `MIGRATION_SUMMARY.md`

---

**That's it! You're ready to build! 🎉**
