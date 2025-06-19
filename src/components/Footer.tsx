import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-text-muted-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SCUDERIA FERRARI</h3>
            <p className="text-sm">The official online store for fans of the most successful team in F1 history.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-red transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">Kids</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">Collectibles</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-red transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-accent-red transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-accent-red transition-colors"><Youtube /></a>
              <a href="#" className="hover:text-accent-red transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Ferrari S.p.A. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}