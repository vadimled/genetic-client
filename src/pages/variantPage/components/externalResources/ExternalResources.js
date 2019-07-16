import React, { memo } from "react";
import style from "./ExternalResources.module.scss";
import { TEXTS } from "Utils/constants";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

function ExternalResources({ externalResources }) {
  
  const renderLinks = resourceData => {
    return Object.keys(resourceData).map((link, index) => {
      const resourceValue = resourceData[link];
      return (
        link !== "title" && (
          <li key={`${index}-${link}`}>
            {resourceValue.includes("http") ? (
              <a href={resourceValue} rel="noopener noreferrer" target="_blank">
                {link}
              </a>
            ) : (
              <div className="text-not-link">
                <div className="text-not-link-title">{link}:</div>
                <Tooltip placement="topLeft" title={resourceValue}>
                  <div className="text-not-link-value">{resourceValue}</div>
                </Tooltip>
              </div>
            )}
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

export default memo(ExternalResources);
