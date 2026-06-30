import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';

export default function RecognitionSection() {
  const [activeTab, setActiveTab] = useState("recognitions");

  const recognitions = [
    {
      id: 1,
      image: "/assets/recognition/news1.png",
    },
  ];

  return (
    <section className="bg-[#E7F3DE] min-h-fit py-10 " aria-label="Recognitions">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setActiveTab("recognitions")}
            className={`relative text-lg font-gilroy font-medium transition ${
              activeTab === "recognitions"
                ? "text-[#1B3A2D]"
                : "text-[#1B3A2D]/50"
            }`}
          >
            Recognitions
            {activeTab === "recognitions" && (
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#00975C]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("updates")}
            className={`relative text-lg font-gilroy font-medium transition ${
              activeTab === "updates"
                ? "text-[#1B3A2D]"
                : "text-[#1B3A2D]/50"
            }`}
          >
            Updates
            {activeTab === "updates" && (
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#00975C]" />
            )}
          </button>
        </div>

        {/* Cards */}
        {activeTab === "recognitions" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitions.map((item) => (
              <div
                key={item.id}
                className="w-[220px] h-[260px] bg-[#A6F07D] rounded-lg flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt="Recognition"
                  className="w-[80px] object-contain shadow-md"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "updates" && (
          <div className="text-center text-[#1B3A2D]/60">
            No updates available
          </div>
        )}
      </div>
    </section>
  );
}
