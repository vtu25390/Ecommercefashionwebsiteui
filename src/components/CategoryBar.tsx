import { Sparkles, TrendingUp, Zap, Star } from 'lucide-react';

interface CategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryBar({ selectedCategory, onSelectCategory }: CategoryBarProps) {
  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Trending', icon: TrendingUp },
    { name: 'New Arrivals', icon: Zap },
    { name: 'Best Sellers', icon: Star },
  ];

  return (
    <section className="bg-white border-b border-gray-200 sticky top-[145px] z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => onSelectCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sort By:</span>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Customer Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
