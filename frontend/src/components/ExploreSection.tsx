import React, { useState, useEffect } from "react";
import TextRevealAnimation from "./TextRevealAnimation";
import HeroSection from "./Hero";
import { Button } from "@/components/ui/button";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import TeamSection from "./TeamSection";

const ExploreSection = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("http://localhost:3002/allListings");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("❌ Failed to fetch listings:", err);
      }
    };

    fetchListings();
  }, []);

  return (
    <section id="explore" className="py-20 px-6 bg-background mb-1">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <div className="container mx-auto mt-5 mb-5 p-5">
        <TextRevealAnimation>
          <h2
            id="local-guides"
            className="text-5xl mt-5 font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent"
          >
            Explore Destinations
          </h2>
        </TextRevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          {listings.map((place, index) => (
            <div
              key={place._id || index}
              className="bg-card rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl cursor-pointer interactive border border-border"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={place.imageUrl}
                  alt={place.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.jpg"; // Optional fallback image
                  }}
                />
              </div>

              <div className="p-4 mb-3">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {place.title}
                </h3>
                <p className="text-muted-foreground text-sm ">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TeamSection />
      <footer className="py-12 px-6 border-t border-border ">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            VISRA
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Where innovation meets the web.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#top" className="hover:text-primary transition">
              Top
            </a>
            <a href="#explore" className="hover:text-primary transition">
              Explore Destinations
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
    </section>
  );
};

export default ExploreSection;
