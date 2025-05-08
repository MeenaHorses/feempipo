import React from "react";
import arrowUpLogo from "../src/icons/up-arrow-svgrepo-com.svg";
import shareLogo from "../src/icons/share-svgrepo-com.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      {/* Back to top */}
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={arrowUpLogo} alt="back to top" />
        <span>Back to top</span>
      </div>

      {/* FeemPipo */}
      <div className="footer-item-feem-pipo">
        <span>© 2025 Feempipo.</span>
      </div>

      {/* Follow */}
      <div className="footer-item-follow">
        <a
          href={`https://www.instagram.com/feempipo/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Follow on Instagram</span>
          <img src={shareLogo} alt="Follow on instagram" />
        </a>
      </div>
    </div>
  );
};
