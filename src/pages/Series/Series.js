import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import "../Documentaries/Documentaries.css";
import { series } from "../Series/SeriesData";

const Series = () => {
  const [loaded, setLoaded] = useState(false);
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="documentaries-container">
      <Header />
      <h2 className="documentaries-title">Series</h2>
      <div className="documentary-grid">
        {series.map((video) => {
          const isExpanded = expandedIds.includes(video.id);
          const shouldTruncate = video.description.length > 150;

          return (
            <div
              key={video.id}
              className={`documentary-card ${loaded ? "slide-in" : ""}`}
              style={{ transitionDelay: `${video.description.length * 1.5}ms` }}
            >
              <div className="video-wrapper">
                <iframe
                  src={video.url}
                  title={`Documentary ${video.id}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="documentary-iframe"
                ></iframe>
              </div>
              <h3>{video.title}</h3>
              <p className={`doc-description ${isExpanded ? "expanded" : ""}`}>
                {video.description}
              </p>

              {shouldTruncate && (
                <button
                  className="toggle-button"
                  onClick={() => toggleExpand(video.id)}
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Series;
