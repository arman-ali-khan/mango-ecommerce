'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { paymentMethods } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('bkash');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentNumber: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setOrderPlaced(true);
    clearCart();
    setIsProcessing(false);

    // Redirect to success page after a delay
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  if (cart.items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No items to checkout</h2>
            <p className="text-gray-600 mb-6">Add some mangos to your cart first!</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-6">Your delicious mangos are being prepared for delivery.</p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedPayment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/cart">
            <Button variant="ghost" className="hover:bg-orange-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-yellow-50 border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-yellow-50 border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center space-x-3 p-3 rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex items-center space-x-3 cursor-pointer flex-1">
                        <span className="text-2xl">{method.logo}</span>
                        <span className="font-medium">{method.name}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {selectedPaymentMethod && (
                  <div className="mt-4">
                    <Label htmlFor="paymentNumber">{selectedPaymentMethod.name} Number</Label>
                    <Input
                      id="paymentNumber"
                      name="paymentNumber"
                      value={formData.paymentNumber}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${selectedPaymentMethod.name} number`}
                      required
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-white to-yellow-50 border-orange-200 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.product.name} x {item.quantity}</span>
                      <span>৳{(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <hr className="border-orange-200" />
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>৳{cart.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr className="border-orange-200" />
                  <div className="flex justify-between text-lg font-bold text-orange-600">
                    <span>Total</span>
                    <span>৳{cart.total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {isProcessing ? 'Processing...' : `Pay ৳${cart.total.toFixed(2)}`}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}