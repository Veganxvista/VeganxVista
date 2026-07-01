import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';


const FAQ_ITEMS = [
  {
    q: 'Is Veganvista Certified ?',
    a: "Yes, Veganvista is ISO certified, Vegan certified, PETA aproved, USDA Biopreffered and also USDA Organic certified\nAll these certifications makes Veganvista Bioleather more authentic and trustworthy"
  },
  {
    q: 'In what thickness and sizes are Eori® Vegan Leather sheets available?',
    a: 'Veganvista Bio Leather is available in thickness ranging from 0.6mm to 1.3mm.Veganvista  sampling sheets are available in A5 sizes sheet, while commercial sheets will be available in 54 inches role in width.\nVeganvista’s Cactus leather  is offered in a wide range of colors and textures, providing endless possibilities. Additionally, we offer customization in color.'
  },
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
  const [form, setForm] = useState({ name: '', email: '', phnno: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  // for form submission to WhatsApp
  const handleformWhatsApp = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please fill Name and Email first");
      return;
    }

    const phone = import.meta.env.VITE_FOUNDER_CONTACT; // user number

    const message = `
  Hello VeganVista,

  Name: ${form.name}
  Email: ${form.email}
  PhnNo: ${form.phnno}
  Message: ${form.message || "I want to know more about your plant-based leather."}
  Thank you!
  `;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  //for direct WhatsApp button
  const handleWhatsApp = () => {
    const phone = import.meta.env.VITE_FOUNDER_CONTACT; // number with country code
    const message = "Hello, I am interested in your plant-based leather products.";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#E5F0DC] py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-[#D8D8D8] h-fit rounded-2xl p-5">
            <div className="bg-[#00A65A] rounded-2xl p-8 h-fit">
              <h2 className="text-white text-3xl font-medium mb-16">
                Reach Out
              </h2>

              <form className="space-y-8 text-center">
                <input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />

                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phnno}
                  onChange={(e) =>
                    setForm({ ...form, phnno: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/40
                         pb-3 text-white placeholder-white/70 outline-none"
                />

                <button
                  type="button"
                  onClick={handleformWhatsApp}
                  className="mt-8 px-8 py-2 rounded-full bg-[#043228]
                         text-white text-sm "
                >
                  Connect
                </button>
              </form>
            </div>

            <div className="text-center mt-5">
              <p className="text-sm">OR</p>
              <button
                onClick={handleWhatsApp}
                className="underline text-[#00A65A] hover:text-[#008A4C] transition-colors"
              >
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
