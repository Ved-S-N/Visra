import { Button } from "@/components/ui/button";
import TextRevealAnimation from "./TextRevealAnimation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <TextRevealAnimation delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              VIS
            </span>
            <span className="text-foreground">RA</span>
          </h1>
        </TextRevealAnimation>

        <TextRevealAnimation delay={400}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A visual travel experience crafted for explorers and dreamers. Dive
            into breathtaking places, find inspiration, and wander the world
            through your screen.
          </p>
        </TextRevealAnimation>

        <TextRevealAnimation delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 mt-5 rounded-lg text-lg font-semibold hover:shadow-glow transition-all duration-300 interactive"
            >
              Register Now
            </Link>

            <Link
              to="/"
              className="inline-block border border-yellow-400 text-yellow-400 px-8 py-4 mt-5 rounded-lg text-lg font-semibold bg-transparent hover:bg-yellow-400 hover:text-black transition-all duration-300 interactive"
            >
              Learn More
            </Link>
          </div>
        </TextRevealAnimation>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
