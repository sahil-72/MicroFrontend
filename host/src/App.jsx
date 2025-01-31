import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import EmailComponent from "./components/EmailComponent";
import ChatComponent from "./components/ChatComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<EmailComponent />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
