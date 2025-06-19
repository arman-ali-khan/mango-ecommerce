'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { mangos, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import CategorySidebar from '@/components/CategorySidebar';
import Pagination from '@/components/Pagination';
import FixedCartButton from '@/components/FixedCartButton';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ITEMS_PER_PAGE = 8;

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);

  const category = categories.find(cat => cat.id === categorySlug);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const filteredAndSortedMangos = mangos
    .filter(mango => 
      (categorySlug === 'all' || mango.category.toLowerCase() === categorySlug) &&
      mango.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (newCategory: string) => {
    // This will be handled by the Link navigation in CategorySidebar
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center text-white">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              {categorySlug === 'all' 
                ? 'Discover our complete collection of premium mangos'
                : `Explore our finest ${category.name.toLowerCase()} mangos`
              }
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-medium">{filteredAndSortedMangos.length} products available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <CategorySidebar 
              selectedCategory={categorySlug} 
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

      {/* Fixed Cart Button */}
      <FixedCartButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}