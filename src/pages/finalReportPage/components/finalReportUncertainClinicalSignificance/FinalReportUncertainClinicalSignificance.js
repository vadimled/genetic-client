import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import FinalReportClinicalTable from "Pages/finalReportPage/components/finalReportClinicalTable";
// import ActionableDetailsContainer from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsContainer";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import FinalReportTableToolBar from "Pages/finalReportPage/components/finalReportTableToolBar";
import SimpleButton from "GenericComponents/simpleButton";

import style from "./FinalReportUncertainClinicalSignificance.module.scss";

import {
//   handleFinalReportSelectAllVariantsForActionableAlterations,
//   handleFinalReportSelectedVariantsIdsForActionableAlterations,
//   postAtionableAlterations,
//   deleteActionableAlteration,
//   setSelectedActionableAlterationId,
  setIsSelectVariantsForUncertainClinicalSignificance,
  handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance,
  handleFinalReportSelectAllVariantsForUncertainClinicalSignificance,
  postUncertainClinicalSignificance,
  deleteUncertainClinicalSignificance,
} from "Actions/finalReportAction";
import {
  getMutationTypesValues,
  getUncertainClinicalSignificance,
  getIsSelectVariantsForUncertainClinicalSignificance,
  getSelectedVariantsForUncertainClinicalSignificance,
  getSelectedVariantsIdsForUncertainClinicalSignificance,
  getIsAllDnaVariantsForUncertainClinicalSignificance,
  getSelectedUncertainClinicalSignificanceId,
  getCurrentUncertainClinicalSignificanceTab,
} from "Store/selectors";

const FinalReportUncertainClinicalSignificance = (props) => {
  const {
    mutationTypesValues,
    testId,
    uncertainClinicalSignificance,
    isSelectVariantsForUncertainClinicalSignificance,
    selectedVariantsForUncertainClinicalSignificance,
    selectedVariantsIdsForUncertainClinicalSignificance,
    isAllDnaVariantsForUncertainClinicalSignificance,
    selectedUncertainClinicalSignificanceId,
    // currentUncertainClinicalSignificanceTab,

    setIsSelectVariantsForUncertainClinicalSignificance,
    handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance,
    handleFinalReportSelectAllVariantsForUncertainClinicalSignificance,
    postUncertainClinicalSignificance,
    deleteUncertainClinicalSignificance,
  } = props;

  // const handleSelectActionableAlterationId = id => {
  //   setSelectedActionableAlterationId(id);
  // };
  const handleDeleteUncertainClinicalSignificance = val => {
    deleteUncertainClinicalSignificance(val);
  };
  const handleIsSelectVariantsForUncertainClinicalSignificance = () => {
    setIsSelectVariantsForUncertainClinicalSignificance();
  };
  const saveNewUncertainClinicalSignificance = () => {

    const data = {
      testId,
      mutation: mutationTypesValues[0],
      variants_ids: selectedVariantsIdsForUncertainClinicalSignificance
    };

    postUncertainClinicalSignificance(data);
  };

  return (
    <div className={style["final-report-uncertain-clinical-significance"]}>
      <FinalReportClinicalTable
        testId={testId}
        dataSource={uncertainClinicalSignificance}
        handleSelectRow={() => true}
        remove={handleDeleteUncertainClinicalSignificance}
      />
      {!isSelectVariantsForUncertainClinicalSignificance && (
        <div className="select-variants-wrapper">
          <SimpleButton
            className={"add-details-container-button-text"}
            onClick={handleIsSelectVariantsForUncertainClinicalSignificance}
            text={"Select variants"}
          />
        </div>
      )}
      {!selectedUncertainClinicalSignificanceId && isSelectVariantsForUncertainClinicalSignificance && (
        <div className="final-report-variants">
          <div className="flex justify-end">
            <FinalReportTableToolBar />
            <SimpleButton
              className="move-to-actionabilities-btn"
              onClick={saveNewUncertainClinicalSignificance}
              text={"MOVE TO UNCERTAIN CLINICAL SIGNIFICANCE"}
            />
          </div>

          <FinalReportVariantsTable
            selectedVariants={selectedVariantsForUncertainClinicalSignificance}
            isAllRowSelected={isAllDnaVariantsForUncertainClinicalSignificance}
            mutationTypesValues={mutationTypesValues}
            handleSelectedRow={handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance}
            handleSelectAllRows={handleFinalReportSelectAllVariantsForUncertainClinicalSignificance}
          />
        </div>
      )}
    </div>
  );
};

FinalReportUncertainClinicalSignificance.propTypes = {
  mutationTypesValues: PropTypes.array.isRequired,
  testId: PropTypes.string.isRequired,
  uncertainClinicalSignificance: PropTypes.array,
  isSelectVariantsForUncertainClinicalSignificance: PropTypes.bool,
  selectedVariantsForUncertainClinicalSignificance: PropTypes.array,
  selectedVariantsIdsForUncertainClinicalSignificance: PropTypes.array,
  isAllDnaVariantsForUncertainClinicalSignificance: PropTypes.bool,
  selectedUncertainClinicalSignificanceId: PropTypes.string,
  currentUncertainClinicalSignificanceTab: PropTypes.string,

  setIsSelectVariantsForUncertainClinicalSignificance: PropTypes.func.isRequired,
  handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance: PropTypes.func.isRequired,
};
FinalReportUncertainClinicalSignificance.defaultProps = {
  uncertainClinicalSignificance: [],
  isSelectVariantsForUncertainClinicalSignificance: false,
  selectedVariantsForUncertainClinicalSignificance: [],
  selectedVariantsIdsForUncertainClinicalSignificance: [],
  isAllDnaVariantsForUncertainClinicalSignificance: false,
  selectedUncertainClinicalSignificanceId: null,
  getCurrentUncertainClinicalSignificanceTab: "1",
};

const mapStateToProps = state => {
  return {
    mutationTypesValues: getMutationTypesValues(state),
    uncertainClinicalSignificance: getUncertainClinicalSignificance(state),
    isSelectVariantsForUncertainClinicalSignificance: getIsSelectVariantsForUncertainClinicalSignificance(state),
    selectedVariantsForUncertainClinicalSignificance: getSelectedVariantsForUncertainClinicalSignificance(state),
    selectedVariantsIdsForUncertainClinicalSignificance: getSelectedVariantsIdsForUncertainClinicalSignificance(state),
    isAllDnaVariantsForUncertainClinicalSignificance: getIsAllDnaVariantsForUncertainClinicalSignificance(state),
    selectedUncertainClinicalSignificanceId: getSelectedUncertainClinicalSignificanceId(state),
    currentUncertainClinicalSignificanceTab: getCurrentUncertainClinicalSignificanceTab(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setIsSelectVariantsForUncertainClinicalSignificance: () => dispatch(setIsSelectVariantsForUncertainClinicalSignificance()),
    handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance: (data) =>
      dispatch(handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance(data)),
    handleFinalReportSelectAllVariantsForUncertainClinicalSignificance: (data) =>
      dispatch(handleFinalReportSelectAllVariantsForUncertainClinicalSignificance(data)),
    postUncertainClinicalSignificance: (data) => dispatch(postUncertainClinicalSignificance(data)),
    deleteUncertainClinicalSignificance: (data) => dispatch(deleteUncertainClinicalSignificance(data)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportUncertainClinicalSignificance);
