/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="Home.jsx" className="text-3xl text-green-500 font-bold">HOME<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="./Renovation.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Home Renovation</a>
            <a href="./Portfolio.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Portfolio</a>
            <a href="#" className="text-xl px-3 py-2 rounded-full bg-green-500 text-white">Modern</a>
            <a href="./Interior.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Interior Design</a>
            <a href="./Contact.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Contact Us</a>
          </nav>
          <div className="space-x-4">
            <a href="./Welcome.jsx" className="text-green-500 text-xl hover:underline">Log Out</a>
          </div>
        </div>
      </header>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-green-500 font-bold mb-4">Explore Our Recent House Maps</h2>
          <p className="text-gray-600 text-xl mb-8">Discover our innovative modern house designs and architectural expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="house-map-1.png" alt="Map 1" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl text-green-500 font-semibold mb-2">Harmony Haven Layout</h3>
            <p className="text-gray-600">"Unique house maps tailored to clients' distinct visions and preferences."</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="house-map-2.png" alt="Map 2" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl text-green-500 font-semibold mb-2">Riverside Retreat Design</h3>
            <p className="text-gray-600">"Customized house maps, a fusion of client dreams and architectural expertise."</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="house-map-3.png" alt="Map 3" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl text-green-500 font-semibold mb-2">Sunrise Splendor Plan</h3>
            <p className="text-gray-600">"Bespoke house maps reflecting each client's individual style and needs."</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">See More</a>
        </div>
      </section>
      <section className="bg-white py-7">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-500 font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-600 text-xl">We reshape spaces to meet the demands of modern living while preserving functionality and aesthetics.</p>
          <div className="flex justify-center items-center">
            <img src="/public/map-1.png" alt="House 1" className="h-96 object-cover rounded" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-500 font-semibold mb-4">Latest Designs We Scored</h2>
          <p className="text-gray-600 text-xl mb-8">Explore our collection of modern house maps and floor plans:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="house-1.jpg" alt="Map 1" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Eco-Friendly Dream Home Plan</h3>
              <p className="text-gray-600">Personalized architectural blueprints, translating diverse client dreams into stunning homes.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="house-2.jpg" alt="Map 2" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Mountain View Villa Layout</h3>
              <p className="text-gray-600">Individualized house plans, crafted to match diverse client lifestyles and desires.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="house-3.jpg" alt="Map 3" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Casa Bella Blueprint</h3>
              <p className="text-gray-600">Bespoke house layouts, each one is a reflection of our clients' wishes.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">See More</a>
          </div>
        </div>
      </section>
      <footer className="bg-green-500 text-white py-5">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Modern House Maps. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
