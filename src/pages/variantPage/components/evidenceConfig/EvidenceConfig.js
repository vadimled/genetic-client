import React, { Component } from "react";
import { setEvidenceActionSlidePanelStatus } from "Actions/evidenceConfigActions";
import { getEvidenceConfigIsOpen } from "Store/selectors";
import { connect } from "react-redux";
import SlideBar from "GenericComponents/slideBar";
import ActionAddEditEvidence from "variantComponents/evidenceContainer/components/actionAddEditEvidence";

// import PropTypes from 'prop-types';

class EvidenceConfig extends Component {
  
  handleClose = () => {
    this.props.openSlidePanel(false);
  };
  
  render() {
    const { isOpen } = this.props;

    return (
      <SlideBar
        isOpen={isOpen}
        onClose={this.handleClose}
        title={"Add evidence"} // {isOnEdit ? "Edit result" : "Add result"}
      >
        <ActionAddEditEvidence />
      </SlideBar>
    );
  }
}

EvidenceConfig.propTypes = {};

const mapStateToProps = state => {
  return {
    isOpen: getEvidenceConfigIsOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSlidePanel: status => dispatch(setEvidenceActionSlidePanelStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceConfig);
