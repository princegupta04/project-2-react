/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// import img1 from './public/img-1.jpg'; 
// import img2 from './public/img-2.jpg';
// import img3 from './img-3.jpg';
function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./Home.jsx" className="text-3xl text-green-500 font-bold">Home<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="./Renovation.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Home Renovation</a>
            <a href="./Portfolio.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Portfolio</a>
            <a href="./Modern.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Modern</a>
            <a href="./Interior.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Interior Design</a>
            <a href="./Contact.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Contact Us</a>
          </nav>
          <div className="space-x-4">
            {/* Commented out links */}
            {/* <a href="signin.jsx" className="text-green-500 text-xl hover:underline">Sign In</a>
            <a href="signup.jsx" className="text-green-500 text-xl hover:underline">Sign In</a> */}
            <a href="./Welcome.jsx" className="text-green-500 text-xl hover:underline">Log Out</a>
          </div>
        </div>
      </header>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-green-500 font-bold mb-4">Welcome to Home<span className="text-gray-400">OWN</span></h2>
          <p className="text-gray-600 text-xl mb-8">We Transform Your Dreams into Reality</p>
          <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">Learn More</a>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Interior Design</h3>
              <p className="text-gray-600">Create beautiful and functional interior spaces.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Home Renovation</h3>
              <p className="text-gray-600">Renovate and enhance your existing home.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Modern Designs</h3>
              <p className="text-gray-600">Explore modern and innovative architectural designs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/img-1.jpg" alt="Project 1" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Living Room</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/img-2.jpg" alt="Project 2" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Furnished Kitchen</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/img-3.jpg" alt="Project 3" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Soothing Bedroom</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">See More</a>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 text-lg mb-4">"Thrilled with the exceptional service and innovative designs provided by Architecting. Their team transformed our home beautifully. Highly recommended for their expertise and professionalism."</blockquote>
              <p className="text-green-500 font-semibold">William Brown</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 text-lg mb-4">"Architecting exceeded our expectations with their creative designs and attention to detail. Our dream home became a reality, thanks to their dedication and skill."</blockquote>
              <p className="text-green-500 font-semibold">James Wilson</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 text-lg mb-4">"Architecting's work is simply outstanding. They captured our vision perfectly, and our home now reflects our style. Truly grateful for their expertise and commitment."</blockquote>
              <p className="text-green-500 font-semibold">Christopher Lee</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-green-500 text-white py-5">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Home Architecting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
