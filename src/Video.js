import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";

export const Video = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="main-video-container">
      <Header />
      <video autoPlay loop muted>
        <source src="/videos/HAFMTrailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="caption"
        style={{
          opacity: Math.max(0.3, 1 - scrollY / 500),
          transition: "opacity 0.3s ease-out",
        }}
      >
        <div className="caption-appear">
          <b>CREATIVES IN </b>
          <span>MOTION</span>
        </div>
      </div>
    </div>
  );
};
