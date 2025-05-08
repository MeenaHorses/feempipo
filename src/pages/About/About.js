import React from "react";
import { Header } from "../../Header";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content slide-in">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Feempipo LTD is a renowned media production company headquartered in
          Abuja, Nigeria. With over a decade of expertise in movie production,
          documentaries, and content creation, we have established ourselves as
          a leading player in the Nigerian entertainment industry.
        </p>
        <p className="about-text">
          Our portfolio includes the highly successful Yawaskits YouTube
          channel, one of Nigeria's most recognized and beloved channels with an
          impressive following of over 6 million subscribers across all social
          media platforms.
        </p>
        <p className="about-text">
          Feempipo LTD is also the parent company of the popular Feempipo
          YouTube movie channel.
        </p>
        <h2 className="about-tagline">
          Creatives in
          <span className="highlight">Motion</span>
        </h2>
      </div>
    </div>
  );
};
export default About;
