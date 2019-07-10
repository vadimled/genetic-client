import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import { Radio } from "antd";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";
import style from "./GeneType.module.scss";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import { connect } from "react-redux";
import { setGeneType, setGeneValue } from "Actions/variantPageActions";
import {
  getGeneType,
  getGermlineValue,
  getSomaticValue
} from "Store/selectors";
import Tag from "GenericComponents/tag";

class GeneType extends React.Component {
  constructor(props) {
    super(props);
    const { germlineClass } = props;

    this.state = {
      value: germlineClass ? 1 : 2
    };
  }

  onChangeType = (e, id) => {
    const { value, name } = e.target;
    const { setValue, setType } = this.props;
    !value ? setType(id) : setValue({ value, name });
  };

  getLabel = (value, typeData) => {
    for (let item in typeData) {
      if (typeData[item].value === value) return typeData[item].label;
    }
    return "Path";
  };

  getTagColor = (value, typeData) => {
    for (let item in typeData) {
      if (typeData[item].value === value) return typeData[item].tagColor;
    }
    return "#F11E2C";
  };

  renderVariantClass = type => {
    const { somaticValue, germlineValue } = this.props;
    let typeData = {},
      currValue;

    if (type === "germline") {
      typeData = GERMLINE_VARIANT_CLASS_OPTIONS;
      currValue = germlineValue;
    } else if (type === "somatic") {
      typeData = SOMATIC_VARIANT_CLASS_OPTIONS;
      currValue = somaticValue;
    }

    return (
      <Fragment>
        <Tag color={this.getTagColor(currValue, typeData)} />
        <span>{this.getLabel(currValue, typeData)}</span>
      </Fragment>
    );
  };

  render() {
    const { currentType, somaticValue, germlineValue } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="gene-type-radio-group">
          {currentType === "germline" ? (
            <div className="select-wrapper">
              <SimpleSelect
                name={"germline"}
                value={germlineValue}
                options={GERMLINE_VARIANT_CLASS_OPTIONS}
                onChange={this.onChangeType}
                suffixIcon={<EditIcon />}
              />
              <div className="select-title">Germline:</div>
            </div>
          ) : (
            <div
              id="germline"
              className="select-non-active"
              onClick={e => this.onChangeType(e, "germline")}
            >
              <div className="select-non-active-title"> Germline: </div>
              <div className="select-non-active-class">
                {this.renderVariantClass("germline")}
              </div>
            </div>
          )}
          {currentType === "somatic" ? (
            <div className="select-wrapper">
              <SimpleSelect
                name={"somatic"}
                value={somaticValue}
                options={SOMATIC_VARIANT_CLASS_OPTIONS}
                onChange={this.onChangeType}
                suffixIcon={<EditIcon />}
              />
              <div className="select-title">Somatic:</div>
            </div>
          ) : (
            <div
              id="somatic"
              className="select-non-active"
              onClick={e => this.onChangeType(e, "somatic")}
            >
              <div className="select-non-active-title"> Somatic: </div>
              <div className="select-non-active-class">
                {this.renderVariantClass("somatic")}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GeneType.propTypes = {
  germlineClass: PropTypes.string,
  somaticClass: PropTypes.string
};

const mapStateToProps = state => {
  return {
    currentType: getGeneType(state),
    somaticValue: getSomaticValue(state),
    germlineValue: getGermlineValue(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setType: data => dispatch(setGeneType(data)),
    setValue: data => dispatch(setGeneValue(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneType);
