import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Truck, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About MangoMarket</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Your trusted partner for premium Bangladeshi mangos since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MangoMarket was born from a simple passion: bringing the finest Bangladeshi mangos directly from our orchards to your table. Founded in 2020 by a group of mango enthusiasts, we recognized the need for a reliable source of premium quality mangos in Bangladesh.
                </p>
                <p>
                  What started as a small family business has grown into Bangladesh's most trusted online mango marketplace. We work directly with local farmers and orchard owners to ensure that every mango meets our strict quality standards.
                </p>
                <p>
                  Our commitment to freshness, quality, and customer satisfaction has made us the preferred choice for mango lovers across the country. From the royal Alphonso to the aromatic Himsagar, we bring you the very best that Bangladesh's mango orchards have to offer.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh mangos"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-orange-500" />,
                title: 'Quality First',
                description: 'Every mango is hand-picked and quality-checked before delivery'
              },
              {
                icon: <Users className="h-8 w-8 text-orange-500" />,
                title: 'Supporting Farmers',
                description: 'We work directly with local farmers to ensure fair prices'
              },
              {
                icon: <Truck className="h-8 w-8 text-orange-500" />,
                title: 'Fast Delivery',
                description: 'Same-day delivery in major cities, nationwide shipping available'
              },
              {
                icon: <Heart className="h-8 w-8 text-orange-500" />,
                title: 'Customer Love',
                description: 'Your satisfaction is our top priority, always'
              }
            ].map((value, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">From Orchard to Your Door</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Careful Selection',
                description: 'Our experts visit orchards daily to select the ripest, highest quality mangos',
                image: 'https://images.pexels.com/photos/5966625/pexels-photo-5966625.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                step: '02',
                title: 'Quality Control',
                description: 'Each mango undergoes rigorous quality checks before packaging',
                image: 'https://images.pexels.com/photos/4051880/pexels-photo-4051880.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                step: '03',
                title: 'Fresh Delivery',
                description: 'Carefully packaged and delivered fresh to your doorstep within hours',
                image: 'https://images.pexels.com/photos/5966632/pexels-photo-5966632.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((process, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={process.image}
                      alt={process.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Taste the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MangoMarket for their premium mango needs.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Shop Now
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}