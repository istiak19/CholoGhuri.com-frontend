import { Button } from "@/components/ui/button";
import { useGetTourQuery } from "@/redux/features/tour/tour.api";
import { Calendar, Globe } from "lucide-react";
import Loading from "../Loading/Loading";
import type { ITourPackage } from "@/types";
import { format } from "date-fns";
import { Link } from "react-router";
import { FaPeopleArrows } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const TourCards = () => {
    const { data, isLoading } = useGetTourQuery(undefined);
    const tours = data?.data.slice(0, 6);

    if (isLoading) return <Loading />;

    return (
        <section className="pt-16">
            <div>
                <SectionHeading kicker="Best Tours" title="Recommended Trips For You" />
            </div>
            <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {tours?.map((tour: ITourPackage) => (
                    <div
                        key={tour._id}
                        className="bg-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        {/* Image with hover effect */}
                        <div className="relative h-[280px] w-full overflow-hidden">
                            <img
                                src={tour.images[0]}
                                alt={tour.title}
                                className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF7A00] transition-colors">
                                {tour.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 italic">
                                Location: <span className="font-medium not-italic">{tour.location}</span>
                            </p>

                            {/* Details */}
                            <div className="flex justify-between gap-3 text-sm text-gray-600 mb-6 border-t border-b border-[#FF7A00] py-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#FF7A00]" />
                                    {format(
                                        new Date(tour?.startDate ? tour?.startDate : new Date()),
                                        "PP"
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPeopleArrows size={16} className="text-[#FF7A00]" />
                                    Max {tour.maxGuest} guests
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe size={16} className="text-[#FF7A00]" />
                                    Departure: {tour.departureLocation}
                                </div>
                            </div>

                            {/* Price & Button */}
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Starting From
                                    <span className="block text-xl font-bold text-gray-900">
                                        ${tour.costForm}
                                    </span>
                                </p>
                                <Button
                                    className="px-5 py-2 rounded-full bg-[#ff7b00f6] hover:bg-yellow-500 font-semibold transition cursor-pointer"
                                    asChild
                                >
                                    <Link to={`/tours/${tour?._id}`}>View Tour</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <div className="flex justify-center mt-5">
                <Button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff7b00f6] hover:bg-yellow-500 text-black font-semibold shadow-lg cursor-pointer transition" asChild>
                    <Link to='/tours'> View All Tours <span className="text-xl"><MdArrowOutward /></span></Link>
                </Button>
            </div>
        </section>
    );
};

export default TourCards;