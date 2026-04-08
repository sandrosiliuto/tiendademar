import { useTranslation } from 'react-i18next';
import Section from './Section';
import { products } from '../data/products';

export default function FeaturedProducts() {
  const { t } = useTranslation();

  return (
    <Section className="bg-gray-soft/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-navy/50 block mb-4">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif">Piezas Destacadas</h2>
          </div>
          <a href="#shop" className="text-xs uppercase tracking-[0.2em] zara-link">Ver todo</a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-white mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Añadir
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-light tracking-wide mb-1">{product.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-navy/50">{t(`categories.${product.category}`)}</p>
                </div>
                <span className="text-sm font-light">{product.price}€</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
