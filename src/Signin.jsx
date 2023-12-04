/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function SignupPage() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 max-w-md w-full">
          <h1 className="text-5xl text-center text-green-500 font-bold mb-4">HOME<span className="text-gray-400">OWN</span></h1>
          <h2 className="text-2xl text-black font-semibold text-center mb-4">Sign up for an account</h2>
          <p className="text-gray-400 text-center mb-4">Not Registered yet? <a href="./Signup.jsx" className="text-green-500">Sign in</a></p>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="text-black text-lg font-medium">Email Address</label>
              <input type="email" id="email" className="w-full border border-gray-400 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-black text-base font-medium">Password</label>
              <input type="password" id="password" className="w-full border border-gray-400 rounded" />
            </div>
            <div className="mb-2 flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-400 text-lg">Remember me</label>
            </div>
            <div className="mb-4">
              <a href="#" className="text-green-500 font-semibold text-lg">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full text-white text-center text-lg py-2 rounded bg-green-500 transition duration-300"><a href="home.html">Sign up</a></button>
          </form>

          <div className="mt-4 flex justify-between items-center">
            <hr className="border-gray-300 w-1/4" />
            <span className="text-gray-600">Or continue with</span>
            <hr className="border-gray-300 w-1/4" />
          </div>

          <div className="mt-4 flex justify-center">
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-full mr-4">Twitter</button>
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-full">Gmail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
