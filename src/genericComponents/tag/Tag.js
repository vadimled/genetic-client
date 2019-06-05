import React from "react";
import { TAG_COLORS } from "Utils/constants";
import style from './Tag.module.scss';

const Tag = ({ color }) => {
  const bgcstyle =
    color !== TAG_COLORS.white
      ? { backgroundColor: color }
      : { backgroundColor: color, border: "1px solid #DAE1E6" };
  return <div style={bgcstyle} className={style["tag"]} />;
};

export default Tag;
