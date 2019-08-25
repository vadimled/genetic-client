import React, { memo } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "Utils/constants";

function GoBackButton({ pathname, text, className, layout }) {
  const isBackButton = () => {
    console.log(layout);
    console.log(pathname);
    
    if(isVariantPage()){
      return {
        show: true,
        to: `/tests/`// ${this.props.testId}
      };
    }
    else if(isSingleTestPage()){
      return {
        show: true,
        to: `/`
      };
    }
    
    return true;
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
    isBackButton() && (
      <Link
        to={"/"}
        data-testid={`go-back-button`}
        id={`go-back-button`}
        className={className}
      >
        <div className="go-back-button-text">{text}</div>
      </Link>
    )
  );
}

GoBackButton.propTypes = {};

export default memo(GoBackButton);
