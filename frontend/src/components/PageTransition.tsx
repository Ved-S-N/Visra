import { useEffect, useState } from "react";

interface PageTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

const PageTransition = ({ isActive, onComplete }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800);
    }
  }, [isActive, onComplete]);

  return (
    <div className={`page-transition ${isVisible ? "active" : ""}`}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            VISRA
          </div>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mt-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
