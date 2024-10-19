import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';

const languages =[
    {code :"en" , lang: "English"},
    {code :"hi" , lang: "Hindi"},
    {code :"guj" , lang: "Gujarati"},
    {code :"mrt" , lang: "Marathi"},
    {code :"raj" , lang: "Rajasthani"},
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
            <button 
                onClick={toggleMenu} 
                className="text-xl font-medium px-4 py-0 border rounded-lg"
            >
                {i18n.language.toUpperCase()} &#9662; {/* Down arrow symbol */}
            </button>
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
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
