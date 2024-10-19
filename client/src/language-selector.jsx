import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Import a globe icon from react-icons

const languages = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "guj", lang: "Gujarati" },
    { code: "mrt", lang: "Marathi" },
    { code: "raj", lang: "Rajasthani" },
];

const Languageselector = () => {
    const { i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false); // Close the menu after selecting a language
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Language selector button with an icon */}
            <button 
                onClick={toggleMenu} 
                className="flex items-center text-xl font-medium px-4 py-0 border rounded-lg"
            >
                <FaGlobe className="mr-2" /> {/* Globe icon */}
                {i18n.language.toUpperCase()} &#9662; {/* Down arrow symbol */}
            </button>
            {isMenuOpen && (
                <div className="absolute bottom-full left-3 mb-2 w-40 bg-white border rounded-lg shadow-lg">
                    {languages.map((lng) => (
                        <button
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${lng.code === i18n.language ? "font-bold" : ""}`}
                        >
                            {lng.lang}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Languageselector;
