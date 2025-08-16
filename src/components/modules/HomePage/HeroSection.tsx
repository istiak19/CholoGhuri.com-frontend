import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Explore Tour Types{" "}
                <span className="text-primary">Across Bangladesh</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                From the world’s longest sea beach in Cox’s Bazar, to the mysterious Sundarbans,
                and the heritage of Paharpur — choose your tour type and start your journey
                across Bangladesh today.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow" asChild>
                <Link to="/tours">Browse Tours</Link>
              </Button>
              <Button variant="outline" className="group" asChild>
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
