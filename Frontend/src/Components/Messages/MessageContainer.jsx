import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext"

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation}=useConversation()
  useEffect(()=> {
    return () => setSelectedConversation(null)
  },[setSelectedConversation]);
  return (
        <div className="md:min-w-[450px] flex flex-col h-full "  style={{background:"rgba(238,237,228,0.02)", border:"2px solid rgba(255,255,255,0.2)", backdropFilter:"blur(6px)", }}>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="px-4 py-2 mb-2 bg-slate-700">
              <span className="label-text font-bold text-white">To:</span>{" "}
              <span className="text-white font-bold">{selectedConversation.fullName}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
   
  );
};

export default MessageContainer;


 const NoChatSelected = () =>{
  const { authUser } = useAuthContext();
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullName} </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    );
};


