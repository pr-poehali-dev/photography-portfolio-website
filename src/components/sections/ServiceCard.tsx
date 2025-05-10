
import { ReactNode } from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
};

/**
 * Компонент карточки услуги с унифицированным дизайном
 */
const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-black/30 border border-white/10 p-8 hover:border-gold/50 transition-all duration-300 appear-animation">
      <div className="text-gold mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-bold text-white mb-4">{title}</h3>
      <p className="text-white/70 mb-6">
        {description}
      </p>
      <a href={link} className="text-gold hover:text-white transition-colors">
        Подробнее →
      </a>
    </div>
  );
};

export default ServiceCard;
