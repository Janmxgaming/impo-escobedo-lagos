import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DolphinLogo } from '../common/DolphinLogo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-blue-900 flex items-center">
              <DolphinLogo className="w-12 h-12 ring-1 ring-blue-300 rounded-full" />
            </div>
            <Link to="/">
              <div>
                <h1 className="text-xl font-bold text-blue-900">Impo Escobedo de Lagos</h1>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-blue-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};