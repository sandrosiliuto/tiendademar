export interface Product {
  id: string;
  name: string;
  category: 'pamelas' | 'bags' | 'jewelry' | 'accessories';
  price: number;
  image: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Pamela Atlántica',
    category: 'pamelas',
    price: 85,
    image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800',
    description: 'Pamela de ala ancha tejida a mano con fibras naturales.'
  },
  {
    id: '2',
    name: 'Bolso Playa Chica',
    category: 'bags',
    price: 120,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
    description: 'Bolso de rafia con detalles en piel de alta calidad.'
  },
  {
    id: '3',
    name: 'Collar Medusa',
    category: 'jewelry',
    price: 45,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: 'Bisutería fina bañada en oro de 18k.'
  },
  {
    id: '4',
    name: 'Gafas de Sol Brisa',
    category: 'accessories',
    price: 65,
    image: 'https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=800',
    description: 'Protección con estilo para los atardeceres del Médano.'
  },
  {
    id: '5',
    name: 'Brazalete Arena',
    category: 'jewelry',
    price: 35,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Capazo Mediterráneo',
    category: 'bags',
    price: 95,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
  }
];

export const categories = [
  { id: 'pamelas', name: 'Pamelas', image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=1200' },
  { id: 'bags', name: 'Bolsos', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1200' },
  { id: 'jewelry', name: 'Bisutería', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200' },
  { id: 'accessories', name: 'Complementos', image: 'https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=1200' }
];
