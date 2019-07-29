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
  getSomaticValue,
  getCurrentZygosityType
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";

class VariantClassificationContainer extends React.Component {
  onChangeType = (e, id) => {

    const {testId, variantId, setGeneValue, setZygosityType} = this.props;

    const { value, name } = e.target;

    !value ? setZygosityType({selectedZygosityType: id, testId, variantId}) : setGeneValue({ value, name });
  };

  render() {
    const {
      selectedZygosityType,
      somaticValue,
      germlineValue,
      currentZygosityType
    } = this.props;


    console.log(this.props);

    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="current-zygosity-wrapper">
          <div className="title">{TEXTS.currentZygosity}</div>
          <div className="context">{currentZygosityType}</div>
        </div>
        <div className="gene-type-radio-group">
          <div className="first-button flex items-center justify-center">
            <ZygosityTypeButton
              selectedZygosityType={selectedZygosityType}
              type={TEXTS.germline}
              currValue={germlineValue}
              onChangeType={this.onChangeType}
              title={TEXTS.germlineUp}
              typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
            />
          </div>
          <ZygosityTypeButton
            selectedZygosityType={selectedZygosityType}
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
  currentZygosityType: PropTypes.string,
  selectedZygosityType: PropTypes.string,
  germlineClass: PropTypes.string,
  somaticClass: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedZygosityType: getZygosityType(state),
    currentZygosityType: getCurrentZygosityType(state),
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
