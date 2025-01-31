import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e.target.name);
  };

  return (
    <header className="bg-blue-900 p-4 flex h-[8vh] justify-between items-center  text-white">
      <h1 className="text-xl font-bold text-yellow-200">BlueBash</h1>
      <nav className="space-x-4">
        {/* reusable component from shared micro frontend */}
        <Button onClick={handleNavigation} name="/" text="Home" />
        <Button onClick={handleNavigation} name="/chat" text="Chat" />
        <Button onClick={handleNavigation} name="/email" text="Email" />
      </nav>
    </header>
  );
}
