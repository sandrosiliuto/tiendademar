import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
          alt="El Médano Beach"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.5em] mb-12 font-light">
            {t('hero.subtitle')}
          </p>
          <a 
            href="#shop"
            className="inline-block px-10 py-4 bg-white text-navy text-xs uppercase tracking-[0.3em] hover:bg-navy hover:text-white transition-all duration-500"
          >
            {t('common.discover')}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  );
}
