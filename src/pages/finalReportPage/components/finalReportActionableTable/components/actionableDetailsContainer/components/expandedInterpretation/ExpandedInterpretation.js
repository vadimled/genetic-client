import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style from "./ExpandedInterpretation.module.scss";
// import cn from "classnames";
import { ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME, TEXTS } from "Utils/constants";
// import { ReactComponent as OkIcon } from "Assets/ok.svg";

const { TextArea } = Input;
const ExpandedInterpretation = ({
  geneDescription,
  variantDescription,
  // geneDescriptionSaved,
  // variantDescriptionSaved,
  onChange
}) => {
  return (
    <div className={style["expanded-interpretation-wrapper"]}>
      <div className="textarea-wrapper">
        <label htmlFor={"gene-description-textarea"}>
          {TEXTS.geneDescription}
        </label>
        <TextArea
          key={1}
          id={"gene-description-textarea"}
          autosize
          value={geneDescription}
          name={ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.geneDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
        {
        // <div className="icon-saved">
        //   <div className={cn("ok-icon", { active: geneDescriptionSaved })}>
        //     <OkIcon />
        //   </div>
        // </div>
        }

      </div>
      <div className="textarea-wrapper">
        <label htmlFor={"variant-description-textarea"}>
          {TEXTS.variantDescription}
        </label>
        <TextArea
          key={2}
          id={"variant-description-textarea"}
          autosize
          value={variantDescription}
          name={ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.variantDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
        {
        // <div className="icon-saved">
        //   <div className={cn("ok-icon", { active: variantDescriptionSaved })}>
        //     <OkIcon />
        //   </div>
        // </div>
        }
      </div>
    </div>
  );
};

ExpandedInterpretation.propTypes = {
  geneDescription: PropTypes.string,
  variantDescription: PropTypes.string,
  onChange: PropTypes.func
};

export default ExpandedInterpretation;
