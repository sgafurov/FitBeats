import React from "react";
import Header from "../components/header";
import { supabase } from "../utils/supabase-client";
import ClientForm from "./client-form";

export default function Page() {
  return (
    <div className="min-h-screen justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 text-black">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 font-sans">Sign Up for FitBeats</h1>

          <ClientForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <a href="#" className="text-purple-600 hover:underline">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}


