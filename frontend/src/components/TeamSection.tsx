import { useState } from "react";

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Ved Sunil Nalavade",
      role: "Lead Developer",
      photo: "/uploads/06bcaad0-948a-4c49-89f5-8952a4800ab0.png",
      bio: "Full-stack developer with 8+ years experience",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      photo: "/uploads/9893659d-b35d-44aa-b2e1-22840eee419c.png",
      bio: "Creative designer passionate about user experience",
    },
    {
      name: "Michael Kim",
      role: "Backend Engineer",
      photo: "/uploads/34efa43f-38b7-4499-bfa0-97d6691563b5.png",
      bio: "Infrastructure and API specialist",
    },
    {
      name: "Emma Watson",
      role: "Project Manager",
      photo: "/uploads/d831829a-02ef-40dc-b2f0-a8cde9a643e2.png",
      bio: "Agile methodology expert and team coordinator",
    },
    {
      name: "David Park",
      role: "DevOps Engineer",
      photo: "/uploads/cc55566f-d43b-4131-a4b8-f6946f808f68.png",
      bio: "Cloud infrastructure and deployment specialist",
    },
    {
      name: "Lisa Johnson",
      role: "QA Engineer",
      photo: "/uploads/f8e1078f-5549-4d4e-9449-38eb917be586.png",
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
