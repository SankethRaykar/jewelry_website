import React, { useEffect, useRef } from 'react';

export default function CategoryGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
  }, []);

  return (
    <section ref={gridRef} className="reveal py-section-gap px-margin-desktop max-w-container-max mx-auto text-center">
      <h2 className="font-headline-lg text-headline-lg mb-16 uppercase tracking-widest">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <a className="group flex flex-col items-center" href="#">
          <div className="w-full aspect-square bg-surface-container-low rounded-full overflow-hidden mb-6 editorial-shadow relative border border-outline-variant zoom-container">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDWRCPCCTB9eW3ksLZr8PEA5nEWUDb8TSXaqg1kd-Jf5v5rthZY1hba1o0kYzPmpCjEbhLPr4OqHIGFeXXlWDsqfgp0U1cL_tK3CjcyLY5uFMxxwZgLD7GV7Xr3-5MSafBvD8wP8juRKRyb_bFGzEtxzLIOrzIA3AhqQHm6WZtKrRWFWTL4LbY4NkuP59OG5FH1Smn2lJGwHanF7y0e8diDe3KlxMZMiJ-oxp_beTYVKihe5lVJVuCEavGHhdJKwHi5vnFnsQ3cpF3" alt="Necklace Sets" />
          </div>
          <span className="font-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Necklace Sets</span>
        </a>
        <a className="group flex flex-col items-center" href="#">
          <div className="w-full aspect-square bg-surface-container-low rounded-full overflow-hidden mb-6 editorial-shadow relative border border-outline-variant zoom-container">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxPLqZEVJ8meCC1GHiT-oRZT7H_srvQx2CVzIZ9jxZIDNRbTzMsIdnS4_7VTiSwgfMlnpH8-uiV4EB6nLi_ZVrPE72C90W7RbQHkLZAzvrYgN00G-r2de3sa48aIFwk9LeTcnhn0ekma3-PFR_MHuf3vcDfmi1xmK0KwxtCR5oVxD6RBI1e-yqfWHfhB3dAWwhTPzVbIFh2Aq5dDIPzNCyHNZFGL7qJGDlc4cB0dfchT-zJ0ZtsqXSeGTtglYtucM1K975M0onWji" alt="Earrings" />
          </div>
          <span className="font-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Earrings</span>
        </a>
        <a className="group flex flex-col items-center" href="#">
          <div className="w-full aspect-square bg-surface-container-low rounded-full overflow-hidden mb-6 editorial-shadow relative border border-outline-variant zoom-container">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwL8-AkGVSbQHLbixdUDRWTmQFH1phueIcqIhlVsie_eitN-a3jUJ-6y3kCTmPFzjklKSJW8uC3cdeXrdY154fK6ICEMIgv8x_PHF1MJBhzC4vIuFONBa9l_iWmf_Tw01jTf1m2ETwqGNa5H17xhy331V6DZcl0X0XG2wAYG58Bb-u2Rjm-FzMwxaB_4-Ar7e7ENZb0lu_BA3nt_FAjuYCTO1JaqAy6wfet59p71v6YW0n42EIOU43gYVYoOmINUXB_M70oDWGQEp" alt="Bridal" />
          </div>
          <span className="font-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Bridal</span>
        </a>
        <a className="group flex flex-col items-center" href="#">
          <div className="w-full aspect-square bg-surface-container-low rounded-full overflow-hidden mb-6 editorial-shadow relative border border-outline-variant zoom-container">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz7ohA8T1DfoIl6zkn5iO5ljEWBmfmWDz51a31NYZxIbnYOvc72mPTCT07H4cf3QafAucZZaSIMcwgnxoQkOeKyC4v36tV2nHEKTJmWtcFkMbXhOyumykrMXSWVjkUmTJV2a_0JjlFhuk0Ht7z6BRbkiSqn3oEM1qPu0Ue4LJwqcAWqacEV3OCHEZQpbR30mW5uQEvqj1nSsVF9gszSSXqxmNx8GaCdZNYdvQCFwFXnsNys41dkZARwC74lrHVTULkyvsSl9RfREEx" alt="Watches" />
          </div>
          <span className="font-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Watches</span>
        </a>
      </div>
    </section>
  );
}
