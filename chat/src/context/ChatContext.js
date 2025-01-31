import { createContext, useState } from "react";

// Created Context
export const ChatContext = createContext();

// Created Provider
export const ChatProvider = ({ children }) => {
    const [selected, setselected] = useState({
        name: "Zachary West",
        message: "Hi, Lea! They are grilling celebrities ...",
    });

    return (
        <ChatContext.Provider value={{ selected, setselected }}>
            {children}
        </ChatContext.Provider>
    );
};
