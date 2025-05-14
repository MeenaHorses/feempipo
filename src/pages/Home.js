import React from "react";
import { Video } from "../Video";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CompanyDescription } from "../CompanyDescription";
import { MeetTheTeam } from "./MeetTheTeam/MeetTheTeam";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        {/* Main container */}
        <Video />

        {/* Company Description */}
        <CompanyDescription />

        {/* MeetTheTeam */}
        <MeetTheTeam />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
