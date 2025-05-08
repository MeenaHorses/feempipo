import { React, useState } from "react";
import xbetLogo from "../src/logos/xbet1 2.png";
import facebookLogo from "../src/logos/facebook1.png";
import googleLogo from "../src/logos/googleblack.jpeg";
import youtubeLogo from "../src/logos/youtubeblack.png";

export const Clients = () => {
  const clients = [
    { name: "1XBet", image: xbetLogo },
    { name: "Facebook", image: facebookLogo },
    { name: "Youtube", image: youtubeLogo },
    { name: "Google", image: googleLogo },
    { name: "Neocloud", image: xbetLogo },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {clients.map((client, index) => {
        return (
          <div
            key={index}
            style={{
              height: 50,
              width: 100,
              borderRadius: 1,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <img
              src={client.image}
              alt={client.name}
              style={{
                width: "100%", // Ensures all images fit within the container
                height: "100%",
                objectFit: "contain", // Prevents stretching, keeps aspect ratio
              }}
            />
            {/* {client} */}
          </div>
        );
      })}
    </div>
  );
};
