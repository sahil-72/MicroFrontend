import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "shared/Button";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/email");
  };

  return (
    <div className="bg-green-50 h-screen py-10">
      <h1 className="text-slate-800 text-5xl font-bold text-center">
        What do you want to do?
      </h1>
      <div className="flex justify-around mt-20 text-3xl font-bold">
        <div className="text-red-600 flex flex-col items-center justify-ce">
          <h3 className="mb-10">Send or read an email?</h3>

          {/* reusable component from shared micro frontend */}
          <Button
            color="red"
            text="Email"
            onClick={handleNavigation}
            name="email"
          />
        </div>
        <div className="text-green-600 flex flex-col items-center">
          <h3 className="mb-10">Want to text friends?</h3>

          {/* reusable component from shared micro frontend */}
          <Button
            color="green"
            text="Chat"
            onClick={handleNavigation}
            name="/chat"
          />
        </div>
      </div>
    </div>
  );
}
