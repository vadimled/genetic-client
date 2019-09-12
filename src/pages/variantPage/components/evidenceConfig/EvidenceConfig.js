import React, { Component } from "react";
import {
  setEvidenceActionData,
  setEvidenceActionMode,
  addEvidenceEntry,
  editEvidenceEntry
} from "Actions/evidenceConfigActions";
import {
  getSubmitData,
  getEvidenceConfigId,
  getEvidenceConfigIsOpen,
  getEvidenceConfigMode,
  getEvidenceDescription,
  getEvidenceLevelSelect,
  getEvidenceSourceInput,
  getEvidenceTypeSelect,
  getZygosityType
} from "Store/selectors";
import { connect } from "react-redux";
import SlideBar from "GenericComponents/slideBar";
import ActionAddEditEvidence from "variantComponents/evidenceContainer/components/actionAddEditEvidence";
import { TEXTS } from "Utils/constants";
import { actionModeText } from "Utils/helpers";

// import PropTypes from 'prop-types';

class EvidenceConfig extends Component {
  handleClose = () => {
    this.props.openSlidePanel({ actionSlideBarStatus: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      submitData,
      mode,
      addEvidenceEntry,
      editEvidenceEntry,
      openSlidePanel
    } = this.props;

    mode === TEXTS.add
      ? addEvidenceEntry(submitData)
      : editEvidenceEntry(submitData);
  
    openSlidePanel({ actionSlideBarStatus: false });
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.props.setEvidenceActionData({ [name]: value });
  };

  render() {
    const {
      isOpen,
      mode,
      evidenceTypeSelect,
      evidenceSourceInput,
      evidenceLevelSelect,
      evidenceDescriptionTextarea,
      classification
    } = this.props;

    return (
      <SlideBar
        isOpen={isOpen}
        onClose={this.handleClose}
        title={actionModeText(mode)}
      >
        <ActionAddEditEvidence
          mode={mode}
          submit={this.handleSubmit}
          classification={classification}
          evidenceCategory={evidenceTypeSelect}
          onChange={this.handleOnChange}
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
    classification: getZygosityType(state),
    evidenceTypeSelect: getEvidenceTypeSelect(state),
    evidenceSourceInput: getEvidenceSourceInput(state),
    evidenceLevelSelect: getEvidenceLevelSelect(state),
    evidenceDescriptionTextarea: getEvidenceDescription(state),
    submitData: getSubmitData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSlidePanel: status => dispatch(setEvidenceActionMode(status)),
    setEvidenceActionData: status => dispatch(setEvidenceActionData(status)),
    addEvidenceEntry: data => dispatch(addEvidenceEntry(data)),
    editEvidenceEntry: data => dispatch(editEvidenceEntry(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceConfig);
