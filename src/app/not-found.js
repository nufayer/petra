import Link from 'next/link';
import React from 'react';


const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="w-72 h-72 bg-blue-500/20 blur-3xl rounded-full absolute top-20 left-1/2 -translate-x-1/2"></div>
                    <div className="w-72 h-72 bg-purple-500/20 blur-3xl rounded-full absolute bottom-10 right-20"></div>
                </div>

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back to safety.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                    <Link href="/">
                        <a className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 font-medium">
                            Go Home
                        </a>
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="mt-12 text-sm text-gray-500">
                    Error Code: 404 | Resource Not Found
                </p>
            </div>
        </div>
    );
};

export default NotFound;