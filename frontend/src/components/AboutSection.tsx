import TextRevealAnimation from "./TextRevealAnimation";

const AboutSection = () => {
  const features = [
    {
      title: "Curated Visuals",
      description:
        "Every destination is handpicked for its visual and cultural beauty.",
      icon: "🖼️",
    },
    {
      title: "Seamless Experience",
      description:
        "Smooth scroll, custom animations, and responsive design for all devices.",
      icon: "🧭",
    },
    {
      title: "Inspiration First",
      description:
        "Not just where to go — but why. We help you discover stories, not itineraries.",
      icon: "💡",
    },
    {
      title: "Community Vibes",
      description:
        "Built by explorers, for explorers. Share places, ideas, and travel dreams.",
      icon: "🌍",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <TextRevealAnimation>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-accent bg-clip-text text-transparent">
            About Visra
          </h2>
        </TextRevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <TextRevealAnimation delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Visra is your window to the world — a visual-first travel
                discovery app that brings global beauty to your fingertips. From
                vibrant cities to hidden gems, every scroll unveils a new
                possibility.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're planning your next adventure or just looking for
                inspiration, Visra helps you explore cultures, landscapes, and
                moments through carefully curated imagery and effortless UX.
              </p>

              <div className="flex items-center gap-4 text-primary font-semibold text-lg">
                <span>Over 50+ destinations featured</span>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Built for travelers & dreamers</span>
              </div>
            </div>
          </TextRevealAnimation>

          <TextRevealAnimation delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-accent interactive"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </TextRevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
