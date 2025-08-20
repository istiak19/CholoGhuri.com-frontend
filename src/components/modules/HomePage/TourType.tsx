import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import type { ITourType } from "@/types";

const TourType = () => {
    const { data } = useGetTourTypeQuery(undefined);
    const types = data ?? [];

    return (
        <div className="relative container mx-auto py-16 overflow-hidden">
            <SectionHeading
                kicker="Service"
                align="center"
                title="Choose Our Tour Types & Enjoy Now"
            />

            {/* Marquee wrapper */}
            <div className="relative flex items-center overflow-hidden mt-10">
                {/* Gradient overlays for fade effect */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Animated track */}
                <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
                    {types.map((type: ITourType) => (
                        <span
                            key={type._id}
                            className="mx-6 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-[#FF7A00] text-gray-900 font-semibold shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                        >
                            {type.name}
                        </span>
                    ))}
                    {/* duplicate for infinite loop */}
                    {types.map((type: ITourType) => (
                        <span
                            key={type._id + "-clone"}
                            className="mx-6 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-[#FF7A00] text-gray-900 font-semibold shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                        >
                            {type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourType;