import React from "react";
import PropTypes from "prop-types";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";
import style from "./VariantClassificationContainer.module.scss";
import { connect } from "react-redux";
import { setZygosityType, setGeneValue } from "Actions/variantPageActions";
import {
  getZygosityType,
  getGermlineValue,
  getSomaticValue
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";

class VariantClassificationContainer extends React.Component {
  onChangeType = (e, id) => {
    const { value, name } = e.target,
      { setGeneValue, setZygosityType } = this.props;

    !value ? setZygosityType(id) : setGeneValue({ value, name });
  };

  render() {
    const { currentType, somaticValue, germlineValue } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="current-zygosity-wrapper">
          <div className="title">{TEXTS.currentZygosity}</div>
          <div className="context">{currentType}</div>
        </div>
        <div className="gene-type-radio-group">
          <div className="first-button">
            <ZygosityTypeButton
              currentType={currentType}
              type={TEXTS.germline}
              currValue={germlineValue}
              onChangeType={this.onChangeType}
              title={TEXTS.germlineUp}
              typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
            />
          </div>
          <ZygosityTypeButton
            currentType={currentType}
            type={TEXTS.somatic}
            currValue={somaticValue}
            onChangeType={this.onChangeType}
            title={TEXTS.somaticUp}
            typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
          />
        </div>
      </div>
    );
  }
}

VariantClassificationContainer.propTypes = {
  currentType: PropTypes.string,
  germlineClass: PropTypes.string,
  somaticClass: PropTypes.string
};

const mapStateToProps = state => {
  return {
    currentType: getZygosityType(state),
    somaticValue: getSomaticValue(state),
    germlineValue: getGermlineValue(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setGeneValue: data => dispatch(setGeneValue(data)),
    setZygosityType: data => dispatch(setZygosityType(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantClassificationContainer);
