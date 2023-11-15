import React from "react";

const Chat = () => {
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#7dd87d] ">
      <div className="mt-[80px] flex justify-between items-center ">
        <h3 className="pt-5 font-bold text-[22px] ml-20">Market Chats </h3>
      </div>
      <div className="bg-[#4c9173] rounded-2xl p-9 ml-3 mr-3 mt-5">
        This is the first conversation of the chat{" "}
      </div>

      <div className="bg-[#4c9173] rounded-2xl p-9 ml-3 mr-3 mt-5">
        This is the second conversation of the chat{" "}
      </div>

      <div className="bg-[#4c9173] rounded-2xl p-9 ml-3 mr-3 mt-5">
        This is the third conversation of the chat{" "}
      </div>
    </div>
  );
};

export default Chat;
