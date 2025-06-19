'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { categories } from '@/lib/data';
import { honeyCategories } from '@/lib/honey-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HomeCategorySidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function HomeCategorySidebar({ selectedCategory, onCategoryChange }: HomeCategorySidebarProps) {
  const { currentTheme, themeId } = useTheme();
  const categoryList = themeId === 'honey' ? honeyCategories : categories;

  return (
    <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg sticky top-24`}>
      <CardHeader>
        <CardTitle className={`text-xl text-${currentTheme.colors.text} flex items-center space-x-2`}>
          <span>{currentTheme.icons.category}</span>
          <span>Categories</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categoryList.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className={`w-full justify-start text-left h-auto p-3 ${
              selectedCategory === category.id
                ? `${currentTheme.gradients.primary} text-white shadow-lg`
                : `hover:bg-${currentTheme.colors.accent}/10 text-${currentTheme.colors.text}`
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : `bg-${currentTheme.colors.accent}/10 text-${currentTheme.colors.accent}`
              }`}>
                {category.count}
              </span>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}