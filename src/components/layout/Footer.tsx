export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] pt-24 pb-8 border-t-4 border-brutal-accent relative z-10 overflow-hidden">
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brutal-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 pointer-events-auto mb-6">
              <div className="w-8 h-8 bg-brutal-accent flex items-center justify-center">
                <div className="w-3 h-3 bg-[#0F0F0F]" />
              </div>
              <span className="font-serif text-xl tracking-widest text-brutal-bg uppercase">
                Freelancer<span className="text-brutal-accent">Planning</span>
              </span>
            </div>
            <p className="text-brutal-muted max-w-sm text-sm leading-relaxed">
              The premier operating system for high-performing independents. Stop guessing, start forecasting.
            </p>
          </div>

          <div>
            <h4 className="text-brutal-bg font-serif tracking-widest uppercase mb-6 font-bold text-sm border-b border-white/10 pb-4 inline-block">Product</h4>
            <ul className="flex flex-col gap-4">
              {['Features', 'Pricing', 'Testimonials', 'Changelog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brutal-muted hover:text-brutal-accent transition-colors text-sm uppercase tracking-wider font-sans font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brutal-bg font-serif tracking-widest uppercase mb-6 font-bold text-sm border-b border-white/10 pb-4 inline-block">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brutal-muted hover:text-brutal-accent transition-colors text-sm uppercase tracking-wider font-sans font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Massive Typography Lockup */}
        <div className="w-full border-y border-white/10 py-8 mb-8 overflow-hidden flex items-center justify-center">
          <h1 className="text-[12vw] font-serif font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-brutal-bg to-brutal-bg/10 uppercase text-center w-full">
            Make More.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-brutal-muted uppercase tracking-widest">
          <p>© 2026 FREELANCER PLANNING INC.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brutal-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brutal-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-brutal-accent transition-colors">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
