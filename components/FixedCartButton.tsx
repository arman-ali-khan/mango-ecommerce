'use client';

import { useState } from 'react';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function FixedCartButton() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="relative h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          >
            <div className="relative">
              <div className="text-2xl">🥭</div>
              {cart.itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center animate-bounce">
                  {cart.itemCount}
                </Badge>
              )}
            </div>
          </Button>
        </SheetTrigger>
        
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-yellow-50 to-orange-50">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2 text-2xl text-gray-800">
              <span className="text-2xl">🥭</span>
              <span>Your Cart</span>
              {cart.itemCount > 0 && (
                <Badge className="bg-orange-500 text-white">
                  {cart.itemCount} items
                </Badge>
              )}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex-1 h-full overflow-y-auto">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🥭</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some delicious mangos to get started!</p>
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">{item.product.name}</h4>
                            <p className="text-orange-600 font-bold">৳{item.product.price}/kg</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full h-8 w-8 p-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                              className="h-7 w-7 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                              className="h-7 w-7 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="font-bold text-orange-600">
                            ৳{(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-orange-200 pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-orange-600">৳{cart.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-3 mb-12">
                    <Link href="/cart" className="block">
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        View Full Cart
                      </Button>
                    </Link>
                    <Link href="/checkout" className="block">
                      <Button 
                        variant="outline"
                        className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Quick Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}