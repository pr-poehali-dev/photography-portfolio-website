
import { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  highlightedText?: string;
  description?: string;
  className?: string;
};

/**
 * Компонент для заголовков секций с единым стилем оформления
 */
const SectionTitle = ({ 
  title, 
  highlightedText, 
  description, 
  className = "" 
}: SectionTitleProps) => {
  // Если есть выделенный текст, заменяем его в заголовке на спан с нужным классом
  const renderTitle = () => {
    if (!highlightedText) return title;
    
    const parts = title.split(highlightedText);
    
    return (
      <>
        {parts[0]}
        <span className="text-gold">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };
  
  return (
    <div className={`text-center mb-16 appear-animation ${className}`}>
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
        {renderTitle()}
      </h2>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
      {description && (
        <p className="text-white/70 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
