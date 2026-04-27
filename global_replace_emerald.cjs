const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    // Replace accent-green
    content = content.replace(/accent-green/g, 'emerald-500');

    // Replace rgba and hex instances of the old green color
    content = content.replace(/rgba\(0,98,57,/g, 'rgba(16,185,129,');
    content = content.replace(/#006239/gi, '#10b981');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});

console.log('Global replacement complete.');
