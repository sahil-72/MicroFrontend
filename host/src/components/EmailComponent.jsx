import React, { useState } from "react";
import EmailComposer from "email/EmailComposer";
import EmailList from "email/EmailList";
import EmailDetail from "email/EmailDetail";

export default function EmailComponent() {
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

  const [selectedEmail, setSelectedEmail] = useState({
    id: 1,
    subject: "Welcome to React",
    sender: "admin@example.com",
    body: "Thank you for joining us!",
  });

  const sendEmail = (newEmail) => {
    setEmails([...emails, { id: emails.length + 1, ...newEmail }]);
  };

  return (
    <div className="flex h-[92vh] overflow-hidden bg-green-50">
      <div className="w-1/3 border-r flex flex-col">
        <EmailComposer onSend={sendEmail} />
        <div className="overflow-y-auto">
          <EmailList emails={emails} onSelect={setSelectedEmail} />
        </div>
      </div>
      <EmailDetail email={selectedEmail} />
    </div>
  );
}
