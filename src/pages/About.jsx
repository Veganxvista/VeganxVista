/**
 * About.jsx — Pixel-perfect match of Figma Screen 4.
 * Sections: embossed hero, Who we are, founders, tabs, purpose text, team photo.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

const FOUNDERS = [
  {
    name:  'Anand Agarwal',
    title: 'Director & Founder',
    image: '/assets/Hero/founder.jpg',
    color: '#1B3A2D',
  },
  {
    name:  'Ishita Agrawal',
    title: 'CEO & Co-Founder',
    image: '/assets/Hero/founder.jpg',
    color: '#2F7A1E',
  },
];

const TABS = [
  {
    id: 'purpose',
    label: 'Purpose',
    text: 'Creating the next generation of premium materials inspired by nature and powered by innovation, through that Driving a global shift toward a more sustainable and conscious future.',
  },
  {
    id: 'vision',
    label: 'Vision',
    text: "To become the world's leading manufacturer of plant-based luxury materials — setting new standards for sustainability, performance, and responsible manufacturing across the global fashion and design industry.",
  },
  {
    id: 'mission',
    label: 'Mission',
    text: 'We source, process, and deliver premium cactus leather that enables designers and brands to build beautiful products without compromising on quality or ethics — proving that sustainability and luxury are not opposites.',
  },
];

const VALUES = ['Innovation', 'Sustainability', 'Luxury'];

export default function About() {
  const [activeTab, setActiveTab] = useState('purpose');
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <main className="" aria-label="About VeganVista">

      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="About hero"
      >
        {/* Leather texture background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/Hero/about-page.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover "
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-[#EFF8E8] py-20" aria-label="Who we are" id="who-we-are">
        <div className="max-w-7xl mx-auto px-5">
          <motion.p {...fadeUp(0)} className="font-gilroy text-center text-[#1B3A2D] text-xl tracking-[0.25em] mb-12">
            Who we are
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                {...fadeUp(i * 0.12)}
                className="relative rounded-2xl border border-[#1B3A2D]/10 overflow-hidden group cursor-default"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Image */}
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* Gradient fallback background */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{ background: `linear-gradient(135deg, ${f.color}cc, ${f.color}66)` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e15]/90 via-transparent to-transparent" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-gilroy font-bold text-white text-lg leading-snug">{f.name}</p>
                  <p className="font-inter text-[#7DC44E] text-xs font-medium mt-0.5">{f.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PURPOSE / VISION / MISSION TABS ── */}
      <section className="bg-[#EFF8E8] pb-20" aria-label="Purpose, Vision, Mission" id="why-cactus">
        <div className="max-w-7xl mx-auto px-5">

          {/* Tab row — "Purpose   Vision   Mission" */}
          <div className="flex items-center justify-center gap-12 md:gap-20 mb-12 border-b border-[#1B3A2D]/10 pb-1">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                id={`tab-${id}`}
                onClick={() => setActiveTab(id)}
                className={`pb-4 font-inter font-medium text-lg transition-all duration-200 border-b-2 -mb-px
                  ${activeTab === id
                    ? 'text-[#1B3A2D] border-[#7DC44E]'
                    : 'text-[#1B3A2D]/40 border-transparent hover:text-[#1B3A2D]'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <p className="font-inter text-[#1B3A2D]/70 text-base leading-relaxed">{tab?.text}</p>

            <div className="flex justify-center gap-4 pt-4">
              {VALUES.map((v) => (
                <span key={v} className="font-inter text-[#1B3A2D]/40 text-xs tracking-widest">
                  {v}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PEOPLE BEHIND IT ── */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#0e1e15' }}
        aria-label="Team"
      >
        {/* Team photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/Hero/group-photo.png"
            alt="VeganVista team"
            className="w-full h-full object-cover "
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e15]/80 to-[#07532866]" />
        </div>

        {/* Text overlay */}
        <motion.div {...fadeUp(0)} className="relative z-10 text-center px-5 py-20">
          <h2 className="font-gilroy font-semibold text-white/80 text-3xl md:text-5xl">
            The People Behind It
          </h2>
          <p className="font-inter text-white/50 text-base mt-4 max-w-sm mx-auto">
            A team united by one mission - redefining what luxury means.
          </p>
        </motion.div>
      </section>

     
    </main>
  );
}
