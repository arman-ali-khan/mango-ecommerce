import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Terms and Conditions of Use</CardTitle>
              <p className="text-gray-600">Last updated: January 1, 2024</p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using MangoMarket's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">2. Product Information</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>
                      We strive to provide accurate product descriptions, images, and pricing information. However:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Product images are for illustration purposes and may vary from actual products</li>
                      <li>We reserve the right to correct any errors in product information or pricing</li>
                      <li>All mangos are natural products and may vary in size, color, and taste</li>
                      <li>Seasonal availability may affect product selection</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">3. Ordering and Payment</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>
                      When you place an order with us:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You must provide accurate and complete information</li>
                      <li>Payment must be made through our accepted payment methods (bKash, Nagad, Rocket)</li>
                      <li>Orders are subject to availability and confirmation</li>
                      <li>We reserve the right to refuse or cancel orders at our discretion</li>
                      <li>Prices are subject to change without notice</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">4. Delivery Terms</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>
                      Our delivery policy includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Same-day delivery available in Dhaka, Chittagong, and Sylhet</li>
                      <li>Nationwide delivery within 2-3 business days</li>
                      <li>Delivery times are estimates and may vary due to weather or other factors</li>
                      <li>You must be available to receive delivery at the specified address</li>
                      <li>Risk of loss passes to you upon delivery</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">5. Quality Guarantee and Returns</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>
                      We stand behind the quality of our products:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All mangos are quality-checked before delivery</li>
                      <li>If you're not satisfied, contact us within 24 hours of delivery</li>
                      <li>Returns or replacements are subject to our quality assessment</li>
                      <li>Refunds will be processed within 7-10 business days</li>
                      <li>Perishable items cannot be returned after 24 hours</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">6. User Responsibilities</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>
                      As a user of our service, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate contact and delivery information</li>
                      <li>Use the website for lawful purposes only</li>
                      <li>Not interfere with the proper functioning of the website</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not engage in fraudulent activities</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">7. Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your privacy is important to us. We collect and use your personal information only as described in our Privacy Policy. By using our services, you consent to the collection and use of your information as outlined in our privacy practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    MangoMarket shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-700">
                      <strong>MangoMarket</strong><br />
                      Email: info@mangomarket.bd<br />
                      Phone: +880 1234-567890<br />
                      Address: 123 Mango Street, Dhaka 1000, Bangladesh
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}