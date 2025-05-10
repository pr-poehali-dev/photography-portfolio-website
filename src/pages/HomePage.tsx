
import { useEffect } from 'react';
import HeroSlider from '@/components/HeroSlider';
import FeaturedGallery from '@/components/FeaturedGallery';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Setup appear animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.appear-animation').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.appear-animation').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSlider />
        
        {/* Introduction Section */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 appear-animation">
                <img 
                  src="https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Photographer at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2 appear-animation">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                  Искусство <span className="text-gold">фотографии</span>
                </h2>
                <div className="w-16 h-0.5 bg-gold mb-6"></div>
                <p className="text-white/70 mb-6">
                  Более 10 лет я создаю визуальные истории, которые останавливают время и запечатлевают 
                  эмоции. Каждая фотография — это тщательно продуманная композиция, освещение и момент.
                </p>
                <p className="text-white/70 mb-8">
                  Мой подход сочетает художественное видение с техническим мастерством, 
                  чтобы создавать изображения, которые не просто документируют, а рассказывают истории, 
                  пробуждают чувства и сохраняют драгоценные моменты на всю жизнь.
                </p>
                <a 
                  href="/about" 
                  className="inline-block border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-8 py-3"
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Gallery Section */}
        <FeaturedGallery />
        
        {/* Services Overview */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 appear-animation">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Наши <span className="text-gold">Услуги</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
              <p className="text-white/70 max-w-2xl mx-auto">
                Предлагаем широкий спектр фотографических услуг, адаптированных под ваши потребности.
                От портретов до коммерческой фотографии.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-black/30 border border-white/10 p-8 hover:border-gold/50 transition-all duration-300 appear-animation">
                <div className="text-gold mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H15.01M7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3ZM7 15L10 12M13 15L17 11M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-4">Портретная съёмка</h3>
                <p className="text-white/70 mb-6">
                  Индивидуальные и семейные портреты, которые отражают вашу уникальную индивидуальность 
                  и передают настоящие эмоции.
                </p>
                <a href="/services" className="text-gold hover:text-white transition-colors">
                  Подробнее →
                </a>
              </div>
              
              {/* Service 2 */}
              <div className="bg-black/30 border border-white/10 p-8 hover:border-gold/50 transition-all duration-300 appear-animation">
                <div className="text-gold mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.06 6.9C3.16 6.48 3.54 6.19 3.97 6.19H16.03C16.46 6.19 16.84 6.48 16.94 6.9L17.62 9.62M17.62 9.62H3.47M17.62 9.62H19.53C19.82 9.62 20.04 9.9 19.97 10.18L18.97 15.18C18.92 15.39 18.73 15.54 18.53 15.54H4.5M6.5 19.15C6.5 19.7 6.05 20.15 5.5 20.15C4.95 20.15 4.5 19.7 4.5 19.15C4.5 18.6 4.95 18.15 5.5 18.15C6.05 18.15 6.5 18.6 6.5 19.15ZM17.5 19.15C17.5 19.7 17.05 20.15 16.5 20.15C15.95 20.15 15.5 19.7 15.5 19.15C15.5 18.6 15.95 18.15 16.5 18.15C17.05 18.15 17.5 18.6 17.5 19.15Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-4">Коммерческая фотография</h3>
                <p className="text-white/70 mb-6">
                  Фотографии продуктов, рекламные съемки и корпоративные портреты, которые помогут 
                  вашему бизнесу выделиться.
                </p>
                <a href="/services" className="text-gold hover:text-white transition-colors">
                  Подробнее →
                </a>
              </div>
              
              {/* Service 3 */}
              <div className="bg-black/30 border border-white/10 p-8 hover:border-gold/50 transition-all duration-300 appear-animation">
                <div className="text-gold mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 8L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-4">Свадебная фотография</h3>
                <p className="text-white/70 mb-6">
                  Запечатлеем самый важный день в вашей жизни с вниманием к деталям, эмоциям 
                  и особым моментам.
                </p>
                <a href="/services" className="text-gold hover:text-white transition-colors">
                  Подробнее →
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12 appear-animation">
              <a 
                href="/services" 
                className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-8 py-3"
              >
                Все услуги
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 appear-animation">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Отзывы <span className="text-gold">клиентов</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
              <p className="text-white/70 max-w-2xl mx-auto">
                Что говорят о нас наши клиенты, которые доверили нам запечатлеть их особые моменты.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-dark border border-white/10 p-8 appear-animation">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                      alt="Client" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Анна Петрова</h4>
                    <p className="text-white/50 text-sm">Свадебная фотосессия</p>
                  </div>
                </div>
                <div className="mb-4 text-gold">
                  <span>★★★★★</span>
                </div>
                <p className="text-white/70 italic">
                  "Наши свадебные фотографии превзошли все ожидания. Фотограф смог запечатлеть все важные 
                  моменты и эмоции так естественно, что каждый раз, когда мы смотрим на них, будто заново 
                  переживаем этот день."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-dark border border-white/10 p-8 appear-animation">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                      alt="Client" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Михаил Иванов</h4>
                    <p className="text-white/50 text-sm">Корпоративная съемка</p>
                  </div>
                </div>
                <div className="mb-4 text-gold">
                  <span>★★★★★</span>
                </div>
                <p className="text-white/70 italic">
                  "Мы заказали корпоративную фотосессию для нашего сайта, и результат просто потрясающий. 
                  Профессиональный подход, внимание к деталям и способность поймать правильный момент — всё это 
                  сделало наши фотографии особенными."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-dark border border-white/10 p-8 appear-animation">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                      alt="Client" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Елена Смирнова</h4>
                    <p className="text-white/50 text-sm">Семейная фотосессия</p>
                  </div>
                </div>
                <div className="mb-4 text-gold">
                  <span>★★★★★</span>
                </div>
                <p className="text-white/70 italic">
                  "Наша семейная фотосессия прошла в такой теплой и непринужденной атмосфере, что даже дети, 
                  которые обычно стесняются камеры, чувствовали себя комфортно. Фотографии получились живыми и 
                  естественными."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-dark relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center appear-animation">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
                Давайте создадим вместе что-то <span className="text-gold">особенное</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь вам 
                воплотить ваши идеи в жизнь через искусство фотографии.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gold hover:bg-gold/90 text-white transition-all duration-300 px-8 py-4 text-lg"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;
