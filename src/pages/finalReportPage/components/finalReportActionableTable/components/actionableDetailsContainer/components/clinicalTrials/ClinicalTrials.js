import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Input } from "antd";
import { ReactComponent as OkIcon } from "Assets/ok.svg";

import style from "./ClinicalTrials.module.scss";

const { TextArea } = Input;

const ClinicalTrials = ({ data, onChange }) => {
  const renderClinicalTrial = (
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
    <div className={style["clinical-trials-wrapper"]}>
      {data && data.map((obj, index) => renderClinicalTrial(obj, index))}
    </div>
  );
};

ClinicalTrials.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired
};
ClinicalTrials.defaultProps = {
  data: []
};

export default ClinicalTrials;
