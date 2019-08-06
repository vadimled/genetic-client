import React, { Component } from "react";
import {
  setEvidenceActionMode,
  setEvidenceActionData
} from "Actions/evidenceConfigActions";
import {
  getEvidenceConfigId,
  getEvidenceConfigIsOpen,
  getEvidenceConfigMode,
  getEvidenceDescription,
  getEvidenceLevelSelect,
  getEvidenceSourceInput,
  getEvidenceTypeSelect,
  getAddSubmitData
} from "Store/selectors";
import { connect } from "react-redux";
import SlideBar from "GenericComponents/slideBar";
import ActionAddEditEvidence from "variantComponents/evidenceContainer/components/actionAddEditEvidence";
import { TEXTS } from "Utils/constants";

// import PropTypes from 'prop-types';

class EvidenceConfig extends Component {
  handleClose = () => {
    this.props.openSlidePanel({ actionSlideBarStatus: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.addSubmit);
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.props.setEvidenceActionData({[name]: value});
  };

  render() {
    const {
      isOpen,
      mode,
      evidenceTypeSelect,
      evidenceSourceInput,
      evidenceLevelSelect,
      evidenceDescriptionTextarea
    } = this.props;

    const actionMode =
      mode === TEXTS.add ? TEXTS.addEvidence : TEXTS.editEvidence;
    return (
      <SlideBar isOpen={isOpen} onClose={this.handleClose} title={actionMode}>
        <ActionAddEditEvidence
          mode={actionMode}
          submit={this.handleSubmit}
          onChange={this.handleOnChange}
          typeValue={evidenceTypeSelect}
          sourceValue={evidenceSourceInput}
          levelValue={evidenceLevelSelect}
          descriptionValue={evidenceDescriptionTextarea}
        />
      </SlideBar>
    );
  }
}

EvidenceConfig.propTypes = {};

const mapStateToProps = state => {
  return {
    isOpen: getEvidenceConfigIsOpen(state),
    mode: getEvidenceConfigMode(state),
    id: getEvidenceConfigId(state),
    evidenceTypeSelect: getEvidenceTypeSelect(state),
    evidenceSourceInput: getEvidenceSourceInput(state),
    evidenceLevelSelect: getEvidenceLevelSelect(state),
    evidenceDescriptionTextarea: getEvidenceDescription(state),
    addSubmit: getAddSubmitData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSlidePanel: status => dispatch(setEvidenceActionMode(status)),
    setEvidenceActionData: status => dispatch(setEvidenceActionData(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceConfig);
