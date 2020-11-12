export interface CarouselItemData {
  id: string;
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
}

export const carousel = {
  title: 'Relevant',
  items: [
    {
      id: '123',
      image: '/images/image_small.png',
      name: 'White roses, 7pc.',
      price: '44 $'
    },
    {
      id: '456',
      image: '/images/image_small.png',
      name: 'Red roses, 5pc.',
      price: '20 $',
      oldPrice: '99 $'
    },
    {
      id: '789',
      image: '/images/image_small.png',
      name: 'White lilies, 15pc.',
      price: '70 $'
    },
    {
      id: '741',
      image: '/images/image_small.png',
      name: 'Yellow roses, 25pc.',
      price: '100 $',
      oldPrice: '150 $'
    },
    {
      id: '258',
      image: '/images/image_small.png',
      name: 'Bouquet "Sunny"',
      price: '15 $'
    },
    {
      id: '963',
      image: '/images/image_small.png',
      name: 'Pink roses, 3pc.',
      price: '3 $',
      oldPrice: '15 $'
    }
  ]
};
