import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/Privacy.css'

function Terms() {
  return (
    <section className="solarWebPage bg-[#252232] text-white font-ubuntu w-full h-screen p-5">
      <h1 className="gradient_head">
        <NavLink to="/about">
          <span style={{ fontSize: "20px" }}>&#8592;</span>&nbsp; Terms and Conditions
        </NavLink>
      </h1>
      <ul className="aboutContent">
        <li>
          <span>Introduction: </span>
          Welcome to SolarCart, an online platform dedicated to providing solar energy solutions to households and businesses. By using our website and services, you agree to comply with the following terms and conditions.
        </li>

        <li>
          <span>User Account:</span> In order to use certain features of our website, such as purchasing solar products or scheduling installation services, you must register for an account. You are responsible for maintaining the confidentiality of your account and password. SolarCart is not responsible for unauthorized account access.
        </li>

        <li>
          <span>Solar Product Listings:</span> SolarCart provides users with the ability to browse and purchase solar products, such as solar panels, batteries, and inverters. You agree to verify product specifications and compatibility with your energy needs before making any purchase.
        </li>

        <li>
          <span>Installation Services:</span> When booking installation services through SolarCart, you agree to provide accurate details about your property. SolarCart works with certified professionals to ensure high-quality installations, but is not liable for any damage resulting from installation activities.
        </li>

        <li>
          <span>Payment Terms:</span> All payments for products and services must be made in accordance with the prices listed on the website at the time of purchase. You agree to make timely payments for any outstanding invoices related to your solar purchases or services.
        </li>

        <li>
          <span>Shipping and Delivery:</span> SolarCart partners with third-party delivery services for product shipments. While we strive to ensure timely delivery, we are not responsible for delays or damages caused during transit.
        </li>

        <li>
          <span>Returns and Refunds:</span> Solar products and installation services are typically non-refundable, unless explicitly stated in the product or service description. For eligible returns, the product must be in its original condition and packaging.
        </li>

        <li>
          <span>Warranty:</span> All products sold on SolarCart come with manufacturer warranties. Please refer to individual product details for warranty information. SolarCart is not responsible for handling warranty claims, but we can assist in directing you to the appropriate manufacturer.
        </li>

        <li>
          <span>Liability:</span> SolarCart is not responsible for any damage, loss, or injury that may result from the use of solar products purchased through our website, including improper installation or use. Users agree to follow all product instructions and safety guidelines.
        </li>

        <li>
          <span>Intellectual Property:</span> All content, including images, text, and design on SolarCart's website, is the property of SolarCart and is protected by copyright laws. Unauthorized use or reproduction of our content is prohibited.
        </li>

        <li>
          <span>Changes to the Terms and Conditions:</span> SolarCart reserves the right to modify these terms and conditions at any time. Any changes will be communicated via the website, and continued use of our services implies acceptance of the updated terms.
        </li>
      </ul>
    </section>
  );
}

export default Terms;
