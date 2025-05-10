
import { useEffect, useRef } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.appear-animation');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('active');
            }, 100 * index);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-dark" ref={sectionRef}>
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
  );
};

export default ServicesSection;
