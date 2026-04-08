import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-navy text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.15em] uppercase">Tienda de Mar</span>
            <span className="text-[10px] tracking-[0.4em] uppercase -mt-1 opacity-60">El Médano</span>
          </div>
          <p className="text-sm font-light leading-relaxed opacity-60 max-w-xs">
            {t('story.text')}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-medium">Explorar</h4>
          <div className="flex flex-col gap-4 text-sm font-light opacity-60">
            <a href="#shop" className="hover:opacity-100 transition-opacity">{t('common.shop')}</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">{t('common.experience')}</a>
            <a href="#about" className="hover:opacity-100 transition-opacity">{t('common.about')}</a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-medium">Contacto</h4>
          <div className="flex flex-col gap-4 text-sm font-light opacity-60">
            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Playa Chica, El Médano</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <a href="https://wa.me/34613003035" target="_blank" rel="noreferrer">
                +34 613 003 035
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-medium">Siguenos</h4>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest opacity-40">
        <p>© 2026 Tienda de Mar. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
