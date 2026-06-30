import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const NAV_LINKS = [
  { to: '/',       label: 'Home'  },
  { to: '/about',  label: 'Our Story' },
  { to: '/blog',   label: 'blog'  },
  { to: '/order',  label: 'Order' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed h-20 top-0 inset-x-0 z-50 transition-all duration-500 hover:bg-black/30"
      >
        <nav className="relative top-6 bg-white/10 sm:min-w-64 md:max-w-7xl mx-auto p-5 flex items-center justify-between h-12 border rounded-full
        ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="VeganVista Home">
            <div className="leading-none">
              <img src="/assets/Logo/veganvista_logo2.png" alt="VeganVista" className="h-13 w-14 absolute top-[-7px] left-0" />
            </div>
          </Link>

          <div className="hidden md:flex items-center backdrop-blur-sm rounded-full px-1 py-1 gap-5 ">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full font-inter text-sm transition-all duration-200
                   ${isActive
                     ? 'bg-white/20 text-white font-medium'
                     : 'text-white/70 hover:text-white hover:bg-white/10'
                   }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0e1e15] shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <LogoSVG />
                <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-4 py-8">
                <ul className="space-y-1">
                  {NAV_LINKS.map(({ to, label }, i) => (
                    <motion.li key={to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                      <NavLink
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-xl font-inter text-sm transition-all
                           ${isActive ? 'bg-leaf/20 text-leaf' : 'text-white/70 hover:bg-white/10 hover:text-white'}`
                        }
                      >
                        {label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="px-6 pb-8 border-t border-white/10 pt-6">
                <p className="text-white/30 text-xs font-inter text-center">+91 98240 06823</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#7DC44E" strokeWidth="1.5" fill="rgba(125,196,78,0.12)" />
      <path d="M11 12 L16 27 L20 17 L24 27 L29 12" stroke="#7DC44E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="10" r="1.8" fill="#7DC44E" />
    </svg>
  );
}
