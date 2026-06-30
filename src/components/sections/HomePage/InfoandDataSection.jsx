import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';


export default function CactusInfoSection() {
  const stats = [
    { value: "87%", label: "Less CO₂ Emissions" },
    { value: "72%", label: "Less Water Usage" },
    { value: "90%", label: "Bio-Based Material" },
    { value: "00%", label: "Toxic Chemicals" },
  ];

  return (
    <section className="bg-[#EDFFE5] min-h-screen py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* Main Card */}
        <div className="relative border border-[#365948]/60 rounded-[32px] min-h-[480px] px-16 py-16">

          {/* Floating cactus image */}
          <div className="absolute -top-12 left-[-30px] rotate-[-5deg]">
            <div className="w-[200px] h-[230px] bg-[#E8F4E0] shadow-lg border-2 border-black/60 overflow-hidden">
              <img
                src="/assets/Hero/cactus-info.png"
                alt="Cactus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative star */}
          <div className="absolute top-8 right-8 text-[#00A65A] text-6xl font-extrabold rotate-[-10deg] font-gilroy">
            ✳
          </div>

          {/* Content */}
          <div className="max-w-2xl ml-80 pt-10  ">
            <p className="text-[#1B3A2D] text-xl leading-relaxed font-medium font-gilroy">
              To decouple the material economy from animal agriculture and
              petrochemicals. We exist to prove that the most durable and
              beautiful materials on earth can be grown, not slaughtered or
              drilled. To craft premium, affordable sustainable plant-based
              vegan leather.
            </p>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute left-[-45px] bottom-10 w-[1250px] bg-white rounded-[20px] shadow-xl px-30 py-8 "
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-[#00A65A] font-inter font-bold text-5xl">
                    {item.value}
                  </h3>
                  <p className="text-sm font-medium text-[#1B3A2D]/70 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}