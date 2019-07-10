import React from "react";
import PropTypes from "prop-types";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
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
import NonActiveButton from "variantComponents/nonActiveButton";

class GeneType extends React.Component {
  onChangeType = (e, id) => {
    const { value, name } = e.target,
      { setValue, setType } = this.props;

    !value ? setType(id) : setValue({ value, name });
  };

  render() {
    const { currentType, somaticValue, germlineValue } = this.props;
    return (
      <div className={style["gene-type-wrapper"]}>
        <div className="gene-type-radio-group">
          {currentType === TEXTS.germline ? (
            <div className="select-wrapper">
              <SimpleSelect
                name={TEXTS.germline}
                value={germlineValue}
                options={GERMLINE_VARIANT_CLASS_OPTIONS}
                onChange={this.onChangeType}
                suffixIcon={<EditIcon />}
              />
              <div className="select-title">Germline:</div>
            </div>
          ) : (
            <NonActiveButton
              title={"Germline:"}
              onClick={this.onChangeType}
              type={TEXTS.germline}
              typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
              currValue={germlineValue}
            />
          )}
          {currentType === TEXTS.somatic ? (
            <div className="select-wrapper">
              <SimpleSelect
                name={TEXTS.somatic}
                value={somaticValue}
                options={SOMATIC_VARIANT_CLASS_OPTIONS}
                onChange={this.onChangeType}
                suffixIcon={<EditIcon />}
              />
              <div className="select-title">Somatic:</div>
            </div>
          ) : (
            <NonActiveButton
              title={"Somatic:"}
              onClick={this.onChangeType}
              type={TEXTS.somatic}
              typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
              currValue={somaticValue}
            />
          )}
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
    setType: data => dispatch(setGeneType(data)),
    setValue: data => dispatch(setGeneValue(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneType);
