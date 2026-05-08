const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const appDistDir = path.join(rootDir, 'freelancer-app', 'dist');

// Helper to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            copyDir(srcPath, destPath) :
            fs.copyFileSync(srcPath, destPath);
    }
}

// 1. Clean and create dist
console.log('Cleaning dist folder...');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// 2. Copy root landing page
console.log('Copying landing page...');
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
copyDir(path.join(rootDir, 'css'), path.join(distDir, 'css'));

// 3. Copy built React app
console.log('Copying React app...');
if (!fs.existsSync(appDistDir)) {
    console.error('Error: freelancer-app/dist not found. Run npm run build in freelancer-app first.');
    process.exit(1);
}
copyDir(appDistDir, path.join(distDir, 'app'));

console.log('Site assembly complete! Output is in the /dist folder.');
