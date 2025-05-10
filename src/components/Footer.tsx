
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gold/20">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link to="/" className="text-2xl font-playfair font-bold text-white inline-block mb-4">
              <span className="text-gold">LENS</span>CRAFT
            </Link>
            <p className="text-white/70 mb-6">
              Профессиональная фотография в различных жанрах. Создаем истории через объектив.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://facebook.com" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="https://pinterest.com" className="text-white/70 hover:text-gold transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/galleries" className="text-white/70 hover:text-gold transition-colors">Галереи</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold transition-colors">Обо мне</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-gold transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-gold transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-3 text-gold shrink-0 mt-1" size={18} />
                <span className="text-white/70">Москва, ул. Пушкина, д. 10, офис 5</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-3 text-gold shrink-0" size={18} />
                <span className="text-white/70">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-3 text-gold shrink-0" size={18} />
                <span className="text-white/70">info@lenscraft.com</span>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="mr-3 text-gold shrink-0" size={18} />
                <span className="text-white/70">Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-white mb-4">Подписка</h3>
            <p className="text-white/70 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости и специальные предложения.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-white/10 text-white border border-white/20 px-4 py-2 focus:outline-none focus:border-gold flex-grow"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-white px-4 py-2"
              >
                <Icon name="Send" size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LensCraft. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-gold text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-gold text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
