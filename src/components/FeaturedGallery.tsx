
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const galleryCategories = [
  {
    id: 'portrait',
    title: 'Портрет',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Раскрываем характер и индивидуальность',
    url: '/galleries/portrait'
  },
  {
    id: 'nature',
    title: 'Природа',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Величественная красота природных пейзажей',
    url: '/galleries/nature'
  },
  {
    id: 'architecture',
    title: 'Архитектура',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80',
    description: 'Геометрия и гармония в городских пейзажах',
    url: '/galleries/architecture'
  },
  {
    id: 'wedding',
    title: 'Свадьба',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    description: 'Запечатляем самые важные моменты вашей жизни',
    url: '/galleries/wedding'
  }
];

const FeaturedGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = galleryRef.current?.querySelectorAll('.appear-animation');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('active');
            }, 100 * index);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-dark" ref={galleryRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Наши <span className="text-gold">Галереи</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Исследуйте наши категории изображений, отражающих разные жанры фотографии. 
            Каждый снимок — это уникальная история, рассказанная через объектив.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryCategories.map((category, index) => (
            <div 
              key={category.id}
              className="photo-card overflow-hidden relative group appear-animation"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/80 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {category.description}
                </p>
                <Link 
                  to={category.url}
                  className="inline-flex items-center text-white text-sm hover:text-gold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Посмотреть галерею
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 appear-animation">
          <Link 
            to="/galleries"
            className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-8 py-3"
          >
            Все галереи
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
