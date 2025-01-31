import React from "react";
import ChatSidebar from "chat/ChatSidebar";
import ChatWindow from "chat/ChatWindow";
import { ChatProvider } from "chat/ChatContext";

export default function ChatComponent() {
  return (
    <ChatProvider>
      <div className="flex h-[92vh] border rounded-lg shadow-lg">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}
