/**
 * SectionHeading.jsx
 * Reusable section heading with label + title + divider pattern.
 */

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  label,        // Small uppercase label above title
  title,        // Main title (can include JSX for accent)
  subtitle,     // Optional paragraph below
  align = 'left', // 'left' | 'center' | 'right'
  dark = false,   // Dark background variant
  className = '',
}) {
  const alignClass = {
    left:   'text-left items-start',
    center: 'text-center items-center',
    right:   'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {label && (
        <span className={`text-label ${dark ? 'text-leaf' : 'text-leaf'}`}>
          {label}
        </span>
      )}

      <h2 className={`text-display-md ${dark ? 'text-white' : 'text-forest-700'}`}>
        {title}
      </h2>

      {/* Divider */}
      <div className={`divider ${align === 'center' ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`text-body max-w-xl mt-1 ${dark ? 'text-white/70' : 'text-forest-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
