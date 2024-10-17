import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Logo from '../src/Images/Solar.png';
import panel1 from '../src/Images/panel1.jpg'; // Example images
import panel2 from '../src/Images/panel2.jpg'; 
import panel3 from '../src/Images/panel3.jpg'; 


const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Move the background images array inside useEffect
    const backgroundImages = [panel1, panel2, panel3]; // Add as many as needed

    // Select a random background image
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setBackgroundImage(randomImage);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          navigate('/main'); // Redirect to the home page after loading completes
          return 100;
        }
        return prevProgress + 5; // Increase the progress by 5%
      });
    },100); // Simulate progress every 100ms

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set random background image
    >
      {/* Parul University and NAAC Logo */}
      <div className="absolute top-3 left-4 flex items-center">
        <img
          src={Logo} // Ensure this image is also in public or a proper path
          alt="Solar Power"
          className="h-20 mr-7"
        />
      </div>

      <div className="flex flex-col items-center w-full mt-[500px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 text-center text-shadow">
          Welcome to the <br />
          <span className="text-pink-600">Solar-Power-World</span>
        </h1>

        {/* Progress Bar */}
        <div className="w-4/5 md:w-2/3 lg:w-1/3 bg-gray-200 rounded-full h-4 mt-10">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-2 text-lg md:text-xl font-semibold text-red-500">
          {progress}% completed
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
