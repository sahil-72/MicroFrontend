import React from "react";

export default function EmailItem({ email, onSelect }) {
  return (
    <div
      className="p-4 border-b cursor-pointer hover:bg-green-100 transition duration-200"
      onClick={() => onSelect(email)}
    >
      <h3 className="font-semibold">{email.subject}</h3>
      <p className="text-sm text-gray-500">{email.sender}</p>
    </div>
  );
}
