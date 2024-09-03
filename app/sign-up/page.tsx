import React from "react";
import Header from "../components/header";

export default function Page() {
  return (
    <div className="min-h-screen justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4 text-black">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 font-sans">Sign Up for FitBeats</h1>
          <form className="space-y-4">
            <div>
              <input type="text" name="name" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <input type="date" name="birthdate" placeholder="Date of Birth" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <select name="fitnessLevel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">Select Fitness Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <input type="text" name="favoriteArtists" placeholder="Favorite Artists (comma separated)" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">Sign Up</button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <i className="fab fa-facebook-f mr-2 text-blue-600"></i> Facebook
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <i className="fab fa-google mr-2 text-red-500"></i> Google
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <a href="#" className="text-purple-600 hover:underline">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}


