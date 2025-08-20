import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactPic from "@/assets/images/contact.jpg";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section className="pb-10">
            {/* Banner */}
            <div className="relative h-[200px] md:h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat mb-10"
                style={{
                    backgroundImage: `url(${contactPic})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0f1c3f]/70"></div>

                {/* Content */}
                <div className="relative text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                        Explore The Bangladesh
                    </h1>
                    <p className="text-lg md:text-xl font-medium">
                        People Don’t Take, Trips Take People
                    </p>
                </div>
            </div>

            {/* Section Heading */}
            <div className="mb-10">
                <SectionHeading
                    title="Feel Free to Write us Anytime"
                    align="center"
                    kicker="Contact Us"
                />
            </div>

            <div className="max-w-7xl mx-auto grid px-5 grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Left Side - Contact Info */}
                <div className="bg-[#0f1c3f] rounded-3xl overflow-hidden flex flex-col">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                            alt="Contact"
                            className="w-full h-80 object-cover rounded-bl-3xl"
                        />
                        <div className="absolute bottom-0 left-8 bg-orange-400 px-5 py-2 rounded-t-lg text-white font-semibold text-lg italic">
                            Contact Information
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 p-8 text-white">
                        {/* Hotline */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1f2a4d] p-3 rounded-full">
                                <FaPhoneAlt className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Hot Line</p>
                                <p className="font-semibold">Free +8806608442938</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1f2a4d] p-3 rounded-full">
                                <FaEnvelope className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Send Email</p>
                                <p className="font-semibold">chologhuri@org.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1f2a4d] p-3 rounded-full">
                                <FaMapMarkerAlt className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Our Address</p>
                                <p className="font-semibold">
                                    80 mirpur Road, Mirpur, Dhaka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <form className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-lg border border-orange-400 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-4 rounded-lg border border-orange-400 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-4 rounded-lg border border-orange-400 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-4 rounded-lg border border-orange-400 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                        placeholder="Write a Message"
                        rows={5}
                        className="w-full p-4 rounded-lg border border-orange-400 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <Button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full w-max self-start transition cursor-pointer"
                    >
                        Send a Message
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;