import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import EmailComposer from "./components/EmailComposer";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";

const App = () => {
  //static data for emails
  const [emails, setEmails] = useState([
    {
      id: 1,
      subject: "Welcome to React",
      sender: "admin@example.com",
      body: "Thank you for joining us!",
    },
    {
      id: 2,
      subject: "Meeting Reminder",
      sender: "team@example.com",
      body: "Don't forget about the team meeting at 3 PM.",
    },
    {
      id: 3,
      subject: "Discount Offer",
      sender: "promo@example.com",
      body: "Get 20% off on your next purchase!",
    },
  ]);

  //used to display the email in EmailDetail component
  const [selectedEmail, setSelectedEmail] = useState({
    id: 1,
    subject: "Welcome to React",
    sender: "admin@example.com",
    body: "Thank you for joining us!",
  });

  //adds the new emails to the state
  const sendEmail = (newEmail) => {
    setEmails([...emails, { id: emails.length + 1, ...newEmail }]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-green-50">
      <div className="w-1/3 border-r flex flex-col">
        <EmailComposer onSend={sendEmail} />
        <div className="overflow-y-auto">
          <EmailList emails={emails} onSelect={setSelectedEmail} />
        </div>
      </div>
      <EmailDetail email={selectedEmail} />
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
