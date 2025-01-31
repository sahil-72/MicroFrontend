import { useContext, useState } from "react";
import Button from "shared/Button";
import { ChatContext } from "../context/ChatContext";
import { toast, ToastContainer } from "react-toastify";

export default function ChatWindow() {
  const [text, settext] = useState("");
  const [messages, setmessages] = useState([]);
  const { selected } = useContext(ChatContext);

  const handleText = (e) => {
    settext(e.target.value);
  };

  const handleSend = () => {
    if (text.trim() != "") {
      setmessages([...messages, text]);
      settext("");
    }

    // displays a toast for empty input
    else {
      toast.error("Message cannot be empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  //handling the enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col w-2/3" onKeyDown={handleKeyDown}>
      <header className=" left-0 w-full p-3 bg-red-50 flex items-center gap-2">
        <h1 className="text-lg font-bold">CHAT</h1>
      </header>

      <div className=" p-4 flex flex-col h-full relative">
        <div className="space-y-3 flex-1 flex-col overflow-y-auto">
          <div className="p-2 bg-gray-200 rounded-lg w-fit">
            <h3 className="font-semibold text-sm">{selected.name}</h3>
            <p className="text-gray-800">{selected.message}</p>
          </div>
          <div className="flex flex-col justify-end items-end mt-1 pr-4 space-y-3 flex-1 overflow-y-auto">
            {/* displays the messages we type in inbox */}
            {messages.map((msg, index) => (
              <>
                <div
                  key={index}
                  className="p-2 bg-gray-200 rounded-lg w-fit mt-1 flex flex-col justify-end items-end"
                >
                  <h3 className="font-semibold text-sm text-left">You</h3>
                  <p className="text-gray-800">{msg}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bottom-0 left-0 w-full p-4 bg-red-50 flex items-center gap-2">
        <input
          className="border-4 p-2 border-slate-800 w-[90%] rounded-lg"
          type="text"
          placeholder="Message..."
          value={text}
          onChange={handleText}
        />
        <div className="w-[10%] flex justify-center">
          {/* reusable component from shared micro frontend */}
          <Button color="red" text="Send" onClick={handleSend} tabIndex="0" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
