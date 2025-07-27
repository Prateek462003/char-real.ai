import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Auth = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    accepted: false,
  });

  // Helper to get name from signup form
  function handleSignup(e) {
    e.preventDefault();
    const name = `${signupData.firstName} ${signupData.lastName}`;
    localStorage.setItem("registeredName", name);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/welcome";
    if (onClose) onClose();
  }

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("registeredName", loginData.email);
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
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-black !text-white !border-none !font-semibold !py-2 !rounded"
                  disabled={!(loginData.email && loginData.password)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                  }}
                >
                  Login
                </Button>
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
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border rounded px-3 py-2 w-1/2"
                    required
                    value={signupData.firstName}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border rounded px-3 py-2 w-1/2"
                    required
                    value={signupData.lastName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, lastName: e.target.value })
                    }
                  />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2"
                  required
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded px-3 py-2"
                  required
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="accent-black"
                      checked={signupData.subscribe || false}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          subscribe: e.target.checked,
                        })
                      }
                    />
                    Subscribe to our newsletter
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="accent-black"
                      required
                      checked={signupData.accepted}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          accepted: e.target.checked,
                        })
                      }
                    />
                    I accept the{" "}
                    <a href="#" className="underline">
                      terms of service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      privacy policy
                    </a>
                  </label>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-black !text-white !border-none !font-semibold !py-2 !rounded"
                  disabled={
                    !(
                      signupData.email &&
                      signupData.firstName &&
                      signupData.lastName &&
                      signupData.password &&
                      signupData.confirmPassword &&
                      signupData.accepted &&
                      signupData.password === signupData.confirmPassword
                    )
                  }
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                  }}
                >
                  Sign Up
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
