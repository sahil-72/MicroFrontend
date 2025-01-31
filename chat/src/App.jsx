import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import ChatSidebar from "./components/ChatSidebar";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <div className="flex h-screen border rounded-lg shadow-lg">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
