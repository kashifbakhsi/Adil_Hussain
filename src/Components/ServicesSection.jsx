import { cn } from "@/lib/utils";

const services = [
  {
    title: "Modular Kitchen",
    description:
      "Modern, space-efficient kitchen designs tailored for functionality, style, and smart storage solutions.",
  },
  {
    title: "Modular Wardrobe",
    description:
      "Custom-designed wardrobes that maximize space utilization with elegant finishes and practical layouts.",
  },
  {
    title: "Fitted Furniture",
    description:
      "Bespoke fitted furniture solutions designed to seamlessly blend with interiors and lifestyle needs.",
  },
  {
    title: "Design Consultation",
    description:
      "Expert guidance to transform ideas into practical, aesthetic, and well-planned interior concepts.",
  },
  {
    title: "Site Supervision",
    description:
      "On-site monitoring to ensure quality execution, timely progress, and flawless implementation.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Heading (same style as SkillsSection) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary">Services</span>
        </h2>

        {/* Grid (same feel as skills cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};