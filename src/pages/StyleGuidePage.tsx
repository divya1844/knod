import { ArrowLeft, Download, Palette, Type, Layout, Grid, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export function StyleGuidePage() {
  useSEO({
    title: "Style Guide | Knod",
    description: "Developer handoff documentation for Knod's brand identity, typography, colors, and layout principles.",
    noindex: true,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="flex-1 w-full pt-32 pb-24 relative bg-white min-h-screen">
      {/* Header - Hidden when printing */}
      <div className="max-w-4xl mx-auto px-6 mb-12 print:hidden flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-black/60 hover:text-brand-black transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-brand-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-black/80 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Save as PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 print:px-0">
        <div className="mb-16 print:mb-8">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-black mb-4">
            Knod Style Guidelines
          </h1>
          <p className="text-lg text-brand-black/60">
            Developer handoff documentation for brand identity, typography, colors, and layout principles.
          </p>
        </div>

        {/* 1. Colors */}
        <section className="mb-16 print:mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold tracking-tight">Colors</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Brand Blue", hex: "#0071E3", class: "bg-[#0071E3]", text: "text-white" },
              { name: "Accent Blue", hex: "#38B6FF", class: "bg-[#38B6FF]", text: "text-brand-black" },
              { name: "Brand Black", hex: "#111111", class: "bg-[#111111]", text: "text-white" },
              { name: "Accent Green", hex: "#1AEB7E", class: "bg-[#1AEB7E]", text: "text-brand-black" },
              { name: "Off White 1", hex: "#F5F5F7", class: "bg-[#F5F5F7]", text: "text-brand-black" },
              { name: "Off White 2", hex: "#F4F4F5", class: "bg-[#F4F4F5]", text: "text-brand-black" },
              { name: "Dark Gray", hex: "#18181B", class: "bg-[#18181B]", text: "text-white" },
              { name: "Pure White", hex: "#FFFFFF", class: "bg-white border border-black/10", text: "text-brand-black" },
            ].map(col => (
              <div key={col.name} className="flex flex-col">
                <div className={`h-24 rounded-xl mb-3 ${col.class} flex items-end p-3 shadow-sm`}>
                  <span className={`text-xs font-mono font-medium ${col.text}`}>{col.hex}</span>
                </div>
                <span className="text-sm font-medium text-brand-black">{col.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography */}
        <section className="mb-16 print:mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
          </div>
          
          <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-6">
            <h3 className="text-sm tracking-[0.2em] uppercase font-semibold text-brand-black/50 mb-6">Primary Typeface: Inter</h3>
            
            <div className="space-y-8">
              <div>
                <span className="text-xs text-brand-black/40 font-mono mb-2 block">text-6xl / font-medium / tracking-tight</span>
                <div className="text-4xl md:text-6xl font-medium tracking-tight text-brand-black leading-tight">Heading 1</div>
              </div>
              <div>
                <span className="text-xs text-brand-black/40 font-mono mb-2 block">text-4xl / font-medium / tracking-tight</span>
                <div className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black">Heading 2</div>
              </div>
              <div>
                <span className="text-xs text-brand-black/40 font-mono mb-2 block">text-2xl / font-semibold</span>
                <div className="text-xl md:text-2xl font-semibold text-brand-black">Heading 3</div>
              </div>
              <div>
                <span className="text-xs text-brand-black/40 font-mono mb-2 block">text-lg / font-light / leading-relaxed</span>
                <div className="text-lg font-light text-brand-black/80 leading-relaxed max-w-2xl">
                  Body text uses a lighter font weight with relaxed line height to ensure readability across all devices. We keep line lengths to 55-75 characters for optimal reading experience.
                </div>
              </div>
              <div>
                <span className="text-xs text-brand-black/40 font-mono mb-2 block">text-[10px] / font-semibold / tracking-[0.2em] / uppercase</span>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-blue">
                  Overline Label
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Fluid CSS Typographic Scale */}
        <section className="mb-16 print:mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Layout className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold tracking-tight">Fluid Typography (CSS Clamps)</h2>
          </div>
          <div className="bg-brand-black text-white p-6 rounded-2xl overflow-x-auto">
            <pre className="text-xs md:text-sm font-mono text-white/80 leading-relaxed">
{`/* index.css variables for fluid scaling */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1.05rem + 0.38vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
--text-3xl: clamp(1.875rem, 1.6rem + 1.3vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem);
--text-6xl: clamp(3.75rem, 3.25rem + 3.5vw, 5rem);
--text-7xl: clamp(4.5rem, 4rem + 4vw, 6rem);`}
            </pre>
          </div>
        </section>

        {/* 4. Layout & Spacing */}
        <section className="mb-16 print:mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Grid className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold tracking-tight">Layout & Spaces</h2>
          </div>
          <ul className="space-y-4 text-brand-black/80 font-light text-lg">
            <li><strong className="font-medium text-brand-black">Max Widths:</strong> Primary container max-width is <code className="bg-black/5 px-2 py-0.5 rounded text-sm">1600px</code> or <code className="bg-black/5 px-2 py-0.5 rounded text-sm">1400px</code> for slightly narrower sections.</li>
            <li><strong className="font-medium text-brand-black">Mobile Padding:</strong> Minimum of <code className="bg-black/5 px-2 py-0.5 rounded text-sm">px-4</code> on mobile, scaling up to <code className="bg-black/5 px-2 py-0.5 rounded text-sm">lg:px-12</code> on desktops.</li>
            <li><strong className="font-medium text-brand-black">Border Radii:</strong> Cards use large, soft corners: <code className="bg-black/5 px-2 py-0.5 rounded text-sm">rounded-[2rem]</code> (32px). Buttons are pill-shaped <code className="bg-black/5 px-2 py-0.5 rounded text-sm">rounded-full</code>.</li>
            <li><strong className="font-medium text-brand-black">Overflow:</strong> The entire document restricts horizontal scroll via <code className="bg-black/5 px-2 py-0.5 rounded text-sm">overflow-x-hidden</code> on HTML/Body.</li>
            <li><strong className="font-medium text-brand-black">Interactive Targets:</strong> All buttons and links must have a minimum height of <code className="bg-black/5 px-2 py-0.5 rounded text-sm">44px</code> on mobile.</li>
          </ul>
        </section>
        
        {/* 5. Imagery */}
        <section className="mb-16 print:mb-8">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold tracking-tight">Imagery & Borders</h2>
          </div>
          <ul className="space-y-4 text-brand-black/80 font-light text-lg">
            <li><strong className="font-medium text-brand-black">Object Fit:</strong> All images use <code className="bg-black/5 px-2 py-0.5 rounded text-sm">object-fit: cover</code> to prevent distortion.</li>
            <li><strong className="font-medium text-brand-black">Borders:</strong> Used sparingly to delineate sections on white backgrounds. Color is typically <code className="bg-black/5 px-2 py-0.5 rounded text-sm">border-brand-black/5</code>.</li>
            <li><strong className="font-medium text-brand-black">Shadows:</strong> Soft shadows for floating elements: <code className="bg-black/5 px-2 py-0.5 rounded text-sm">shadow-2xl</code> or custom colored glow effects using absolute positioning and blur filters.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
