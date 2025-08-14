import { Link, useNavigate } from "react-router";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function Unauthorized() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center"
            >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-red-100 rounded-full"
                    >
                        <AlertTriangle className="w-10 h-10 text-red-500" />
                    </motion.div>
                </div>

                {/* Status Code */}
                <h1 className="text-5xl font-extrabold text-red-600 mb-2">403</h1>

                {/* Heading */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Access Denied
                </h2>

                {/* Message */}
                <p className="text-gray-600 mb-6">
                    Sorry, you don’t have permission to view this page.
                </p>

                {/* Actions */}
                <div className="flex justify-center gap-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(-1)}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
                    >
                        Go Back
                    </motion.button>
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/"
                            className="px-5 py-2.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                        >
                            Home
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}