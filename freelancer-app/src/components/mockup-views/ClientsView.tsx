
import { motion } from 'framer-motion';
import { clientsData } from '../../data/mockApp';
import { Mail, ExternalLink } from 'lucide-react';

export const ClientsView = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientsData.map((client: any, index: number) => (
          <motion.div 
            key={client.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-brutal-surface border border-white/10 p-6 flex flex-col group hover:border-brutal-accent transition-colors relative"
          >
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-brutal-muted hover:text-brutal-accent transition-colors"><Mail size={16} /></button>
              <button className="text-brutal-muted hover:text-brutal-text transition-colors"><ExternalLink size={16} /></button>
            </div>
            
            <div className="w-12 h-12 bg-brutal-bg border border-white/10 flex items-center justify-center mb-4 text-lg font-serif text-brutal-accent group-hover:bg-brutal-accent group-hover:text-brutal-surface transition-colors">
              {client.name.charAt(0)}
            </div>
            
            <h4 className="text-xl font-sans font-bold text-brutal-text">{client.name}</h4>
            <p className="text-xs font-sans text-brutal-muted mb-4">{client.contact}</p>
            
            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-sans text-brutal-muted uppercase mb-1">Lifetime Value</p>
                <p className="text-sm font-sans font-bold text-brutal-text">{client.ltv}</p>
              </div>
              <span className={`text-[10px] font-sans font-bold uppercase px-2 py-1 ${client.status === 'ACTIVE' ? 'bg-brutal-accent/20 text-brutal-accent' : 'bg-white/10 text-brutal-muted'}`}>
                {client.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
