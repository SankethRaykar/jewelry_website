import React, { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5ytXBTV-iv0YSmCNATE9YjG0oDtoMVEINJ5R6lWP34bikk977SxyTwGsmyCgrbZpVWjYBmmpvA9PHki7PWq4rSjyA7H7B_aRAauRLPPJKiUfgnp_nL-9Nmsz0uDA-Z8P6U5ls7LY0IGssKXLFAJnaS9rt4I2M9BE5L3YiHkV2lKg6qKoo5PlY6FdPva0fy7MS74ypHSwAyNsmkAMMpRgdz0uZUgKoSDGxSop9Ru87TsqAeLVa7d3B-YJwGs-9vqgyAhR12YwHEwwV",
      subtitle: "The Heirloom Series",
      title: <>Elegance Reimagined <br/> for the Modern Queen</>,
      buttons: (
        <>
          <button className="bg-on-background text-primary-container px-12 py-5 font-label-sm uppercase tracking-widest rounded-lg transition-all duration-500 relative overflow-hidden group border border-primary-container/20 cta-hover">
            <span className="relative z-10">Shop Now</span>
          </button>
          <button className="border border-white text-white px-12 py-5 font-label-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300 cta-hover">
            The Film
          </button>
        </>
      )
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8bTpMoVuWv-dfeafWfYt05QtvfmV72NlmqH8sENOHzJ2iVt3dq0TRXpaNqScwW-JYRuYjrlC2bHTg23-Rs81R7f9njfq3TiloUIwl0aTgNdYuVPtrIxKIBGnFaEVKGhh9UjMuLSxQFfwwWgEfqVYDj1Y0G03AnOKJvpy33ITNfb7bo5dwwB_euF6qSjWRJ2I6kzPNZ20fRRp_rgxMs1lj4A1eqykjeQEYFEfzTqQyrWBl1XVdpjGGEnfvruIbn5IYf020YFGuLUKB",
      subtitle: "Royal Craftsmanship",
      title: <>Marwar Majesty <br/> Antique Gold Collection</>,
      buttons: (
        <button className="bg-on-background text-primary-container px-12 py-5 font-label-sm uppercase tracking-widest rounded-lg cta-hover">
          Shop Collection
        </button>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[921px] w-full overflow-hidden bg-black" id="hero-carousel">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
          <img className="w-full h-full object-cover" src={slide.image} alt="Hero Banner" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-margin-desktop max-w-container-max mx-auto text-white">
            <span className="font-label-sm uppercase tracking-[0.4em] mb-4 text-primary-fixed hero-text-anim">{slide.subtitle}</span>
            <h1 className="font-display-lg text-display-lg mb-8 max-w-2xl leading-[1.1] hero-text-anim">{slide.title}</h1>
            <div className="flex gap-4 hero-text-anim">
              {slide.buttons}
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <span 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-[2px] carousel-dot cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
          ></span>
        ))}
      </div>
    </section>
  );
}
