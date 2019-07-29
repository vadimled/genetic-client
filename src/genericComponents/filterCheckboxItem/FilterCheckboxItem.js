import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterCheckboxItem.module.scss";
import LabeledTag from "GenericComponents/labeledTag";

const FilterCheckboxItem = ({ groupName, item, onChange, value }) => (
  <div className={`${style["filter-item-wrapper"]} filter-item`}>
    <Checkbox
      checked={value}
      onChange={onChange}
      data-testid={`filter-checkbox-${groupName}-${item.label}`}
    >
      <div className="flex items-center checkbox-inner-content">
        {!!item.icon && item.icon}
        <LabeledTag label={item.label} tagColor={item?.tagColor} />
      </div>
    </Checkbox>
  </div>
);

FilterCheckboxItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
  groupName: PropTypes.string
};

FilterCheckboxItem.defaultProps = {
  value: false
};

export default React.memo(FilterCheckboxItem);
