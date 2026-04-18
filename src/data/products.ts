import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ONYX UTILITY PARKA',
    price: 850,
    description: 'A heavyweight, water-resistant parka designed for urban exploration. Features modular pockets and reinforced stitching.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/onyx1/800/1000',
      'https://picsum.photos/seed/onyx2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pitch Black', hex: '#000000' },
      { name: 'Slate Gray', hex: '#2F2F2F' }
    ],
    details: [
      '70% Cotton, 30% Cordura Nylon',
      'Waterproof zippers',
      'Internal harness system',
      'Adjustable hood with bill'
    ],
    isNew: true,
    stockCount: 5
  },
  {
    id: '2',
    name: 'CYPHER DISTRESSED KNIT',
    price: 320,
    description: 'Hand-distressed mohair blend sweater with signature ODLX oversized fit.',
    category: 'Knitwear',
    images: [
      'https://picsum.photos/seed/knit1/800/1000',
      'https://picsum.photos/seed/knit2/800/1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Bone White', hex: '#F9F9F9' },
      { name: 'Onyx', hex: '#000000' }
    ],
    details: [
      '40% Mohair, 30% Wool, 30% Acrylic',
      'Dropped shoulders',
      'Ribbed cuffs and hem',
      'Made in Italy'
    ],
    isNew: false,
    stockCount: 12
  },
  {
    id: '3',
    name: 'RAZOR CARGO TROUSERS',
    price: 450,
    description: 'Tapered cargo pants with 12-pocket configuration and adjustable ankle straps.',
    category: 'Bottoms',
    images: [
      'https://picsum.photos/seed/cargo1/800/1000',
      'https://picsum.photos/seed/cargo2/800/1000'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Onyx', hex: '#000000' }
    ],
    details: [
      'Stretch canvas construction',
      'Articulated knees',
      'D-ring attachments',
      'Fidlock buckle waist'
    ],
    isNew: false,
    stockCount: 3
  },
  {
    id: '4',
    name: 'PHANTOM GRAPHIC TEE',
    price: 125,
    description: 'Heavyweight jersey cotton tee featuring seasonal editorial graphics inspired by brutalist architecture.',
    category: 'Tops',
    images: [
      'https://picsum.photos/seed/tee1/800/1000',
      'https://picsum.photos/seed/tee2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pitch Black', hex: '#000000' },
      { name: 'Ice Blue', hex: '#A5F3FC' }
    ],
    details: [
      '100% Organic Cotton (300gsm)',
      'Boxy fit',
      'Screen-printed in London',
      'Signature neck label'
    ],
    isNew: true,
    stockCount: 25
  },
  {
    id: '5',
    name: 'SILENT RUNNER V1',
    price: 520,
    description: 'Technical footwear combining luxury leathers with performance mesh and a custom vibram sole.',
    category: 'Footwear',
    images: [
      'https://picsum.photos/seed/shoe1/800/1000',
      'https://picsum.photos/seed/shoe2/800/1000'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Triple Black', hex: '#000000' }
    ],
    details: [
      'Full-grain calf leather',
      'Breathable technical mesh',
      'EVA midsole',
      'TPU heel counter'
    ],
    isNew: true,
    stockCount: 8
  },
  {
    id: '6',
    name: 'VECTOR BOMBER JACKET',
    price: 680,
    description: 'Satin-finish flight jacket with quilted lining and sleeve utility pocket.',
    category: 'Outerwear',
    images: [
      'https://picsum.photos/seed/bomber1/800/1000',
      'https://picsum.photos/seed/bomber2/800/1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx', hex: '#000000' },
      { name: 'Midnight', hex: '#000080' }
    ],
    details: [
      'High-density nylon satin',
      'Reversible design',
      'Heavy-duty hardware',
      'Slim cut'
    ],
    isNew: false,
    isSale: true,
    stockCount: 2
  }
];
