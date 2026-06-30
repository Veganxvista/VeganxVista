import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { HeroSection, CertificateSection, InfoandDataSection, RecognitionSection, RedefiningSection, LeatherCarouselSection, ContactFAQSection } from '../components/sections/HomePage/index.js';



/* ---- tiny fade-up  ---- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

export default function Home() {
  return (
    <main>
      {/* <SwatchSection /> */}
      <HeroSection />
      <CertificateSection />
      <InfoandDataSection />
      <LeatherCarouselSection />
      <RedefiningSection />
      <RecognitionSection />
      <ContactFAQSection />
    </main>
  );
}




