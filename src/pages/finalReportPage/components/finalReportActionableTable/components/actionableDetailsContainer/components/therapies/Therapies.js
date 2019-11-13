import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style from "./Therapies.module.scss";
import cn from "classnames";
import { TEXTAREA_NAME, TEXTS } from "Utils/constants";
import { ReactComponent as OkIcon } from "Assets/ok.svg";

const { TextArea } = Input;
const Therapies = ({
  geneDescription,
  variantDescription,
  geneDescriptionSaved,
  variantDescriptionSaved,
  onChange
}) => {
  return (
    <div className={style["therapies-wrapper"]}>
      <div className="textarea-wrapper">
        <label htmlFor={"gene-description-textarea"}>
          {TEXTS.geneDescription}
        </label>
        <TextArea
          key={1}
          id={"gene-description-textarea"}
          autosize
          value={geneDescription}
          name={TEXTAREA_NAME.geneDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
        <div className="icon-saved">
          <div className={cn("ok-icon", { active: geneDescriptionSaved })}>
            <OkIcon />
          </div>
        </div>
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
          name={TEXTAREA_NAME.variantDescription}
          onChange={onChange}
          placeholder={"Type here"}
        />
        <div className="icon-saved">
          <div className={cn("ok-icon", { active: variantDescriptionSaved })}>
            <OkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

Therapies.propTypes = {
  geneDescription: PropTypes.string,
  variantDescription: PropTypes.string,
  onChange: PropTypes.func
};

export default Therapies;
