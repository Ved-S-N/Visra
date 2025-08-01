import { useState } from "react";

interface ImageHoverProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageHover = ({ src, alt, className = "" }: ImageHoverProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`image-hover-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      
      <div className="image-hover-overlay">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-foreground">
              {alt}
            </div>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Custom Circle Cursor */}
      {isHovering && (
        <div
          className="absolute w-20 h-20 border-2 border-primary rounded-full pointer-events-none mix-blend-difference"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
            transition: 'all 0.1s ease-out',
          }}
        />
      )}
    </div>
  );
};

export default ImageHover;