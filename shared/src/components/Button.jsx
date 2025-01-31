import React from "react";

const Button = ({ color, onClick, text, tabIndex, name }) => {
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
  };

  return (
    <button
      className={`${colors[color]} text-white px-4 py-2 rounded`}
      onClick={onClick}
      tabIndex={tabIndex}
      name={name}
    >
      {text}
    </button>
  );
};

export default Button;
