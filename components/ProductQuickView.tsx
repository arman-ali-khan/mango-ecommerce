'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Minus, X } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  
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
        return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white';
      case 'local':
        return 'bg-gradient-to-r from-green-400 to-green-500 text-white';
      case 'classic':
        return 'bg-gradient-to-r from-orange-400 to-red-400 text-white';
      case 'family':
        return 'bg-gradient-to-r from-blue-400 to-purple-400 text-white';
      case 'hybrid':
        return 'bg-gradient-to-r from-pink-400 to-purple-400 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  const images = product.images || [product.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-yellow-50 to-orange-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Quick View</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <Badge className={`absolute top-4 left-4 ${getCategoryColor(product.category)} border-0 shadow-lg`}>
                {product.category}
              </Badge>
              {product.inStock && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse" />
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-orange-400' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-4xl font-bold text-orange-600">
              ৳{product.price}
              <span className="text-lg text-gray-500 font-normal ml-2">/kg</span>
            </div>

            {product.features && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm">
              {product.origin && (
                <div>
                  <span className="font-semibold text-gray-800">Origin:</span>
                  <p className="text-gray-600">{product.origin}</p>
                </div>
              )}
              {product.weight && (
                <div>
                  <span className="font-semibold text-gray-800">Weight:</span>
                  <p className="text-gray-600">{product.weight}</p>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {quantity > 0 ? (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="h-10 w-10 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-bold text-xl text-orange-600">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-10 w-10 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}