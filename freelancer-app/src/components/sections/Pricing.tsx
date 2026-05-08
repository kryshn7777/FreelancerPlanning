import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { MagicCard } from '../ui/magic-card';
import { BorderBeam } from '../ui/BorderBeam';
import { ScrambleText } from '../ui/ScrambleText';
import { StaggerGroup } from '../ui/StaggerGroup';
import { StaggerItem } from '../ui/StaggerItem';
import { MagneticButton } from '../ui/MagneticButton';

const tiers = [
  {
    name: 'Hustler',
    price: '0',
    description: 'For freelancers just starting out.',
    features: ['Up to 3 active clients', 'Basic income forecasting', 'Standard invoice templates'],
    bgClass: 'bg-[#111827]',
    textClass: 'text-[#faf9f6]',
    button: 'bg-brutal-surface text-brutal-text hover:bg-brutal-accent hover:text-brutal-bg'
  },
  {
    name: 'Pro',
    price: '19',
    description: 'For established independent professionals.',
    features: ['Unlimited active clients', 'Advanced tax algorithms', 'Custom invoice branding', 'Client CRM pipeline'],
    bgClass: 'bg-[#DFFF00]',
    textClass: 'text-[#0F0F0F]',
    button: 'bg-brutal-surface text-brutal-text hover:bg-[#0F0F0F] hover:text-[#DFFF00]',
    popular: true
  },
  {
    name: 'Studio',
    price: '49',
    description: 'For agencies and scaling collectives.',
    features: ['Everything in Pro', 'Multi-user access', 'Expense categorization', 'Priority 24/7 support'],
    bgClass: 'bg-[#8b5cf6]',
    textClass: 'text-[#faf9f6]',
    button: 'bg-brutal-surface text-brutal-text hover:bg-brutal-accent hover:text-brutal-bg'
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-48 bg-brutal-bg border-y border-white/10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter uppercase text-brutal-text">
              Fair <span className="text-brutal-accent">Pricing.</span>
            </h2>
            <p className="text-brutal-muted font-sans text-xl mt-4 max-w-lg">
              No hidden fees. No percentage cuts. Just flat pricing for professional tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="relative flex flex-col h-full"
              style={{ 
                boxShadow: tier.popular ? "-12px 12px 0px 0px rgba(223,255,0,1)" : "-8px 8px 0px 0px rgba(255,255,255,0.1)"
              }}
            >
              <MagicCard
                className={`w-full h-full border-2 border-brutal-surface p-8 md:p-10 flex flex-col transition-all ${tier.textClass}`}
                innerClassName={tier.bgClass}
                gradientColor={tier.popular ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)"}
              >
                {tier.popular && <BorderBeam duration={8} color="#000000" />}
                
                {tier.popular && (
                  <div className="absolute top-0 right-0 z-50 bg-[#0F0F0F] text-[#DFFF00] px-4 py-2 text-xs font-bold uppercase tracking-widest border-b-2 border-l-2 border-brutal-surface">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-3xl font-serif font-bold uppercase tracking-widest relative z-50">{tier.name}</h3>
                <p className="text-sm mt-4 font-sans font-medium opacity-80 h-10 relative z-50">{tier.description}</p>
                
                <div className="my-8 relative z-50 flex items-center">
                  <span className="text-6xl font-serif font-black tracking-tighter flex items-center">
                    $<ScrambleText text={tier.price} />
                  </span>
                  <span className="text-sm font-sans font-bold uppercase tracking-widest opacity-60 ml-2">/mo</span>
                </div>
                
                <StaggerGroup className="flex flex-col gap-4 mb-12 flex-grow relative z-50" delay={0.1}>
                  {tier.features.map((feature, i) => (
                    <StaggerItem key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0 bg-white/20 p-1 rounded-sm">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="font-sans font-medium text-sm">{feature}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                
                <MagneticButton className={`w-full py-5 border-2 border-brutal-surface font-serif font-black text-xl uppercase tracking-widest transition-all ${tier.button} relative z-50`}>
                  Start Free Trial
                </MagneticButton>
              </MagicCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
