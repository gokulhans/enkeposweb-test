import React from "react";

const FooterNewsLetter = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Connect With Whatsapp</h3>
      <p className="mb-4">
        Subscribe Our Newsletter To Get Latest Update And News
      </p>
      <input
        type="text"
        placeholder="Your phone number"
        className="w-full p-2 mb-4 text-black rounded"
      />
      <button className="w-full bg-white text-blue-500 py-2 rounded font-semibold">
        Join
      </button>
    </div>
  );
};

export default FooterNewsLetter;
