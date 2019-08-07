import React from "react";
import PropTypes from "prop-types";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";
import style from "./VariantClassificationContainer.module.scss";
import { connect } from "react-redux";
import {
  setSelectedZygosityType,
  sendVariantClass
} from "Actions/variantPageActions";
import {
  getZygosityType,
  getGermlineValue,
  getSomaticValue,
  getCurrentZygosityType,
  getVariantPageTestId,
  getVariantId
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";
// import { withRouter } from "react-router-dom";

class VariantClassificationContainer extends React.Component {
  onChangeType = (e, id) => {
    const { value, name } = e?.target || {},
      {
        sendVariantClass,
        setZygosityType,
        selectedZygosityType,
        currentZygosityType,
        testId,
        variantId
      } = this.props;
    if (!value && selectedZygosityType !== id) {
      setZygosityType({ selectedZygosityType: id });
    } else if (value) {
      setZygosityType({ selectedZygosityType: name });
      sendVariantClass({
        testId,
        variantId,
        value,
        name: `${currentZygosityType.toLowerCase()}Classification`
      });
    }
  };

  render() {
    const {
      selectedZygosityType,
      somaticValue,
      germlineValue,
      currentZygosityType,
      testId,
      variantId
    } = this.props;


    return (
      <div className={style["zygosity-type-wrapper"]}>
        <div className="current-zygosity-wrapper">
          <div className="title">{TEXTS.currentZygosity}</div>
          <div className="context">{currentZygosityType}</div>
        </div>
        <div className="zygosity-type-radio-group">
          <div className="first-button flex items-center justify-center">
            <ZygosityTypeButton
              currentZygosity={currentZygosityType}
              selectedZygosityType={selectedZygosityType}
              type={TEXTS.germline}
              currValue={germlineValue}
              onChangeType={this.onChangeType}
              title={TEXTS.germlineUp}
              typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
              testId={testId}
              variantId={variantId}
            />
          </div>
          <ZygosityTypeButton
            currentZygosity={currentZygosityType}
            selectedZygosityType={selectedZygosityType}
            type={TEXTS.somatic}
            currValue={somaticValue}
            onChangeType={this.onChangeType}
            title={TEXTS.somaticUp}
            typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
            testId={testId}
            variantId={variantId}
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
    germlineValue: getGermlineValue(state),
    testId: getVariantPageTestId(state),
    variantId: getVariantId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    sendVariantClass: data => dispatch(sendVariantClass(data)),
    setZygosityType: data => dispatch(setSelectedZygosityType(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantClassificationContainer);
