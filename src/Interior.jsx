/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function InteriorDesign() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./Home.jsx" className="text-3xl text-green-500 font-bold">HOME<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="./Renovation.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Home Renovation</a>
            <a href="./Portfolio.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover-bg-green-500 hover-text-white">Portfolio</a>
            <a href="./Modern.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover-bg-green-500 hover-text-white">Modern</a>
            <a href="#" className="text-xl px-3 py-2 rounded-full bg-green-500 text-white">Interior Design</a>
            <a href="./Contact.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover-bg-green-500 hover-text-white">Contact Us</a>
          </nav>
          <div className="space-x-4">
            <a href="./Welcome.jsx" className="text-green-500 text-xl hover-underline">Log Out</a>
          </div>
        </div>
      </header>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-green-500 font-bold mb-4">Transform Your Space</h2>
          <p className="text-gray-600 text-xl mb-8">Experience creative interior designs that elevate your living environment.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-500 font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Living Room Design</h3>
              <p className="text-gray-600">Create a cozy and stylish living room that suits your lifestyle.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Kitchen Design</h3>
              <p className="text-gray-600">Revamp your kitchen with functional and modern design solutions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-green-500 font-semibold mb-2">Bedroom Design</h3>
              <p className="text-gray-600">Create a relaxing and stylish bedroom oasis that reflects your taste.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-500 font-semibold mb-4">Home Decor</h2>
          <p className="text-gray-600 text-xl mb-8">Discover elegant home decor items to enhance your living spaces:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="decor1.jpg" alt="Decor 1" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Decor Item 1</h3>
              <p className="text-gray-600">Enhance your space with this beautiful decor piece.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="decor2.jpg" alt="Decor 2" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Decor Item 2</h3>
              <p className="text-gray-600">Add a touch of elegance to your home with this decor item.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="decor3.jpg" alt="Decor 3" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Decor Item 3</h3>
              <p className="text-gray-600">Make a statement with this unique home decor piece.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-500 font-semibold mb-4">Furniture</h2>
          <p className="text-gray-600 text-xl mb-8">Explore comfortable and stylish sofa and chair options:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="sofa7.png" alt="Sofa 1" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Sofa</h3>
              <p className="text-gray-600">Relax in style with this comfortable sofa.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="insta-sofa-2.jpg" alt="Sofa 2" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Sofa</h3>
              <p className="text-gray-600">Upgrade your living room with this elegant sofa.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="sofa1.png" alt="Sofa 2" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Sofa</h3>
              <p className="text-gray-600">Upgrade your living room with this elegant sofa.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="chair1.jpg" alt="Chair 1" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Chair</h3>
              <p className="text-gray-600">Add a stylish accent with this chair.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="chair2.jpg" alt="Chair 1" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Chair</h3>
              <p className="text-gray-600">Add a stylish accent with this chair.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="chair3.jpg" alt="Chair 1" className="w-full h-96 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Chair</h3>
              <p className="text-gray-600">Add a stylish accent with this chair.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Portfolio</h2>
          <p className="text-gray-600 text-xl mb-8">Explore our interior design and decor portfolio:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="int-1.jpg" alt="Portfolio 1" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Modern</h3>
              <p className="text-gray-600">Sleek, minimalist, clean lines, contemporary, open spaces.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="int-3.jpg" alt="Portfolio 2" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Vintage</h3>
              <p className="text-gray-600">Cozy, natural, woodsy, warm, earthy tones.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="int-2.jpg" alt="Portfolio 3" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">Transitional</h3>
              <p className="text-gray-600">Blend of modern and traditional, versatile, balanced</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-green-500 text-white py-5">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Interior Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default InteriorDesign;
