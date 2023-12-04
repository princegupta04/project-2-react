import React from 'react';

function LogoutSuccess() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-3xl text-center text-green-500 font-bold mb-4">HOME<span className="text-gray-400">OWN</span></h1>
          <h2 className="text-xl text-black font-semibold text-center mb-6">Transforming Your Dreams into Reality</h2>
          <p className="text-gray-600 text-center mb-8">Welcome to HomeOwn, We specialize in creating beautiful and functional homes tailored to your needs. Explore our services and get started on your dream home today.</p>
          <h3 className="flex justify-center items-center font-semibold text-green-500 text-lg">YOU ARE SUCCESSFULLY LOGGED OUT.</h3>
          <div className="mt-8 flex justify-between items-center">
            <hr className="border-gray-300 w-1/3" />
            <span className="text-gray-600 text-lg"> To visit again</span>
            <hr className="border-gray-300 w-1/3" />
          </div>

          <div className="mt-4 flex justify-center">
            <a href="./Signin.jsx" className="bg-green-500 text-white text-lg px-6 py-2 rounded-full mr-4">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutSuccess;
