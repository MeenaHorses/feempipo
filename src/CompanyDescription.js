import React from "react";

export const CompanyDescription = () => {
  return (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 30,
      }}
    >
      {/* pure (image)*/}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "fantasy",
            color: "red",
            fontSize: "40px",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {/* Pure genius */}
        </h2>
        {/* fusing */}
        <span
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          {/* Fusing technical magic with artistic flair */}
        </span>
        {/* recognition */}
        <div
          style={{
            textAlign: "center",
            margin: 30,
            width: "70%",
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: "white",
              lineHeight: 1.6,
            }}
          >
            We are recognised as a leading producer of first class media
            contents including films, documentaries, and commercials.
          </p>
        </div>
      </div>
    </div>
  );
};
