/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function ContactUs() {
  return (
    <div>
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./Home.jsx" className="text-3xl text-green-500 font-bold">HOME<span className="text-gray-400">OWN</span></a>
          <nav className="space-x-4">
            <a href="./Renovation.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Home Renovation</a>
            <a href="./Portfolio.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Portfolio</a>
            <a href="./Modern.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Modern</a>
            <a href="./Interior.jsx" className="text-green-500 text-xl px-3 py-2 rounded-full hover:bg-green-500 hover:text-white">Interior Design</a>
            <a href="#" className="text-xl px-3 py-2 rounded-full bg-green-500 text-white">Contact Us</a>
          </nav>
          <div className="space-x-4">
          </div>
        </div>
      </header>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-green-500 font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-xl mb-8">We'd love to hear from you. Reach out to us with your inquiries or project ideas.</p>
        </div>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" name="message" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" rows="6" required></textarea>
              </div>
              <div>
                <div className="mt-8 flex justify-left">
                  <a href="#" className="bg-green-500 text-white text-lg px-6 py-3 rounded-full hover:text-green-500 hover:bg-white transition duration-300">Send</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Reach Us Out</h2>
          <p className="text-gray-600 text-xl mb-4">Connect with us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href=""><i className="fa-regular fa-envelope text-green-500 mx-3 text-3xl"></i></a>
            <a href=""><i className="fa-brands fa-instagram text-green-500 mx-3 text-3xl"></i></a>
            <a href=""><i className="fa-brands fa-twitter text-green-500 mx-3 text-3xl"></i></a>
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

export default ContactUs;
