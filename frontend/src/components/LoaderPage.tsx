import { useEffect, useState } from "react";

interface LoaderPageProps {
  onComplete: () => void;
}

const LoaderPage = ({ onComplete }: LoaderPageProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold loader-text">VISRA</h1>
          <div className="mt-4 text-xl text-muted-foreground">
            Loading Experience...
          </div>
        </div>

        <div className="w-80 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-primary font-mono text-lg">{progress}%</div>
      </div>
    </div>
  );
};

export default LoaderPage;
