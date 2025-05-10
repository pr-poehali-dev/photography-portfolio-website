
import { useEffect, useRef } from 'react';

const TestimonialsSection = () => {
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
  
  const testimonials = [
    {
      name: "Анна Петрова",
      service: "Свадебная фотосессия",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      text: "Наши свадебные фотографии превзошли все ожидания. Фотограф смог запечатлеть все важные моменты и эмоции так естественно, что каждый раз, когда мы смотрим на них, будто заново переживаем этот день."
    },
    {
      name: "Михаил Иванов",
      service: "Корпоративная съемка",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      text: "Мы заказали корпоративную фотосессию для нашего сайта, и результат просто потрясающий. Профессиональный подход, внимание к деталям и способность поймать правильный момент — всё это сделало наши фотографии особенными."
    },
    {
      name: "Елена Смирнова",
      service: "Семейная фотосессия",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      text: "Наша семейная фотосессия прошла в такой теплой и непринужденной атмосфере, что даже дети, которые обычно стесняются камеры, чувствовали себя комфортно. Фотографии получились живыми и естественными."
    }
  ];
  
  return (
    <section className="py-20 bg-black" ref={sectionRef}>
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark border border-white/10 p-8 appear-animation">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.service}</p>
                </div>
              </div>
              <div className="mb-4 text-gold">
                <span>★★★★★</span>
              </div>
              <p className="text-white/70 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
