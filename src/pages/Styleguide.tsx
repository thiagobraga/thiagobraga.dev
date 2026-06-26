import React from 'react';
import { Link } from 'react-router-dom';

// ── Design Tokens ─────────────────────────────────────────────────
const NORD_PALETTE = [
  { name: 'nord0',  hex: '#2E3440', label: 'Polar Night' },
  { name: 'nord1',  hex: '#3B4252', label: 'Polar Night 1' },
  { name: 'nord2',  hex: '#434C5E', label: 'Polar Night 2' },
  { name: 'nord3',  hex: '#4C566A', label: 'Polar Night 3' },
  { name: 'nord4',  hex: '#D8DEE9', label: 'Snow Storm 0' },
  { name: 'nord5',  hex: '#E5E9F0', label: 'Snow Storm 1' },
  { name: 'nord6',  hex: '#ECEFF4', label: 'Snow Storm 2' },
  { name: 'nord7',  hex: '#8FBCBB', label: 'Frost 0' },
  { name: 'nord8',  hex: '#88C0D0', label: 'Frost 1 (Primary)' },
  { name: 'nord9',  hex: '#81A1C1', label: 'Frost 2 (Secondary)' },
  { name: 'nord10', hex: '#5E81AC', label: 'Frost 3' },
  { name: 'nord11', hex: '#BF616A', label: 'Aurora Red' },
  { name: 'nord12', hex: '#D08770', label: 'Aurora Orange' },
  { name: 'nord13', hex: '#EBCB8B', label: 'Aurora Yellow' },
  { name: 'nord14', hex: '#A3BE8C', label: 'Aurora Green' },
  { name: 'nord15', hex: '#B48EAD', label: 'Aurora Purple' },
];

