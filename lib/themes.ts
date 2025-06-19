export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    hero: string;
    card: string;
  };
  icons: {
    primary: string;
    cart: string;
    category: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  product: {
    name: string;
    unit: string;
    categories: string[];
  };
}

export const themes: Record<string, Theme> = {
  mango: {
    id: 'mango',
    name: 'Mango Market',
    description: 'Fresh, premium quality mangos',
    colors: {
      primary: 'from-orange-500 to-yellow-500',
      secondary: 'from-yellow-400 to-orange-400',
      accent: 'orange-500',
      background: 'from-yellow-50 via-orange-50 to-yellow-100',
      surface: 'from-white to-yellow-50/50',
      text: 'gray-800',
      textSecondary: 'gray-600',
      border: 'orange-200/50',
      success: 'green-500',
      warning: 'yellow-500',
      error: 'red-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-orange-500 to-yellow-500',
      secondary: 'bg-gradient-to-r from-yellow-400 to-orange-400',
      hero: 'bg-gradient-to-r from-orange-400 to-yellow-400',
      card: 'bg-gradient-to-br from-white to-yellow-50/50',
    },
    icons: {
      primary: '🥭',
      cart: '🥭',
      category: '🏷️',
      feature1: '🌱',
      feature2: '🥭',
      feature3: '🚚',
    },
    product: {
      name: 'Mangos',
      unit: '/kg',
      categories: ['Premium', 'Local', 'Classic', 'Family', 'Hybrid'],
    },
  },
  honey: {
    id: 'honey',
    name: 'Honey Haven',
    description: 'Pure, natural honey from local beekeepers',
    colors: {
      primary: 'from-amber-500 to-yellow-600',
      secondary: 'from-yellow-300 to-amber-400',
      accent: 'amber-500',
      background: 'from-amber-50 via-yellow-50 to-amber-100',
      surface: 'from-white to-amber-50/50',
      text: 'amber-900',
      textSecondary: 'amber-700',
      border: 'amber-200/50',
      success: 'green-600',
      warning: 'amber-500',
      error: 'red-600',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-amber-500 to-yellow-600',
      secondary: 'bg-gradient-to-r from-yellow-300 to-amber-400',
      hero: 'bg-gradient-to-r from-amber-400 to-yellow-500',
      card: 'bg-gradient-to-br from-white to-amber-50/50',
    },
    icons: {
      primary: '🍯',
      cart: '🍯',
      category: '🏷️',
      feature1: '🐝',
      feature2: '🍯',
      feature3: '🚚',
    },
    product: {
      name: 'Honey',
      unit: '/jar',
      categories: ['Raw Honey', 'Wildflower', 'Acacia', 'Manuka', 'Organic'],
    },
  },
};

export const getTheme = (themeId: string): Theme => {
  return themes[themeId] || themes.mango;
};