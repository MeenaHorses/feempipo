import { React, useState } from "react";
import "./App.css";
import menuIcon from "../src/icons/menu-alt-02-svgrepo-com.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import feemPipoLogo from "../src/logos/feempipoLogo_cropped.png";
import back from "../src/icons/arrow-back-svgrepo-com.svg";

export const Header = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Function to navigate

  const menuItems = [
    { name: "Movies", path: "/movies" },
    { name: "Documentaries", path: "/documentaries" },
    { name: "Series", path: "/series" },
    { name: "Yawaskits", path: "/yawaskits" },
    { name: "About Us", path: "/about" },
    { name: "Contact us", path: "/contact-us" },
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - (left + width / 2)) / width) * 20; // Adjust sensitivity
    const y = ((e.clientY - (top + height / 2)) / height) * 20;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };
  return (
    <div className="header-main-container">
      <Link to="/" aria-label="Go to homepage">
        <img
          className="feem-pipo-logo"
          src={feemPipoLogo}
          alt="feem pipo"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </Link>

      {/* menu and menu icon */}
      <div className="nav-list">
        {location.pathname === "/" && (
          <div>
            {menuItems.map((menu, index) => {
              return (
                <Link
                  key={index}
                  to={menu.path}
                  style={{
                    display: "flex",
                    textDecoration:
                      hoveredIndex === index ? "underline" : "none",
                    color: "#FFD93D",
                    fontSize: 16,
                    fontWeight: "bold",
                    textShadow: "1px 1px 2px black",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {location.pathname !== "/" && (
        <button
          className="back-button"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          <img src={back} alt="back" />
          Back
        </button>
      )}

      {/* Mobile Menu Button */}
      {location.pathname === "/" && (
        <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
          Menu
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu"
            height={30}
            width={30}
          />
        </button>
      )}

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="menu-modal">
          <button className="close-button" onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>
          {menuItems.map((menu, index) => (
            <Link key={index} to={menu.path} className="modal-menu-link">
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
