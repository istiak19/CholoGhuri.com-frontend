import Logo from "@/assets/icons/Logo";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    const socials = [
        { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
        { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
        { name: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
        { name: "GitHub", href: "https://github.com", icon: <FaGithub /> },
    ];

    return (
        <footer className="border-t border-[#FF7A00] dark:border-[#FFA94D]">
            <div className="mx-auto container space-y-10 px-4 py-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div>
                        <div className="text-foreground">
                            <Logo />
                            <p className="text-sm font-medium mt-2">Explore Bangladesh. Experience Freedom.</p>
                        </div>

                        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                            CholoGhuri.com is your trusted companion in discovering Bangladesh. Book tours, explore destinations, and travel with ease.
                        </p>

                        <ul className="mt-6 flex gap-6">
                            {socials.map(({ name, href, icon }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground hover:text-gray-600 transition text-xl"
                                        aria-label={name}
                                    >
                                        {icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        {/* Travel Services */}
                        <div>
                            <p className="font-semibold text-foreground">Services</p>
                            <ul className="mt-4 space-y-3 text-sm *:text-muted-foreground">
                                <li><a href="#" className="hover:underline">Tour Packages</a></li>
                                <li><a href="#" className="hover:underline">Custom Trips</a></li>
                                <li><a href="#" className="hover:underline">Travel Insurance</a></li>
                            </ul>
                        </div>

                        {/* Company Info */}
                        <div>
                            <p className="font-semibold text-foreground">Company</p>
                            <ul className="mt-4 space-y-3 text-sm *:text-muted-foreground">
                                <li><a href="#" className="hover:underline ">About Us</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Press</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <p className="font-semibold text-foreground">Support</p>
                            <ul className="mt-4 space-y-3 text-sm *:text-muted-foreground">
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Booking Guide</a></li>
                                <li><a href="#" className="hover:underline">Cancellations</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <p className="font-semibold text-foreground">Legal</p>
                            <ul className="mt-4 space-y-3 text-sm *:text-muted-foreground">
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-muted-foreground">
                    &copy; {new Date().getFullYear()} <span className="text-[#FF7A00]">CholoGhuri.com</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;