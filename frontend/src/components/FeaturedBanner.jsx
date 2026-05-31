import React, { useEffect, useRef } from 'react';

export default function FeaturedBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-gutter bg-surface-container rounded-2xl overflow-hidden editorial-shadow">
        <div className="md:col-span-7 h-[600px] relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8bTpMoVuWv-dfeafWfYt05QtvfmV72NlmqH8sENOHzJ2iVt3dq0TRXpaNqScwW-JYRuYjrlC2bHTg23-Rs81R7f9njfq3TiloUIwl0aTgNdYuVPtrIxKIBGnFaEVKGhh9UjMuLSxQFfwwWgEfqVYDj1Y0G03AnOKJvpy33ITNfb7bo5dwwB_euF6qSjWRJ2I6kzPNZ20fRRp_rgxMs1lj4A1eqykjeQEYFEfzTqQyrWBl1XVdpjGGEnfvruIbn5IYf020YFGuLUKB" alt="Banner" />
        </div>
        <div className="md:col-span-5 p-12 lg:p-24 flex flex-col justify-center">
          <span className="font-label-sm uppercase tracking-[0.3em] text-deep-rose mb-4">Limited Edition</span>
          <h2 className="font-display-md text-display-md mb-8 leading-tight">The Royal Marwar Collection</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">Inspired by the architectural marvels of Rajasthan, these hand-carved pieces capture the soul of the desert kingdom.</p>
          <button className="bg-primary text-white self-start px-12 py-5 font-label-sm uppercase tracking-widest rounded-lg transition-all duration-300 cta-hover">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}
