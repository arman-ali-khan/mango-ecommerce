import { Product, PaymentMethod, Review, Testimonial, Category, HeroSlide } from '@/types';

export const mangos: Product[] = [
  {
    id: '1',
    name: 'Alphonso Mango',
    description: 'The king of mangos! Sweet, creamy texture with rich flavor.',
    price: 450,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Premium',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ['Rich flavor', 'Creamy texture', 'High vitamin C', 'Premium quality'],
    origin: 'Maharashtra, India',
    weight: '200-300g per piece'
  },
  {
    id: '2',
    name: 'Himsagar Mango',
    description: 'Incredibly sweet and aromatic, a Bengali favorite.',
    price: 380,
    image: 'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Local',
    inStock: true,
    rating: 4.8,
    reviews: 89,
    features: ['Sweet aroma', 'Soft pulp', 'Traditional variety', 'Bengali heritage'],
    origin: 'West Bengal, India',
    weight: '150-250g per piece'
  },
  {
    id: '3',
    name: 'Langra Mango',
    description: 'Unique green skin with incredibly sweet flesh.',
    price: 320,
    image: 'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/5966632/pexels-photo-5966632.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Classic',
    inStock: true,
    rating: 4.7,
    reviews: 124,
    features: ['Green skin', 'Sweet flesh', 'Unique taste', 'Long shelf life'],
    origin: 'Uttar Pradesh, India',
    weight: '180-280g per piece'
  },
  {
    id: '4',
    name: 'Fazli Mango',
    description: 'Large, juicy mangos perfect for sharing.',
    price: 280,
    image: 'https://images.pexels.com/photos/5966632/pexels-photo-5966632.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5966632/pexels-photo-5966632.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/5966626/pexels-photo-5966626.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Family',
    inStock: true,
    rating: 4.6,
    reviews: 67,
    features: ['Large size', 'Juicy pulp', 'Family sharing', 'Good value'],
    origin: 'Bihar, India',
    weight: '300-500g per piece'
  },
  {
    id: '5',
    name: 'Gopalbhog Mango',
    description: 'Smooth, fiberless texture with exceptional sweetness.',
    price: 520,
    image: 'https://images.pexels.com/photos/5966626/pexels-photo-5966626.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5966626/pexels-photo-5966626.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4051878/pexels-photo-4051878.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Premium',
    inStock: true,
    rating: 4.9,
    reviews: 203,
    features: ['Fiberless', 'Exceptional sweetness', 'Smooth texture', 'Premium grade'],
    origin: 'West Bengal, India',
    weight: '200-300g per piece'
  },
  {
    id: '6',
    name: 'Amrapali Mango',
    description: 'Hybrid variety with perfect balance of sweet and tangy.',
    price: 350,
    image: 'https://images.pexels.com/photos/4051878/pexels-photo-4051878.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4051878/pexels-photo-4051878.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Hybrid',
    inStock: true,
    rating: 4.5,
    reviews: 95,
    features: ['Hybrid variety', 'Sweet-tangy balance', 'Modern cultivation', 'Consistent quality'],
    origin: 'Multiple regions',
    weight: '180-250g per piece'
  },
  {
    id: '7',
    name: 'Kesar Mango',
    description: 'Golden yellow mango with saffron-like aroma.',
    price: 480,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Premium',
    inStock: true,
    rating: 4.8,
    reviews: 142,
    features: ['Golden color', 'Saffron aroma', 'Rich taste', 'Export quality'],
    origin: 'Gujarat, India',
    weight: '200-350g per piece'
  },
  {
    id: '8',
    name: 'Totapuri Mango',
    description: 'Parrot-beak shaped mango, perfect for cooking.',
    price: 250,
    image: 'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Classic',
    inStock: true,
    rating: 4.4,
    reviews: 78,
    features: ['Unique shape', 'Cooking variety', 'Tangy flavor', 'Versatile use'],
    origin: 'Karnataka, India',
    weight: '250-400g per piece'
  },
  {
    id: '9',
    name: 'Banganapalli Mango',
    description: 'Large, oval-shaped mango with sweet taste.',
    price: 320,
    image: 'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Local',
    inStock: true,
    rating: 4.6,
    reviews: 91,
    features: ['Large size', 'Oval shape', 'Sweet taste', 'South Indian variety'],
    origin: 'Andhra Pradesh, India',
    weight: '300-450g per piece'
  },
  {
    id: '10',
    name: 'Chausa Mango',
    description: 'Fragrant mango with rich, sweet flavor.',
    price: 380,
    image: 'https://images.pexels.com/photos/5966632/pexels-photo-5966632.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Classic',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: ['Fragrant', 'Rich flavor', 'Traditional variety', 'Popular choice'],
    origin: 'Uttar Pradesh, India',
    weight: '200-300g per piece'
  },
  {
    id: '11',
    name: 'Dasheri Mango',
    description: 'Elongated mango with sweet, aromatic flesh.',
    price: 340,
    image: 'https://images.pexels.com/photos/5966626/pexels-photo-5966626.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Local',
    inStock: true,
    rating: 4.5,
    reviews: 87,
    features: ['Elongated shape', 'Aromatic', 'Sweet flesh', 'Traditional favorite'],
    origin: 'Uttar Pradesh, India',
    weight: '150-250g per piece'
  },
  {
    id: '12',
    name: 'Safeda Mango',
    description: 'Large, pale yellow mango with mild sweetness.',
    price: 290,
    image: 'https://images.pexels.com/photos/4051878/pexels-photo-4051878.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Family',
    inStock: true,
    rating: 4.3,
    reviews: 64,
    features: ['Large size', 'Pale yellow', 'Mild sweetness', 'Good for families'],
    origin: 'Andhra Pradesh, India',
    weight: '400-600g per piece'
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'bkash',
    name: 'bKash',
    logo: '💳',
    type: 'mobile'
  },
  {
    id: 'nagad',
    name: 'Nagad',
    logo: '📱',
    type: 'mobile'
  },
  {
    id: 'rocket',
    name: 'Rocket',
    logo: '🚀',
    type: 'mobile'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Rahul Ahmed',
    rating: 5,
    comment: 'Absolutely delicious! The Alphonso mangos were perfectly ripe and incredibly sweet.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    userName: 'Fatima Khan',
    rating: 5,
    comment: 'Best quality mangos I have ever tasted. Will definitely order again!',
    date: '2024-01-12',
    verified: true
  },
  {
    id: '3',
    productId: '2',
    userName: 'Arif Hassan',
    rating: 4,
    comment: 'Great taste and aroma. Reminded me of my childhood in Bengal.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '4',
    productId: '3',
    userName: 'Nasir Uddin',
    rating: 5,
    comment: 'Love the unique green color and sweet taste. Excellent quality!',
    date: '2024-01-08',
    verified: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    location: 'Dhaka',
    rating: 5,
    comment: 'MangoMarket has the freshest mangos in Bangladesh! The delivery is always on time and the quality is exceptional.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Mohammad Rahman',
    location: 'Chittagong',
    rating: 5,
    comment: 'I order mangos for my family every week. The variety and freshness is unmatched. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Fatima Khatun',
    location: 'Sylhet',
    rating: 5,
    comment: 'The Himsagar mangos remind me of my childhood. Perfect sweetness and aroma. Thank you MangoMarket!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: 'Karim Uddin',
    location: 'Rajshahi',
    rating: 5,
    comment: 'Fast delivery, great packaging, and amazing taste. This is my go-to place for premium mangos.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Mangos',
    icon: '🥭',
    count: mangos.length
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: '👑',
    count: mangos.filter(m => m.category.toLowerCase() === 'premium').length
  },
  {
    id: 'local',
    name: 'Local Varieties',
    icon: '🏠',
    count: mangos.filter(m => m.category.toLowerCase() === 'local').length
  },
  {
    id: 'classic',
    name: 'Classic',
    icon: '⭐',
    count: mangos.filter(m => m.category.toLowerCase() === 'classic').length
  },
  {
    id: 'family',
    name: 'Family Pack',
    icon: '👨‍👩‍👧‍👦',
    count: mangos.filter(m => m.category.toLowerCase() === 'family').length
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    icon: '🔬',
    count: mangos.filter(m => m.category.toLowerCase() === 'hybrid').length
  }
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Premium Alphonso Mangos',
    subtitle: 'The King of Mangos - Now Available',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'Fresh Bengali Himsagar',
    subtitle: 'Sweet Aroma, Sweeter Taste',
    image: 'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Discover'
  },
  {
    id: '3',
    title: 'Farm Fresh Delivery',
    subtitle: 'From Our Orchards to Your Doorstep',
    image: 'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Order Today'
  }
];