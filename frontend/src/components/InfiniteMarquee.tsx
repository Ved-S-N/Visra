import { useState } from "react";
import ImageHover from "./ImageHover";

const InfiniteMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  // Sample images for the marquee
  const images = [
    {
      src: "/uploads/watersky.jpg",
      alt: "Rivers",
      title: "Rivers",
    },
    {
      src: "/uploads/flowers.jpg",
      alt: "Floral sky",
      title: "Floral sky",
    },
    {
      src: "/uploads/snow.jpg",
      alt: "Sking",
      title: "Sking",
    },
    {
      src: "/uploads/mountains.jpg",
      alt: "Mountains",
      title: "Mountains",
    },
    {
      src: "/uploads/snowmountains.jpg",
      alt: "Snow Mountains",
      title: "Snow Mountains",
    },
    {
      src: "/uploads/venice.jpg",

      alt: "Venice",
      title: "Venice",
    },
    {
      src: "/uploads/tulips.jpg",
      alt: "Tulips",
      title: "Tulips ",
    },
    {
      src: "/uploads/chandelier.jpg",
      alt: "Italy",
      title: "Italy",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  const handleImageClick = (index: number) => {
    setIsPaused(!isPaused);
    setClickedImage(index);

    // Reset the clicked animation after a short delay
    setTimeout(() => {
      setClickedImage(null);
    }, 200);
  };

  return (
    <div id="destinations" className="py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
        Destination Ideas
      </h2>

      <div className="relative">
        <div className={`marquee ${isPaused ? "paused" : ""} gap-8`}>
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 interactive cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div
                className={`w-80 h-80 rounded-lg overflow-hidden transition-transform duration-200 ${
                  clickedImage === index ? "scale-110" : "scale-100"
                }`}
              >
                <ImageHover
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center mt-3 px-2">
                <h3 className="text-foreground font-medium text-base">
                  {/* {image.title} */}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>

      <div className="text-center mt-8 text-muted-foreground">
        Click any image to {isPaused ? "resume" : "pause"} the gallery
      </div>
    </div>
  );
};

export default InfiniteMarquee;
