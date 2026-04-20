// import { ArrowRight, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "SaaS Landing Page",
//     description: "A beautiful landing page app using React and Tailwind.",
//     image: "/projects/project1.png",
//     tags: ["React", "TailwindCSS", "Supabase"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Orbit Analytics Dashboard",
//     description:
//       "Interactive analytics dashboard with data visualization and filtering capabilities.",
//     image: "/projects/project2.png",
//     tags: ["TypeScript", "D3.js", "Next.js"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "E-commerce Platform",
//     description:
//       "Full-featured e-commerce platform with user authentication and payment processing.",
//     image: "/projects/project3.png",
//     tags: ["React", "Node.js", "Stripe"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     {/* Only Demo Link */}
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://github.com/machadop1407"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Modular Kitchen Design",
    description:
      "Designed and executed a modern modular kitchen with smart storage solutions, premium finishes, and optimized space utilization.",
    image: "/projects/project1.png",
    tags: ["Kitchen Design", "Interior", "Space Planning"],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Residential Building Construction",
    description:
      "Successfully managed and executed a residential construction project ensuring structural strength, quality materials, and timely delivery.",
    image: "/projects/project2.png",
    tags: ["Civil Engineering", "Construction", "Project Management"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Luxury Interior & Kitchen Setup",
    description:
      "Delivered a complete interior and modular kitchen solution combining aesthetics, functionality, and modern design trends.",
    image: "/projects/project3.png",
    tags: ["Interior Design", "Modular Kitchen", "Execution"],
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my completed projects showcasing expertise in civil
          engineering, modular kitchen design, and project execution with a
          focus on quality and client satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="#contact"
          >
            View More Projects <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};