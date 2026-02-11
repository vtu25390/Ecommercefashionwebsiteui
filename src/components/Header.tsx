import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LUXE FASHION
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <User className="w-6 h-6" />
              <span className="text-sm font-medium">Profile</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-purple-600 transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-purple-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-sm font-medium">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 mt-4 pt-4 border-t border-gray-100">
          <a href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">Men</a>
          <a href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">Women</a>
          <a href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">Kids</a>
          <a href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">Home & Living</a>
          <a href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">Beauty</a>
          <a href="#" className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors">Studio</a>
        </nav>
      </div>
    </header>
  );
}
