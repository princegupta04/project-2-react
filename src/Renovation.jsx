/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function HomeRenovation() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./Home.jsx" className="text-3xl text-green-500 font-bold">HOME<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="#" className="text-xl px-3 py-2 rounded-full bg-green-500 text-white">Home Renovation</a>
            <a href="./Portfolio.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Portfolio</a>
            <a href="./Modern.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Modern</a>
            <a href="./Interior.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Interior Design</a>
            <a href="./Contact.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Contact Us</a>
          </nav>
          <div className="space-x-4">
            {/* <a href="signin.jsx" className="text-green-500 text-xl hover:underline">Sign In</a>
            <a href="signup.jsx" className="text-green-500 text-xl hover:underline">Sign In</a> */}
            <a href="./Welcome.jsx" className="text-green-500 text-xl hover:underline">Log Out</a>
          </div>
        </div>
      </header>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-green-500 font-bold mb-4">Transform Your Home</h2>
          <p className="text-gray-600 text-xl mb-8">Revitalize your living space with our home renovation services.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Kitchen Remodeling</h3>
              <p className="text-gray-600">Transform your kitchen into a modern and functional space.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Bathroom Renovation</h3>
              <p className="text-gray-600">Upgrade your bathroom for comfort and style.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Interior Refurbishing</h3>
              <p className="text-gray-600">Refresh your living spaces with our interior refurbishing services.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Before and After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="before-1.jpg" alt="Before 1" className="w-full h-96 object-cover mb-4 rounded" />
              <img src="after-1.jpg" alt="After 1" className="w-full h-96 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="before-2.jpg" alt="Before 2" className="w-full h-96 object-cover mb-4 rounded" />
              <img src="after-2.jpeg" alt="After 2" className="w-full h-96 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="before-3.jpg" alt="Before 3" className="w-full h-96 object-cover mb-4 rounded" />
              <img src="after-3.jpg" alt="After 3" className="w-full h-96 object-cover rounded" />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">View More</a>
          </div>
        </div>
      </section>
      <footer className="bg-green-500 text-white py-5">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Home Renovation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomeRenovation;
