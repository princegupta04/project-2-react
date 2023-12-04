/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function ProjectList() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./Home.jsx" className="text-3xl text-center text-green-500 font-bold mb-4">HOME<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="./Renovation.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Home Renovation</a>
z            <a href="./Modern.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Modern</a>
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
          <h2 className="text-4xl text-green-500 font-bold mb-4">Explore Our Beautiful Projects</h2>
          <p className="text-gray-600 text-xl mb-8">Discover our stunning architectural designs and craftsmanship.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="home-blog-1.jpg" alt="House 1" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">David Smith</h3>
              <p className="text-gray-600">"Impressed by Architecting's unique architectural solutions. They turned our space into a masterpiece. Exceptional service and vision. Highly satisfied!"</p>
              <img src="img-1.jpg" alt="House 1 Details" className="mt-4 rounded-lg" />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="home-blog-2.jpg" alt="House 2" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">William Brown</h3>
              <p className="text-gray-600">"Great transformation by Architecting! Their innovative designs and commitment to timelines are commendable. We are thrilled with our revamped space."</p>
              <img src="img-5.jpg" alt="House 2 Details" className="mt-4 rounded-lg" />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="home-blog-3.jpg" alt="House 3" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl text-green-500 font-semibold mb-2">Emily Johnson</h3>
              <p className="text-gray-600">"Architecting's designs breathe life into spaces. Their creative approach and commitment to quality shine through. A fantastic team for any project."</p>
              <img src="img-3.jpg" alt="House 3 Details" className="mt-4 rounded-lg" />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">See More</a>
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

export default ProjectList;
