import AboutFeature from "@/components/modules/About/AboutFeature";
import TravelFeatures from "@/components/modules/About/TravelFeatures";

const About = () => {
    return (
        <div>
            <AboutFeature />
            <TravelFeatures />
        </div>
        // <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your-hero-bg.jpg')" }}>
        //     {/* Dark overlay for legibility */}
        //     <div className="absolute inset-0 bg-black/50" />

        //     <div className="relative z-10 container mx-auto py-24 px-6 text-center text-white">
        //         {/* Heading */}
        //         <h1 className="text-5xl font-bold mb-4">About Us</h1>
        //         <p className="max-w-2xl mx-auto text-lg mb-16">
        //             700 Destinations. Our expert team hand-picked all destinations in this site. <br />
        //             Best Price Guarantee. Price match within 48 hours of order confirmation. <br />
        //             Top Notch Support. We are here to help before, during, and after your trip.
        //         </p>

        //         {/* Team Grid */}
        //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        //             {[
        //                 { name: "Jane Smith", role: "CEO & Founder", img: "/images/p01.jpg" },
        //                 { name: "Marry Deff", role: "CFO", img: "/images/p02.jpg" },
        //                 { name: "Gren Johnson", role: "Manager", img: "/images/p03.jpg" },
        //                 { name: "Alis Holmes", role: "Tour Manager", img: "/images/p04.jpg" },
        //                 { name: "James Doe", role: "Marketing Manager", img: "/images/p05.jpg" },
        //                 { name: "Jean Kole", role: "CTO", img: "/images/p06.jpg" },
        //                 { name: "David Gartn", role: "Manager", img: "/images/p07.jpg" },
        //                 { name: "Miki Koko", role: "HR Manager", img: "/images/p08.jpg" },
        //             ].map((member) => (
        //                 <div key={member.name} className="space-y-2">
        //                     <img src={member.img} alt={member.name} className="mx-auto rounded-full w-32 h-32 object-cover" />
        //                     <h3 className="text-xl font-semibold">{member.name}</h3>
        //                     <p className="text-gray-200">{member.role}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
    );
};

export default About;