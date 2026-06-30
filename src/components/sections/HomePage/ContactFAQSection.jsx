import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';


const FAQ_ITEMS = [
  {
    q: 'What is the minimum order quantity?',
    a: 'We accept orders from 50 metres for standard colors. Custom colors have a 200m MOQ.'
  },
  {
    q: 'Do you offer samples?',
    a: 'Yes — you can order a physical A5 swatch card, or request free digital swatches.'
  },
  {
    q: 'What certifications do you hold?',
    a: 'OEKO-TEX® 100, ISO 9001:2015, REACH compliant, and PETA-approved vegan.'
  },
  {
    q: 'What is the lead time?',
    a: 'Standard colors ship within 5–7 business days. Custom orders take 3–4 weeks.'
  },
];

export default function ContactFAQSection() {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-[#E5F0DC] py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-[#D8D8D8] rounded-2xl p-5">
            <div className="bg-[#00A65A] rounded-2xl p-8 min-h-[340px]">
              <h2 className="text-white text-3xl font-medium mb-16">
                Reach Out
              </h2>

              <form className="space-y-8 text-center">
                <input
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />

                <input
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />

                <button
                  className="mt-8 px-8 py-2 rounded-full bg-[#043228]
                         text-white text-sm "
                >
                  Connect
                </button>
              </form>
            </div>

            <div className="text-center mt-5">
              <p className="text-sm">OR</p>
              <button className="underline text-[#00A65A]">
                Continue to Whatsapp
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#D8D8D8] rounded-2xl p-5">
            <h2 className="text-[#00A65A] text-3xl mb-6 font-medium">
              F&Q
            </h2>

            <div className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full py-3 flex justify-between items-center
                           border-b border-black/10"
                  >
                    <span className="text-left text-sm">
                      {item.q}
                    </span>

                    <span>⌄</span>
                  </button>

                  {open === i && (
                    <div className="bg-[#00A65A] text-white p-5 rounded-xl mt-2">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
