'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { mangos, reviews } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = mangos.find(m => m.id === productId);
  const productReviews = reviews.filter(r => r.productId === productId);
  
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const cartItem = cart.items.find(item => item.product.id === productId);
  const quantity = cartItem?.quantity || 0;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/">
            <Button variant="ghost" className="hover:bg-orange-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <Badge className={`absolute top-6 left-6 ${getCategoryColor(product.category)} border-0 shadow-lg text-lg px-4 py-2`}>
                {product.category}
              </Badge>
              {product.inStock && (
                <div className="absolute top-6 right-6 flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-medium">In Stock</span>
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex space-x-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                      selectedImage === index ? 'border-orange-400 scale-105' : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-5xl font-bold text-orange-600">
              ৳{product.price}
              <span className="text-2xl text-gray-500 font-normal ml-2">/kg</span>
            </div>

            {product.features && (
              <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-orange-200/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <span className="text-orange-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-2 gap-6">
              {product.origin && (
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-1">Origin</h4>
                  <p className="text-gray-600">{product.origin}</p>
                </div>
              )}
              {product.weight && (
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-1">Weight</h4>
                  <p className="text-gray-600">{product.weight}</p>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {quantity > 0 ? (
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="h-12 w-12 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  <span className="w-16 text-center font-bold text-2xl text-orange-600">{quantity}</span>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-12 w-12 p-0 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              )}
              
              <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
              
              <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {productReviews.length > 0 && (
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-white to-yellow-50/50 border-orange-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {productReviews.map((review) => (
                  <div key={review.id} className="border-b border-orange-200/50 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-800">{review.userName}</h4>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">Verified Purchase</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}