import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2D] text-white" aria-label="Site footer">

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Logo + socials + map */}
          <div className="flex flex-col items-center gap-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" aria-label="VeganVista">
              <img src="/assets/Logo/veganvista_logo1.png" alt="VeganVista" className="h-15 w-30" />
              {/* <div className="leading-none">
                <img src="/assets/Logo/veganvista_logo1.png" alt="VeganVista" className="h-19 w-30" />
              </div> */}
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { label: 'Instagram', href: '#', icon: IcoInsta },
                { label: 'LinkedIn',  href: '#', icon: IcoLinkedin },
                { label: 'Facebook',  href: '#', icon: IcoFacebook },
                { label: 'YouTube',   href: '#', icon: IcoYoutube },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50
                             hover:bg-[#7DC44E] hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-white/10" style={{ height: 160 }}>
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.74!2d72.5793!3d23.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sNew%20Cloth%20Market%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000"
    width="100%"
    height="180"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="New Cloth Market Location"
  />
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="font-inter font-semibold text-white/90 text-sm mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919824006823" className="flex items-center gap-2 text-white/50 text-sm font-inter hover:text-[#7DC44E] transition-colors">
                  <Phone size={13} />
                  +91 98240 06823
                </a>
              </li>
              <li>
                <a href="tel:+919824241407" className="flex items-center gap-2 text-white/50 text-sm font-inter hover:text-[#7DC44E] transition-colors">
                  <Phone size={13} />
                  +91 98242 41407
                </a>
              </li>
              <li>
                <a href="mailto:veganvistacorp@gmail.com" className="flex items-center gap-2 text-white/50 text-sm font-inter hover:text-[#7DC44E] transition-colors">
                  <Mail size={13} />
                  veganvistacorp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm font-inter">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>47, New Cloth Market,<br />Ahmedabad – 380002</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="font-inter font-semibold text-white/90 text-sm mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',        to: '/'      },
                { label: 'About',       to: '/about' },
                { label: 'Technology',  to: '/about#technology' },
                { label: 'Why Cactus?', to: '/about#why-cactus' },
                { label: 'Products',    to: '/order' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="font-inter text-white/50 text-sm hover:text-[#7DC44E] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — More */}
          <div>
            <h4 className="font-inter font-semibold text-white/90 text-sm mb-5">More</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Contact Us',  to: '/contact'          },
                { label: 'FAQ',         to: '/contact#faq'       },
                { label: 'Swatch Card', to: '/order#swatch'      },
                { label: 'Blogs',       to: '/blog'              },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="font-inter text-white/50 text-sm hover:text-[#7DC44E] transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/25 text-xs">
            © {new Date().getFullYear()} VeganVista Corp Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="font-inter text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="font-inter text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Use</Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

/* ── Social icons ── */
function IcoInsta({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
function IcoLinkedin({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IcoFacebook({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function IcoYoutube({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
