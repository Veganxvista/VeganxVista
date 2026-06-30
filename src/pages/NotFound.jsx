/**
 * NotFound.jsx
 * 404 page
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4" aria-label="Page not found">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 bg-leaf/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Leaf size={36} className="text-leaf" />
        </div>
        <h1 className="font-gilroy font-bold text-8xl text-leaf mb-4">404</h1>
        <h2 className="font-gilroy font-bold text-2xl text-white mb-3">Page Not Found</h2>
        <p className="font-inter text-white/60 mb-8">
          Looks like this page wandered off into the cactus fields. Let's get you back.
        </p>
        <Link to="/" className="btn-primary text-base px-8 py-4">
          Back to Home
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </main>
  );
}
