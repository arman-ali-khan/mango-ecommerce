'use client';

import Link from 'next/link';
import { ShoppingCart, Leaf, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 backdrop-blur-md border-b border-orange-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">MangoMarket</h1>
              <p className="text-xs text-orange-100 -mt-1">Sweet & Fresh</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-orange-100 transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-orange-100 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-100 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/20"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <Link href="/cart">
            <Button 
              variant="secondary" 
              className="relative bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cart.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce">
                  {cart.itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-orange-100 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-orange-100 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-orange-100 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}