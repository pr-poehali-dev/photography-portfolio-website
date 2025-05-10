
import { useEffect, useRef } from 'react';

const IntroSection = () => {
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
  );
};

export default IntroSection;
