import { Button } from "@/components/ui/button";
import { Plane, Compass, MapPin } from "lucide-react";
import about1 from "../../../assets/images/about-1.jpg";
import about2 from "../../../assets/images/about-2.jpg";
import about3 from "../../../assets/images/about-3.jpg";
import about4 from "../../../assets/images/about-4.jpg";
import { Link } from "react-router";

const AboutFeature = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Image Collage */}
                <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
                    <img
                        src={about1}
                        alt="Travel 1"
                        className="rounded-2xl shadow-lg col-span-2 object-cover transition-transform duration-500 hover:scale-105 h-72 w-full"
                    />
                    <img
                        src={about2}
                        alt="Travel 2"
                        className="rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <img
                        src={about3}
                        alt="Travel 3"
                        className="rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <img
                        src={about4}
                        alt="Travel 4"
                        className="rounded-2xl shadow-lg col-span-2 object-cover transition-transform duration-500 hover:scale-105 h-72 w-full"
                    />
                </div>

                {/* Right: Content */}
                <div className="lg:pl-8">
                    <h2 className="text-4xl font-bold leading-snug text-foreground mb-6">
                        We have been in the tourism industry for{" "}
                        <span className="text-[#FF7A00]">more than 20 years</span>
                    </h2>
                    <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                        Leave your guidebooks at home and dive into the local cultures that
                        make each destination so special. We’ll connect you with our
                        exclusive experiences.
                    </p>

                    {/* Features */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <Plane className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                    Book With Confidence
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Each trip is carefully crafted to leave you free to live in
                                    the moment and enjoy your vacation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <Compass className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                    Freedom to Discover, Confidence to Explore
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Each trip is carefully crafted to leave you free to live in
                                    the moment and enjoy your vacation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <MapPin className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                    Dive into Culture
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Each trip is carefully crafted to leave you free to live in
                                    the moment and enjoy your vacation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="mt-10 px-8 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link to="/tours">Book Now!</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutFeature;