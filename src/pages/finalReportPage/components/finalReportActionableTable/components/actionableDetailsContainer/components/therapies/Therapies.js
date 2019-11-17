import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style from "./Therapies.module.scss";
import cn from "classnames";
import { ReactComponent as OkIcon } from "Assets/ok.svg";

const { TextArea } = Input;
const Therapies = ({ data, onChange }) => {
  const renderDescription = (
    { source_description, drug_name, source_description_saved },
    index
  ) => {
    return (
      <div className="source-description-wrapper" key={index}>
        <label htmlFor={"source-description-textarea"}>{drug_name}</label>
        <TextArea
          id={`source-description-textarea-${index}`}
          autosize
          value={source_description}
          onChange={onChange}
          placeholder={"Type here"}
        />
        <div className="icon-saved">
          <div className={cn("ok-icon", { active: source_description_saved })}>
            <OkIcon />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style["therapies-wrapper"]}>
      {data && data.map((obj, index) => renderDescription(obj, index))}
    </div>
  );
};

Therapies.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func
};

export default Therapies;
