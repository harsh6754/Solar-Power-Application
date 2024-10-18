import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './utils/firebaseConfig'; // Assuming Firebase is configured correctly

import Logo from '../src/Images/Solar.png'; // Logo image

const LoadingPage = ({hideHeaderFooter}) => {
  const [progress, setProgress] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const navigate = useNavigate();

  // Fetch a random image URL from Firebase Storage
  const fetchRandomImageUrl = async () => {
    const imageFiles = ['gs://t-music-be993.appspot.com/Solar/panel1.jpg', 'gs://t-music-be993.appspot.com/Solar/panel2.jpg', 'gs://t-music-be993.appspot.com/Solar/panel3.jpg']; // Update paths according to your Firebase Storage structure
    const randomFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    try {
      const fileRef = ref(storage, randomFile); // Create a reference to the image file
      const url = await getDownloadURL(fileRef); // Get the download URL
      return url;
    } catch (error) {
      console.error('Error fetching random image URL:', error.message);
    }
  };

  useEffect(() => {
    const setRandomBackgroundImage = async () => {
      const imageUrl = await fetchRandomImageUrl(); // Fetch random image URL
      if (imageUrl) {
        setBackgroundImage(imageUrl); // Set the fetched URL as the background image
      }
    };

    setRandomBackgroundImage();

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          navigate('/main'); // Redirect to the home page after loading completes
          return 100;
        }
        return prevProgress + 5; // Increase the progress by 5%
      });
    }, 100); // Simulate progress every 100ms

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set dynamic background image
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
