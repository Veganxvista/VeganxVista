
const CERTS = [
  { label: 'USDA_Bioprefered', path: '/assets/Certi/USDA_Certified.png', bg: '#1a2a40' },
  { label: 'PETA ', path: '/assets/Certi/PETA.png', bg: '#1a2a40' },
  { label: 'USDA_Organic', path: '/assets/Certi/USDA_organic.png', bg: '#1a2a40' },
  { label: 'OEKO-TEX® 100', path: '/assets/Certi/image-25.png', bg: '#1a4030' },  
  { label: 'ISO 9001:2015', path: '/assets/Certi/image-26.png', bg: '#2a3a1a' },
  { label: 'Vegan_certified', path: '/assets/Certi/Vegan_certified.png', bg: '#1a2a40' },
  { label: ' Approved', path: '/assets/Certi/image-24.png', bg: '#1a3a60' },
  { label: 'REACH Compliant', path: '/assets/Certi/image-27.png', bg: '#1a2a40' },

];

export default function CertificateSection() {
  return (
    <section className="bg-white py-7 border-b border-gray-100 
    rounded-b-[40px] "
      aria-label="Certifications">
      <div className="max-w-8xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-10 lg:gap-15">
          {CERTS.map(({ label, path }) => (
            <div key={label} className="flex items-center">
              <div className=" w-20 h-20 md:w-40 md:h-35 border-2  bg-white flex items-center justify-center p-2 ">
                <img src={path} alt={label} className="w-30 h-20 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}