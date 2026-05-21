"use client";

import Link from "next/link";
import React from "react";

const Error = () => {
    return (
        <div className="relative min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 overflow-hidden">

            {/* Glow Effect */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="w-72 h-72 bg-blue-500/20 blur-3xl rounded-full absolute top-20 left-1/2 -translate-x-1/2"></div>
                <div className="w-72 h-72 bg-purple-500/20 blur-3xl rounded-full absolute bottom-10 right-20"></div>
            </div>

            <div className="text-center max-w-2xl">

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Oops! An Error Occurred
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-2xl md:text-4xl font-bold leading-tight">
                    Something went wrong while loading the pet details.
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back to safety.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">

                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 font-medium"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 font-medium"
                    >
                        Go Back
                    </button>

                </div>

                {/* Footer */}
                <p className="mt-12 text-sm text-gray-500">
                    Error Code: 404 | Resource Not Found
                </p>
            </div>
        </div>
    );
};

export default Error;