import React from "react";
import Hero from "../components/Hero";
import TryAI from "../components/TryAI";
import Welcome from "./Welcome";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? (
    <Welcome />
  ) : (
    <>
      <Hero />
      <TryAI />
    </>
  );
};

export default Home;
