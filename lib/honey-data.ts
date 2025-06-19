import { Product, PaymentMethod, Review, Testimonial, Category, HeroSlide } from '@/types';

export const honeyProducts: Product[] = [
  {
    id: 'h1',
    name: 'Pure Wildflower Honey',
    description: 'Raw, unfiltered honey from wildflower meadows with rich, complex flavor.',
    price: 850,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    category: 'Wildflower',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ['Raw & Unfiltered', 'Rich Complex Flavor', 'High Antioxidants', 'Local Sourced'],
    origin: 'Sylhet Hills, Bangladesh',
    weight: '500g jar'
  },
  {
    id: 'h2',
    name: 'Acacia Honey',
    description: 'Light, delicate honey with mild flavor and slow crystallization.',
    price: 950,
    image: 'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Acacia',
    inStock: true,
    rating: 4.8,
    reviews: 89,
    features: ['Light Color', 'Mild Flavor', 'Slow Crystallization', 'Premium Quality'],
    origin: 'Chittagong Hill Tracts',
    weight: '500g jar'
  },
  {
    id: 'h3',
    name: 'Raw Forest Honey',
    description: 'Dark, robust honey harvested from deep forest hives.',
    price: 1200,
    image: 'https://images.pexels.com/photos/1638282/pexels-photo-1638282.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Raw Honey',
    inStock: true,
    rating: 4.9,
    reviews: 124,
    features: ['Dark & Robust', 'Forest Sourced', 'High Minerals', 'Medicinal Properties'],
    origin: 'Sundarbans Forest',
    weight: '500g jar'
  },
  {
    id: 'h4',
    name: 'Organic Clover Honey',
    description: 'Certified organic honey with sweet, floral notes.',
    price: 750,
    image: 'https://images.pexels.com/photos/1638283/pexels-photo-1638283.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Organic',
    inStock: true,
    rating: 4.7,
    reviews: 67,
    features: ['Certified Organic', 'Sweet Floral Notes', 'Smooth Texture', 'Family Favorite'],
    origin: 'Rangpur Plains',
    weight: '500g jar'
  },
  {
    id: 'h5',
    name: 'Manuka Honey',
    description: 'Premium medicinal honey with unique healing properties.',
    price: 2500,
    image: 'https://images.pexels.com/photos/1638284/pexels-photo-1638284.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Manuka',
    inStock: true,
    rating: 4.9,
    reviews: 203,
    features: ['Medicinal Grade', 'Antibacterial Properties', 'Premium Quality', 'Health Benefits'],
    origin: 'Imported from New Zealand',
    weight: '250g jar'
  },
  {
    id: 'h6',
    name: 'Sunflower Honey',
    description: 'Golden honey with bright, sunny flavor from sunflower fields.',
    price: 680,
    image: 'https://images.pexels.com/photos/1638285/pexels-photo-1638285.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Wildflower',
    inStock: true,
    rating: 4.6,
    reviews: 95,
    features: ['Golden Color', 'Bright Flavor', 'Quick Energy', 'Natural Sweetener'],
    origin: 'Jessore Fields',
    weight: '500g jar'
  },
];

export const honeyCategories: Category[] = [
  {
    id: 'all',
    name: 'All Honey',
    icon: '🍯',
    count: honeyProducts.length
  },
  {
    id: 'raw-honey',
    name: 'Raw Honey',
    icon: '🌿',
    count: honeyProducts.filter(p => p.category.toLowerCase() === 'raw honey').length
  },
  {
    id: 'wildflower',
    name: 'Wildflower',
    icon: '🌸',
    count: honeyProducts.filter(p => p.category.toLowerCase() === 'wildflower').length
  },
  {
    id: 'acacia',
    name: 'Acacia',
    icon: '🌳',
    count: honeyProducts.filter(p => p.category.toLowerCase() === 'acacia').length
  },
  {
    id: 'manuka',
    name: 'Manuka',
    icon: '⭐',
    count: honeyProducts.filter(p => p.category.toLowerCase() === 'manuka').length
  },
  {
    id: 'organic',
    name: 'Organic',
    icon: '🌱',
    count: honeyProducts.filter(p => p.category.toLowerCase() === 'organic').length
  }
];

export const honeyTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rashida Begum',
    location: 'Dhaka',
    rating: 5,
    comment: 'The raw forest honey has amazing healing properties. I recommend it to all my patients for natural wellness.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Ahmed Hassan',
    location: 'Chittagong',
    rating: 5,
    comment: 'Pure, authentic honey that tastes like childhood memories. The quality is exceptional and delivery is always fresh.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Fatima Rahman',
    location: 'Sylhet',
    rating: 5,
    comment: 'I use their organic honey daily for my family. It\'s pure, natural, and supports local beekeepers.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: 'Karim Uddin',
    location: 'Rajshahi',
    rating: 5,
    comment: 'The Manuka honey helped with my throat issues. Genuine quality and fast delivery. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const honeyHeroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Pure Raw Forest Honey',
    subtitle: 'Nature\'s Golden Treasure - Straight from the Hive',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'Organic Wildflower Honey',
    subtitle: 'Sweet Nectar from Pristine Meadows',
    image: 'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Discover'
  },
  {
    id: '3',
    title: 'Farm to Table Freshness',
    subtitle: 'Supporting Local Beekeepers & Communities',
    image: 'https://images.pexels.com/photos/1638282/pexels-photo-1638282.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Order Today'
  }
];