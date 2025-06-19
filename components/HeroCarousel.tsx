'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { heroSlides } from '@/lib/data';
import { honeyHeroSlides } from '@/lib/honey-data';
import { Button } from '@/components/ui/button';

export default function HeroCarousel() {
  const { currentTheme, themeId } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = themeId === 'honey' ? honeyHeroSlides : heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="space-y-8">
      {/* Hero Text */}
      <div className="text-center">
        <h1 className={`text-4xl md:text-6xl font-bold text-${currentTheme.colors.text} mb-4`}>
          Premium <span className={`text-${currentTheme.colors.accent}`}>
            {themeId === 'honey' ? 'Natural' : 'Bangladeshi'}
          </span> {currentTheme.product.name}
        </h1>
        <p className={`text-xl text-${currentTheme.colors.textSecondary} mb-8 max-w-2xl mx-auto`}>
          {currentTheme.description}
        </p>
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className={`w-3 h-3 bg-${currentTheme.colors.success} rounded-full animate-pulse`} />
          <span className={`text-sm font-medium text-${currentTheme.colors.text}`}>
            Fresh {themeId === 'honey' ? 'harvest' : 'harvest'} available now
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4 max-w-2xl px-6">
                <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link href="#products">
                  <Button
                    size="lg"
                    className={`${currentTheme.gradients.primary} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 p-0"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12 p-0"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}