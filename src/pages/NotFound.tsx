import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import bgPic from "@/assets/images/bg-footer.png";
import Logo from "@/assets/icons/Logo";

const NotFound = () => {
    return (
        <div
            className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPic})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Logo */}
                <Logo className="h-20 w-20" />

                {/* Large 404 */}
                <h1 className="text-9xl font-bold text-white drop-shadow-lg">404</h1>

                {/* Page not found */}
                <h2 className="mt-4 text-3xl font-semibold text-white">
                    Page Not Found
                </h2>
                <p className="mt-2 text-lg text-gray-200 max-w-md">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>

                {/* Back to homepage */}
                <Button asChild className="mt-8 px-6 py-2 rounded-full text-sm font-medium uppercase">
                    <Link to="/">← Back to Homepage</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;