import React from "react";
import style from "./ExternalResources.module.scss";
import { TEXTS } from "Utils/constants";
import PropTypes from "prop-types";

function ExternalResources({ externalResources }) {
  const renderLinks = resourseData => {
    return Object.keys(resourseData).map((link, index) => {
      return (
        link !== "title" && (
          <li key={`${index}-${link}`}>
            {
              <a
                href={resourseData[link]}
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
        {externalResources?.map((resourseData, index) => {
          return (
            <div
              className="external-resources-part"
              key={`${index}-${resourseData.title}`}
            >
              <div className="external-resources-part-title">
                {resourseData.title}
              </div>
              <ul>{renderLinks(resourseData)}</ul>
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
