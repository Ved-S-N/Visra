import { useState } from "react";

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Ved Sunil Nalavade",
      role: "Lead Developer",
      photo: "/images/ved.jpg",
      bio: "Full-stack developer with 8+ years experience",
    },
    {
      name: "Ayush Yadav",
      role: "UI/UX Designer",
      photo: "/images/ayushNasha2.jpg",
      bio: "Creative designer passionate about user experience",
    },
    {
      name: "Om Sharma",
      role: "Backend Engineer",
      photo: "/images/omChampu.jpg",
      bio: "Infrastructure and API specialist",
    },
    {
      name: "Pradynesh Kawate",
      role: "Project Manager",
      photo: "/images/pradynesh.jpg",
      bio: "Agile methodology expert and team coordinator",
    },
    {
      name: "Riya Kasat",
      role: "DevOps Engineer",
      photo: "/images/riya.jpg",
      bio: "Cloud infrastructure and deployment specialist",
    },
    {
      name: "Ashmit",
      role: "QA Engineer",
      photo: "/images/ashmit.jpg",
      bio: "Quality assurance and testing expert",
    },
  ];

  return (
    <section id="team" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member relative text-center interactive"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>

              {/* Floating Photo */}
              <div
                className={`team-photo-float absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden p-2 ${
                  hoveredMember === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
