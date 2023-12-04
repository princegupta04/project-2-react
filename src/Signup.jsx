import React from 'react';

function RegistrationPage() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-3xl text-center text-green-500 font-bold mb-4">HOME<span className="text-gray-400">OWN</span></h1>
          <h2 className="text-xl text-black font-semibold text-center mb-4">Create your account</h2>
          <p className="text-gray-400 text-center mb-4">Already a member? <a href="./Signin.jsx" className="text-green-500">Sign in</a></p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-black text-base font-medium">Full Name</label>
              <input type="text" id="name" className="w-full border border-gray-400 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-black text-base font-medium">Email Address</label>
              <input type="email" id="email" className="w-full border border-gray-400 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-black text-base font-medium">Password</label>
              <input type="password" id="password" className="w-full border border-gray-400 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="text-black text-base font-medium">Confirm Password</label>
              <input type="password" id="confirm-password" className="w-full border border-gray-400 p-2 rounded" />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white text-center mt-2 text-lg py-2 rounded transition duration-300">
              <a href="./Home.jsx">Sign in</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
