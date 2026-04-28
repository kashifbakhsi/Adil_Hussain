// import { ThemeToggle } from "../Components/ThemeToggle";
// import { StarBackground } from "@/Components/StarBackground";
// import { Navbar } from "../Components/Navbar";
// import { HeroSection } from "../Components/HeroSection";
// import { AboutSection } from "../Components/AboutSection";
// import { SkillsSection } from "../Components/SkillSection";
// import { ProjectsSection } from "../Components/ProjectsSection";
// import { ContactSection } from "../Components/ContactSection";
// import { Footer } from "../Components/Footer";

// export const Home = () => {
//   return (
//     <div
//       className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat dark:hidden pointer-events-none"
//       style={{
//         backgroundImage: "url('/projects/back_ground.png')", // your image
//       }}
//     >
//       <div className="fixed inset-0 bg-white/70 backdrop-blur-sm dark:bg-background -z-10 pointer-events-none"></div>

//       {}
//       <ThemeToggle />
//       <div className="hidden dark:block">
//         <StarBackground />
//       </div>
//       <Navbar />
//       <main className="relative z-10">
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { ServicesSection } from "../Components/ServicesSection";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  // 🔥 Detect theme change in real-time
  useEffect(() => {
    const checkTheme = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      
      {/* 🌞 LIGHT MODE BACKGROUND */}
      {!isDark && (
        <>
          <div
            className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('/projects/back_ground.png')",
            }}
          />
          <div className="fixed inset-0 bg-white/10 backdrop-blur-sm -z-20 pointer-events-none"></div>
        </>
      )}

      {/* 🌙 DARK MODE BACKGROUND */}
      {isDark && <StarBackground />}

      {/* CONTENT */}
      <ThemeToggle />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection/>
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};