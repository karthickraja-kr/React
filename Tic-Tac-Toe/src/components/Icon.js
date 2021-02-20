import React from "react";
import "./Icon.css";
import { FaRegCircle, FaTimes } from "react-icons/fa";

const SelectIcon = ({ iconName }) => {
  switch (iconName) {
    case "Cross":
      return <FaTimes className="Cross" />;
    case "Circle":
      return <FaRegCircle className="Circle" />;
    default:
      return <div />;
  }
};

const Icon = ({ name }) => {
  return (
    <div className="card">
      <SelectIcon iconName={name} />
    </div>
  );
};

export default Icon;
