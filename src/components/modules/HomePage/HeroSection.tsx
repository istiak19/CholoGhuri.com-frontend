import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";
import heroPic from "@/assets/images/bg-footer.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with parallax transform */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 0.4}px)`,
          willChange: "transform",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <Logo />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-white">
                Explore Tour Types{" "}
                <span className="text-primary">Across Bangladesh</span>
              </h1>
              <p className="mx-auto max-w-3xl text-gray-200 lg:text-xl">
                From the world’s longest sea beach in Cox’s Bazar, to the mysterious Sundarbans,
                and the heritage of Paharpur — choose your tour type and start your journey
                across Bangladesh today.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow" asChild>
                <Link to="/tours">Browse Tours</Link>
              </Button>
              <Button
                variant="outline"
                className="group text-foreground border-white hover:bg-white/10 bg-amber-100"
                asChild
              >
                <Link to="/about">
                  Learn more{" "}
                  <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;