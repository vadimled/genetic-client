import React from "react";
import PropTypes from "prop-types";
import { TEXTS } from "Utils/constants";
import style from "./VariantClassificationContainer.module.scss";
import { connect } from "react-redux";
import {
  sendVariantClass,
  setCurrentVariantClass,
  setReconfirmStatus,
  setSelectedZygosityType,
  setVariantClass
} from "Actions/variantPageActions";
import {
  getCurrentVariantClass,
  getCurrentZygosityType,
  getGermlineValue,
  getReconfirmStatus,
  getSomaticValue,
  getVariantId,
  getVariantPageTestId,
  getZygosityType
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";
import { withRouter } from "react-router-dom";
import {
  setVariantClassOptionsWithReconfirm,
  zygosityTypeByName
} from "Utils/helpers";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";

function ZygosityButtonWithReconfirmText(props) {
  const {
    onChangeType,
    reconfirmStatus,
    currValue,
    currentVariantClass,
    currentZygosity,
    onChangeSelectedZygosityType,
    onChangeClassification,
    testId,
    title,
    selectedZygosityType,
    variantId,
    type
  } = props;
  return (
    <>
      <ZygosityTypeButton
        currentZygosity={currentZygosity}
        selectedZygosityType={selectedZygosityType}
        type={type} // TEXTS.germline
        currValue={currValue}
        onChangeType={onChangeType}
        title={title}
        typeData={setVariantClassOptionsWithReconfirm(
          title,
          currentZygosity,
          currentVariantClass
        )}
        testId={testId}
        variantId={variantId}
        onChangeClassification={onChangeClassification}
        onChangeSelectedZygosityType={onChangeSelectedZygosityType}
        reconfirmStatus={reconfirmStatus}
        currentVariantClass={currentVariantClass}
      />
      {reconfirmStatus && currentZygosity === title && (
        <div className="reconfirm-wrapper">
          <LabeledTag
            value={currentVariantClass}
            typeData={setVariantClassOptionsWithReconfirm(
              title,
              currentZygosity,
              currentVariantClass
            )}
            customClassName="reconfirm-labeled-tag"
          />
          <div className="reconfirm-text">{` re-confirm`}</div>
        </div>
      )}
    </>
  );
}

ZygosityButtonWithReconfirmText.propTypes = {
  currentZygosity: PropTypes.string,
  selectedZygosityType: PropTypes.string,
  currValue: PropTypes.any,
  onChangeType: PropTypes.string,
  currentVariantClass: PropTypes.string,
  testId: PropTypes.string,
  variantId: PropTypes.string,
  onChangeClassification: PropTypes.func,
  onChangeSelectedZygosityType: PropTypes.func,
  reconfirmStatus: PropTypes.bool
};

class VariantClassificationContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      currentZygosityType,
      setCurrentVariantClass,
      somaticValue,
      germlineValue,
      setReconfirmStatus
    } = this.props;
    const classValue =
      currentZygosityType === TEXTS.somaticUp ? somaticValue : germlineValue;

    setCurrentVariantClass({ currentVariantClass: classValue });
    setReconfirmStatus(false);
  }

  createVariantClassType = () => {
    return this.props.currentZygosityType === TEXTS.somaticUp
      ? TEXTS.somaticClass
      : TEXTS.germlineClass;
  };

  onChangeClassification = (e, id) => {
    const { value, name, reconfirm } = e?.target || {};
    const {
      sendVariantClass,
      setZygosityType,
      selectedZygosityType,
      testId,
      variantId,
      currentVariantClass,
      reconfirmStatus,
      setVariantClass,
      setReconfirmStatus
    } = this.props;

    if (reconfirm) {
      setReconfirmStatus(true);
    }
    if (!value && selectedZygosityType !== id) {
      setZygosityType({ selectedZygosityType: id });
    } else if (reconfirm && !reconfirmStatus && value === currentVariantClass) {
      sendVariantClass({
        testId,
        variantId,
        value,
        name: this.createVariantClassType()
      });
    } else if (
      (value === currentVariantClass && reconfirmStatus) ||
      (!reconfirm && !reconfirmStatus && value === currentVariantClass)
    ) {
      setVariantClass({ value, name: this.createVariantClassType() });
    } else if (value && !reconfirmStatus) {
      sendVariantClass({
        testId,
        variantId,
        value,
        name: this.createVariantClassType()
      });
    } else if (value && reconfirmStatus && value !== currentVariantClass) {
      sendVariantClass({
        testId,
        variantId,
        value,
        name: this.createVariantClassType()
      });
    }

    this.props.history.push(
      `/tests/${testId}/variants/${variantId}/?selectedZygosityType=${id ||
        name}`
    );
  };

  onChangeSelectedZygosityType = (e, id) => {
    const { setZygosityType, testId, variantId } = this.props;
    setZygosityType({ selectedZygosityType: id });
    this.props.history.push(
      `/tests/${testId}/variants/${variantId}/?selectedZygosityType=${id}`
    );
  };

  render() {
    const {
      selectedZygosityType,
      somaticValue,
      germlineValue,
      currentZygosityType,
      testId,
      variantId,
      reconfirmStatus,
      currentVariantClass
    } = this.props;

    return (
      <div className={style["zygosity-type-wrapper"]}>
        <div className="current-zygosity-wrapper">
          <div className="title">{TEXTS.currentZygosity}</div>
          <div className="context">{currentZygosityType}</div>
        </div>
        <div className="zygosity-type-radio-group">
          <div className="first-button flex flex-column items-center">
            <ZygosityButtonWithReconfirmText
              type={TEXTS.germline}
              title={TEXTS.germlineUp}
              currentZygosity={currentZygosityType}
              selectedZygosityType={selectedZygosityType}
              currValue={germlineValue}
              onChangeType={this.onChangeType}
              currentVariantClass={currentVariantClass}
              testId={testId}
              variantId={variantId}
              onChangeClassification={this.onChangeClassification}
              onChangeSelectedZygosityType={this.onChangeSelectedZygosityType}
              reconfirmStatus={reconfirmStatus}
            />
          </div>
          <div className="flex flex-column items-center">
            <ZygosityButtonWithReconfirmText
              type={TEXTS.somatic}
              title={TEXTS.somaticUp}
              currentZygosity={currentZygosityType}
              selectedZygosityType={selectedZygosityType}
              currValue={somaticValue}
              onChangeType={this.onChangeType}
              currentVariantClass={currentVariantClass}
              testId={testId}
              variantId={variantId}
              onChangeClassification={this.onChangeClassification}
              onChangeSelectedZygosityType={this.onChangeSelectedZygosityType}
              reconfirmStatus={reconfirmStatus}
            />
          </div>
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
    currentZygosityType: zygosityTypeByName(getCurrentZygosityType(state)),
    somaticValue: getSomaticValue(state),
    germlineValue: getGermlineValue(state),
    currentVariantClass: getCurrentVariantClass(state),
    testId: getVariantPageTestId(state),
    variantId: getVariantId(state),
    reconfirmStatus: getReconfirmStatus(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    sendVariantClass: data => dispatch(sendVariantClass(data)),
    setVariantClass: data => dispatch(setVariantClass(data)),
    setZygosityType: data => dispatch(setSelectedZygosityType(data)),
    setCurrentVariantClass: data => dispatch(setCurrentVariantClass(data)),
    setReconfirmStatus: data => dispatch(setReconfirmStatus(data))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VariantClassificationContainer)
);
