import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('common.shop'), href: '#shop' },
    { name: t('common.experience'), href: '#experience' },
    { name: t('common.about'), href: '#about' },
    { name: t('common.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-offwhite/80 backdrop-blur-md border-b border-gray-soft">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-navy p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links Left */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] zara-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl tracking-[0.15em] uppercase">Tienda de Mar</span>
          <span className="text-[10px] tracking-[0.4em] uppercase -mt-1">El Médano</span>
        </a>

        {/* Desktop Links Right */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.slice(2).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] zara-link"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 ml-6 border-l border-gray-soft pl-6">
            {['ES', 'EN', 'DE'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang.toLowerCase())}
                className={`text-[10px] tracking-widest transition-colors ${
                  i18n.language.toUpperCase() === lang ? 'font-bold' : 'text-navy/50 hover:text-navy'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Language Icon */}
        <div className="lg:hidden">
          <Globe size={20} className="text-navy/50" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-offwhite border-b border-gray-soft py-10 px-6 flex flex-col gap-8 items-center text-center"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4 pt-8 border-t border-gray-soft w-full justify-center">
            {['ES', 'EN', 'DE'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang.toLowerCase())}
                className={`text-xs tracking-widest ${
                  i18n.language.toUpperCase() === lang ? 'font-bold underline' : 'text-navy/50'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
