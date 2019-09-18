import React, { memo } from "react";
import style from "./ExternalResources.module.scss";
import {
  TEXTS,
  EXTERNAL_RESOURCES_GERMLINE,
  EXTERNAL_RESOURCES_SOMATIC
} from "Utils/constants";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import urlRegex from "url-regex";

function ExternalResources({ externalResources, selectedZygosityType }) {
  const variantDbLinks =
    selectedZygosityType === "germline"
      ? EXTERNAL_RESOURCES_GERMLINE
      : EXTERNAL_RESOURCES_SOMATIC;

  const renderLink = (label, value) => {
    if(!value) return null;
    return (
      <a
        data-testid={`external-resources-${label}`}
        href={value}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  };
  const renderText = (label, data) => {
    let childText, link;
    if (data && typeof data !== "string") {
      childText = data.childText;
      link = data.link;
    } else {
      link = data;
    }

    return (
      <div className="text-not-link">
        <div
          data-testid={`text-not-link-title-${label}`}
          className="text-not-link-title"
        >
          {label}:
        </div>
        <Tooltip placement="topLeft" title={link}>
          <div
            data-testid={`text-not-link-value-${label}`}
            className="text-not-link-value"
          >
            {renderLink(childText, link) || <span>{TEXTS.noLink}</span>}
          </div>
        </Tooltip>
      </div>
    );
  };
  const renderLinksArray = (label, value) => {
    return (
      <div className="text-not-link">
        <div
          data-testid={`external-resources-title-${label}`}
          className="external-resources-title"
        >
          {label}:
        </div>
        <div className="external-resources-array">
          {value.map(resource => {
            return (
              <a
                key={`external-resources-${resource.title}`}
                data-testid={`external-resources-${resource.title}`}
                href={resource.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {resource.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  const isSourceLink = source => urlRegex().test(source);

  const renderResourceData = resourceData => {
    return Object.keys(resourceData).map((label, index) => {
      const resourceValue = resourceData[label];
      if (label !== "title" && variantDbLinks?.includes(label)) {
        return (
          <li key={`${index}-${label}`}>
            {!Array.isArray(resourceValue)
              ? isSourceLink(resourceValue) &&
                !resourceValue?.includes("clinvar") &&
                !resourceValue?.includes("snp")
                ? renderLink(label, resourceValue)
                : renderText(label, resourceValue)
              : renderLinksArray(label, resourceValue)}
          </li>
        );
      }
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
              <ul>{renderResourceData(resourceData)}</ul>
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
