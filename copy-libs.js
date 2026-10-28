// three.js dosyalarını oyunun www klasörüne kopyalar (internet olmadan çalışsın diye)
const fs = require('fs'), path = require('path');
const t = path.join(__dirname, 'node_modules', 'three');
fs.copyFileSync(path.join(t, 'build', 'three.min.js'), path.join(__dirname, 'www', 'three.min.js'));
fs.copyFileSync(path.join(t, 'examples', 'js', 'controls', 'OrbitControls.js'), path.join(__dirname, 'www', 'OrbitControls.js'));
console.log('three.min.js ve OrbitControls.js www klasörüne kopyalandı');
