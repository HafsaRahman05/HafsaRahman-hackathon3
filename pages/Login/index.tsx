"use client"; // Marks this as a Client Component

import React from 'react';
import Footer from "../Footer";
import Navbar from "../navbar";

const Login = () => {
  return (
    <div className="w-full bg-gray-50">
      <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Login</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Login</span>
          </p>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-black-100 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl text-[#151875] font-bold mb-4 text-center">Login</h1>
          <p className="text-gray-700 text-center mb-6">
            Please login using one of the following methods.
          </p>

          {/* Sign In Options */}
          <div className="mb-6 space-y-4">
            {/* Email Sign In */}
            <button
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign In with Email
            </button>

            {/* Google Sign In */}
            <button
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign In with Google
            </button>

            {/* Facebook Sign In */}
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Sign In with Facebook
            </button>
          </div>

          <div className="text-center mb-4">
            <span className="text-gray-700">or</span>
          </div>

          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-black border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-black border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="mb-6 text-right">
              <a
                href="#"
                className="text-sm text-pink-500 hover:underline focus:outline-none"
              >
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-pink-500 font-medium hover:underline focus:outline-none"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
