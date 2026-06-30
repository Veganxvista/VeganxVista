import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';

export default function RedefiningSection() {
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,_rgba(217,217,217,0)_0%,_#C9FFAF_100%)] py-24 overflow-hidden" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex  items-center">

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[702px] h-[720px] bg-[#7ED89B] rounded-2xl"
        >
          {/* Header */}
          <div className="absolute top-8 left-8 right-8 flex justify-between z-20">
            <h2 className="text-[#0D1E17] font-inter font-semibold leading-tight text-3xl max-w-[320px]">
              Redefining the Way
              <br />
              We Make Leather
            </h2>

            <Link
              to="/about"
              className="text-sm underline text-[#0D1E17] self-start"
            >
              Read More
            </Link>
          </div>

          {/* Layered Process Images */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative min-w-[1300px] h-full flex items-center justify-center">
              
              <img
                src="/assets/Hero/cactus-layers.png"
                alt="Process Layer 1"
                className="absolute h-full "
              />
              
            </div>
          </div>

          {/* Bottom Chip */}
          <div className="absolute bottom-[175px] left-1/2 -translate-x-1/2 z-20 rotate-[-9deg] ">
            <div className="bg-[#032B1F] font-gilroy text-[#8BFF59] px-7 py-3 rounded-full">
              From Cactus To Luxury Material
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}