
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Sample hero images
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1469378547551-6acfc57c29c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Запечатлеть момент",
    subtitle: "Фотография — это история, которую невозможно выразить словами"
  },
  {
    url: "https://images.unsplash.com/photo-1532959801411-9da88aa8549a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Создавать искусство",
    subtitle: "Через объектив мы видим мир по-другому"
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Истории в кадрах",
    subtitle: "Каждая фотография — это фрагмент времени, сохраненный навсегда"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 500);
  }, [isTransitioning]);
  
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 500);
  }, [isTransitioning]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 500);
  };
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background slider */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          } ${isTransitioning ? 'scale-105' : 'scale-100'}`}
          style={{ 
            backgroundImage: `url(${image.url})`,
            transitionProperty: 'opacity, transform',
            transitionDuration: '1.5s, 6s',
            transitionTimingFunction: 'ease-in-out, ease-in-out',
          }}
        >
          <div className="absolute inset-0 bg-dark/40"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <div
          className={`text-center max-w-3xl transition-all duration-1000 ease-out ${
            isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            {heroImages[currentSlide].subtitle}
          </p>
          <Button 
            className="bg-gold hover:bg-gold/90 text-white rounded-none px-8 py-6 text-lg"
          >
            Наши работы
          </Button>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-dark/50 hover:bg-gold/80 text-white p-3 rounded-full transition-all duration-300"
        onClick={prevSlide}
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      
      <button 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-dark/50 hover:bg-gold/80 text-white p-3 rounded-full transition-all duration-300"
        onClick={nextSlide}
      >
        <Icon name="ChevronRight" size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroImages.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold w-10' 
                : 'bg-white/50 hover:bg-white'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
