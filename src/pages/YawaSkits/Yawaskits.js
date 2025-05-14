import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import "../Documentaries/Documentaries.css";
import { yawaSkits } from "./YawaskitsData";

const Yawaskits = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="header-div">
        <Header />
      </div>
      <div className="documentaries-container">
        <h2 className="documentaries-title">Yawa Skits</h2>
        <div className="documentary-grid">
          {yawaSkits.map((doc, idx) => (
            <div
              key={idx}
              className={`documentary-card ${loaded ? "slide-in" : ""}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="video-wrapper">
                <iframe
                  src={doc.url}
                  title={`Documentary ${idx}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="documentary-iframe"
                ></iframe>
              </div>
              <h3 className="yawaskits-title">{doc.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Yawaskits;
