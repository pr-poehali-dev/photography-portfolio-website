
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-playfair font-bold text-white hover:text-gold transition-colors">
          <span className="text-gold">LENS</span>CRAFT
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-white hover:text-gold transition-colors">Главная</Link>
          <Link to="/galleries" className="nav-link text-white hover:text-gold transition-colors">Галереи</Link>
          <Link to="/about" className="nav-link text-white hover:text-gold transition-colors">Обо мне</Link>
          <Link to="/services" className="nav-link text-white hover:text-gold transition-colors">Услуги</Link>
          <Link to="/blog" className="nav-link text-white hover:text-gold transition-colors">Блог</Link>
          <Link to="/contact" className="nav-link text-white hover:text-gold transition-colors">Контакты</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/galleries" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Галереи
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Обо мне
          </Link>
          <Link 
            to="/services" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Услуги
          </Link>
          <Link 
            to="/blog" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Блог
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-gold py-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
