import React from "react";
import PropTypes from "prop-types";
import style from "./ExternalLink.module.scss";
import { ReactComponent as ExternalLinkIcon } from "Assets/external_link.svg";

function ExternalLink({ data }) {
  const baseLink = `https://example.com?data=${data}`;

  const handelOnclick = () => {
    window.open(baseLink, "_blank");
  };

  return (
    <div className={style["external-link-wrapper"]}>
      <div className="external-link-set-wrapper" onClick={handelOnclick}>
        <div className="icon">
          <ExternalLinkIcon />
        </div>
        <div className="external-link-text">{data}</div>
      </div>
    </div>
  );
}

ExternalLink.propTypes = {
  data: PropTypes.string
};

export default ExternalLink;
