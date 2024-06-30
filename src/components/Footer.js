import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Training</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +44 345 678 903</p>
            <p className="mb-2">Email: info@bazaarlive.com</p>
            <p>Address: Parkaven 12345, Country CA 12345 Street UK 32, United Kingdom</p>
          </div>
          {/* Newsletter */}
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form action="#">
              <div className="flex">
                <input type="email" className="px-4 py-2 w-full text-black" placeholder="Your email address" />
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <a href="#" className="text-white font-bold text-2xl">Bazaar Live</a>
              <p className="text-sm">&copy; 2021 Copyright by Bazaar</p>
            </div>
            <div className="mb-4 sm:mb-0 text-center">
              <a href="#" className="text-white hover:text-gray-300 mx-2">Conditions of Use</a>
              <a href="#" className="text-white hover:text-gray-300 mx-2">Privacy & Policy</a>
              <a href="#" className="text-white hover:text-gray-300 mx-2">Press Room</a>
            </div>
            <div className="text-center sm:text-right">
              <a href="#" className="text-white hover:text-gray-300 mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mx-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
