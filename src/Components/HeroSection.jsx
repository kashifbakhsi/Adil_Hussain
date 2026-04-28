import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* <span className="opacity-0 animate-fade-in">
              {" "}
              Hi, we are 
            </span> */}
            <span className="flex items-center justify-center gap-2">
              <img
                src="/projects/Moduspace_Logo.png"
                alt="logo"
                className="h-10 md:h-12 w-auto object-contain opacity-0 animate-fade-in"
              />
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Modu
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                space
              </span>
            </span>
            <span className="block text-sm md:text-base font-normal text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-tight -ml-6">
              Crafted For Your Comfort
            </span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-300 leading-relaxed tracking-wide">
  Crafting thoughtfully designed spaces through modular kitchens,
  wardrobes, and fitted furniture, supported by expert design consultation.
  Blending functionality with modern aesthetics to deliver smart, elegant,
  and efficient environments for contemporary living.
</p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
