import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ resident }) => {
  return (
    <div className="resident-list">
      {resident?.map((residents) => (
        <ResidentInfo residenturl={residents} />
      ))}
    </div>
  );
};

export default ResidentList;
