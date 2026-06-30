
const CERTS = [
  { label: 'PETA Approved', path: '/assets/Certi/image-24.png', bg: '#1a3a60' },
  { label: 'OEKO-TEX® 100', path: '/assets/Certi/image-25.png', bg: '#1a4030' },
  { label: 'ISO 9001:2015', path: '/assets/Certi/image-26.png', bg: '#2a3a1a' },
  { label: 'REACH Compliant', path: '/assets/Certi/image-27.png', bg: '#1a2a40' },
  { label: 'PETA ', path: '/assets/Certi/PETA.png', bg: '#1a2a40' },
];

export default function CertificateSection() {
  return (
    <section className="bg-white py-7 border-b border-gray-100 
    rounded-b-[40px] "
      aria-label="Certifications">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 lg:gap-20">
          {CERTS.map(({ label, path }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-30 h-30 rounded-full bg-white flex items-center justify-center text-xl">
                <img src={path} alt={label} className="w-20 h-20 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}