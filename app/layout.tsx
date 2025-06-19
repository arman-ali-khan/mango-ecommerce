import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemedHeader from '@/components/ThemedHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HoneyMarket - Premium Natural Products',
  description: 'Fresh, premium quality natural products delivered directly from local producers to your doorstep',
  keywords: 'honey, mango, natural products, organic, fresh, online shopping, delivery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <ThemedHeader />
            <main>{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}