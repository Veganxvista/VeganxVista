import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

export default function HeroSection() {
  return (
    <section
      className="relative h-[60vh] md:min-h-[100vh] overflow-hidden bg-[#043228] rounded-b-[40px] md:rounded-b-[60px]"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/Hero/hero-bg-texture.png"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0
        
        " />
      </div>

      {/* Hero Center Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img
          src="/assets/Hero/hero-image.png"
          alt="Cactus leather"
          className="w-[320px]  md:w-[500px] lg:w-[600px] object-contain"
        />
      </div>

      {/* Plant Badge */}
      <motion.div
        className="absolute left-[8%] md:left-[29%] top-[35%] z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
          <Circle size={12} className="bg-[#7dc44e] rounded-full" />
          <span className="text-[#7DC44E] text-sm font-medium">
            Plant-Based
          </span>
        </div>
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="absolute right-[5%] md:right-[25%] top-[20%] z-20"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-[#D4FFC0] font-gilroy font-semibold leading-tight text-xl md:text-3xl lg:text-5xl">
          leather Crafted
          <br />
          from{" "}
          <span className="italic font-gilroy text-[#7DC44E]">
            cactus and
          </span>
          <br />
          <span className="italic font-gilroy text-[#7DC44E]">
            natural fibers
          </span>
        </h3>
      </motion.div>

      {/* Main Content */}
      <div className="relative bottom-[-350px] md:left-20 md:bottom-[-400px] z-20 max-w-7xl mx-auto px-6  flex flex-col justify-end pb-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="leading-[1.2] tracking-tight font-inter font-bold">
            <span
              className="block text-white font-semibold"
              style={{ fontSize: "clamp(50px,7.5vw,110px)" }}
            >
              Elevating
            </span>

            <span
              className="block text-white font-semibold"
              style={{ fontSize: "clamp(50px,7.5vw,110px)" }}
            >
              Sustainable{" "}
              <span
                className="italic font-serif text-[#B9D96C] font-normal"
                style={{ fontSize: "clamp(50px,7.5vw,110px)" }}
              >
                Luxury.
              </span>
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}