/**
 * Contact.jsx
 * Contact page — form, company info sidebar, Google Maps embed.
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { submitContactForm } from '../utils/api';
import SectionHeading from '../components/ui/SectionHeading';

const FAQ_ITEMS = [
  {
    q: 'What is the minimum order quantity?',
    a: 'We accept orders from 50 metres for standard colors. Custom colors have a 200m MOQ.',
  },
  {
    q: 'Do you offer samples?',
    a: 'Yes — you can order a physical A5 swatch card from our Products page, or request free digital swatches.',
  },
  {
    q: 'What certifications do you hold?',
    a: 'OEKO-TEX® Standard 100, ISO 9001:2015, REACH compliant, and PETA-approved vegan.',
  },
  {
    q: 'What is the lead time?',
    a: 'Standard in-stock colors ship within 5–7 business days. Custom orders take 3–4 weeks.',
  },
  {
    q: 'Do you export internationally?',
    a: 'Yes. We ship worldwide. Contact us for shipping rates and export documentation.',
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { submit, loading, success, error, reset: resetState } = useFormSubmit(submitContactForm);

  const onSubmit = async (data) => {
    await submit(data);
    if (!error) reset();
  };

  return (
    <main className="page-enter pt-24" aria-label="Contact VeganVista">

      {/* Page header */}
      <section className="section bg-gradient-dark relative overflow-hidden" aria-label="Contact header">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/5 rounded-full blur-3xl" />
        </div>
        <div className="container-tight relative z-10">
          <SectionHeading
            label="Get in Touch"
            title={
              <>
                Let's build something{' '}
                <span className="text-gradient-leaf">together</span>
              </>
            }
            subtitle="Whether you have a product inquiry, want to request samples, or simply want to say hello — we're here."
            dark
          />
        </div>
      </section>

      {/* Contact form + sidebar */}
      <section className="section bg-mint-light" aria-label="Contact form">
        <div className="container-tight">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="font-gilroy font-bold text-2xl text-forest-700 mb-2">Send Us a Message</h2>
                <p className="font-inter text-forest-400 text-sm mb-8">
                  We'll reply within 1 business day.
                </p>

                {/* Success state */}
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-leaf" />
                    </div>
                    <h3 className="font-gilroy font-bold text-xl text-forest-700 mb-2">Message Sent!</h3>
                    <p className="font-inter text-forest-400 text-sm mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => resetState()}
                      className="btn-ghost text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    {/* Error banner */}
                    {error && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <p className="text-red-600 text-sm font-inter">{error}</p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="c-name" className="form-label">Full Name *</label>
                        <input
                          id="c-name"
                          type="text"
                          placeholder="Your full name"
                          className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="c-company" className="form-label">Company Name</label>
                        <input
                          id="c-company"
                          type="text"
                          placeholder="Your company (optional)"
                          className="form-input"
                          {...register('company')}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="c-email" className="form-label">Email Address *</label>
                        <input
                          id="c-email"
                          type="email"
                          placeholder="your@email.com"
                          className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                          })}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="c-phone" className="form-label">Phone Number</label>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="+91 98XXX XXXXX"
                          className="form-input"
                          {...register('phone')}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="c-message" className="form-label">Message *</label>
                      <textarea
                        id="c-message"
                        rows={5}
                        placeholder="Tell us about your requirements, questions, or anything else..."
                        className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="spinner" />
                          Sending Message…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Company info card */}
              <div className="bg-forest-700 rounded-3xl p-8 text-white flex flex-col gap-5">
                <h3 className="font-gilroy font-bold text-xl">Contact Information</h3>
                <div className="divider" />
                <div className="flex flex-col gap-4">
                  <a href="tel:+919824006823" className="flex items-start gap-3 hover:text-leaf transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-leaf/20 transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-inter mb-0.5">Phone</div>
                      <div className="font-inter text-sm font-medium">+91 98240 06823</div>
                      <div className="font-inter text-sm font-medium">+91 98242 41407</div>
                    </div>
                  </a>
                  <a href="mailto:info@veganvista.in" className="flex items-start gap-3 hover:text-leaf transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-leaf/20 transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-inter mb-0.5">Email</div>
                      <div className="font-inter text-sm font-medium">info@veganvista.in</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-inter mb-0.5">Address</div>
                      <div className="font-inter text-sm leading-relaxed">
                        47, New Cloth Market,<br />Ahmedabad – 380002,<br />Gujarat, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-inter mb-0.5">Business Hours</div>
                      <div className="font-inter text-sm">Mon – Sat: 9:00 AM – 6:00 PM</div>
                      <div className="font-inter text-xs text-white/40">IST (UTC+5:30)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-card h-56">
                <iframe
                  title="VeganVista Corp location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7449218750003!2d72.5793!3d23.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sNew%20Cloth%20Market%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-white" aria-label="Frequently asked questions">
        <div className="container-tight max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />
          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-mint-light rounded-2xl px-6 py-5 cursor-pointer
                           open:bg-forest-700 open:text-white transition-colors duration-200"
              >
                <summary
                  className="font-gilroy font-bold text-forest-700 group-open:text-white text-base
                               list-none flex items-center justify-between gap-4 select-none"
                >
                  {q}
                  <span className="text-leaf group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="font-inter text-white/80 text-sm mt-3 leading-relaxed">{a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
