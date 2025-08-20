import Logo from "@/assets/icons/Logo";
import footerPic from "@/assets/images/bg-footer.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    const socials = [
        { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
        { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
        { name: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
        { name: "GitHub", href: "https://github.com", icon: <FaGithub /> },
    ];

    return (
        <footer
            className="relative border-t border-[#ff7b00c3] bg-cover bg-center"
            style={{ backgroundImage: `url(${footerPic})` }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative mx-auto container space-y-10 px-4 py-12 text-white">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Logo + description */}
                    <div>
                        <div>
                            <Logo />
                            <p className="text-sm font-medium mt-2">
                                Explore Bangladesh. Experience Freedom.
                            </p>
                        </div>

                        <p className="mt-4 max-w-sm text-sm text-gray-200">
                            CholoGhuri.com is your trusted companion in discovering Bangladesh.
                            Book tours, explore destinations, and travel with ease.
                        </p>

                        <ul className="mt-6 flex gap-6">
                            {socials.map(({ name, href, icon }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-yellow-400 transition text-xl"
                                        aria-label={name}
                                    >
                                        {icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links grid */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-semibold">Services</p>
                            <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Tour Packages</a></li>
                                <li><a href="#" className="hover:underline">Custom Trips</a></li>
                                <li><a href="#" className="hover:underline">Travel Insurance</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Company</p>
                            <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Press</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Support</p>
                            <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Booking Guide</a></li>
                                <li><a href="#" className="hover:underline">Cancellations</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Legal</p>
                            <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#ff7b0038] pt-8 text-center text-gray-300">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-[#FF7A00]">CholoGhuri.com</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;