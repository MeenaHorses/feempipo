import React from "react";

export const CompanyDescription = () => {
  return (
    <div
      style={{
        paddingTop: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
              lineHeight: 2,
            }}
          >
            We are a collective of innovative multimedia professionals,
            specializing in filmmaking and content creation. We deliver
            top-notch movies and series that captivate audiences worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};
