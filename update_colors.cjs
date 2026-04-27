const fs = require('fs');

let content = fs.readFileSync('src/components/CaseStudyPage.tsx', 'utf-8');

// Replace green variants
content = content.replace(/green-400/g, 'emerald-400');
content = content.replace(/accent-green/g, 'emerald-500');

// Replace zinc variants
content = content.replace(/zinc-800/g, 'border-subtle');
content = content.replace(/zinc-500/g, 'text-secondary');
content = content.replace(/zinc-400/g, 'text-secondary');

// Fix inline gradients
content = content.replace(
  /className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"\r?\n\s*style=\{\{\s*background:\s*'linear-gradient\(90deg,\s*transparent,\s*rgba\(0,98,57,0\.4\),\s*transparent\)'\s*\}\}/g,
  'className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"'
);

// Standardize border/bg opacities to border-subtle
content = content.replace(/border-white\/\[0\.04\]/g, 'border-border-subtle');
content = content.replace(/bg-white\/\[0\.04\]/g, 'bg-border-subtle');
content = content.replace(/border-white\/\[0\.06\]/g, 'border-border-subtle');
content = content.replace(/border-white\/\[0\.1\]/g, 'border-border-subtle');
content = content.replace(/border-white\/\[0\.03\]/g, 'border-border-subtle');

fs.writeFileSync('src/components/CaseStudyPage.tsx', content);

// Update index.css
let cssContent = fs.readFileSync('src/index.css', 'utf-8');
cssContent = cssContent.replace(/selection:bg-accent-green/g, 'selection:bg-emerald-500');
cssContent = cssContent.replace(/--color-accent-green:\s*#006239;/g, '--color-accent-emerald: #10b981;');
fs.writeFileSync('src/index.css', cssContent);

console.log('Colors updated.');
