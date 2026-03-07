const fs = require('fs');
const path = require('path');

function getSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

function analyzePackage(pkgName) {
  const distPath = path.join(__dirname, '..', 'packages', pkgName, 'dist');
  if (!fs.existsSync(distPath)) {
    console.log(`⚠️  ${pkgName}: No dist folder`);
    return;
  }

  const files = fs.readdirSync(distPath);
  const jsFiles = files.filter((f) => f.endsWith('.js') || f.endsWith('.mjs'));

  console.log(`\n📦 ${pkgName}`);
  jsFiles.forEach((file) => {
    console.log(`  ${file}: ${getSize(path.join(distPath, file))} KB`);
  });
}

console.log('🔍 Bundle Size Analysis\n');
analyzePackage('core');
analyzePackage('react');
analyzePackage('vue');

const cssPath = path.join(__dirname, '..', 'dist', 'aural-ui.css');
if (fs.existsSync(cssPath)) {
  console.log(`\n🎨 CSS Bundle`);
  console.log(`  aural-ui.css: ${getSize(cssPath)} KB`);
}

console.log('\n✅ Analysis complete\n');
