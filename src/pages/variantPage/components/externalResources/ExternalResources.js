import React from "react";
import style from "./ExternalResources.module.scss";

// import PropTypes from "prop-types";


function ExternalResources() {
  return (
    <div className={style["external-resources-wrapper"]}>
      <div className="links">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="#">UCSD</a>
          </li>
          <li>
            <a href="#">gnomId</a>
          </li>
          <li>
            <a href="#">OMIM</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

ExternalResources.propTypes = {

};

export default ExternalResources;
