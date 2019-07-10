import React from "react";
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
import { getGeneType, getGeneValue } from "Store/selectors";

class GeneType extends React.Component {
  constructor(props) {
    super(props);
    const { germlineClass } = props;

    this.state = {
      value: germlineClass ? 1 : 2
    };
  }

  onChangeType = (e, id) => {
    const { value } = e.target;
    const { setValue, setType } = this.props;
    !value ? setType(id) : setValue(value);
  };

  render() {
    const { germlineClass, somaticClass, currentType } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="gene-type-radio-group">
          {currentType === "germline" ? (
            <SimpleSelect
              value={`Germline: ${germlineClass || "PATH"}`}
              options={GERMLINE_VARIANT_CLASS_OPTIONS}
              onChange={this.onChangeType}
              suffixIcon={<EditIcon />}
            />
          ) : (
            <div
              id="germline"
              className="select-non-active"
              onClick={e => this.onChangeType(e, "germline")}
            >
              <div className="select-non-active-title"> Germline: </div>
              <div className="select-non-active-class">
                {germlineClass || "PATH"}
              </div>
            </div>
          )}
          {currentType === "somatic" ? (
            <SimpleSelect
              value={`Somatic: ${somaticClass || "TIER1"}`}
              options={SOMATIC_VARIANT_CLASS_OPTIONS}
              onChange={this.onChangeType}
              suffixIcon={<EditIcon />}
            />
          ) : (
            <div
              id="somatic"
              className="select-non-active"
              onClick={e => this.onChangeType(e, "somatic")}
            >
              <div className="select-non-active-title"> Somatic: </div>
              <div className="select-non-active-class">
                {somaticClass || "TIER1"}
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
    currentValue: getGeneValue(state)
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
