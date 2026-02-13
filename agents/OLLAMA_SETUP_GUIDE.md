# Aural UI Agent System - Ollama Setup Guide

This agent system has been migrated from Anthropic's Claude API to **Ollama** for local LLM execution. This provides several benefits:

- 🔒 **Privacy**: All processing happens locally on your machine
- 💰 **Cost-Free**: No API costs or usage limits
- 🚀 **Fast**: No network latency for API calls
- 🎯 **Customizable**: Use any Ollama-compatible model

---

## Prerequisites

### 1. Install Ollama

Download and install Ollama for your operating system:

**macOS & Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from https://ollama.ai/download

**Verify installation:**
```bash
ollama --version
```

---

## Setup Instructions

### 1. Start Ollama Server

```bash
ollama serve
```

The server will start on `http://localhost:11434` by default.

### 2. Pull a Model

The agent system works best with instruction-following models. Here are some recommended options:

**Small & Fast (Recommended for testing):**
```bash
ollama pull llama3.2
```

**Medium Quality & Speed:**
```bash
ollama pull llama3.3
ollama pull mistral
```

**Large & High Quality:**
```bash
ollama pull mixtral
ollama pull qwen2.5:14b
```

**Code-Specialized:**
```bash
ollama pull codellama
ollama pull qwen2.5-coder
```

### 3. Configure the Agent System

The agents directory already has a `.env` file configured. You can customize it:

```bash
cd agents
cat .env
```

**Configuration options:**

```bash
# Ollama API endpoint (default: http://localhost:11434)
OLLAMA_BASE_URL=http://localhost:11434

# Model to use (must be pulled first)
OLLAMA_MODEL=llama3.2

# Temperature: 0.0 = deterministic, 1.0 = creative
DEFAULT_TEMPERATURE=0.5

# Maximum tokens to generate
DEFAULT_MAX_TOKENS=4096
```

### 4. Install Node Dependencies

```bash
cd agents
npm install
```

### 5. Verify Setup

Run the agent CLI to verify everything works:

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

## Running Workflows

### Review Design System

Comprehensive review of components and demo pages:

```bash
npm run review-system
```

### Create New Component

Interactive component generation workflow:

```bash
npm run new-component
```

### Audit Accessibility

WCAG 2.1 AA compliance audit:

```bash
npm run audit-accessibility
```

### Generate Documentation

Auto-generate component docs:

```bash
npm run generate-docs
```

---

## Troubleshooting

### "Cannot connect to Ollama"

**Solution 1:** Ensure Ollama is running
```bash
ollama serve
```

**Solution 2:** Check if another process is using port 11434
```bash
lsof -i :11434
```

**Solution 3:** Use a different port
```bash
OLLAMA_HOST=0.0.0.0:11435 ollama serve
```

Then update `.env`:
```bash
OLLAMA_BASE_URL=http://localhost:11435
```

### "Model not found"

Pull the model first:
```bash
ollama pull llama3.2
```

List available models:
```bash
ollama list
```

### Slow Performance

**Use a smaller model:**
```bash
ollama pull llama3.2:1b
```

Update `.env`:
```bash
OLLAMA_MODEL=llama3.2:1b
```

**Use GPU acceleration:**
Ollama automatically uses GPU if available (CUDA, Metal, ROCm).

**Check GPU usage:**
```bash
ollama ps
```

### Out of Memory

**Reduce context size in `.env`:**
```bash
DEFAULT_MAX_TOKENS=2048
```

**Use a smaller model:**
```bash
ollama pull llama3.2:1b
```

---

## Recommended Models

### Best Overall (Balanced)
- **llama3.2** (3B params) - Fast, good quality
- **llama3.3** (7B params) - Higher quality, moderate speed
- **mistral** (7B params) - Excellent instruction following

### Best for Code
- **qwen2.5-coder** (7B params) - Specialized for code generation
- **codellama** (7B params) - Meta's code-focused model

### Best for Quality
- **mixtral** (8x7B params) - Highest quality, slower
- **qwen2.5:14b** (14B params) - Very strong reasoning

### Best for Speed
- **llama3.2:1b** (1B params) - Extremely fast
- **phi3** (3B params) - Microsoft's efficient model

---

## Remote Ollama Setup

To use Ollama on a remote server:

### 1. Start Ollama on Remote Server

```bash
OLLAMA_HOST=0.0.0.0:11434 ollama serve
```

### 2. Update Local `.env`

```bash
OLLAMA_BASE_URL=http://remote-server-ip:11434
```

### 3. Ensure Firewall Allows Port 11434

```bash
# Ubuntu/Debian
sudo ufw allow 11434/tcp

# CentOS/RHEL
sudo firewall-cmd --add-port=11434/tcp --permanent
sudo firewall-cmd --reload
```

---

## Performance Tips

### 1. Use GPU Acceleration

Ollama automatically uses:
- **NVIDIA GPUs**: CUDA
- **Apple Silicon**: Metal
- **AMD GPUs**: ROCm

Verify GPU is being used:
```bash
ollama ps
```

### 2. Adjust Context Window

For faster responses, reduce token limit:
```bash
DEFAULT_MAX_TOKENS=2048
```

### 3. Use Quantized Models

Smaller quantized models are faster:
```bash
ollama pull llama3.2:1b-q4_0
```

### 4. Warm Up the Model

Pull and run the model once before using agents:
```bash
ollama run llama3.2 "Hello"
```

---

## Migration from Anthropic API

This system was previously using `@anthropic-ai/sdk`. The migration involved:

1. ✅ Removed `@anthropic-ai/sdk` dependency
2. ✅ Created `OllamaClient` wrapper
3. ✅ Updated all agents to use Ollama
4. ✅ Updated all workflows
5. ✅ Updated configuration files

### Key Changes:

- **Before:** Required `ANTHROPIC_API_KEY` environment variable
- **After:** Requires Ollama running locally or remotely

- **Before:** Used `claude-sonnet-4-5-20250929` model
- **After:** Uses any Ollama-compatible model (llama3.2, mistral, etc.)

- **Before:** API calls to Anthropic's servers
- **After:** Local HTTP calls to Ollama

---

## API Compatibility

The agent interfaces remain the same. If you want to switch back to Anthropic:

1. Reinstall the Anthropic SDK:
   ```bash
   npm install @anthropic-ai/sdk
   ```

2. Update the BaseAgent class to use Anthropic client

3. Update workflows to use API key instead of OllamaClient

---

## Additional Resources

- **Ollama Documentation:** https://ollama.ai/docs
- **Model Library:** https://ollama.ai/library
- **Discord Community:** https://discord.gg/ollama
- **GitHub:** https://github.com/ollama/ollama

---

## Support

If you encounter issues:

1. Check this guide's troubleshooting section
2. Verify Ollama is running: `ollama list`
3. Check model compatibility: `ollama show MODEL_NAME`
4. Review agent logs in the console

---

**Happy building with local AI! 🚀**
