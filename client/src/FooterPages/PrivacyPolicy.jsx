import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/Privacy.css'

function PrivacyPolicy() {
  return (
    <section className="bookWebPage bg-[#252232] text-white font-ubuntu w-full h-screen p-5 ">
      <h1 className="gradient_head">
        <NavLink to="/main">
          <span style={{ fontSize: "20px" }}>&#8592;</span>&nbsp; Privacy Policy
        </NavLink>
      </h1>
      <ul className="aboutContent">
        <li>
          <span>Introduction: </span>
          SolarPowerApp is committed to protecting the privacy of our users. This
          privacy policy outlines the information we collect and how it is used.
          By using our website and services, you consent to the collection and
          use of your information as described in this policy.
        </li>

        <li>
          <span>Information Collection: </span>
          SolarPowerApp collects personal information from users who sign up for an
          account or request solar energy services. This includes your name, email
          address, phone number, installation address, and details related to your energy 
          consumption and solar panel preferences.
        </li>

        <li>
          <span>Use of Information: </span>
          SolarPowerApp uses the information collected to provide and improve our
          solar energy solutions. We may use your address to provide location-specific
          energy estimates and service availability. Your phone number will be used for 
          support and inquiries related to the installation and maintenance of solar panels.
        </li>

        <li>
          <span>Information Sharing: </span>
          SolarPowerApp does not share personal information with third parties,
          except as necessary to provide our solar energy solutions and fulfill
          requests for solar installations or maintenance.
        </li>

        <li>
          <span>Data Retention: </span>
          SolarPowerApp will retain your personal information for as long as your
          account is active or as needed to provide our services and ensure proper 
          maintenance of your solar system.
        </li>

        <li>
          <span>Data Security: </span>
          SolarPowerApp implements robust security measures to protect your personal 
          information from unauthorized access, alteration, disclosure, or destruction.
        </li>

        <li>
          <span>Changes to the Privacy Policy: </span>
          SolarPowerApp reserves the right to update this privacy policy at any time.
          We will notify you of any significant changes by posting the updated privacy policy on 
          our website.
        </li>
      </ul>
    </section>
  );
}

export default PrivacyPolicy;