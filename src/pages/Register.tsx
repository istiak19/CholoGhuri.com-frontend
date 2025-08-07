import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import RegisterForm from "@/components/modules/RegisterForm";
import TravelRegister from "@/assets/images/travel-register.jpg";

const Register = () => {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            {/* Left Image Section */}
            <div className="relative hidden lg:block">
                <img
                    src={TravelRegister}
                    alt="Scenic travel background"
                    className="absolute inset-0 h-full w-full object-cover brightness-95 dark:brightness-75"
                />
            </div>

            {/* Right Form Section */}
            <div className="flex flex-col justify-center px-6 pt-5 md:px-12 bg-background">
                {/* Logo */}
                <div className="mb-8 flex justify-center md:justify-start">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-semibold hover:opacity-90 transition-opacity"
                        aria-label="Go to homepage"
                    >
                        <Logo />
                        <span className="sr-only">Go to homepage</span>
                    </Link>
                </div>

                {/* Form Card */}
                <div className="mx-auto w-full max-w-lg space-y-8">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;