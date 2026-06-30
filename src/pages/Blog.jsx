import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getFeaturedPost, getOtherPosts } from '../data/blogs';

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Blog() {
  const featured = getFeaturedPost();
  const others   = getOtherPosts();

  return (
    <main className="" aria-label="Blog">
      <section
        className="relative min-h-[100vh] overflow-hidden bg-[#043228] rounded-b-[40px] md:rounded-b-[60px]"
      aria-label="Blog Hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="assets/Hero/robot-hand-blog-page.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081510] via-transparent to-transparent" />
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="bg-[#EFF8E8] py-10" aria-label="Featured blog post">
          <div className="max-w-7xl mx-auto px-5">
            <motion.article
              {...fadeUp(0)}
              className="bg-white rounded-3xl overflow-hidden grid md:grid-cols-[5fr_7fr] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative min-h-[240px] bg-[#1B3A2D] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                {/* Date badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#EFF8E8] text-[#1B3A2D] text-xs font-inter font-semibold px-3 py-1.5 rounded-full border border-[#7DC44E]/20">
                    {featured.category}
                  </span>
                  <div className="text-right">
                    <div className="font-gilroy font-black text-3xl text-[#1B3A2D] leading-none">
                      {featured.date.split(' ')[0]}
                    </div>
                    <div className="font-inter text-[#1B3A2D]/40 text-[10px] uppercase tracking-widest">
                      {featured.date.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>

                <h2 className="font-gilroy font-black text-[#1B3A2D] text-xl md:text-2xl leading-snug mb-4">
                  {featured.title}
                </h2>

                <blockquote className="font-inter text-[#1B3A2D]/60 text-sm leading-relaxed border-l-2 border-[#7DC44E] pl-4 mb-6">
                  " {featured.excerpt}
                </blockquote>

                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 font-inter font-semibold text-[#7DC44E] text-sm
                             hover:text-[#1B3A2D] transition-colors self-start"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* ── SECONDARY CARDS GRID — 3 columns matching Figma ── */}
      <section className="bg-[#EFF8E8] pb-16 pt-2" aria-label="More blog posts">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((post, i) => (
              <motion.article
                key={post.id}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-[#EFF8E8] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-gilroy font-bold text-[#1B3A2D] text-base leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-inter text-[#1B3A2D]/50 text-xs leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-inter font-medium text-[#7DC44E] text-xs
                               hover:text-[#1B3A2D] transition-colors"
                  >
                    Read more <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination dots — matching Figma */}
          <div className="flex justify-center gap-2 mt-10">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === 0
                    ? 'w-6 h-2 bg-[#1B3A2D]'
                    : 'w-2 h-2 bg-[#1B3A2D]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
