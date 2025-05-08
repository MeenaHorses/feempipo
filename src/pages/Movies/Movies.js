import React, { useState, useEffect } from "react";
import "./Movies.css";
import { Header } from "../../Header";
import { videos } from "./MoviesData";

const MoviesPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="movies-container">
      <Header />
      <h2 className="header">Movies</h2>
      <div className="video-grid">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className={`video-card ${loaded ? "slide-in" : ""}`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="video-wrapper">
              <iframe
                src={video.url}
                title={`Documentary ${idx}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
            <h3 className="movie-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
