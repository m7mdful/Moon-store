// src/dData.js

const products = [
  {
    id: 1,
    title: 'Mini Tasting Plate',
    imgSrc: [
      new URL('./assets/img/shop1.png', import.meta.url).href,
      new URL('./assets/img/shop1.png', import.meta.url).href,
      new URL('./assets/img/shop1.png', import.meta.url).href,
      new URL('./assets/img/shop1.png', import.meta.url).href,
    ],
    description: 'Small appetizer plate ideal for sauces or tasting bites.',
    price: 8,
    quantity: 100,
    category: 'dinnerwave',
    color: ['white', '#CCD8CE', '#B4555D'],
    tags: [, 'Set'],
    details: 'Small appetizer plate ideal for sauces or tasting bites.sssssssssssss',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 45
  },
  {
    id: 2,
    title: 'Everyday Dessert Plate',
    imgSrc: [
      new URL('./assets/img/shop2.png', import.meta.url).href,
      new URL('./assets/img/shop2.png', import.meta.url).href,
      new URL('./assets/img/shop2.png', import.meta.url).href,
      new URL('./assets/img/shop2.png', import.meta.url).href,
    ],
    description: 'Lightweight daily-use plate sized for cake or fruit.',
    price: 22,
    quantity: 150,
    category: 'ceramic',
    color: ['#CCD8CE'],
    tags: ['Classic'],
    details: 'Lightweight daily-use plate sized for cake or fruit.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 102
  },
  {
    id: 3,
    title: 'Rustic Side Plate',
    imgSrc: [
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
    ],
    description: 'Matte finish with subtle rim texture for casual dining.',
    price: 32,
    quantity: 200,
    category: 'furniture',
    color: ['#C69B7B'],
    tags: ['Rustic', 'Casual'],
    details: 'Matte finish with subtle rim texture for casual dining.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 78
  },
  {
    id: 4,
    title: 'Studio Snack Plate',
    imgSrc: [
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
    ],
    description: 'Clean studio look; perfect for small bites or desserts.',
    price: 48,
    quantity: 75,
    category: 'decorart',
    color: ['#9B92A1'],
    tags: ['Minimal', 'Snack'],
    details: 'Clean studio look; perfect for small bites or desserts.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 89
  },
  {
    id: 5,
    title: 'Host Dinner Plate',
    imgSrc: [
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
    ],
    description: 'Generous surface for main courses; host-ready durability.',
    price: 72,
    quantity: 90,
    category: 'dinnerwave',
    color: ['white'],
    tags: ['Dinner'],
    details: 'Generous surface for main courses; host-ready durability.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 134
  },
  {
    id: 6,
    title: 'Art Glaze Sharing Plate',
    imgSrc: [
      new URL('./assets/img/shop6.png', import.meta.url).href,
      new URL('./assets/img/shop6.png', import.meta.url).href,
      new URL('./assets/img/shop6.png', import.meta.url).href,
      new URL('./assets/img/shop6.png', import.meta.url).href,
    ],
    description: 'Hand-glaze look with soft edge pooling; shareable size.',
    price: 85,
    quantity: 70,
    category: 'decorart',
    color: ['#B4555D'],
    tags: ['Art'],
    details: 'Hand-glaze look with soft edge pooling; shareable size.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 64
  },
  {
    id: 7,
    title: 'Stackable Lunch Plate',
    imgSrc: [
      new URL('./assets/img/shop7.png', import.meta.url).href,
      new URL('./assets/img/shop7.png', import.meta.url).href,
      new URL('./assets/img/shop7.png', import.meta.url).href,
      new URL('./assets/img/shop7.png', import.meta.url).href,
    ],
    description: 'Space-saving stackable profile for compact kitchens.',
    price: 99,
    quantity: 60,
    category: 'ceramic',
    color: ['#CCD8CE'],
    tags: ['Lunch'],
    details: 'Space-saving stackable profile for compact kitchens.',
    dmns: { wth: 12, hht: 15 },
    reviewsText: { wth: 12, hht: 15 },
    reviewsCount: 23
  },
  {
    id: 8,
    title: 'Gift Boxed Plate Duo',
    imgSrc: [
      new URL('./assets/img/shop8.png', import.meta.url).href,
      new URL('./assets/img/shop8.png', import.meta.url).href,
      new URL('./assets/img/shop8.png', import.meta.url).href,
      new URL('./assets/img/shop8.png', import.meta.url).href,
    ],
    description: 'Pair of plates in a ready-to-wrap gift box set.',
    price: 129,
    quantity: 40,
    category: 'giftsets',
    color: ['#C69B7B', 'white', 'red'],
    tags: ['Gift'],
    details: 'Pair of plates in a ready-to-wrap gift box set.',
    dmns: { wth: 12, hht: 15 },
    reviewsText:'wts',
    reviewsCount: 41
  },
  {
    id: 9,
    title: 'Chef Presentation Plate',
    imgSrc: [
      new URL('./assets/img/shop9.png', import.meta.url).href,
      new URL('./assets/img/shop9.png', import.meta.url).href,
      new URL('./assets/img/shop9.png', import.meta.url).href,
      new URL('./assets/img/shop9.png', import.meta.url).href,
    ],
    description: 'Wide plating area for chef-style presentation at home.',
    price: 155,
    quantity: 30,
    category: 'dinnerwave',
    color: ['white'],
    tags: ['Presentation'],
    details: 'Wide plating area for chef-style presentation at home.',
    dmns: { wth: 12, hht: 15 },
    reviewsText:'wts',
    reviewsCount: 60
  },
  {
    id: 10,
    title: 'Heritage Serving Charger',
    imgSrc: [
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
      new URL('./assets/img/shop3.png', import.meta.url).href,
    ],
    description: 'Oversized charger plate anchors layered table settings.',
    price: 180,
    quantity: 25,
    category: 'furniture',
    color: ['#B4555D'],
    tags: ['Serve'],
    details: 'Oversized charger plate anchors layered table settings.',
    dmns: { wth: 12, hht: 15 },
    reviewsText:'wts',
    reviewsCount: 29
  },
  {
    id: 11,
    title: 'Limited Edition Art Plate',
    imgSrc: [
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
      new URL('./assets/img/shop4.png', import.meta.url).href,
    ],
    description: 'Numbered run; hand-detailed rim pattern for collectors.',
    price: 245,
    quantity: 12,
    category: 'decorart',
    color: ['#9B92A1'],
    tags: ['Art'],
    details: 'Numbered run; hand-detailed rim pattern for collectors.',
    dmns: { wth: 12, hht: 15 },
    reviewsText:'wts',
    reviewsCount: 16
  },
  {
    id: 12,
    title: 'Premium Celebration Set Plate',
    imgSrc: [
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
      new URL('./assets/img/shop5.png', import.meta.url).href,
    ],
    description: 'Premium glaze and weight; designed for special occasions.',
    price: 325,
    quantity: 10,
    category: 'giftsets',
    color: ['#C69B7B'],
    tags: ['Premium', 'Occasion'],
    details: 'Premium glaze and weight; designed for special occasions.',
    dmns: { wth: 12, hht: 15 },
    reviews:{wth: 12, hht: 15},
    reviewsCount: 11
  }
]

const cart = [
  { id: 1, title: 'Mini Tasting Plate', price: 8, quantity: 2 },
  { id: 3, title: 'Rustic Side Plate', price: 32, quantity: 1 }
]

const wishlist = [
  { id: 2, title: 'Everyday Dessert Plate', description: 'Lightweight daily-use plate sized for cake or fruit.', price: 22 },
  { id: 4, title: 'Studio Snack Plate', description: 'Clean studio look; perfect for small bites or desserts.', price: 48 }
]

export { products, cart, wishlist }