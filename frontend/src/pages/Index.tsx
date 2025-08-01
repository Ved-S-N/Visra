import { useState, useEffect } from "react";
import LoaderPage from "@/components/LoaderPage";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import TeamSection from "@/components/TeamSection";
import PageTransition from "@/components/PageTransition";
import ExploreSection from "@/components/ExploreSection";
import AuthForm from "@/components/AuthForm";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Add interactive class to buttons and links after component mounts
    const updateInteractiveElements = () => {
      const elements = document.querySelectorAll("a, button, [role='button']");
      elements.forEach((el) => el.classList.add("interactive"));
    };

    updateInteractiveElements();

    // Observer to update new elements
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const handlePageTransition = () => {
    setShowTransition(false);
  };

  if (isLoading) {
    return <LoaderPage onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <PageTransition
        isActive={showTransition}
        onComplete={handlePageTransition}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <InfiniteMarquee />

        <TeamSection />

        <section id="signup" className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Discover Your Next Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of explorers using Visra to uncover breathtaking
              destinations, hidden gems, and unforgettable experiences.
            </p>
            {/* <button className="bg-gradient-primary text-primary-foreground px-8 py-4 mt-5 rounded-lg text-lg font-semibold hover:shadow-glow transition-all duration-300 interactive">
              Start Exploring Now
            </button> */}

            <Link
              to="/signup"
              className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 mt-5 rounded-lg text-lg font-semibold hover:shadow-glow transition-all duration-300 interactive"
            >
              Start Exploring Now
            </Link>

            <p className="text-sm mt-5 text-muted-foreground">
              Need help?{" "}
              <a href="#footer" className="underline hover:text-primary">
                Contact our travel support team
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            VISRA
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Where innovation meets the web.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#home" className="hover:text-primary transition">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#destinations" className="hover:text-primary transition">
              Destinations
            </a>
            <a href="#team" className="hover:text-primary transition">
              Team
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
            <a
              href="https://github.com/Ved-S-N/Visra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              GitHub
            </a>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2025 Visra. Built with 💻 by Ved S N. All rights reserved.
          </div>

          <p className="text-muted-foreground mt-5">
            © 2025 Webathon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
