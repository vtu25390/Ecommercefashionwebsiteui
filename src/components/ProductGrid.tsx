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
  {
    id: 9,
    name: 'Urban Hoodie',
    brand: 'StreetWear Co.',
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.7,
    reviews: 2890,
    image: 'https://images.unsplash.com/photo-1557851114-3f672a50722a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBob29kaWUlMjBzd2VhdHNoaXJ0fGVufDF8fHx8MTc3MDc4Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
    badge: 'Bestseller'
  },
  {
    id: 10,
    name: 'Designer Handbag',
    brand: 'Eleganza',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    rating: 4.8,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1761646238279-30de81702a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGFuZGJhZyUyMHB1cnNlfGVufDF8fHx8MTc3MDc0MTU1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'Premium'
  },
  {
    id: 11,
    name: 'Stylish Sunglasses',
    brand: 'VisionPro',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.4,
    reviews: 3210,
    image: 'https://images.unsplash.com/photo-1764333327297-0ebfd9fda541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzA3NzkxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
  },
  {
    id: 12,
    name: 'Winter Parka Coat',
    brand: 'Arctic Wear',
    price: 4499,
    originalPrice: 8999,
    discount: 50,
    rating: 4.6,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1760533091973-1262bf57d244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb2F0JTIwamFja2V0fGVufDF8fHx8MTc3MDc5OTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'New'
  },
  {
    id: 13,
    name: 'Athletic Running Shoes',
    brand: 'SpeedMax',
    price: 2299,
    originalPrice: 4599,
    discount: 50,
    rating: 4.5,
    reviews: 4123,
    image: 'https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzA3MjcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Best Sellers',
    badge: 'Bestseller'
  },
  {
    id: 14,
    name: 'Premium Formal Shirt',
    brand: 'Executive Style',
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.3,
    reviews: 1678,
    image: 'https://images.unsplash.com/photo-1760545183001-af3b64500b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBzaGlydCUyMGJ1dHRvbnxlbnwxfHx8fDE3NzA3OTkwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
  },
  {
    id: 15,
    name: 'Leather Ankle Boots',
    brand: 'Footwear Elite',
    price: 2799,
    originalPrice: 5599,
    discount: 50,
    rating: 4.7,
    reviews: 2345,
    image: 'https://images.unsplash.com/photo-1552256028-71eb9a7ff27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJvb3RzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NzA3OTkwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Best Sellers',
    badge: 'Bestseller'
  },
  {
    id: 16,
    name: 'Soft Knit Cardigan',
    brand: 'CozyKnits',
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    rating: 4.6,
    reviews: 1890,
    image: 'https://images.unsplash.com/photo-1758981400268-1181291b9503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWdhbiUyMHN3ZWF0ZXIlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDc5ODMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'New'
  },
  {
    id: 17,
    name: 'High-Waist Yoga Pants',
    brand: 'ActiveFit',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.5,
    reviews: 3567,
    image: 'https://images.unsplash.com/photo-1603920346280-75b4832fb6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcGFudHMlMjBhY3RpdmV3ZWFyfGVufDF8fHx8MTc3MDc5OTAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
    badge: 'Bestseller'
  },
  {
    id: 18,
    name: 'Luxury Smart Watch',
    brand: 'TimeElite',
    price: 3499,
    originalPrice: 6999,
    discount: 50,
    rating: 4.8,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzA3OTkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'New Arrivals',
    badge: 'Premium'
  },
  {
    id: 19,
    name: 'Streetwear Cap',
    brand: 'Urban Caps',
    price: 499,
    originalPrice: 999,
    discount: 50,
    rating: 4.3,
    reviews: 2789,
    image: 'https://images.unsplash.com/photo-1527813972756-2890936000e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXAlMjBoYXQlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3MDc5OTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Trending',
  },
  {
    id: 20,
    name: 'Travel Backpack',
    brand: 'AdventurePack',
    price: 1799,
    originalPrice: 3599,
    discount: 50,
    rating: 4.7,
    reviews: 1987,
    image: 'https://images.unsplash.com/photo-1612979022617-b498c5ffbe6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBiYWd8ZW58MXx8fHwxNzcwNzk5MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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