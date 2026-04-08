import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Section from './Section';

export default function BrandStory() {
  const { t } = useTranslation();

  return (
    <Section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1000" 
              alt="Shop interior"
              className="w-full h-full object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-sand/20 -z-0" />
        </motion.div>

        <div className="max-w-md">
          <span className="text-[10px] uppercase tracking-[0.4em] text-navy/50 block mb-6">Nuestra Esencia</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
            {t('story.title')}
          </h2>
          <p className="text-lg font-light leading-relaxed text-navy/80 mb-10">
            {t('story.text')}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-navy" />
              <span className="text-xs uppercase tracking-widest">Selección Curada</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-navy" />
              <span className="text-xs uppercase tracking-widest">Artesanía Local</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-navy" />
              <span className="text-xs uppercase tracking-widest">Estilo Atemporal</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
