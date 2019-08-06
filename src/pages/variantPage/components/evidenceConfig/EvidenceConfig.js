import React, { Component } from "react";
import { setEvidenceActionMode } from "Actions/evidenceConfigActions";
import {
  getEvidenceConfigId,
  getEvidenceConfigIsOpen,
  getEvidenceConfigMode
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
    console.log(e.target);
  };
  
  handleSelectChange = e => {
    console.log(e.target);
  };
  
  render() {
    const { isOpen, mode } = this.props;

    const actionMode =
      mode === TEXTS.add ? TEXTS.addEvidence : TEXTS.editEvidence;
    return (
      <SlideBar isOpen={isOpen} onClose={this.handleClose} title={actionMode}>
        <ActionAddEditEvidence
          mode={actionMode}
          submit={this.handleSubmit}
          onChange={this.handleOnChange}
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
    id: getEvidenceConfigId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSlidePanel: status => dispatch(setEvidenceActionMode(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceConfig);
