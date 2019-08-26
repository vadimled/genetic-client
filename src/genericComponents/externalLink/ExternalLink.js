import React from "react";
import PropTypes from "prop-types";
import style from "./ExternalLink.module.scss";
import { ReactComponent as ExternalLinkIcon } from "Assets/external_link.svg";

function ExternalLink({name, data, externalHandler }) {
  const baseLink = `https://example.com?data=${data}`;

  const handelOnclick = () => {
    window.open(baseLink, "_blank");
  };

  return (
    <div className={style["external-link-wrapper"]}>
      <div
        className="external-link-set-wrapper"
        onClick={externalHandler || handelOnclick}
      >
        <div className="icon">
          <ExternalLinkIcon />
        </div>
        <div
          data-testid={`external-link-${name}`}
          className="external-link-text"
        >{data}</div>
      </div>
    </div>
  );
}

ExternalLink.propTypes = {
  name: PropTypes.string,
  data: PropTypes.string,
  externalHandler: PropTypes.func
};

export default ExternalLink;
