import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style  from "./ExpandedInterpretation.module.scss";
import { TEXTS, TEXTAREA_NAME } from "Utils/constants";

const { TextArea } = Input;
const ExpandedInterpretation = ({ geneDescription, variantDescription, onChange }) => {
  return (
    <div className={style["expanded-interpretation-wrapper"]}>
      <div className="textarea-wrapper">
        <label htmlFor={"gene-description-textarea"}>{TEXTS.geneDescription}</label>
        <TextArea
          key={1}
          id={"gene-description-textarea"}
          autosize
          value={geneDescription}
          name={TEXTAREA_NAME.geneDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
      </div>
      <div className="textarea-wrapper">
        <label htmlFor={"variant-description-textarea"}>{TEXTS.variantDescription}</label>
        <TextArea
          key={2}
          id={"variant-description-textarea"}
          autosize
          value={variantDescription}
          name={TEXTAREA_NAME.variantDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
      </div>
    </div>
  );
};

ExpandedInterpretation.propTypes = {
  geneDescription: PropTypes.string,
  variantDescription: PropTypes.string,
  onChange:PropTypes.func
};

export default ExpandedInterpretation;
