import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  tag: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'Summer Essentials',
    description: 'Light, breezy outfits perfect for warm weather',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80',
    itemCount: 156,
    tag: 'Trending'
  },
  {
    id: 2,
    title: 'Office Ready',
    description: 'Professional attire for the modern workplace',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    itemCount: 243,
    tag: 'Popular'
  },
  {
    id: 3,
    title: 'Athleisure',
    description: 'Comfort meets style in activewear',
    image: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=800&q=80',
    itemCount: 189,
    tag: 'New'
  },
  {
    id: 4,
    title: 'Evening Elegance',
    description: 'Sophisticated looks for special occasions',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    itemCount: 124,
    tag: 'Premium'
  },
  {
    id: 5,
    title: 'Street Style',
    description: 'Urban fashion with an edge',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    itemCount: 267,
    tag: 'Trending'
  },
  {
    id: 6,
    title: 'Winter Warmth',
    description: 'Cozy layers for cold weather',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    itemCount: 198,
    tag: 'Seasonal'
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked collections designed to match every style, season, and occasion
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Tag */}
                <div className="inline-block self-start mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium">
                    {collection.tag}
                  </span>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {collection.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">
                    {collection.itemCount} items
                  </span>
                  <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
