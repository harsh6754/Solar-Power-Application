import React from "react";
import { NavLink } from "react-router-dom";

function Licensing() {
  return (
    <section className="bookWebPage bg-[#252232] text-white font-ubuntu w-full h-auto p-5 ">
      <h1 className="gradient_head">
        <NavLink to="/about">
          <span style={{ fontSize: "20px" }}>&#8592;</span>&nbsp; Safety Remarks
        </NavLink>
      </h1>
      <ul className="aboutContent">
        <li>
          Be cautious of unsolicited emails or messages that ask for personal
          information, even if they appear to be from SolarConnect or another trusted
          source. Avoid clicking on links or downloading attachments from unknown or
          suspicious sources.
        </li>

        <li>
          Exercise care when interacting with unfamiliar buyers or sellers. When
          arranging meetings or exchanges, it’s recommended to meet in a public
          place and consider bringing a friend or family member along.
        </li>

        <li>
          Always ensure you are aware of your surroundings when arranging for solar
          equipment installation or maintenance. If you feel uncomfortable, don’t
          hesitate to cancel or postpone the arrangement.
        </li>

        <li>
          When purchasing or selling solar equipment, check the condition of each
          component, including panels, inverters, and batteries, before completing
          the transaction.
        </li>

        <li>
          Keep your account credentials secure and never share them with others. If
          you suspect unauthorized access to your account, contact SolarConnect
          support immediately.
        </li>

        <li>
          Be mindful of the potential risks associated with online transactions, and
          take necessary precautions to protect yourself and your equipment.
        </li>
      </ul>

    </section>
  );
}

export default Licensing;
