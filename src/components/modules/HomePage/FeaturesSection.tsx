import SectionHeading from "@/components/SectionHeading/SectionHeading";

const features = [
    {
        id: 1,
        title: "Lot of Choices",
        description:
            "With countless choices at your fingertips, the perfect experience.",
        img: "https://themexriver.com/wp/travlia/wp-content/uploads/2025/07/ft1-1.webp",
        bg: "bg-violet-50", // pastel purple
    },
    {
        id: 2,
        title: "Professional Guide",
        description:
            "Enjoy unbeatable deals and exclusive discounts on flights, hotels, and tours.",
        img: "https://themexriver.com/wp/travlia/wp-content/uploads/2025/07/ft2.webp",
        bg: "bg-orange-50", // pastel orange
    },
    {
        id: 3,
        title: "Exclusive Trip",
        description:
            "Experience an exclusive trip tailored just for you, with premium services.",
        img: "https://themexriver.com/wp/travlia/wp-content/uploads/2025/07/ft3.webp",
        bg: "bg-gray-100", // light gray
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                   <SectionHeading
                   title="Seamless Travel Planning Made Easy"
                   align="center"
                   kicker="Feature"
                   />
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`${feature.bg} group rounded-2xl p-8 shadow-md hover:shadow-xl`}
                        >
                            {/* Title */}
                            <h3
                                className="relative mb-4 inline-block text-2xl font-bold text-black transition-colors group-hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-500 group-hover:after:w-full duration-600"
                            >
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-8 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Image container */}
                            <div className="flex justify-center">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-inner transition-transform group-hover:scale-105">
                                    <img
                                        src={feature.img}
                                        alt={feature.title}
                                        className="max-h-32 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;