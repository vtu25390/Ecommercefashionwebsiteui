import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist();
          }}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all ${
            isWishlisted ? 'bg-pink-600' : 'bg-white'
          }`}
        >
          <Heart 
            className={`w-5 h-5 ${isWishlisted ? 'fill-white text-white' : 'text-gray-600'}`}
          />
        </button>
        
        {/* Special Badge */}
        {product.badge && (
          <div className="absolute top-16 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </div>
        )}
        
        {/* Quick Actions */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white p-3 transform transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div className="text-sm text-gray-500 font-medium">{product.brand}</div>
        <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-medium">
            {product.rating}
            <Star className="w-3 h-3 fill-white" />
          </div>
          <span className="text-xs text-gray-500">({product.reviews.toLocaleString()})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
}