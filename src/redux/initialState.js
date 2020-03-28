const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      oldPrice: 50,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photo: '/images/products/beds/bed1.jpeg',
      favorite: true,
      compare: true,
      userRate: 4,
      upTo: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      oldPrice: 50,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photo: '/images/products/beds/bed2.jpeg',
      favorite: true,
      compare: false,
      upTo: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photo: '/images/products/beds/bed3.jpeg',
      favorite: false,
      compare: true,
      userRate: 3,
      upTo: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      oldPrice: 50,
      price: 30,
      stars: 2,
      promo: 'sale',
      offer: true,
      newFurniture: true,
      photo: '/images/products/beds/bed4.jpeg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      offer: true,
      photo: '/images/products/beds/bed5.jpeg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      offer: true,
      newFurniture: true,
      photo: '/images/products/beds/bed6.jpeg',
      upTo: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photo: '/images/products/beds/bed1.jpeg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      photo: '/images/products/beds/bed2.jpeg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-24',
      name: 'Aenean 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-24A',
      name: 'Aenean 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-24B',
      name: 'Aenean 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-24C',
      name: 'Aenean 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'home-24',
      name: 'Home 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'home-24A',
      name: 'Home 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'home-24B',
      name: 'Home 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'home-24C',
      name: 'Home 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'office-12',
      name: 'Office 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'office-24A',
      name: 'Office 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'office-24B',
      name: 'Office 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'office-24C',
      name: 'Office 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'gaming-24',
      name: 'Gaming 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'gaming-24A',
      name: 'Gaming 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'gaming-24B',
      name: 'Gaming 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'gaming-24C',
      name: 'Gaming 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'leather-24',
      name: 'Leather 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'leather-24A',
      name: 'Leather 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'leather-24B',
      name: 'Leather 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'leather-24C',
      name: 'Leather 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'fabric-24',
      name: 'Fabric 24',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'fabric-24A',
      name: 'Fabric 24A',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'fabric-24B',
      name: 'Fabric 24B',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'fabric-24C',
      name: 'Fabric 24C',
      category: 'chair',
      price: 34,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-24',
      name: 'Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-24A',
      name: 'Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-24B',
      name: 'Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-24C',
      name: 'Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-24',
      name: 'Left Corner Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-24A',
      name: 'Left Corner Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-24B',
      name: 'Left Corner Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-24C',
      name: 'Left Corner Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-241',
      name: 'Left Corner Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-241A',
      name: 'Left Corner Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-241B',
      name: 'Left Corner Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'left-sofa-241C',
      name: 'Left Corner Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-24',
      name: 'Right Corner Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-24A',
      name: 'Right Corner Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-24B',
      name: 'Right Corner Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-24C',
      name: 'Right Corner Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-241',
      name: 'Right Corner Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-241A',
      name: 'Right Corner Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-241B',
      name: 'Right Corner Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-241C',
      name: 'Right Corner Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-242',
      name: 'Right Corner Sofa 24',
      category: 'sofa',
      price: 34,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-242A',
      name: 'Right Corner Sofa 24A',
      category: 'sofa',
      price: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-242B',
      name: 'Right Corner Sofa 24B',
      category: 'sofa',
      price: 34,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'right-sofa-242C',
      name: 'Right Corner Sofa 24C',
      category: 'sofa',
      price: 34,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24A',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24B',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24C',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-241',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-241A',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-241B',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-241C',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-242',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-242A',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-242B',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-242C',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-243',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-243A',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-243B',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-243C',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-244',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-244A',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-244B',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-244C',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-245',
      name: 'Table 24',
      category: 'table',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24A5',
      name: 'Table 24A',
      category: 'table',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24B5',
      name: 'Table 24B',
      category: 'table',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-24C5',
      name: 'Table 24C',
      category: 'table',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24A',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24B',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24C',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-241',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-241A',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-241B',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-241C',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-242',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24A2',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24B2',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24C2',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-243',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24A3',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-243B',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-243C',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-245',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24A5',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-24B5',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-245C',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-244',
      name: 'Dining 24',
      category: 'dining',
      price: 32,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-244A',
      name: 'Dining 24A',
      category: 'dining',
      price: 12,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-244B',
      name: 'Dining 24B',
      category: 'dining',
      price: 56,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-244C',
      name: 'Dining 24C',
      category: 'dining',
      price: 89,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
