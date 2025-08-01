import { useEffect, useRef } from "react";

interface TextRevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TextRevealAnimation = ({ children, className = "", delay = 0 }: TextRevealAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`text-reveal ${className}`}>
      {children}
    </div>
  );
};

export default TextRevealAnimation;