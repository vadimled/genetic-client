import React, { memo } from "react";
import PropTypes from "prop-types";
import style from "./NumberVariants.module.scss";

const NumberVariants = ({ filtered, total }) => {
  return (
    <div className={style["number-variants-wrapper"]}>
      {`${filtered} of ${total} results`}
    </div>
  );
};

NumberVariants.propTypes = {
  filtered: PropTypes.string,
  total: PropTypes.string
};

NumberVariants.defaultProps = {
  filtered: "0",
  total: "0"
};

export default memo(NumberVariants);
