import React from "react";
import style from "./ExternalResources.module.scss";
import { TEXTS } from "Utils/constants";
import PropTypes from "prop-types";

function ExternalResources({ externalResources }) {
  const renderLinks = resourceData => {
    return Object.keys(resourceData).map((link, index) => {
      return (
        link !== "title" && (
          <li key={`${index}-${link}`}>
            {
              <a
                href={resourceData[link]}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link}
              </a>
            }
          </li>
        )
      );
    });
  };

  return (
    <div className={style["external-resources-wrapper"]}>
      <div className="external-resources">
        <div className="external-resources-header">
          <div className="external-resources-title">
            {TEXTS.externalResources}
          </div>
          <div className="divider" />
        </div>
        {externalResources?.map((resourceData, index) => {
          return (
            <div
              className="external-resources-part"
              key={`${index}-${resourceData.title}`}
            >
              <div className="external-resources-part-title">
                {resourceData.title}
              </div>
              <ul>{renderLinks(resourceData)}</ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ExternalResources.propTypes = {
  externalResources: PropTypes.array
};

export default ExternalResources;
