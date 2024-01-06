import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMarker, FaPhone } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="bg-teal-950 text-white p-6 lg:px-12 lg:py-6 rounded">
      <h2 className="text-2xl font-bold mb-5 tracking-wide">Info</h2>
      <p className=" text-lg text-gray-300 flex items-center gap-3 mb-3">
        <FaEnvelope /> omitogunsherifat75@gmail.com
      </p>
      <p className="text-lg text-gray-300 flex items-center gap-3 mb-3">
        <FaPhone /> (+234) 907 726 3621
      </p>
      <p className="text-lg text-gray-300 flex items-center gap-3 mb-3">
        <FaMapMarkerAlt /> Lagos, Nigeria
      </p>
    </div>
  );
};

export default ContactCard;
