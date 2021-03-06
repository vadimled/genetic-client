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
  setIsSelectVariantsForActionableAlterations,
  setSearchTextForFinalReportActionableAlterationsTable,
} from "Actions/finalReportAction";
import {
  getMutationTypesValues,
  getTestPhenotype,
  getIsAllDnaVariantsForActionableAlterationsSelected,
  getActionableAlterations,
  getSelectedActionableAlterationId,
  getIsSelectVariantsForActionableAlterations,
  getSelectedVariantsForActionableAlterations,
  getSelectedVariantsIdsForActionableAlterations,
  getSearchTextForFinalReportActionableAlterationsTable,
} from "Store/selectors";

const FinalReportActionableAlterations = ({
  testId,
  mutationTypesValues,
  testPhenotype,

  actionableAlterations,
  isSelectVariantsForActionableAlterations,
  selectedActionableAlterationId,
  isAllDnaVariantsForActionableAlterationsSelected,
  selectedVariantsForActionableAlterations,
  selectedVariantsIdsForActionableAlterations,
  searchTextForFinalReportActionableAlterationsTable,

  setSelectedActionableAlterationId,
  deleteActionableAlteration,
  setIsSelectVariantsForActionableAlterations,
  handleFinalReportSelectedVariantsIdsForActionableAlterations,
  handleFinalReportSelectAllVariantsForActionableAlterations,
  postAtionableAlterations,
  setSearchTextForFinalReportActionableAlterationsTable,
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

  const actionableAlterationTableDataConverter = (data) => data.map(item => {
    const { drugs = [] } = item;

    let approvedDrugSame = [];
    let approvedDrugOther = [];
    drugs.forEach(item => {
      if (item.phenotype === testPhenotype) {
        if (item.is_phenotype_and_indication_match) {
          approvedDrugSame.push({ drugName: item.drug_name });
        }
        else {
          approvedDrugOther.push({ drugName: item.drug_name });
        }
      }
    });
    if (!approvedDrugSame.length) approvedDrugSame.push({ drugName: 'None' });
    if (!approvedDrugOther.length) approvedDrugOther.push({ drugName: 'None' });

    return {
      ...item,
      approvedDrugSame,
      approvedDrugOther,
    };
  });

  return (
    <div className={style["final-report-actionable-alterations"]}>
      <FinalReportActionableTable
        testId={testId}
        dataSource={actionableAlterationTableDataConverter(actionableAlterations)}
        handleSelectRow={handleSelectActionableAlterationId}
        remove={handleDeleteActionableAlteration}
      />
      {!isSelectVariantsForActionableAlterations && (
        <div className="select-variants-wrapper">
          <SimpleButton
            className={"select-variants-btn"}
            onClick={handleIsSelectVariantsForActionableAlterations}
            text={"Select variants"}
          />
        </div>
      )}
      {!selectedActionableAlterationId && isSelectVariantsForActionableAlterations && (
        <div className="final-report-variants">
          <div className="final-report-teble-toolbar">
            <FinalReportTableToolBar
              searchText={searchTextForFinalReportActionableAlterationsTable}
              onChangeSearch={setSearchTextForFinalReportActionableAlterationsTable}
              tebleData={selectedVariantsForActionableAlterations}
            />
            {!!selectedVariantsIdsForActionableAlterations?.length && (
              <SimpleButton
                className="apply-table-btn"
                onClick={saveNewActionableAlterations}
                text={"MOVE TO ACTIONABILITIES"}
              />
            )}
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
    testPhenotype: getTestPhenotype(state),
    isAllDnaVariantsForActionableAlterationsSelected: getIsAllDnaVariantsForActionableAlterationsSelected(state),
    selectedVariantsForActionableAlterations: getSelectedVariantsForActionableAlterations(state),
    selectedVariantsIdsForActionableAlterations: getSelectedVariantsIdsForActionableAlterations(state),
    searchTextForFinalReportActionableAlterationsTable: getSearchTextForFinalReportActionableAlterationsTable(state),
    actionableAlterations: getActionableAlterations(state),
    selectedActionableAlterationId: getSelectedActionableAlterationId(state),
    isSelectVariantsForActionableAlterations: getIsSelectVariantsForActionableAlterations(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setSelectedActionableAlterationId: id => dispatch(setSelectedActionableAlterationId(id)),
    handleFinalReportSelectedVariantsIdsForActionableAlterations: data => dispatch(handleFinalReportSelectedVariantsIdsForActionableAlterations(data)),
    handleFinalReportSelectAllVariantsForActionableAlterations: data => dispatch(handleFinalReportSelectAllVariantsForActionableAlterations(data)),
    postAtionableAlterations: data => dispatch(postAtionableAlterations(data)),
    deleteActionableAlteration: data => dispatch(deleteActionableAlteration(data)),
    setIsSelectVariantsForActionableAlterations: () => dispatch(setIsSelectVariantsForActionableAlterations()),
    setSearchTextForFinalReportActionableAlterationsTable: (data) =>
      dispatch(setSearchTextForFinalReportActionableAlterationsTable(data)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportActionableAlterations);
