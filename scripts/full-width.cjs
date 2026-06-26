const fs = require('fs');

const file = 'src/App.tsx';
let txt = fs.readFileSync(file, 'utf-8');

txt = txt.replace(/ max-w-6xl mx-auto/g, '');

fs.writeFileSync(file, txt);
