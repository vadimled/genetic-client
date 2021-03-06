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
  getSelectedZygosityType
} from "Store/selectors";
import ZygosityButtonWithReconfirmText from "variantComponents/zygosityButtonWithReconfirmText";
import { withRouter } from "react-router-dom";
import { zygosityTypeByName } from "Utils/helpers";

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
    selectedZygosityType: getSelectedZygosityType(state),
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
