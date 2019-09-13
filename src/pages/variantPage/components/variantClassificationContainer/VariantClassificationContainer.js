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
  sendVariantClass,
  setVariantClass,
  setCurrentVariantClass,
  setSelectedZygosityType,
  setReconfirmStatus
} from "Actions/variantPageActions";
import {
  getCurrentVariantClass,
  getCurrentZygosityType,
  getDataVariantClassChanged,
  getGermlineValue,
  getSomaticValue,
  getVariantId,
  getVariantPageTestId,
  getZygosityType,
  getReconfirmStatus
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";
import { withRouter } from "react-router-dom";
import { zygosityTypeByName } from "Utils/helpers";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";

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

  setVariantClassOptionsWithReconfirm = buttonOf => {
    const { currentZygosityType, currentVariantClass } = this.props;
    if (!currentZygosityType) return;

    if (buttonOf !== currentZygosityType) {
      return buttonOf === TEXTS.somaticUp
        ? SOMATIC_VARIANT_CLASS_OPTIONS
        : GERMLINE_VARIANT_CLASS_OPTIONS;
    }

    let typeData;

    if (currentZygosityType === TEXTS.somaticUp) {
      typeData = SOMATIC_VARIANT_CLASS_OPTIONS;
    } else if (currentZygosityType === TEXTS.germlineUp) {
      typeData = GERMLINE_VARIANT_CLASS_OPTIONS;
    }

    return typeData.map(item => {
      if (item.value === currentVariantClass) {
        return { ...item, reconfirm: TEXTS.reconfirm };
      } else return item;
    });
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
            <ZygosityTypeButton
              currentZygosity={currentZygosityType}
              selectedZygosityType={selectedZygosityType}
              type={TEXTS.germline}
              currValue={germlineValue}
              onChangeType={this.onChangeType}
              title={TEXTS.germlineUp}
              typeData={this.setVariantClassOptionsWithReconfirm(
                TEXTS.germlineUp
              )}
              testId={testId}
              variantId={variantId}
              onChangeClassification={this.onChangeClassification}
              onChangeSelectedZygosityType={this.onChangeSelectedZygosityType}
              reconfirmStatus={reconfirmStatus}
              currentVariantClass={currentVariantClass}
            />
            {reconfirmStatus && currentZygosityType === TEXTS.germlineUp && (
              <div className="reconfirm-wrapper">
                <LabeledTag
                  value={currentVariantClass}
                  typeData={this.setVariantClassOptionsWithReconfirm(
                    TEXTS.germlineUp
                  )}
                  customClassName="reconfirm-labeled-tag"
                />
                <div className="reconfirm-text">{` re-confirm`}</div>
              </div>
            )}
          </div>
          <div className="flex flex-column items-center">
            <ZygosityTypeButton
              currentZygosity={currentZygosityType}
              selectedZygosityType={selectedZygosityType}
              type={TEXTS.somatic}
              currValue={somaticValue}
              onChangeType={this.onChangeType}
              title={TEXTS.somaticUp}
              typeData={this.setVariantClassOptionsWithReconfirm(
                TEXTS.somaticUp
              )}
              testId={testId}
              variantId={variantId}
              onChangeClassification={this.onChangeClassification}
              onChangeSelectedZygosityType={this.onChangeSelectedZygosityType}
              reconfirmStatus={reconfirmStatus}
              currentVariantClass={currentVariantClass}
            />
            {reconfirmStatus && currentZygosityType === TEXTS.somaticUp && (
              <div className="reconfirm-wrapper">
                <LabeledTag
                  value={currentVariantClass}
                  typeData={this.setVariantClassOptionsWithReconfirm(
                    TEXTS.somaticUp
                  )}
                  customClassName="reconfirm-labeled-tag"
                />
                <div className="reconfirm-text">{` re-confirm`}</div>
              </div>
            )}
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
    changeClassData: getDataVariantClassChanged(state),
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
