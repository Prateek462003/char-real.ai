import React from "react";
// ...existing code...
import { Button } from "antd";

const TryAI = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{
        backgroundImage: `url('/Black prism concept AI generated _ Premium AI-generated image.jpeg')`,
      }}
    >
      <div className="flex flex-col justify-center items-start w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-6 sm:gap-8">
        <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-left">
          Personalised Conversations
        </span>
        <span className="text-[#fffc54] text-xl sm:text-2xl md:text-3xl font-bold text-left">
          Tailored AI Interactions
        </span>
        <span className="text-white text-base sm:text-lg md:text-xl text-left">
          Our AI companion personalizes conversations to reflect your unique
          <br className="hidden sm:block" />
          appearance and personality. Enjoy truly personalized interactions
          <br className="hidden sm:block" />
          with an AI that adapts to you.
        </span>
        <Button
          type="primary"
          className="!bg-[#fffc54] !text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/5 !font-semibold"
          size="medium"
        >
          Try for Free
        </Button>
      </div>
    </div>
  );
};

export default TryAI;
