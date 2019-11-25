import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import style from "./Therapies.module.scss";
// import cn from "classnames";
// import { ReactComponent as OkIcon } from "Assets/ok.svg";

const { TextArea } = Input;
const Therapies = ({ data, onChange }) => {

  const renderDescription = ({ id, drug_name, description }) => {
    return (
      <div className="therapy-wrapper" key={id}>
        <div className="therapy-name-col therapy-drug-name">{drug_name}</div>
        <div className="therapy-info-col">
          <TextArea
            id={id}
            autosize
            value={description}
            onChange={onChange}
            placeholder={"Type here"}
          />
          {
          // TODO: indication that description saved
          // <div className="icon-saved">
          //   <div className={cn("ok-icon", { active: true /* source_description_saved */ })}>
          //     <OkIcon />
          //   </div>
          // </div>
          }
        </div>
      </div>
    );
  };

  return (
    <section className={style["therapies-wrapper"]}>
      <header className="therapies-wrapper-header">
        <div className="therapy-name-col">Therapy:</div>
        <div className="therapy-info-col">Information:</div>
      </header>
      <div className="therapies-wrapper-body">
        {data && data.map((obj) => renderDescription(obj))}
      </div>
    </section>
  );
};

Therapies.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired
};
Therapies.defaultProps = {
  data: []
};

export default Therapies;
