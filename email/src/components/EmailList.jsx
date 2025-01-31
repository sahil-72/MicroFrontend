import React from "react";
import EmailItem from "./EmailItem";

export default function EmailList({ emails, onSelect }) {
  return (
    <div className="w-full overflow-y-auto">
      <h2 className="text-lg font-bold p-4 border-b bg-green-200">Inbox</h2>

      {/* displays the email in the inbox */}
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} onSelect={onSelect} />
      ))}
    </div>
  );
}
