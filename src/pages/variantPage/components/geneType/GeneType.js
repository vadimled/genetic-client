import React from "react";
import PropTypes from "prop-types";
import { GERMLINE_VARIANT_CLASS_OPTIONS, SOMATIC_VARIANT_CLASS_OPTIONS, TEXTS } from "Utils/constants";
import style from "./GeneType.module.scss";
import { connect } from "react-redux";
import { setGeneType, setGeneValue } from "Actions/variantPageActions";
import { getGeneType, getGermlineValue, getSomaticValue } from "Store/selectors";
import GeneTypeButton from "variantComponents/geneTypeButton";

class GeneType extends React.Component {
  onChangeType = (e, id) => {
    const
      { value, name } = e.target,
      { setGeneValue, setType } = this.props;

    !value ? setType(id) : setGeneValue({ value, name });
  };

  render() {
    const { currentType, somaticValue, germlineValue } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="gene-type-radio-group">
          <GeneTypeButton
            currentType={currentType}
            type={TEXTS.germline}
            currValue={germlineValue}
            onChangeType={this.onChangeType}
            title={"Germline"}
            typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
          />
          <GeneTypeButton
            currentType={currentType}
            type={TEXTS.somatic}
            currValue={somaticValue}
            onChangeType={this.onChangeType}
            title={"Somatic"}
            typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
          />
        </div>
      </div>
    );
  }
}

GeneType.propTypes = {
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
)(GeneType);
