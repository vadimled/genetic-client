import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style from "./Therapies.module.scss";

const { TextArea } = Input;
const Therapies = ({
  data,
  // variantDescriptionSaved,
  onChange
}) => {
  const renderDescription = ({ source_description, drug_name }, index) => {
    return (
      <div className="source-description-wrapper" key={index}>
        <label htmlFor={"source-description-textarea"}>
          {drug_name}
        </label>
        <TextArea
          id={"source-description-textarea"}
          autosize
          value={source_description}
          // name={TEXTAREA_NAME.geneDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
        {/* <div className="icon-saved">
          <div className={cn("ok-icon", { active: geneDescriptionSaved })}>
            <OkIcon />
          </div>
        </div>*/}
      </div>
    );
  };
  
  return (
    <div className={style["therapies-wrapper"]}>
      {console.log(data) || data && data.map( (obj, index) => renderDescription(obj, index) )}
    </div>
  );
};

Therapies.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func
};

export default Therapies;
