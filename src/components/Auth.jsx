import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

const Auth = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = window.reactRouterNavigate || (() => {});

  // Helper to get name from signup form
  function handleSignup(e) {
    e.preventDefault();
    const form = e.target;
    const firstName = form[1].value;
    const lastName = form[2].value;
    const name = `${firstName} ${lastName}`;
    localStorage.setItem("registeredName", name);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/welcome";
    if (onClose) onClose();
  }

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    // Use email as name if no registeredName
    localStorage.setItem("registeredName", email);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/welcome";
    if (onClose) onClose();
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-2xl mx-4 overflow-hidden relative">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseOutlined />
        </button>
        {/* Image Section */}
        <div className="w-1/3 bg-gray-100 flex items-center justify-center p-4">
          <img
            src="/logoSpinner.gif"
            alt="Auth Visual"
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Form Section */}
        <div className="w-2/3 p-6 flex flex-col min-h-[500px]">
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 font-semibold rounded focus:outline-none ${
                activeTab === "login"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded focus:outline-none ${
                activeTab === "signup"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          <div className="flex-grow flex items-start">
            {activeTab === "login" ? (
              <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleLogin}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white font-semibold py-2 rounded"
                >
                  Login
                </button>
              </form>
            ) : (
              <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSignup}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded px-3 py-2"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border rounded px-3 py-2 w-1/2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border rounded px-3 py-2 w-1/2"
                    required
                  />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded px-3 py-2"
                  required
                />
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-black" />
                    Subscribe to our newsletter
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-black" required />I
                    accept the{" "}
                    <a href="#" className="underline">
                      terms of service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      privacy policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white font-semibold py-2 rounded"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
