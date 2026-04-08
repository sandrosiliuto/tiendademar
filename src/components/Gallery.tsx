import { useTranslation } from 'react-i18next';
import Section from './Section';

const galleryImages = [
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800'
];

export default function Gallery() {
  return (
    <Section id="experience" className="px-0">
      <div className="px-6 max-w-7xl mx-auto mb-16 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-navy/50 block mb-4">Instagram</span>
        <h2 className="text-4xl md:text-5xl font-serif">@tiendademar_elmedano</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden group cursor-pointer"
          >
            <img 
              src={img} 
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
