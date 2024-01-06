import React from 'react'

const CtaButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-950 text-white text-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default CtaButton
