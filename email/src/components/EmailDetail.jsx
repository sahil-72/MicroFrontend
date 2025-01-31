import React from "react";

export default function EmailDetail({ email }) {
  return (
    <div className="w-2/3 p-6 bg-red-50">
      <h2 className="text-xl font-bold mb-2">{email.subject}</h2>
      <p className="text-gray-700">From: {email.sender}</p>
      <hr className="my-4" />
      <p className="mt-4">{email.body}</p>
    </div>
  );
}
