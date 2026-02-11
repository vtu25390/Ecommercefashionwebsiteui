import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              New Collection 2026
            </div>
            <h2 className="text-5xl font-bold leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our curated collection of premium fashion. From trendy casual wear to elegant formal attire, find everything you need to express your unique style.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollToCollections}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                View Collections
              </button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Brand Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Fashion Model"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}