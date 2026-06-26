const fs = require('fs');

const file = 'src/App.tsx';
let txt = fs.readFileSync(file, 'utf-8');

txt = txt.replace(
  /className="group relative bg-\[#f4f4f5\] rounded-\[1rem\]/g,
  'className="group relative bg-[#f4f4f5] hover:bg-[#18181b] transition-colors duration-500 rounded-[1rem]'
);

txt = txt.replace(
  /className="group relative bg-\[#18181b\] rounded-\[1rem\]/g,
  'className="group relative bg-[#f4f4f5] hover:bg-[#18181b] transition-colors duration-500 rounded-[1rem]'
);

txt = txt.replace(
  /tracking-tight text-brand-black md:-mt-2 z-10"/g,
  'tracking-tight text-brand-black group-hover:text-white transition-colors duration-500 md:-mt-2 z-10"'
);

// We had one row with text-white
txt = txt.replace(
  /tracking-tight text-white md:-mt-2 z-10"/g,
  'tracking-tight text-brand-black group-hover:text-white transition-colors duration-500 md:-mt-2 z-10"'
);

txt = txt.replace(
  /tracking-\[0.2em\] text-brand-black\/60 max-w-\[280px\] z-10 md:text-right"/g,
  'tracking-[0.2em] text-brand-black/60 group-hover:text-[#a1a1aa] transition-colors duration-500 max-w-[280px] z-10 md:text-right"'
);

txt = txt.replace(
  /tracking-\[0.2em\] text-\[#a1a1aa\] max-w-\[280px\] z-10 md:text-right"/g,
  'tracking-[0.2em] text-brand-black/60 group-hover:text-[#a1a1aa] transition-colors duration-500 max-w-[280px] z-10 md:text-right"'
);

fs.writeFileSync(file, txt);
