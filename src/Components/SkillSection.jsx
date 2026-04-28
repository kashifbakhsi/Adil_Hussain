import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Kitchen & Wardrobe (Primary Focus)
  { name: "Modular Kitchen Design", level: 95, category: "kitchen" },
  { name: "Kitchen Planning & Layout", level: 94, category: "kitchen" },
  { name: "Wardrobe Design", level: 92, category: "kitchen" },
  { name: "Custom Storage Solutions", level: 90, category: "kitchen" },

  // Design
  { name: "Space Planning", level: 90, category: "design" },
  { name: "Interior Layout Design", level: 85, category: "design" },
  { name: "Material Selection", level: 88, category: "design" },
  { name: "3D Visualization Concepts", level: 82, category: "design" },

  // Management
  { name: "Project Planning", level: 92, category: "management" },
  { name: "Team Coordination", level: 90, category: "management" },
  { name: "Cost Estimation", level: 85, category: "management" },
  { name: "Client Handling", level: 93, category: "management" },
];

const categories = ["all", "kitchen", "design", "management"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary">Expertise</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};