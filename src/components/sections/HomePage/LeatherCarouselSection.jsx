import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';

export default function LeatherCarousel() {
  const [active, setActive] = useState(1);
  const total = PRODUCTS.length;

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const left = PRODUCTS[(active - 1 + total) % total];
  const center = PRODUCTS[active];
  const right = PRODUCTS[(active + 1) % total];

  return (
    <section
      className="min-h-screen py-20 px-6 bg-[linear-gradient(0deg,_rgba(217,217,217,0)_0%,_#C9FFAF_100%)]"
    >
      <div className="w-full mx-auto">
        {/* Title */}
        <p className="text-center text-3xl mb-18 font-medium
        font-gilroy
        text-[#1B3A2D]">
          explore range of leathers
        </p>

        <div className="relative flex items-center justify-between gap-10">
          
          {/* Left Preview */}
          <div className="w-[160px] h-[190px] rounded-xl overflow-hidden">
            <img
              src={left.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Center Card */}
          <div className="relative w-[800px] h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={center.image}
              className="w-full h-full object-cover"
              alt={center.name}
            />

            {/* Overlay Text */}
            <div className="absolute top-4 left-4 text-lg text-white">
              {center.name}
            </div>

            <div className="absolute bottom-4 left-4 text-white text-sm">
              Made from Cactus fiber
            </div>

            <button className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white text-black text-sm">
              Explore Store
            </button>
          </div>

          {/* Right Preview */}
          <div className="w-[140px] h-[170px] rounded-xl overflow-hidden">
            <img
              src={right.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-[120px] bottom-2 w-12 h-12 rounded-full bg-[#043228] text-white flex items-center justify-center"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-[120px] top-2 w-12 h-12 rounded-full bg-[#043228] text-white flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}