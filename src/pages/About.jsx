import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

const FOUNDERS = [
  {
    name: 'Anand Agarwal',
    title: 'Founder',
    image: '/assets/Hero/AnandAgrawal.jpg',
    color: '#1B3A2D',
    description:
      `A visionary entrepreneur with over 30 years of deep expertise in the textile industry. Proven track record of covering the entire manufacturing value chain, from yarn to final garment production. 
      
      Successfully founded and exited the denim brand "Aramex". Currently leveraging three decades of manufacturing insight to pioneer sustainable material science at VeganVista Corp, transforming agricultural waste into eco-friendly leather alternatives.`,
    email: 'anand@veganvistacorp.com'
  },
  {
    name: 'Ishita Agarwal',
    title: 'Co-Founder',
    image: '/assets/Hero/IshitaAgrawal.jpeg',
    color: '#2F7A1E',
    description:
      `A visionary entrepreneur dedicated to improve the enviroment and animal welfare. With expertise in Environmental microbilogy and Biotechnology, Ishita brings a successful track records developing high end products from R & D. 
      
      Her understanding in Technology and ability to intergrate in various fields, enables her to meet Industrial demands.`,
    email: 'ishita@veganvistacorp.com'
  },
  {
    name: 'Abhishek Chaudhary',
    title: 'CTO - Chief Technology Officer',
    image: '/assets/Hero/AbhishekChaudhary.jpg',
    color: '#2F7A1E',
    description:`A Chartered Accountant with over 2 decades of experience in the field of Financial Analysis, Corporate Finance, Taxation, Financial Planning.
Also have worked towards helping businesses and individuals achieve their business cum financial goals. Hands on industry knowledge and a result driven approach to deliver impactful solutions.

I am committed to staying ahead of industry trends, continuously refining my skill set and embracing innovative technologies to enhance business decision making.

Co Founder
Phoenix Business Solutions
Myjini Management Pvt Ltd`,
  email: 'abhishek@veganvistacorp.com'
  },
];

const HEADINGS = ["Purpose", "Vision", "Mission"];

const VALUES = ['Innovation', 'Sustainability', 'Luxury'];

export default function About() {

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

      <section className="bg-[#EFF8E8] py-20" aria-label="Who we are">
        <div className="max-w-7xl mx-auto px-5">
          <motion.p
            {...fadeUp(0)}
            className="font-gilroy text-center text-[#1B3A2D] text-xl tracking-[0.25em] mb-12"
          >
            Who we are
          </motion.p>

          {/* Cards + headings */}
          <div className="max-w-5xl mx-auto">
            {/* Founder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FOUNDERS.map((f, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.12)}
                  className="group [perspective:1000px]"
                >
                  <div
                    className="relative rounded-2xl w-full transition-all duration-700
      [transform-style:preserve-3d]
      group-hover:[transform:rotateY(180deg)]"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div
                        className="absolute inset-0 -z-10"
                        style={{
                          background: `linear-gradient(135deg, ${f.color}cc, ${f.color}66)`,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e15]/90 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-gilroy font-bold text-white text-lg">
                          {f.name}
                        </p>
                        <p className="font-inter text-[#7DC44E] text-xs font-medium">
                          {f.title}
                        </p>
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#1B3A2D] text-white p-6
        flex flex-col justify-between   
        [transform:rotateY(180deg)]
        [backface-visibility:hidden]"
                    >
                      <div>
                        <h3 className="font-gilroy text-xl font-bold mb-4">{f.name}</h3>

                        <p className="font-inter text-sm text-white/80 whitespace-pre-line leading-relaxed">
                          {f.description}
                        </p>

                      </div>
                      <div>
                        <Mail size={13} />
                        <p className="font-inter text-sm text-white/80 leading-relaxed">
                          {f.email}
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Static headings under cards */}
            <div className="grid grid-cols-3 mt-8 text-center">
              <p className="font-gilroy text-sm tracking-[0.25em]  text-[#1B3A2D]/50">
                Purpose
              </p>

              <p className="font-gilroy text-sm tracking-[0.25em]  text-[#1B3A2D]/50">
                Vision
              </p>

              <p className="font-gilroy text-sm tracking-[0.25em]  text-[#1B3A2D]/50">
                Mission
              </p>
            </div>

            {/* Static Content */}
            <motion.div
              {...fadeUp(0.2)}
              className="max-w-3xl mx-auto text-center mt-14 space-y-4"
            >
              <p className="font-gilroy font-semibold text-[#1B3A2D]/70 text-lg leading-relaxed">
                Creating the next generation of premium materials inspired by nature
                and powered by innovation, driving a global shift toward a more
                sustainable and conscious future.
              </p>

              <div className="flex justify-center gap-4 pt-4">
                {VALUES.map((v) => (
                  <span
                    key={v}
                    className="font-inter text-[#1B3A2D]/40 text-sm tracking-widest"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE PEOPLE BEHIND IT ── */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-start overflow-hidden"
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
          <div className="absolute inset-0 " />
        </div>

        {/* Text overlay */}
        <motion.div {...fadeUp(0)} className="relative  z-10 text-center py-1 px-5 ">
          <h2 className="font-gilroy font-semibold text-white/80 text-3xl md:text-4xl">
            The People Behind It
          </h2>
          <p className="font-inter bg-white/60 text-black/70 text-base mt-4 max-w-sm mx-auto rounded-lg ">
            A team united by one mission - redefining what luxury means.
          </p>
        </motion.div>
      </section>


    </main>
  );
}
