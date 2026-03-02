#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');

const cssFiles = [
  'aural-ui.css',
  'minimal.css',
  'light.css',
  'dark.css',
  'neon.css',
  'kinetic.css',
  'prismatic.css',
  'high-contrast.css',
  'colorblind-friendly.css',
  'neon-refined.css',
  'warm.css'
];

const srcDir = path.join(__dirname, '../src');
const themesDir = path.join(__dirname, '../themes');
const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

async function compileCSS(inputFile, outputFile) {
  try {
    const css = fs.readFileSync(inputFile, 'utf8');
    const result = await postcss([
      postcssImport(),
      postcssNesting(),
      autoprefixer()
    ]).process(css, {
      from: inputFile,
      to: outputFile
    });

    fs.writeFileSync(outputFile, result.css);
    if (result.map) {
      fs.writeFileSync(outputFile + '.map', result.map.toString());
    }
    console.log(`✓ Compiled ${path.basename(inputFile)} -> ${path.basename(outputFile)}`);
  } catch (error) {
    console.error(`✗ Error compiling ${path.basename(inputFile)}:`, error.message);
    process.exit(1);
  }
}

async function build() {
  console.log('Building CSS files...\n');

  for (const file of cssFiles) {
    let inputPath;

    // Check if file is in src/ or themes/
    if (fs.existsSync(path.join(srcDir, file))) {
      inputPath = path.join(srcDir, file);
    } else if (fs.existsSync(path.join(themesDir, file))) {
      inputPath = path.join(themesDir, file);
    } else {
      console.warn(`⚠ Skipping ${file} - not found in src/ or themes/`);
      continue;
    }

    const outputPath = path.join(distDir, file);
    await compileCSS(inputPath, outputPath);
  }

  console.log('\n✓ All CSS files compiled successfully!');
}

build().catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
});
