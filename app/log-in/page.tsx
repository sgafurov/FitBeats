import React from "react";
import Header from "../components/header";

export default function Page() {
    return (
        <div className="min-h-screen justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <Header />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4 text-black ">
                {/* <div className="bg-white p-8 rounded-lg shadow-md w-96"> */}
                <div className="bg-white p-8 rounded-lg w-96">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-roboto">
                        Log In
                    </h1>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="mt-4 flex justify-between items-center">
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </div>
                    <div className="mt-6">
                        <p className="text-center text-sm text-gray-600 mb-4">
                            Or login with
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300">
                                <i className="fab fa-google"></i>
                            </button>
                            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-xs text-gray-500">
                        Need help? Contact support@aiworkoutmusic.com
                    </p>
                </div>
            </div>
        </div>
    );
}