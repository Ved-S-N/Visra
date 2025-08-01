import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 300);
    };

    const handleMarqueeEnter = () => setIsHoveringMarquee(true);
    const handleMarqueeLeave = () => setIsHoveringMarquee(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("click", handleClick);
    
    // Only add hover listeners to marquee elements
    const marqueeElements = document.querySelectorAll(".marquee, .marquee *");
    marqueeElements.forEach(el => {
      el.addEventListener("mouseenter", handleMarqueeEnter);
      el.addEventListener("mouseleave", handleMarqueeLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("click", handleClick);
      marqueeElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMarqueeEnter);
        el.removeEventListener("mouseleave", handleMarqueeLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor - Hide when hovering marquee */}
      {!isHoveringMarquee && (
        <div
          className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out"
          style={{
            left: position.x - 4,
            top: position.y - 4,
          }}
        />
      )}
      
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;