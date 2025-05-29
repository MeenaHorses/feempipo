import { useRef, useState, useEffect } from "react";
import rightArrow from "../../icons/right-arrow-backup-2-svgrepo-com.svg";
import leftArrow from "../../icons/navigation-back-arrow-svgrepo-com.svg";
import xIcon from "../../icons/xIcon.svg";
import instagramIcon from "../../icons/instagram-svgrepo-com.svg";
import "./meetTheTeam.css";

export const TeamProfiles = ({ teamMembers }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollWidth - el.scrollLeft > el.clientWidth + 5);
    }
  };

  const scrollByAmount = 180; // width + gap

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

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

      {canScrollLeft && (
        <div className="scroll-button left" onClick={scrollLeft}>
          <img src={leftArrow} alt="back arrow" height={30} width={30} />
        </div>
      )}
      {canScrollRight && (
        <div className="scroll-button right" onClick={scrollRight}>
          <img src={rightArrow} alt="right arrow" height={30} width={30} />
        </div>
      )}
    </div>
  );
};
