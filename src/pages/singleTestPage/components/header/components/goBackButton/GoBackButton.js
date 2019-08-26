import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "Utils/constants";

function GoBackButton({ pathname, text, className, testId }) {
  const isBackButton = () => {
    if (isVariantPage()) {
      return {
        show: true,
        to: `/tests/${testId}`
      };
    } else if (isSingleTestPage()) {
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

  const isVariantPage = () => {
    const regex = RegExp(ROUTES.isVariantPageRegex);
    return regex.test(pathname);
  };

  const isSingleTestPage = () => {
    const regex = RegExp(ROUTES.isSingleTestPageRegex);
    return regex.test(pathname);
  };

  return (
    isBackButton().show && (
      <Link
        to={isBackButton().to}
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
