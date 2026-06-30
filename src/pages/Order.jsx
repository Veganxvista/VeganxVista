import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';
import QuoteModal from '../components/ui/QuoteModal';
import { PRODUCTS, PRODUCT_CATEGORIES, getProductsByCategory } from '../data/products';

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Order() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const filtered = getProductsByCategory(activeCategory);

  const navigate = useNavigate();

const goToContact = () => {
  navigate("/");

  setTimeout(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

  return (
    <>
      <main className="" aria-label="Order - Product Range">

        <section
  className="relative min-h-[100vh] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] bg-[#00311E]"
  aria-label="Order hero"
>
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src="assets/Hero/order-page-bg.png"
      alt=""
      aria-hidden="true"
      className="w-full object-contain opacity-30 rotate-[-15deg] scale-[1.25] relative top-[-60px]"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#081510] via-transparent to-transparent" />
  </div>

  {/* Heading */}
  <div className="relative z-20 max-w-7xl mx-auto px-5 pt-32">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-gilroy font-bold text-center leading-none tracking-tight"
      style={{ fontSize: "clamp(44px, 8vw, 100px)" }}
    >
      <span className="text-white italic">Diverse range of </span>
      <em className="italic font-serif text-[#7DC44E]">
        premium leathers
      </em>
    </motion.h1>
  </div>

  {/* Floating Quote Card */}
  <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-5">
    <div
      className="
        bg-[#C9FFAF]
        backdrop-blur-[30px]
        border border-white/10
        rounded-2xl
        px-8 py-6
        flex flex-col sm:flex-row
        items-center justify-between
        gap-5
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      "
    >
      <div>
        <h3 className="font-inter font-black text-[#00311E] text-2xl mb-1">
          Quote
        </h3>
        <p className="font-inter text-[#00311E/70 text-lg max-w-sm">
          Tell us what you're looking for, and we'll help you find the right
          solution.
        </p>
      </div>

      <Link
        to="/#contact"
        id="order-lets-connect"
        className="inline-flex items-center gap-2 bg-[#00311E] text-white font-gilroy font-semibold
                   text-lg px-6 py-3 rounded-full hover:bg-[#7DC44E]
                   transition-all duration-200 flex-shrink-0"
        onClick={goToContact}
      >
        Let's Connect
      </Link>
    </div>
  </div>
</section>

        {/* ── SWATCH CTAs ── */}
        <section className="bg-[#EDFFE5] border-t border-[#1B3A2D]/10" id="swatch" aria-label="Swatch cards">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="py-16 pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-[#1B3A2D]/10">
                <h3 className="font-gilroy font-semibold text-[#1B3A2D] text-3xl mb-1">Download Our</h3>
                <h3 className="font-gilroy font-semibold text-[#1B3A2D] text-3xl mb-5">Swatch Card</h3>
                <p className="font-gilroy text-[#00311E] text-sm leading-relaxed mb-10 max-w-xs">
                  View all colors, textures and thickness options in our full catalogue PDF.
                </p>
                <a
                  href="/assets/VV_Catalog.pdf"
                  download
                  id="order-download-pdf"
                  className="inline-flex items-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] font-gilroy
                             font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1B3A2D] hover:text-white
                             transition-all duration-200"
                >
                  Download Pdf
                </a>
              </div>
              <div className="py-16 pl-0 font-gilroy md:pl-12">
                <h3 className=" font-semibold text-[#1B3A2D] text-3xl mb-1">Buy a Physical</h3>
                <h3 className=" font-semibold text-[#1B3A2D] text-3xl mb-5">Swatch Card</h3>
                <p className=" text-[#00311E] text-sm leading-relaxed mb-10 max-w-xs">
                  Hold the real thing — A5 sample sheets in all available colors.
                </p>
                <Link
                  to="/contact"
                  id="order-physical-swatch"
                  className="inline-flex items-center gap-2 border-2 border-[#00311E] text-[#1B3A2D] font-inter
                             font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1B3A2D] hover:text-white
                             transition-all duration-200"
                >
                  Place an order
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

/* ── Inline Product Card (matches Figma card style) ── */
function ProductCard({ product, index, onQuote }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-[#EFF8E8] overflow-hidden relative">
        {!imgErr ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImgErr(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${product.colorHex}33, ${product.colorHex}66)` }}
          >
            <div className="w-16 h-16 rounded-full" style={{ backgroundColor: product.colorHex, opacity: 0.6 }} />
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#7DC44E] text-white text-xs font-inter font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <div className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: product.colorHex }} />
          <span className="text-xs font-inter font-medium text-[#1B3A2D]">{product.color}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-gilroy font-bold text-[#1B3A2D] text-lg mb-1 leading-snug">{product.name}</h3>
        <p className="font-inter text-[#1B3A2D]/50 text-sm leading-relaxed mb-3 line-clamp-2">{product.shortDesc}</p>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[product.specs.thickness, product.specs.width].map((s) => (
            <span key={s} className="text-xs font-inter text-[#1B3A2D]/60 bg-[#EFF8E8] px-2.5 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            to={`/order/${product.slug}`}
            id={`card-${product.id}`}
            className="flex-1 text-center bg-[#1B3A2D] text-white font-inter font-semibold text-xs py-2.5 px-4
                       rounded-full hover:bg-[#7DC44E] transition-all duration-200"
          >
            View Details
          </Link>
          <button
            onClick={onQuote}
            className="border border-[#1B3A2D]/20 text-[#1B3A2D] font-inter font-medium text-xs py-2.5 px-4
                       rounded-full hover:border-[#7DC44E] hover:text-[#7DC44E] transition-all duration-200"
          >
            Quote
          </button>
        </div>
      </div>
    </motion.article>
  );
}
