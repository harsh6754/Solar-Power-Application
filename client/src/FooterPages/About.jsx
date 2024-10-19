import React from "react"; 
import "../CSS/Privacy.css"; 
import { NavLink } from "react-router-dom";  

function About() {   
  return (     
    <section className="bookWebPage bg-[#252232] text-white font-ubuntu w-full h-[50%] p-5 flex flex-col items-center">       
      <h1 className="gradient_head text-3xl md:text-4xl lg:text-5xl">About Us</h1>       
      <div className="aboutContent text-base md:text-lg lg:text-xl mt-4">         
        <h2 className="gradient_head text-2xl md:text-3xl">Overview</h2>         
        <br/>         
        <span>Solar Power Application</span> is an innovative online marketplace designed for book lovers and collectors. Our mission is to make it easy for users to buy and sell used books, and to give old books a new life. With <span>Solar Power Application</span>, you can find the books you've been looking for at a fraction of the cost, and sell your own books to other users.       
      </div>         
      <div className="mt-5 flex flex-row justify-center  items-center">         
        <NavLink to="/Terms-And-Condition" className="about_options">           
          <p className="text-center">Terms & Condition</p>         
        </NavLink>         
        <NavLink to="/privacy-policy" className="about_options">           
          <p className="text-center">Privacy Policy</p>         
        </NavLink>         
        <NavLink to="/licences" className="about_options">           
          <p className="text-center">Licence</p>         
        </NavLink>       
      </div>     
    </section>   
  ); 
}  

export default About;
