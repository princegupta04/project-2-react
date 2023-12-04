import React from 'react';

function HomeArchitecting() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-3xl text-center text-green-500 font-bold mb-4">HOME<span className="text-gray-400">OWN</span></h1>
          <h2 className="text-xl text-black font-semibold text-center mb-6">Transforming Your Dreams into Reality</h2>
          <p className="text-gray-600 text-center mb-8">Welcome to Home Architecting! We specialize in creating beautiful and functional homes tailored to your needs. Explore our services and get started on your dream home today.</p>
  
          <div className="mt-8 flex justify-between items-center">
            <hr className="border-gray-300 w-1/4" />
            <span className="text-gray-600">To connect with us</span>
            <hr className="border-gray-300 w-1/4" />
          </div>

          <div className="mt-4 flex justify-center">
            <a href="./Signin.jsx" className="bg-green-500 text-white text-lg px-4 py-2 rounded-full mr-4">Sign in</a>
            <a href="./Signup.jsx" className="bg-green-500 text-white text-lg px-4 py-2 rounded-full">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeArchitecting;
