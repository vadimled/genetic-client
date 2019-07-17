import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./FilterChipIndicatorsItem.module.scss";
import btnImg from "Assets/close.svg";
import { FILTERS } from "Utils/constants";

const FilterChipIndicatorsItem = ({ data, onDelete, filtersConfigKey }) => {
  return (
    <div className={style["filter-chip-indicators-item"]}>
      <div className="value">
        {data.map((item, index) => {
          if (typeof item === "number") {
            return (
              <Fragment key={index}>
                <span data-testid={`filter-${filtersConfigKey}-${item}`}>{item}</span>
                {index < data.length - 1 &&
                  (filtersConfigKey === FILTERS.vaf ? (
                    <span> - </span>
                  ) : (
                    <span>, </span>
                  ))}
              </Fragment>
            );
          } else if (typeof item === "object") {
            return (
              <Fragment key={item.id}>
                {!!item.icon && <span className="icon">{item.icon}</span>}
                <span data-testid={`filter-${filtersConfigKey}-${item.label}`}>{item.label}</span>
                {index < data.length - 1 && <span>, </span>}
              </Fragment>
            );
          } else if (typeof item === "string") {
            return <span key={index} data-testid={`filter-${filtersConfigKey}-${item}`}>{item}</span>;
          }
          return "";
        })}
      </div>

      <button
        data-testid={`button-${filtersConfigKey}`}
        className="button"
        style={{ backgroundImage: `url(${btnImg})` }}
        onClick={onDelete}
      />
    </div>
  );
};

FilterChipIndicatorsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  filtersConfigKey: PropTypes.string
};

FilterChipIndicatorsItem.defaultProps = {
  filtersConfigKey: ""
};

export default React.memo(FilterChipIndicatorsItem);
