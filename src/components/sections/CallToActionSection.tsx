
import { useEffect, useRef } from 'react';

const CallToActionSection = () => {
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
    <section className="py-20 bg-dark relative" ref={sectionRef}>
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
  );
};

export default CallToActionSection;
