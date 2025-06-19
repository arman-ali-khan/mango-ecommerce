'use client';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-white to-yellow-50/30 border-orange-200/50 shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={item.product.image}
              alt={item.product.name}
              width={80}
              height={80}
              className="rounded-lg object-cover shadow-sm"
            />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                <p className="text-sm text-gray-600">৳{item.product.price}/kg</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="h-8 w-8 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="h-8 w-8 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="text-lg font-bold text-orange-600">
                ৳{(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}