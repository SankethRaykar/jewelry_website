import React, { useEffect, useRef } from 'react';

export default function Newsletter() {
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
      <div className="relative bg-on-background p-12 md:p-24 rounded-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full shimmer-effect"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-display-md text-display-md text-primary-container mb-4">Join the Inner Circle</h2>
            <p className="font-body-lg text-surface-container-low">Receive exclusive previews of our couture collections and private sales.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input className="flex-1 bg-surface-white/10 border border-surface-white/20 text-white p-5 rounded-lg focus:ring-primary-container focus:border-primary-container outline-none placeholder:text-surface-white/50" placeholder="Enter your email" type="email"/>
            <button className="bg-primary-container text-on-primary-container px-12 py-5 font-label-sm uppercase tracking-widest rounded-lg transition-all duration-300 cta-hover">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
