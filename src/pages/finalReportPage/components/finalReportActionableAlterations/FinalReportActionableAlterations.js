import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import ActionableDetailsContainer from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsContainer";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import FinalReportTableToolBar from "Pages/finalReportPage/components/finalReportTableToolBar";
import SimpleButton from "GenericComponents/simpleButton";

import style from "./FinalReportActionableAlterations.module.scss";

import {
  handleFinalReportSelectAllVariantsForActionableAlterations,
  handleFinalReportSelectedVariantsIdsForActionableAlterations,
  postAtionableAlterations,
  deleteActionableAlteration,
  setSelectedActionableAlterationId,
  setIsSelectVariantsForActionableAlterations
} from "Actions/finalReportAction";
import {
  getMutationTypesValues,
  getIsAllDnaVariantsForActionableAlterationsSelected,
  getActionableAlterations,
  getSelectedActionableAlterationId,
  getIsSelectVariantsForActionableAlterations,
  getSelectedVariantsForActionableAlterations,
  getSelectedVariantsIdsForActionableAlterations,
} from "Store/selectors";

const FinalReportActionableAlterations = ({
  testId,
  actionableAlterations,
  isSelectVariantsForActionableAlterations,
  selectedActionableAlterationId,
  isAllDnaVariantsForActionableAlterationsSelected,
  selectedVariantsForActionableAlterations,
  selectedVariantsIdsForActionableAlterations,
  mutationTypesValues,

  setSelectedActionableAlterationId,
  deleteActionableAlteration,
  setIsSelectVariantsForActionableAlterations,
  handleFinalReportSelectedVariantsIdsForActionableAlterations,
  handleFinalReportSelectAllVariantsForActionableAlterations,
  postAtionableAlterations,
}) => {

  const handleSelectActionableAlterationId = id => {
    setSelectedActionableAlterationId(id);
  };
  const handleDeleteActionableAlteration = val => {
    deleteActionableAlteration(val);
  };
  const handleIsSelectVariantsForActionableAlterations = () => {
    setIsSelectVariantsForActionableAlterations();
  };
  const saveNewActionableAlterations = () => {

    const data = {
      mutation: mutationTypesValues[0],
      testId,
      variants_ids: selectedVariantsIdsForActionableAlterations
    };

    postAtionableAlterations(data);
  };

  return (
    <div className={style["final-report-actionable-alterations"]}>
      <FinalReportActionableTable
        testId={testId}
        dataSource={actionableAlterations}
        handleSelectRow={handleSelectActionableAlterationId}
        remove={handleDeleteActionableAlteration}
      />
      {!isSelectVariantsForActionableAlterations && (
        <div className="select-variants-wrapper">
          <SimpleButton
            className={"add-actionable-details-container-button-text"}
            onClick={handleIsSelectVariantsForActionableAlterations}
            text={"Select variants"}
          />
        </div>
      )}
      {!selectedActionableAlterationId && isSelectVariantsForActionableAlterations && (
        <div className="final-report-variants">
          <div className="flex justify-end">
            <FinalReportTableToolBar />
            <SimpleButton
              className="move-to-actionabilities-btn"
              onClick={saveNewActionableAlterations}
              text={"MOVE TO ACTIONABILITIES"}
            />
          </div>

          <FinalReportVariantsTable
            selectedVariants={selectedVariantsForActionableAlterations}
            isAllRowSelected={isAllDnaVariantsForActionableAlterationsSelected}
            mutationTypesValues={mutationTypesValues}
            handleSelectedRow={handleFinalReportSelectedVariantsIdsForActionableAlterations}
            handleSelectAllRows={handleFinalReportSelectAllVariantsForActionableAlterations}
          />
        </div>
      )}
      {selectedActionableAlterationId &&
        <ActionableDetailsContainer />
      }
    </div>
  );
};

FinalReportActionableAlterations.propTypes = {
  testId: PropTypes.string.isRequired
};
FinalReportActionableAlterations.defaultProps = {
};

const mapStateToProps = state => {
  return {
    mutationTypesValues: getMutationTypesValues(state),
    isAllDnaVariantsForActionableAlterationsSelected: getIsAllDnaVariantsForActionableAlterationsSelected(state),
    selectedVariantsForActionableAlterations: getSelectedVariantsForActionableAlterations(state),
    selectedVariantsIdsForActionableAlterations: getSelectedVariantsIdsForActionableAlterations(state),
    actionableAlterations: getActionableAlterations(state),
    selectedActionableAlterationId: getSelectedActionableAlterationId(state),
    isSelectVariantsForActionableAlterations: getIsSelectVariantsForActionableAlterations(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setSelectedActionableAlterationId: id => dispatch(setSelectedActionableAlterationId(id)),
    handleFinalReportSelectedVariantsIdsForActionableAlterations: data => dispatch(handleFinalReportSelectedVariantsIdsForActionableAlterations(data)),
    handleFinalReportSelectAllVariantsForActionableAlterations: data => dispatch(handleFinalReportSelectAllVariantsForActionableAlterations(data)),
    postAtionableAlterations: data => dispatch(postAtionableAlterations(data)),
    deleteActionableAlteration: data => dispatch(deleteActionableAlteration(data)),
    setIsSelectVariantsForActionableAlterations: () => dispatch(setIsSelectVariantsForActionableAlterations())
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportActionableAlterations);
