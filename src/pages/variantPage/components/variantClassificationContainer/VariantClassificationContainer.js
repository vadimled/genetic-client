import React from "react";
import PropTypes from "prop-types";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";
import style from "./VariantClassificationContainer.module.scss";
import { connect } from "react-redux";
import { setGeneType, setGeneValue } from "Actions/variantPageActions";
import {
  getGeneType,
  getGermlineValue,
  getSomaticValue
} from "Store/selectors";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";

class VariantClassificationContainer extends React.Component {
  onChangeType = (e, id) => {
    const { value, name } = e.target,
      { setGeneValue, setType } = this.props;

    !value ? setType(id) : setGeneValue({ value, name });
  };

  render() {
    const { currentType, somaticValue, germlineValue } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="gene-type-radio-group">
          <ZygosityTypeButton
            currentType={currentType}
            type={TEXTS.germline}
            currValue={germlineValue}
            onChangeType={this.onChangeType}
            title={TEXTS.germlineUp}
            typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
          />
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
    currentType: getGeneType(state),
    somaticValue: getSomaticValue(state),
    germlineValue: getGermlineValue(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setGeneValue: data => dispatch(setGeneValue(data)),
    setType: data => dispatch(setGeneType(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantClassificationContainer);
