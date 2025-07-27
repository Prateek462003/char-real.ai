import React from "react";

const Welcome = () => {
  const name = localStorage.getItem("registeredName") || "User";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="absolute top-4 left-4">
        <span className="text-xl font-bold text-black">Welcome New {name}</span>
      </div>
      <img
        src="/logoSpinner.gif"
        alt="Welcome GIF"
        className="w-48 h-48 mb-8"
      />
      <button
        className="bg-black text-white font-semibold py-2 px-6 rounded"
        onClick={() => {
          localStorage.removeItem("registeredName");
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
