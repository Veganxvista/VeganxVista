import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Circle, Leaf } from 'lucide-react';
import { submitContactForm } from '../../../services/contactapi';


const FAQ_ITEMS = [
  {
    q: 'Is it possible to buy Cactus Vegan Leather for my Brand?',
    a: "Yes, Veganvista\'s Vegan Leather is commercially available, both in sample as well as commercial quantities.To begin the purchasing process, please fill out the contact form, and we will schedule a call or video meeting to discuss your requirements in detail."
  },
  {
    q: 'In what thickness and size is Vegan Leather available?',
    a: 'Veganvista Bio Leather is available in thickness ranging from 0.6mm to 1.3mm. Veganvista\'s cactus comes in 54 inches role in width. Veganvista\'s Cactus leather is offered in a wide range of colors and textures, providing endless possibilities. Additionally, we offer customization in color.'
  },
  {
    q: 'Is Veganvista\'s cactus leather breathable?',
    a: 'Veganvista plant leather is designed to be breathable, thanks to our bio-mimicry technology which creates a material that looks, feels, and performs like leather, even at the microscopic level.'
  },
  {
    q: 'Is Veganvista Certified ?',
    a: 'Yes, Veganvista is ISO certified, Vegan certified, PETA aproved, USDA Biopreffered and also USDA Organic certified. All these certifications makes Veganvista\'s Bioleather more authentic and trustworthy.'
  }
];

export default function ContactFAQSection() {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill Name, Email and Phone");
      return;
    }

    try {
      setLoading(true);

      await submitContactForm(form);

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
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

              <form className="space-y-8 text-center" onSubmit={handleSubmit}>
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
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
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
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 px-8 py-2 rounded-full bg-[#043228]
                         text-white text-sm "
                >
                  {loading ? "Sending..." : "Connect"}
                </button>
                {sent && (
                  <p className="text-white text-sm mt-4">
                    Message sent successfully !!!!
                  </p>
                )}
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
              FAQ
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
