import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ODLX SENATOR SET',
    price: 720,
    description: 'A contemporary evolution of the classic Senator silhouette. Crafted from technical Italian wool with hidden magnetic closures and architectural shoulder definition.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/senator1/800/1000',
      'https://picsum.photos/seed/senator2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Black', hex: '#050505' },
      { name: 'Midnight Blue', hex: '#000033' }
    ],
    details: [
      '100% Technical Virgin Wool',
      'Minimalist invisible placket',
      'Hand-finished embroidery on collar',
      'Slim-cut tailored trousers included'
    ],
    isNew: true,
    stockCount: 4
  },
  {
    id: '2',
    name: 'ARCHIVE ASO OKE BOMBER',
    price: 950,
    description: 'Limited edition bomber jacket featuring hand-woven Aso Oke panels from Western Nigeria. Bridging heritage craftsmanship with brutalist design.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/ashoke1/800/1000',
      'https://picsum.photos/seed/ashoke2/800/1000'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Raw Gold / Black', hex: '#FFD700' },
      { name: 'Silver / Grey', hex: '#C0C0C0' }
    ],
    details: [
      'Genuine hand-woven Aso Oke textile',
      'Premium satin lining',
      'Heavy-duty industrial zippers',
      'Each piece features unique weave patterns'
    ],
    isNew: true,
    stockCount: 2
  },
  {
    id: '3',
    name: 'GRAND AGBADA SHELL',
    price: 1200,
    description: 'An oversized, structural shell inspired by the majesty of the Agbada. Constructed from high-density technical silk that maintains its architectural form.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/agbada1/800/1000',
      'https://picsum.photos/seed/agbada2/800/1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Pitch Black', hex: '#000000' }
    ],
    details: [
      'Technical Silk / Nylon Blend',
      'Water-repellent finish',
      'Hidden interior storage pockets',
      'Extreme oversized silhouette'
    ],
    isNew: true,
    stockCount: 3
  },
  {
    id: '4',
    name: 'ODLX CUSTOM LOGO SHIRT',
    price: 280,
    description: 'Premium tailored shirt featuring custom ODLX tonal embroidery. A versatile staple for the modern minimalist.',
    category: 'Tops',
    images: [
      'https://picsum.photos/seed/shirt1/800/1000',
      'https://picsum.photos/seed/shirt2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Bone White', hex: '#F5F5F0' },
      { name: 'Onyx', hex: '#050505' }
    ],
    details: [
      '200s Two-ply Egyptian Cotton',
      'Mother of pearl buttons',
      'Discreet tonal monogramming',
      'Relaxed tailored fit'
    ],
    isNew: false,
    stockCount: 15
  },
  {
    id: '5',
    name: 'RAW DENIM VECTOR JACKET',
    price: 520,
    description: 'Heavyweight raw Japanese denim jacket with architectural vector stitching and industrial hardware.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/denim1/800/1000',
      'https://picsum.photos/seed/denim2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo', hex: '#000080' },
      { name: 'Washed Grey', hex: '#666666' }
    ],
    details: [
      '15oz Raw Japanese Selvedge Denim',
      'Custom embossed hardware',
      'Reinforced structural seams',
      'Internal utility harness'
    ],
    isNew: true,
    stockCount: 7
  },
  {
    id: '6',
    name: 'NEXUS CARGO TROUSERS',
    price: 480,
    description: 'Tapered luxury pants with modular pocket attachments and adjustable technical straps.',
    category: 'Bottoms',
    images: [
      'https://picsum.photos/seed/pants1/800/1000',
      'https://picsum.photos/seed/pants2/800/1000'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Onyx', hex: '#050505' }
    ],
    details: [
      'Ripstop Technical Fabric',
      'Fidlock magnetic systems',
      'Articulated leg structure',
      'Waterproof finish'
    ],
    isNew: false,
    isSale: true,
    stockCount: 3
  }
];
