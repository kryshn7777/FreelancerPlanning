import { Star } from 'lucide-react';
import { Marquee } from '../ui/Marquee';

const testimonials = [
  { name: "Sarah J.", role: "UI Designer", text: "FreelancerPlanning completely changed how I track my income. The forecasting is magic." },
  { name: "Michael T.", role: "Web Developer", text: "Finally, a tool that understands the feast-or-famine cycle and helps me smooth it out." },
  { name: "Elena R.", role: "Copywriter", text: "The bento-box dashboard is gorgeous. I actually enjoy doing my admin work now." },
  { name: "David K.", role: "Consultant", text: "Worth every penny. The client CRM pipeline is simple but incredibly powerful." },
  { name: "Alex W.", role: "Illustrator", text: "I've tried everything else. This is the only tool that feels like it was built for creatives." },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="w-[350px] shrink-0 bg-[#0F0F0F] p-6 border-2 border-white/10 mx-3 flex flex-col gap-4 group hover:border-brutal-accent transition-all cursor-pointer grayscale hover:grayscale-0">
    <div className="flex text-brutal-accent">
      {[...Array(5)].map((_, i) => <Star key={`star-${i}`} size={16} fill="currentColor" stroke="none" />)}
    </div>
    <p className="text-brutal-muted text-sm leading-relaxed font-sans font-medium uppercase tracking-wider group-hover:text-white transition-colors">"{testimonial.text}"</p>
    <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
      <div className="w-10 h-10 bg-white/10 border border-white/20 shrink-0" />
      <div>
        <h4 className="text-sm font-bold text-white uppercase">{testimonial.name}</h4>
        <p className="text-xs text-brutal-accent uppercase tracking-widest">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const SocialProof = () => {
  return (
    <div className="border-y-2 border-brutal-surface py-48 bg-[#0A0A0A] overflow-hidden relative z-10">
      <div className="text-center mb-16">
        <p className="font-serif text-gray-400 text-lg tracking-widest uppercase">Trusted by 1,200+ independent operators</p>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={`testimonial-${testimonial.name.replace(/\s+/g, '-')}-${i}`} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
