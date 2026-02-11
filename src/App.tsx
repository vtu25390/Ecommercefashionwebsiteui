import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { CategoryBar } from './components/CategoryBar';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />
      <Hero />
      <Collections />
      <CategoryBar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <ProductGrid 
        onAddToCart={handleAddToCart} 
        selectedCategory={selectedCategory}
      />
      <Footer />
    </div>
  );
}