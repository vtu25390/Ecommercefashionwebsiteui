import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              LUXE FASHION
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Your one-stop destination for premium fashion and lifestyle products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Online Shopping */}
          <div>
            <h4 className="font-bold text-white mb-4">Online Shopping</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Kids</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home & Living</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Beauty</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Policies */}
          <div>
            <h4 className="font-bold text-white mb-4">Customer Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Track Orders</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cancellation</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Site Map</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Corporate Information</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Whitehat</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cleartrip</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg hover:shadow-lg transition-shadow">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Payment & Guarantee */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div>
                <h5 className="text-xs font-bold text-gray-400 mb-2">100% SECURE PAYMENTS</h5>
                <div className="flex gap-2">
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">Visa</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">Mastercard</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">PayPal</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">UPI</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2026 LUXE FASHION. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
