'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Plus, Minus, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import ProductQuickView from './ProductQuickView';

interface ThemedProductCardProps {
  product: Product;
}

export default function ThemedProductCard({ product }: ThemedProductCardProps) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const { currentTheme } = useTheme();
  const [showQuickView, setShowQuickView] = useState(false);
  
  const cartItem = cart.items.find(item => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'premium':
      case 'raw honey':
        return `${currentTheme.gradients.primary} text-white`;
      case 'local':
      case 'wildflower':
        return 'bg-gradient-to-r from-green-400 to-green-500 text-white';
      case 'classic':
      case 'acacia':
        return 'bg-gradient-to-r from-blue-400 to-blue-500 text-white';
      case 'family':
      case 'organic':
        return 'bg-gradient-to-r from-purple-400 to-purple-500 text-white';
      case 'hybrid':
      case 'manuka':
        return 'bg-gradient-to-r from-pink-400 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  return (
    <>
      <Card className={`group overflow-hidden border-0 ${currentTheme.gradients.card} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}>
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className={`absolute top-3 left-3 ${getCategoryColor(product.category)} border-0 shadow-lg`}>
            {product.category}
          </Badge>
          {product.inStock && (
            <div className={`absolute top-3 right-3 w-3 h-3 bg-${currentTheme.colors.success} rounded-full shadow-lg animate-pulse`} />
          )}
          
          {/* Quick View Button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-800"
            onClick={() => setShowQuickView(true)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <Link href={`/product/${product.id}`}>
                <h3 className={`text-xl font-bold text-${currentTheme.colors.text} group-hover:text-${currentTheme.colors.accent} transition-colors cursor-pointer`}>
                  {product.name}
                </h3>
              </Link>
              <p className={`text-${currentTheme.colors.textSecondary} text-sm mt-1 line-clamp-2`}>
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className={`text-sm text-${currentTheme.colors.textSecondary} ml-2`}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className={`text-2xl font-bold text-${currentTheme.colors.accent}`}>
                ৳{product.price}
                <span className={`text-sm text-${currentTheme.colors.textSecondary} font-normal ml-1`}>
                  {currentTheme.product.unit}
                </span>
              </div>
              
              {quantity > 0 ? (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className={`h-8 w-8 p-0 rounded-full border-${currentTheme.colors.border} hover:bg-orange-50`}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className={`w-8 text-center font-bold text-${currentTheme.colors.accent}`}>{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className={`h-8 w-8 p-0 rounded-full border-${currentTheme.colors.border} hover:bg-orange-50`}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  className={`${currentTheme.gradients.primary} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProductQuickView 
        product={product} 
        isOpen={showQuickView} 
        onClose={() => setShowQuickView(false)} 
      />
    </>
  );
}