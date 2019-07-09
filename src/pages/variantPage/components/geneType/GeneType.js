import React from "react";
import PropTypes from "prop-types";
import { Radio } from "antd";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import { GERMLINE_VARIANT_CLASS_OPTIONS, SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";
import style  from "./GeneType.module.scss";

function handleVariantClass(e) {
  console.log(e.target.value);
}

class GeneType extends React.Component {
  constructor(props) {
    super(props);
    const { germlineClass } = props;

    this.state = {
      value: germlineClass ? 1 : 2
    };
  }

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { germlineClass, somaticClass } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>
            {this.state.value === 1 ? (
              <SimpleSelect
                value={germlineClass}
                options={GERMLINE_VARIANT_CLASS_OPTIONS}
                onChange={handleVariantClass}
              />
            ) : null}
          </Radio>
          <Radio value={2}>
            {this.state.value === 2 ? (
              <SimpleSelect
                value={somaticClass}
                options={SOMATIC_VARIANT_CLASS_OPTIONS}
                onChange={handleVariantClass}
              />
            ) : null}
          </Radio>
        </Radio.Group>
      </div>
    );
  }
}

GeneType.propTypes = {
  germlineClass: PropTypes.string,
  somaticClass: PropTypes.string
};

export default GeneType;
