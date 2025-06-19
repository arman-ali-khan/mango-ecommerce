'use client';

import Link from 'next/link';
import { categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CategorySidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategorySidebar({ selectedCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-orange-200/50 shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 flex items-center space-x-2">
          <span>🏷️</span>
          <span>Categories</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.id}`}>
              <Button
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={`w-full justify-start text-left h-auto p-3 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                    : 'hover:bg-orange-50 text-gray-700'
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
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </Button>
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}