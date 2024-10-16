
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="/career" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="/Brand" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="/blogs" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="privacy-policy" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="/licences" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="/Terms-And-Condition" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">SolarPower™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 md:mt-0 sm:justify-center">
            {/* Social media icons */}
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Facebook page</span>
              {/* SVG Icon for Facebook */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Discord community</span>
              {/* SVG Icon for Discord */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Twitter page</span>
              {/* SVG Icon for Twitter */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">GitHub account</span>
              {/* SVG Icon for GitHub */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Dribbble account</span>
              {/* SVG Icon for Dribbble */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
