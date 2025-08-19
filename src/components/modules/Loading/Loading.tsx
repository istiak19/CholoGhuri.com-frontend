const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                {/* Spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>

                {/* Brand text */}
                <p className="text-lg font-semibold text-gray-700 animate-pulse">
                    Loading Chologhuri Tours...
                </p>
            </div>
        </div>
    );
};

export default Loading;