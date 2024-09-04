import React from "react";
import Header from "../components/header";
import { supabase } from "../utils/supabase-client";
import ClientForm from "./client-form";

export default function Page() {

    return (
        <div className="min-h-screen justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <Header />
            <div className="min-h-screen flex items-center justify-center p-4 text-black ">
                {/* <div className="bg-white p-8 rounded-lg shadow-md w-96"> */}
                <div className="bg-white p-8 rounded-lg w-96">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-roboto">
                        Log In
                    </h1>
                    <ClientForm />
                    <div className="mt-4 flex justify-between items-center">
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </div>

                    <p className="mt-8 text-center text-xs text-gray-500">
                        Need help? Contact support@aiworkoutmusic.com
                    </p>
                </div>
            </div>
        </div>
    );
}