const FONTS = [
  { name: 'Plus Jakarta Sans', role: 'Headlines / Display', className: 'font-headline', sample: 'The quick brown fox jumps' },
  { name: 'Inter', role: 'Body / Prose', className: 'font-body', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Manrope', role: 'Labels / UI / Caps', className: 'font-label', sample: 'UPPERCASE LABEL · small caps ui text' },
];

const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <section className="mb-24">
    <div className="mb-12 pb-6 border-b border-nord3/30">
      <h2 className="font-headline text-3xl font-bold text-nord6">{title}</h2>
      {subtitle && <p className="text-nord4/60 mt-2 text-sm">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Styleguide: React.FC = () => {
  return (
    <div className="min-h-screen bg-nord0 pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="mb-24 text-center">
          <span className="font-label text-xs text-nord9 uppercase tracking-[0.4em] font-black block mb-6">
            Design Reference
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-nord6 mb-6">
            Styleguide
          </h1>
          <p className="text-nord4/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            A living document of the design system, components, and coding conventions
            used across <strong className="text-nord8">thiagobraga.dev</strong>.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="glass px-6 py-3 rounded-full text-sm font-label font-bold text-nord4 border border-nord3/30 hover:text-nord8 transition-colors">
              ← Back Home
            </Link>
          </div>
        </div>

        {/* ── Color Palette ── */}
        <Section title="Color Palette" subtitle="Nord design system — 16 tokens">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NORD_PALETTE.map(({ name, hex, label }) => (
              <div key={name} className="rounded-xl overflow-hidden border border-nord3/20">
                <div className="h-20" style={{ backgroundColor: hex }} />
                <div className="p-3 bg-nord1">
                  <p className="font-label font-black text-xs text-nord6">{name}</p>
                  <p className="font-label text-[10px] text-nord4/60 mt-0.5">{label}</p>
                  <p className="font-mono text-[10px] text-nord4/40 mt-0.5">{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Typography ── */}
        <Section title="Typography" subtitle="Triple-font system: headline / body / label">
          <div className="space-y-12">
            {FONTS.map(({ name, role, className, sample }) => (
              <div key={name} className="flex flex-col md:flex-row gap-5 items-start justify-between p-8 rounded-2xl bg-nord1 border border-nord3/30">
                <div className="shrink-0">
                  <span className="font-label text-[10px] uppercase tracking-widest text-nord9 font-black">{role}</span>
                  <p className="font-label text-xs text-nord4/50 mt-1">{name}</p>
                </div>
                <p className={`${className} text-3xl md:text-4xl font-bold text-nord6 flex-1 text-right`}>{sample}</p>
              </div>
            ))}
          </div>

          {/* Type scale */}
          <div className="mt-12 p-8 rounded-2xl bg-nord1 border border-nord3/30 space-y-4">
            {[
              { size: 'text-8xl', label: '8xl — Display / Hero' },
              { size: 'text-6xl', label: '6xl — Section Title' },
              { size: 'text-4xl', label: '4xl — Card Title' },
              { size: 'text-2xl', label: '2xl — Subheading' },
              { size: 'text-xl',  label: 'xl — Body Large' },
              { size: 'text-base', label: 'base — Body' },
              { size: 'text-sm',  label: 'sm — Caption' },
              { size: 'text-xs',  label: 'xs — Label' },
            ].map(({ size, label }) => (
              <div key={size} className="flex items-baseline justify-between gap-4">
                <span className="text-nord4/40 font-mono text-xs shrink-0">{size}</span>
                <span className={`${size} font-headline font-bold text-nord6 leading-none`}>Aa</span>
                <span className="text-nord4/40 text-xs text-right">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Components ── */}
        <Section title="Components" subtitle="Buttons, badges, cards, and interactive elements">
          {/* Buttons */}
          <h3 className="font-headline text-xl font-bold text-nord6 mb-6">Buttons</h3>
          <div className="flex flex-wrap gap-4 mb-16">
            <button id="sg-btn-primary" className="px-8 py-3 bg-nord13 text-nord0 font-headline font-bold rounded-lg hover:bg-nord13/90 transition-all">
              Primary
            </button>
            <button id="sg-btn-secondary" className="px-8 py-3 bg-nord10 text-nord6 font-headline font-bold rounded-lg hover:bg-nord10/80 transition-all">
              Secondary
            </button>
            <button id="sg-btn-ghost" className="px-8 py-3 border border-nord3 text-nord6 font-headline font-bold rounded-lg hover:bg-nord1 transition-all">
              Ghost
            </button>
            <button id="sg-btn-danger" className="px-8 py-3 bg-nord11/20 border border-nord11/40 text-nord11 font-headline font-bold rounded-lg hover:bg-nord11/30 transition-all">
              Danger
            </button>
            <button id="sg-btn-pill" className="px-8 py-3 bg-nord1 border border-nord3/30 text-nord8 font-label font-bold rounded-full text-sm hover:border-nord8/50 transition-all">
              Pill Button
            </button>
          </div>

          {/* Badges */}
          <h3 className="font-headline text-xl font-bold text-nord6 mb-6">Badges / Tags</h3>
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              { label: 'DevOps',    cls: 'bg-nord8/20 text-nord8 border-nord8/30'    },
              { label: 'Security',  cls: 'bg-nord15/20 text-nord15 border-nord15/30'  },
              { label: 'Cloud',     cls: 'bg-nord14/20 text-nord14 border-nord14/30'  },
              { label: 'Dev',       cls: 'bg-nord9/20 text-nord9 border-nord9/30'     },
              { label: 'Aurora',    cls: 'bg-nord12/20 text-nord12 border-nord12/30'  },
              { label: 'Featured',  cls: 'bg-nord13/20 text-nord13 border-nord13/30'  },
            ].map(({ label, cls }) => (
              <span key={label} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${cls}`}>
                {label}
              </span>
            ))}
          </div>

          {/* Cards */}
          <h3 className="font-headline text-xl font-bold text-nord6 mb-6">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Standard */}
            <div className="bg-nord1 border border-nord3/30 rounded-2xl p-6 hover:bg-nord2 transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-nord8 mb-4 block">Card Default</span>
              <h4 className="font-headline font-bold text-nord6 mb-3">Post Title Here</h4>
              <p className="text-nord4/70 text-sm leading-relaxed">Short excerpt of the content that would appear in a blog card.</p>
            </div>
            {/* Glass */}
            <div className="glass rounded-2xl p-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-nord9 mb-4 block">Glass Card</span>
              <h4 className="font-headline font-bold text-nord6 mb-3">Glassmorphic Panel</h4>
              <p className="text-nord4/70 text-sm leading-relaxed">Backdrop blur with semi-transparent nord1 background.</p>
            </div>
            {/* Highlight */}
            <div className="bg-nord2 border border-nord8/20 rounded-2xl p-6 shadow-xl shadow-nord8/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-nord13 mb-4 block">Card Highlight</span>
              <h4 className="font-headline font-bold text-nord6 mb-3">Featured Content</h4>
              <p className="text-nord4/70 text-sm leading-relaxed">Elevated variant for featured or pinned content blocks.</p>
            </div>
          </div>

          {/* Inputs */}
          <h3 className="font-headline text-xl font-bold text-nord6 mb-6">Inputs</h3>
          <div className="space-y-4 max-w-lg">
            <input
              id="sg-input-default"
              type="text"
              placeholder="Default input"
              className="w-full bg-nord1 border border-nord3/50 rounded-lg px-4 py-3 text-nord6 placeholder-nord4/40 font-body text-sm focus:outline-none focus:border-nord8 transition-colors"
            />
            <textarea
              id="sg-textarea"
              placeholder="Text area..."
              rows={3}
              className="w-full bg-nord1 border border-nord3/50 rounded-lg px-4 py-3 text-nord6 placeholder-nord4/40 font-body text-sm focus:outline-none focus:border-nord8 transition-colors resize-none"
            />
          </div>
        </Section>

        {/* ── Iconography ── */}
        <Section title="Iconography" subtitle="Material Symbols Outlined — usage examples">
          <div className="flex flex-wrap gap-8 p-8 bg-nord1 rounded-2xl border border-nord3/30">
            {['home', 'person', 'search', 'settings', 'notifications', 'arrow_forward', 'arrow_right_alt', 'east', 'close', 'menu', 'keyboard_double_arrow_down', 'play_arrow', 'graphic_eq', 'terminal', 'cloud', 'security', 'database', 'monitoring', 'memory', 'api', 'javascript', 'account_circle'].map((icon) => (
              <div key={icon} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-nord8 text-2xl">{icon}</span>
                <span className="font-mono text-[9px] text-nord4/40">{icon}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Glassmorphism & Effects ── */}
        <Section title="Visual Effects" subtitle="Glassmorphism, gradients, and shadows">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 flex flex-col gap-2">
              <span className="font-label text-xs text-nord9 font-black uppercase tracking-widest">Glass Panel</span>
              <p className="text-nord4/70 text-sm">.glass — backdrop-blur-xl + bg-nord1/60 + border nord3/30</p>
            </div>
            <div className="gradient-primary-secondary rounded-2xl p-8 border border-nord8/20 flex flex-col gap-2">
              <span className="font-label text-xs text-nord8 font-black uppercase tracking-widest">Gradient Primary</span>
              <p className="text-nord4/70 text-sm">.gradient-primary-secondary — frost diagonal gradient</p>
            </div>
            <div className="rounded-2xl p-8 bg-nord1 border border-nord3/30 flex flex-col gap-3">
              <span className="font-label text-xs text-nord13 font-black uppercase tracking-widest">Text Gradient</span>
              <p className="text-gradient-nord font-headline text-4xl font-extrabold">.text-gradient-nord</p>
            </div>
            <div className="rounded-2xl p-8 section-dim border border-nord3/10 flex flex-col gap-2">
              <span className="font-label text-xs text-nord4/60 font-black uppercase tracking-widest">Section Dim</span>
              <p className="text-nord4/70 text-sm">.section-dim — nord1/30% tonal shift, no hard edge</p>
            </div>
          </div>
        </Section>

        {/* ── Coding Styleguide ── */}
        <Section title="Coding Styleguide" subtitle="Conventions for this codebase">
          <div className="space-y-8">
            {[
              {
                title: 'Component structure',
                content: `• One component per file, named after the file (PascalCase)
• Props interface defined above the component
• exported as default at the bottom
• No barrel index.ts unless shared UI library`,
              },
              {
                title: 'Naming conventions',
                content: `• Files: PascalCase for components, camelCase for hooks and utilities
• CSS: Tailwind-first using design token classes (nord0–nord15)
• Custom classes: kebab-case defined in index.css @layer utilities
• IDs on interactive elements: descriptive, prefixed by section (e.g. hero-explore-btn)`,
              },
              {
                title: 'Tailwind rules',
                content: `• Always use semantic Nord tokens (text-nord8, bg-nord1) over raw hex
• Responsive: mobile-first, breakpoint prefixes: sm / md / lg / xl
• No arbitrary values unless absolutely impossible with tokens
• Animation: use animate-* from tailwind.config keyframes`,
              },
              {
                title: 'State & data',
                content: `• VITE_MOCK=true → mock data from src/lib/mock/*.ts — no network calls
• VITE_MOCK=false → hooks fetch from Supabase
• usePosts() is the single source for all blog data
• React Query for anything requiring caching / background refresh`,
              },
              {
                title: 'TypeScript',
                content: `• Strict mode enabled
• Interfaces for component props and data models
• Avoid "any" — use unknown + type guards if required
• Export types from src/lib/mock/*.ts for shared use`,
              },
              {
                title: 'File organization',
                content: `src/
  components/
    home/          ← homepage sections
    layout/        ← Navbar, Footer, layouts
    ui/            ← shadcn primitives (don't edit)
  hooks/           ← usePosts, etc.
  lib/
    mock/          ← mock data files
    utils.ts       ← cn() and other helpers
  pages/           ← route-level page components`,
              },
            ].map(({ title, content }) => (
              <div key={title} className="p-8 rounded-2xl bg-nord1 border border-nord3/30">
                <h3 className="font-headline font-bold text-nord8 text-lg mb-4">{title}</h3>
                <pre className="text-nord4/80 text-sm leading-relaxed whitespace-pre-wrap font-mono">{content}</pre>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
};

export default Styleguide;
