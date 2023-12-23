import React from "react";
import { Link } from "react-router-dom";

const TopPlayCommon = ({ compName }) => {
    console.log(compName)
  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-white text-2xl font-bold">{compName}</h2>
      <Link to={`/${compName.toLowerCase()}`}>
  <p className="text-gray-300 text-base cursor-pointer">See more</p>
</Link>
    </div>
  );
};

export default TopPlayCommon;
