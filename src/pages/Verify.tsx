import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state;

    useEffect(() => {
        if (!email) {
            navigate("/");
        }
    }, [email, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center text-center text-xl">
            {email ? `Verification email sent to: ${email}` : "Redirecting..."}
        </div>
    );
};

export default Verify;