import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white font-sans">
      <header className="p-4 md:p-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">FitBeats AI</h1>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Sign Up
            </button>
            <button className="bg-transparent border border-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
              Log In
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Workout with AI
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Personalized playlists and interval suggestions to match your
            fitness rhythm
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition duration-300">
            <Link href="/sign-up">Get Started</Link>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-music text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">
              Personalized Playlists
            </h3>
            <p>AI-curated music based on your favorite artists and genres</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-running text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Interval Suggestions</h3>
            <p>
              Optimize your workout with AI-driven intensity recommendations
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-link text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">
              Streaming Integration
            </h3>
            <p>Seamless connection with Spotify and Apple Music</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-chart-bar text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">
              Progress and Insights
            </h3>
            <p>Track your workout stats and gain valuable insights</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-users text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p>Share achievements and engage with fellow fitness enthusiasts</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <i className="fas fa-cogs text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">
              Customizable Experience
            </h3>
            <p>Tailor settings to suit your unique preferences and needs</p>
          </div>
        </div>
      </main>

      <footer className="text-center p-4">
        <p>&copy; 2023 FitBeats AI. All rights reserved.</p>
      </footer>
    </div>
  );
}