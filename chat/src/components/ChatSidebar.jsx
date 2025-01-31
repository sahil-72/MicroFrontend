import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

export default function ChatSidebar() {
  const { setselected } = useContext(ChatContext);

  // Static contacts data
  const contacts = [
    {
      id: 1,
      name: "Zachary West",
      message: "Hi, Lea! They are grilling celebrities ...",
      time: "5 min ago",
    },
    {
      id: 2,
      name: "Elisa Green",
      message: "The Principles Of Scientific Cooking",
      time: "20 jan 2025",
    },
    {
      id: 3,
      name: "Steve Rodgers",
      message: "Hi, Lea! They are grilling celebrities ...",
      time: "16 jan 2025",
    },
    {
      id: 4,
      name: "Louis Flores",
      message: "You might remember the Dell comp...",
      time: "10 jan 2025",
    },
  ];

  return (
    <div className="w-1/3 bg-green-50 p-4 border-r">
      <h1 className="text-lg font-bold mb-4">INBOX</h1>

      {/* displays the static contact data */}
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="p-2 border-b cursor-pointer hover:bg-green-100"
          onClick={() =>
            setselected({ name: contact.name, message: contact.message })
          }
        >
          <div className="flex items-center space-x-3">
            <div className="border border-slate-800 w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
              {contact.name[0]}
            </div>
            <div>
              <h3 className="font-semibold">{contact.name}</h3>
              <p className="text-sm text-gray-600">{contact.message}</p>
              <span className="text-xs text-gray-400">{contact.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
