import { useTranslation } from 'react-i18next';
import Section from './Section';
import { categories } from '../data/products';

export default function CollectionGrid() {
  const { t } = useTranslation();

  return (
    <Section id="shop" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
              <h3 className="text-4xl md:text-5xl font-serif mb-4 tracking-wide">
                {t(`categories.${category.id}`)}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.4em] border-b border-white/0 group-hover:border-white/100 transition-all duration-500 pb-1">
                {t('common.discover')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
