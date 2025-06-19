'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { mangos } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import CategorySidebar from '@/components/CategorySidebar';
import HeroCarousel from '@/components/HeroCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Pagination from '@/components/Pagination';
import FixedCartButton from '@/components/FixedCartButton';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedMangos = mangos
    .filter(mango => 
      mango.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === 'all' || mango.category.toLowerCase() === filterCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const totalPages = Math.ceil(filteredAndSortedMangos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMangos = filteredAndSortedMangos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left side - Categories */}
            <div className="lg:col-span-1">
              <CategorySidebar 
                selectedCategory={filterCategory} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>
            
            {/* Right side - Hero Carousel */}
            <div className="lg:col-span-3">             
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories (Hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block">
            <CategorySidebar 
              selectedCategory={filterCategory} 
              onCategoryChange={handleCategoryChange} 
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/50">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search mangos..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-10 border-orange-200 focus:border-orange-400 bg-white/80"
                  />
                </div>
                
                <div className="flex gap-3">
                  {/* Mobile Category Filter */}
                  <div className="lg:hidden">
                    <Select value={filterCategory} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="w-40 border-orange-200 focus:border-orange-400 bg-white/80">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="local">Local</SelectItem>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40 border-orange-200 focus:border-orange-400 bg-white/80">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedMangos.map((mango) => (
                <ProductCard key={mango.id} product={mango} />
              ))}
            </div>

            {paginatedMangos.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🥭</div>
                <p className="text-gray-600 text-lg mb-4">No mangos found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('all');
                    setSortBy('name');
                    setCurrentPage(1);
                  }}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose MangoMarket?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Farm Fresh',
                description: 'Directly sourced from local orchards',
                icon: '🌱'
              },
              {
                title: 'Quality Guaranteed',
                description: 'Hand-picked premium mangos',
                icon: '🥭'
              },
              {
                title: 'Fast Delivery',
                description: 'Same-day delivery in major cities',
                icon: '🚚'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Fixed Cart Button */}
      <FixedCartButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}