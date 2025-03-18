
import React, { useEffect, useRef } from 'react';

interface SectionObserverProps {
  children: React.ReactNode;
  className?: string;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) {
      observer.observe(section);
      
      // Find all headings in the section to animate
      const headings = section.querySelectorAll('.section-heading');
      headings.forEach(heading => observer.observe(heading));
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef} 
      className={`opacity-0 transform translate-y-10 transition-all duration-700 ease-out ${className}`}
      style={{ 
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
      }}
    >
      {children}
      <style jsx>{`
        .in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default SectionObserver;
