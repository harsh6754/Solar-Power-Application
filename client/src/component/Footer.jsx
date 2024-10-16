// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Grid for Footer Content */}
//         <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* About Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">About SolarApp</h2>
//             <p className="text-sm">
//               SolarApp provides the best solutions for harnessing solar energy for residential and commercial use.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
//             <ul>
//               <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Projects</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Solar Solutions Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">Solar Solutions</h2>
//             <ul>
//               <li className="mb-2"><a href="#" className="hover:underline">Residential</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Commercial</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Solar Panels</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Energy Storage</a></li>
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
//             <p className="text-sm mb-2">Phone: +1 234 567 890</p>
//             <p className="text-sm mb-2">Email: contact@solarapp.com</p>
//             <p className="text-sm">Location: 123 Solar Street, Sun City</p>
//           </div>
//         </div>

//         {/* Social Media & Copyright */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//           <p className="text-sm text-center sm:text-left">&copy; 2024 SolarApp. All rights reserved.</p>
//           <div className="flex justify-center sm:justify-end space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms & Conditions</a>
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
