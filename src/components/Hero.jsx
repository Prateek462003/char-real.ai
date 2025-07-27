import React, { useState } from "react";
import Auth from "./Auth";
import { Button } from "antd";

const Hero = () => {
  const [authVisible, setAuthVisible] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/public/heroVideo.m4v"
      />
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent relative z-10">
        <div className="flex items-center">
          <img
            src="/public/logoSpinner.gif"
            alt="Logo Spinner"
            className="h-16 w-16"
          />
        </div>
        <div className="flex gap-4">
          <Button
            type="primary"
            className="!bg-[#fffc54] !text-black"
            size="large"
            onClick={() => setAuthVisible(true)}
          >
            Login / Sign Up
          </Button>
        </div>
      </nav>
      {/* Slogan Text */}
      <div className="flex flex-col gap-2 absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
        <span className="text-3xl text-[#fffc54] font-bold">
          Real Emotions, Real Connections
        </span>
        <span className="text-2xl text-white font-bold">
          Meet Your Al Companion Today
        </span>
        <span className="text-lg text-white mt-2">
          Engage with real Al companions offering human-like
          interactions,powered by <br /> cutting-edge Al technology. Chat with
          Al girlfriends nd companions for <br /> conversations that feel truly
          authentic and secure
        </span>

        <Button
          type="primary"
          className="!bg-[#fffc54] !text-black w-1/5 !font-semibold"
          size="medium"
        >
          Start Chatting now
        </Button>
      </div>
      <Auth visible={authVisible} onClose={() => setAuthVisible(false)} />
    </div>
  );
};

export default Hero;
