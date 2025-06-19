'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Have questions about our mangos? Need help with your order? Our friendly customer service team is here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-orange-500" />,
                  title: 'Phone',
                  content: '+880 1234-567890',
                  subtitle: 'Mon-Fri 9AM-6PM'
                },
                {
                  icon: <Mail className="h-6 w-6 text-orange-500" />,
                  title: 'Email',
                  content: 'info@mangomarket.bd',
                  subtitle: 'We reply within 24 hours'
                },
                {
                  icon: <MapPin className="h-6 w-6 text-orange-500" />,
                  title: 'Address',
                  content: '123 Mango Street, Dhaka 1000',
                  subtitle: 'Bangladesh'
                },
                {
                  icon: <Clock className="h-6 w-6 text-orange-500" />,
                  title: 'Business Hours',
                  content: 'Monday - Friday: 9AM - 6PM',
                  subtitle: 'Saturday: 10AM - 4PM'
                }
              ].map((contact, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{contact.title}</h3>
                        <p className="text-gray-700 font-medium">{contact.content}</p>
                        <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How fresh are your mangos?',
                answer: 'Our mangos are harvested daily and delivered within 24-48 hours to ensure maximum freshness.'
              },
              {
                question: 'Do you deliver nationwide?',
                answer: 'Yes, we deliver across Bangladesh. Same-day delivery is available in Dhaka, Chittagong, and Sylhet.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bKash, Nagad, Rocket, and cash on delivery for your convenience.'
              },
              {
                question: 'Can I return mangos if not satisfied?',
                answer: 'Yes, we offer a 100% satisfaction guarantee. Contact us within 24 hours of delivery for returns.'
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-orange-200/50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}