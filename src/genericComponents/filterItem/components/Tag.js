import React from "react";
import { TAG_COLORS } from "Utils/constants";


const Tag = ({ color }) => {
  const style =
    color !== TAG_COLORS.white
      ? { backgroundColor: color }
      : { backgroundColor: color, border: "1px solid #DAE1E6" };
  return <div style={style} className="tag" />;
};

export default Tag;