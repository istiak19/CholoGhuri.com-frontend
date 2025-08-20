import { Globe, BadgeDollarSign, Headset } from "lucide-react";

const TravelFeatures = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                    <Globe className="h-12 w-12 text-[#FF7A00] mb-4" />
                    <h3 className="text-lg font-semibold text-foreground">70 Destinations</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Our expert team handpicked all destinations in this site
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                    <BadgeDollarSign className="h-12 w-12 text-[#FF7A00] mb-4" />
                    <h3 className="text-lg font-semibold xt-foreground">Best Price Guarantee</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Price match within 48 hours of order confirmation
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                    <Headset className="h-12 w-12 text-[#FF7A00] mb-4" />
                    <h3 className="text-lg font-semibold text-foreground">Top Notch Support</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                        We are here to help, before, during, and even after your trip.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default TravelFeatures;