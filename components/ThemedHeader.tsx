'use client';

import Link from 'next/link';
import { ShoppingCart, Leaf, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ThemedHeader() {
  const { cart } = useCart();
  const { currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 ${currentTheme.gradients.hero} backdrop-blur-md border-b border-${currentTheme.colors.border}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {currentTheme.icons.primary}
              </span>
              <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${currentTheme.colors.accent} rounded-full animate-pulse`}></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">{currentTheme.name}</h1>
              <p className="text-xs text-orange-100 -mt-1">{currentTheme.description.split(',')[0]}</p>
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
            <Link href="/admin" className="text-white hover:text-orange-100 transition-colors font-medium">
              Admin
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
              <span className="text-xl mr-2">{currentTheme.icons.cart}</span>
              Cart
              {cart.itemCount > 0 && (
                <span className={`absolute -top-2 -right-2 bg-${currentTheme.colors.accent} text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce`}>
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
              <Link 
                href="/admin" 
                className="text-white hover:text-orange-100 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}