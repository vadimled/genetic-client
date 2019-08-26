import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { layout } from "Utils/helpers";
import { TEXTS } from "Utils/constants";

function GoBackButton({ pathname, text, className, testId }) {
  const buttonProperties = () => {
    if (layout(pathname, TEXTS.variantPage)) {
      return {
        show: true,
        to: `/tests/${testId}`
      };
    } else if (layout(pathname, TEXTS.singleTestPage)) {
      return {
        show: true,
        to: `/`
      };
    }

    return {
      show: false,
      to: `/`
    };
  };

  return (
    buttonProperties().show && (
      <Link
        to={buttonProperties().to}
        data-testid={`go-back-button`}
        id={`go-back-button`}
        className={className}
      >
        <div className="go-back-button-text">{text}</div>
      </Link>
    )
  );
}

GoBackButton.propTypes = {
  pathname: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  testId: PropTypes.string
};

export default memo(GoBackButton);
