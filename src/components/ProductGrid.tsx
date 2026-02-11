import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onAddToCart: () => void;
  selectedCategory: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    brand: 'Urban Style',
    price: 599,
    originalPrice: 1299,
    discount: 54,
    rating: 4.5,
    reviews: 2340,
    image: 'https://images.unsplash.com/photo-1688111421202-bda886f5e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzcwNzkyNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Classic Denim Jeans',
    brand: 'Denim Co.',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.3,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1609831190577-04538764f438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlbmltJTIwamVhbnN8ZW58MXx8fHwxNzcwNzkyNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Best Sellers',
  },
  {
    id: 3,
    name: 'Leather Biker Jacket',
    brand: 'Luxe Leather',
    price: 3999,
    originalPrice: 7999,
    discount: 50,
    rating: 4.7,
    reviews: 945,
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzA3NDc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
    badge: 'Premium'
  },
  {
    id: 4,
    name: 'Floral Summer Dress',
    brand: 'Blossom',
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.6,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1564801586444-f08648006f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzcyUyMGZsb3JhbHxlbnwxfHx8fDE3NzA3MTQyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'New'
  },
  {
    id: 5,
    name: 'Classic White Sneakers',
    brand: 'SneakerHub',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.4,
    reviews: 5234,
    image: 'https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHdoaXRlJTIwc2hvZXN8ZW58MXx8fHwxNzcwNzI2ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Best Sellers',
    badge: 'Bestseller'
  },
  {
    id: 6,
    name: 'Cozy Knit Sweater',
    brand: 'Comfort Wear',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1760552069049-600f71fa5bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3ZWF0ZXIlMjBjb3p5fGVufDF8fHx8MTc3MDc5MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
  },
  {
    id: 7,
    name: 'Formal Blazer',
    brand: 'Executive',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.6,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1682752024470-f9925c1ba39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBibGF6ZXIlMjBqYWNrZXR8ZW58MXx8fHwxNzcwNzgyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'New'
  },
  {
    id: 8,
    name: 'Summer Casual Shorts',
    brand: 'Beach Vibes',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    rating: 4.2,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1563884870649-b696c3bf12e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaG9ydHMlMjBzdW1tZXJ8ZW58MXx8fHwxNzcwNzkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Best Sellers',
  },
];

export function ProductGrid({ onAddToCart, selectedCategory }: ProductGridProps) {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h3>
          <span className="text-gray-600">
            {filteredProducts.length} items
          </span>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
