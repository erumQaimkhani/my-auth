
"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

// LoginForm component
const LoginForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-center">Sign In</h2>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mt-4"
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 mt-4 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRedirect = () => {
    window.location.href = "https://www.clerk.com";
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-purple-100 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-20 lg:py-24 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-tight">
          Welcome to My Dashboard
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl">
          I am a Web Developer with a passion for creating beautiful and responsive websites.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <button
            onClick={handleRedirect}
            className="mt-8 bg-indigo-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Go to Clerk
          </button>

          <button
            onClick={toggleLoginForm}
            aria-label="Toggle Login Form"
            className="bg-indigo-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Sign In
          </button>

          <button
            onClick={() => signOut()}
            aria-label="Sign Out"
            className="bg-red-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Conditionally render LoginForm */}
      {showLoginForm && <LoginForm />}

      <footer className="bg-blue-600 text-white py-8">
        <div className="flex flex-col items-center space-y-2">
          <p>&copy; 2024 MyAuth. All Rights Reserved.</p>
          <p className="text-purple-300 hover:text-pink-500">
            Made by: Erum Azeemi Qaimkhani
          </p>
        </div>
      </footer>
    </div>
  );
}
