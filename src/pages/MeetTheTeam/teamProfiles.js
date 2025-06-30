import { useRef, useEffect } from "react";
import xIcon from "../../icons/xIcon.svg";
import instagramIcon from "../../icons/instagram-svgrepo-com.svg";
import "./meetTheTeam.css";

export const TeamProfiles = ({ teamMembers }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = document.querySelector(".meet-the-team-container");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reveal");
        } else {
          section.classList.remove("reveal"); // remove so it re-animates on scroll again
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-container">
      <div ref={scrollRef} className="team-scroll-wrapper">
        {teamMembers.map((member, idx) => (
          <div className="team-member-card" key={idx}>
            <div className="profile-img-container">
              {member.name !== "Simpa Samson" ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-img"
                />
              ) : (
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-img edit"
                />
              )}
            </div>
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
            <div className="member-socials">
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="socials-image"
                  src={instagramIcon}
                  alt="instagram"
                />
              </a>
              <a
                href={member.socials.x}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="x-image" src={xIcon} alt="x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
