'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/lib/themes';
import { mangos } from '@/lib/data';
import { honeyProducts } from '@/lib/honey-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Palette, Package, Users, BarChart3, Eye, Edit, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const { currentTheme, themeId, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const currentProducts = themeId === 'honey' ? honeyProducts : mangos;
  const totalProducts = currentProducts.length;
  const totalOrders = 156; // Mock data
  const totalCustomers = 89; // Mock data
  const totalRevenue = 45600; // Mock data

  const handleThemeChange = (newThemeId: string) => {
    setTheme(newThemeId);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.colors.background}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-3xl font-bold text-${currentTheme.colors.text}`}>
              Admin Dashboard
            </h1>
            <p className={`text-${currentTheme.colors.textSecondary} mt-2`}>
              Manage your {currentTheme.name} store
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className={`${currentTheme.gradients.primary} text-white`}>
              {currentTheme.name}
            </Badge>
            <Button
              variant="outline"
              className={`border-${currentTheme.colors.border} text-${currentTheme.colors.text}`}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Store
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Products', value: totalProducts, icon: Package, color: 'blue' },
            { title: 'Total Orders', value: totalOrders, icon: BarChart3, color: 'green' },
            { title: 'Customers', value: totalCustomers, icon: Users, color: 'purple' },
            { title: 'Revenue', value: `৳${totalRevenue}`, icon: BarChart3, color: 'orange' },
          ].map((stat, index) => (
            <Card key={index} className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm text-${currentTheme.colors.textSecondary}`}>{stat.title}</p>
                    <p className={`text-2xl font-bold text-${currentTheme.colors.text}`}>{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 text-${currentTheme.colors.accent}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
                <CardHeader>
                  <CardTitle className={`text-${currentTheme.colors.text}`}>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                        <div>
                          <p className={`font-medium text-${currentTheme.colors.text}`}>Order #{1000 + order}</p>
                          <p className={`text-sm text-${currentTheme.colors.textSecondary}`}>Customer {order}</p>
                        </div>
                        <Badge className={`${currentTheme.gradients.primary} text-white`}>
                          ৳{(order * 450).toFixed(2)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
                <CardHeader>
                  <CardTitle className={`text-${currentTheme.colors.text}`}>Top Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{currentTheme.icons.primary}</span>
                          <div>
                            <p className={`font-medium text-${currentTheme.colors.text}`}>{product.name}</p>
                            <p className={`text-sm text-${currentTheme.colors.textSecondary}`}>
                              ৳{product.price}{currentTheme.product.unit}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline">
                          {product.reviews} reviews
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className={`text-${currentTheme.colors.text}`}>Product Management</CardTitle>
                  <Button className={`${currentTheme.gradients.primary} text-white`}>
                    Add New Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentProducts.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{currentTheme.icons.primary}</span>
                        <div>
                          <h3 className={`font-semibold text-${currentTheme.colors.text}`}>{product.name}</h3>
                          <p className={`text-sm text-${currentTheme.colors.textSecondary}`}>
                            ৳{product.price}{currentTheme.product.unit} • {product.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="themes" className="space-y-6">
            <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
              <CardHeader>
                <CardTitle className={`text-${currentTheme.colors.text}`}>Theme Management</CardTitle>
                <p className={`text-${currentTheme.colors.textSecondary}`}>
                  Switch between different store themes and customize your brand
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.values(themes).map((theme) => (
                    <Card 
                      key={theme.id} 
                      className={`cursor-pointer transition-all duration-300 ${
                        themeId === theme.id 
                          ? `ring-2 ring-${currentTheme.colors.accent} ${currentTheme.gradients.card}` 
                          : 'bg-white hover:shadow-lg'
                      }`}
                      onClick={() => handleThemeChange(theme.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{theme.icons.primary}</span>
                            <div>
                              <h3 className="font-semibold text-gray-800">{theme.name}</h3>
                              <p className="text-sm text-gray-600">{theme.description}</p>
                            </div>
                          </div>
                          {themeId === theme.id && (
                            <Badge className={`${currentTheme.gradients.primary} text-white`}>
                              Active
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.colors.primary}`}></div>
                            <span className="text-sm text-gray-600">Primary Colors</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{theme.icons.cart}</span>
                            <span className="text-sm text-gray-600">Cart Icon</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Product: {theme.product.name}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className={`${currentTheme.gradients.card} border-${currentTheme.colors.border} shadow-lg`}>
              <CardHeader>
                <CardTitle className={`text-${currentTheme.colors.text}`}>Store Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input 
                        id="storeName" 
                        defaultValue={currentTheme.name}
                        className={`border-${currentTheme.colors.border}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="storeDescription">Store Description</Label>
                      <Textarea 
                        id="storeDescription" 
                        defaultValue={currentTheme.description}
                        className={`border-${currentTheme.colors.border}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="bdt">
                        <SelectTrigger className={`border-${currentTheme.colors.border}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bdt">Bangladeshi Taka (৳)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                          <SelectItem value="eur">Euro (€)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input 
                        id="contactEmail" 
                        type="email"
                        defaultValue="info@honeymarket.bd"
                        className={`border-${currentTheme.colors.border}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input 
                        id="contactPhone" 
                        defaultValue="+880 1234-567890"
                        className={`border-${currentTheme.colors.border}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Store Address</Label>
                      <Textarea 
                        id="address" 
                        defaultValue="123 Honey Street, Dhaka 1000, Bangladesh"
                        className={`border-${currentTheme.colors.border}`}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <Button className={`${currentTheme.gradients.primary} text-white`}>
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}