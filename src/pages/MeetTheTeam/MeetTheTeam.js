import React from "react";
import "./meetTheTeam.css";
import { TeamProfiles } from "./teamProfiles";
import { teamMembers } from "./teamMembersData";

export const MeetTheTeam = () => {
  return (
    <div>
      <h3 className="heading">Meet The Team</h3>
      <div className="meet-the-team-container">
        <TeamProfiles teamMembers={teamMembers} />
      </div>
    </div>
  );
};
