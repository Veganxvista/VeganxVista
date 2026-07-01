import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../../data/products.js';

export default function RecognitionSection() {
  const [activeTab, setActiveTab] = useState("recognitions");
  const [selectedCard, setSelectedCard] = useState(null);

  const recognitions = [
    {
      id: 1,
      image: "/assets/Hero/Recognitions1.png",
    },
    {
      id: 2,
      image: "/assets/Hero/paper-2.jpg",
    },
    {
      id: 3,
      image: "/assets/Hero/AGRAAWARD.jpeg",
    },
    {
      id: 4,
      image: "/assets/Hero/paper-3.jpg",
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

        </div>

        {/* Cards */}
        {activeTab === "recognitions" && (
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-8">
            {recognitions.map((item) => (
              <div
  key={item.id}
  onClick={() => setSelectedCard(item)}
  className="md:w-[220px] h-[260px] bg-[#A6F07D] rounded-lg 
             flex items-center justify-center cursor-pointer
             hover:scale-105 transition-transform duration-300"
>
  <img
    src={item.image}
    alt="Recognition"
    className="w-full h-full p-2 object-contain shadow-md"
  />
</div>
            ))}
          </div>
        )}

        {selectedCard && (
  <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedCard(null)}
  >
    <div
      className="relative bg-white rounded-2xl p-4 max-w-4xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedCard(null)}
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black text-white"
      >
        ✕
      </button>

      <img
        src={selectedCard.image}
        alt="Recognition"
        className="w-full max-h-[80vh] object-contain rounded-xl"
      />
    </div>
  </div>
)}

      </div>
    </section>
  );
}
