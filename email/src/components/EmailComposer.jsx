import React, { useState } from "react";
import Button from "shared/Button";
import { toast, ToastContainer } from "react-toastify";

export default function EmailComposer({ onSend }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (subject && body) {
      onSend({ subject, sender: "you@example.com", body });
      setSubject("");
      setBody("");
    }

    //displays the toast for empty subject or body
    else {
      toast.error("Subject and Body cannot be empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-bold mb-2">Compose Email</h2>
      <input
        className="w-full p-2 border mb-2"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="w-full p-2 border mb-2 max-h-60 min-h-10"
        placeholder="Write your email..."
        rows="4"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      {/* reusable component from shared micro frontend */}
      <Button color="green" text="Send" onClick={handleSend} />

      <ToastContainer />
    </div>
  );
}
