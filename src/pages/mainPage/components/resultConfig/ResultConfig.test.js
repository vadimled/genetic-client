import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import reducers from "Store/reducers";
import ResultConfig from "./ResultConfig";
import {
  CHROMOSOME_OPTIONS,
  ALLELE_TYPES,
  VALIDATION_FAILD_FIELDS
} from "Utils/constants";
import {
  getResultConfigIsOpen,
  getResultConfigIsHgvsLoaded,
  getResultConfigIsOnEdit,
  getResultConfigGene,
  getResultConfigChromosome,
  getResultConfigPosition,
  getResultConfigAlleleType,
  getResultConfigAlleleReference,
  getResultConfigAlleleAlternative,
  getResultConfigCoding,
  getResultConfigProtein,
  getResultConfigValidationFaildFields
} from "Store/selectors";
import {
  handleResultConfigIsOpen,
  handleResultConfigIsOnEdit,
  handleResultConfigChromosome
} from "Actions/resultConfigActions";

const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const renderData = renderWithRedux(
    <ResultConfig />,
    createStore(reducers, applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchSaga);
  const { store } = renderData;

  // before starting work with confirmation data, first of all we should:
  // 1) set resultConfigIsOpen to true

  // 1) ->`
  const resultConfigIsOpen1 = getResultConfigIsOpen(store.getState());
  expect(resultConfigIsOpen1).toEqual(false);

  store.dispatch(handleResultConfigIsOpen(true));

  const resultConfigIsOpen2 = getResultConfigIsOpen(store.getState());
  expect(resultConfigIsOpen2).toEqual(true);

  return renderData;
};

describe('ResultConfig', () => {

  it('handle gene input', () => {
    const { store, getByTestId } = initSteps();
    const geneWrapperInput = getByTestId('gene-wrapper-input');
    const geneInput = geneWrapperInput.querySelector('input');

    const gene1 = getResultConfigGene(store.getState());
    expect(gene1).toEqual('');

    fireEvent.change(geneInput, { target: { value: 'abc' } });

    const gene2 = getResultConfigGene(store.getState());
    expect(gene2).toEqual('abc');
  });

  it('handle chromosome input', () => {
    const { store, getByTestId } = initSteps();
    const chromosomeWrapper = getByTestId('chromosome');
    expect(chromosomeWrapper).toBeInTheDocument();

    const chromosome1 = getResultConfigChromosome(store.getState());
    expect(chromosome1).toEqual('');

    store.dispatch(handleResultConfigChromosome(CHROMOSOME_OPTIONS[0].value));

    const chromosome2 = getResultConfigChromosome(store.getState());
    expect(chromosome2).toEqual(CHROMOSOME_OPTIONS[0].value);
  });

  it('handle position input', () => {
    const { store, getByTestId } = initSteps();
    const positionInput = getByTestId('position');

    const position1 = getResultConfigPosition(store.getState());
    expect(position1).toEqual(null);

    fireEvent.change(positionInput, { target: { value: 123 } });

    const position2 = getResultConfigPosition(store.getState());
    expect(position2).toEqual(123);
  });

  it('handle alleleType', () => {
    const { store, getByTestId } = initSteps();
    const alleleTypeChangeBtn = getByTestId('allele-type-change');
    const alleleTypeInsertionBtn = getByTestId('allele-type-insertion');
    const alleleTypeDeletionBtn = getByTestId('allele-type-deletion');
    const alleleReferenceInput = getByTestId('alleleReference');
    const alleleAlternativeInput = getByTestId('alleleAlternative');

    fireEvent.click(alleleTypeChangeBtn);
    const alleleType1 = getResultConfigAlleleType(store.getState());
    const isAlleleReferenceDisabled1 = alleleReferenceInput.classList.contains('disabled');
    const isAlleleAlternativeDisabled1 = alleleAlternativeInput.classList.contains('disabled');
    expect(alleleType1).toEqual(ALLELE_TYPES.change.value);
    expect(isAlleleReferenceDisabled1).toEqual(false);
    expect(isAlleleAlternativeDisabled1).toEqual(false);

    fireEvent.click(alleleTypeInsertionBtn);
    const alleleType2 = getResultConfigAlleleType(store.getState());
    const isAlleleReferenceDisabled2 = alleleReferenceInput.classList.contains('disabled');
    const isAlleleAlternativeDisabled2 = alleleAlternativeInput.classList.contains('disabled');
    expect(alleleType2).toEqual(ALLELE_TYPES.insertion.value);
    expect(isAlleleReferenceDisabled2).toEqual(true);
    expect(isAlleleAlternativeDisabled2).toEqual(false);

    fireEvent.click(alleleTypeDeletionBtn);
    const alleleType3 = getResultConfigAlleleType(store.getState());
    const isAlleleReferenceDisabled3 = alleleReferenceInput.classList.contains('disabled');
    const isAlleleAlternativeDisabled3 = alleleAlternativeInput.classList.contains('disabled');
    expect(alleleType3).toEqual(ALLELE_TYPES.deletion.value);
    expect(isAlleleReferenceDisabled3).toEqual(false);
    expect(isAlleleAlternativeDisabled3).toEqual(true);
  });

  it('handle alleleReference input', () => {
    const { store, getByTestId } = initSteps();
    const alleleReferenceInput = getByTestId('alleleReference');

    const alleleReference1 = getResultConfigAlleleReference(store.getState());
    expect(alleleReference1).toEqual('');

    // first try to set number
    fireEvent.change(alleleReferenceInput, { target: { value: 1 } });
    const alleleReference2 = getResultConfigAlleleReference(store.getState());
    // get nothing because setting number is prohibited
    expect(alleleReference2).toEqual('');

    // set string in lower case
    fireEvent.change(alleleReferenceInput, { target: { value: 'a' } });
    const alleleReference3 = getResultConfigAlleleReference(store.getState());
    // and get value in upper case
    expect(alleleReference3).toEqual('A');
  });

  it('handle alleleAlternative input', () => {
    const { store, getByTestId } = initSteps();
    const alleleAlternativeInput = getByTestId('alleleAlternative');

    const alleleAlternative1 = getResultConfigAlleleAlternative(store.getState());
    expect(alleleAlternative1).toEqual('');

    // first try to set number
    fireEvent.change(alleleAlternativeInput, { target: { value: 1 } });
    const alleleAlternative2 = getResultConfigAlleleAlternative(store.getState());
    // get nothing because setting number is prohibited
    expect(alleleAlternative2).toEqual('');

    // set string in lower case
    fireEvent.change(alleleAlternativeInput, { target: { value: 'b' } });
    const alleleAlternative3 = getResultConfigAlleleAlternative(store.getState());
    // and get value in upper case
    expect(alleleAlternative3).toEqual('B');
  });

  it('handle loadHGVS btn, validation & addResult btn', () => {
    const { store, getByTestId } = initSteps();
    const loadHgvsBtn = getByTestId('loadHGVS');
    const applyResultBtn = getByTestId('applyResult');

    const validationFaildFields1 = getResultConfigValidationFaildFields(store.getState());
    expect(validationFaildFields1.length).toEqual(0);
    const coding1 = getResultConfigCoding(store.getState());
    const protein1 = getResultConfigProtein(store.getState());
    expect(coding1).toBe('');
    expect(protein1).toBe('');
    const isHgvsLoaded1 = getResultConfigIsHgvsLoaded(store.getState());
    expect(isHgvsLoaded1).toBe(false);
    // in this test we presume that alleleType should be set to change position
    // so alleleReference & alleleAlternative should be available
    const alleleType1 = getResultConfigAlleleType(store.getState());
    expect(alleleType1).toEqual(ALLELE_TYPES.change.value);

    fireEvent.click(loadHgvsBtn);
    const validationFaildFields2 = getResultConfigValidationFaildFields(store.getState());
    // we cannot loadHGVS without all these fields
    expect(validationFaildFields2.includes(VALIDATION_FAILD_FIELDS.gene)).toBe(true);
    expect(validationFaildFields2.includes(VALIDATION_FAILD_FIELDS.chromosome)).toBe(true);
    expect(validationFaildFields2.includes(VALIDATION_FAILD_FIELDS.position)).toBe(true);
    expect(validationFaildFields2.includes(VALIDATION_FAILD_FIELDS.alleleReference)).toBe(true);
    expect(validationFaildFields2.includes(VALIDATION_FAILD_FIELDS.alleleAlternative)).toBe(true);
    // and coding and protein still should be empty
    const coding2 = getResultConfigCoding(store.getState());
    const protein2 = getResultConfigProtein(store.getState());
    expect(coding2).toBe('');
    expect(protein2).toBe('');
    // isHgvsLoaded still should be false
    const isHgvsLoaded2 = getResultConfigIsHgvsLoaded(store.getState());
    expect(isHgvsLoaded2).toBe(false);

    // set all required fields
    // get inputs from previous tests and handle them
    const geneWrapperInput = getByTestId('gene-wrapper-input');
    const geneInput = geneWrapperInput.querySelector('input');
    const positionInput = getByTestId('position');
    const alleleReferenceInput = getByTestId('alleleReference');
    const alleleAlternativeInput = getByTestId('alleleAlternative');

    fireEvent.change(geneInput, { target: { value: 'abc' } });

    expect(geneInput.value).toEqual("abc");

    store.dispatch(handleResultConfigChromosome(CHROMOSOME_OPTIONS[0].value));
    fireEvent.change(positionInput, { target: { value: 123 } });
    fireEvent.change(alleleReferenceInput, { target: { value: 'a' } });
    fireEvent.change(alleleAlternativeInput, { target: { value: 'b' } });

    // next try to click load HGVS btn again
    fireEvent.click(loadHgvsBtn);
    const validationFaildFields3 = getResultConfigValidationFaildFields(store.getState());
    expect(validationFaildFields3.length).toEqual(0);
    const coding3 = getResultConfigCoding(store.getState());

    console.log("--coding3: ", coding3);

    // const protein3 = getResultConfigProtein(store.getState());
    expect(coding3).toBeTruthy();
    // expect(protein3).toBeTruthy();

    // console.log("---store: ", store.getState());

    // const isHgvsLoaded3 = getResultConfigIsHgvsLoaded(store.getState());
    // expect(isHgvsLoaded3).toBe(true);

    // change some field (gene for the instance)
    // coding, protein and isHgvsLoaded should be dropped
    fireEvent.change(geneInput, { target: { value: 'asd' } });
    const coding4 = getResultConfigCoding(store.getState());
    const protein4 = getResultConfigProtein(store.getState());
    expect(coding4).toBe('');
    expect(protein4).toBe('');
    const isHgvsLoaded4 = getResultConfigIsHgvsLoaded(store.getState());
    expect(isHgvsLoaded4).toBe(false);

    // try click applyResult btn when isHgvsLoaded is equal false
    fireEvent.click(applyResultBtn);

    const validationFaildFields4 = getResultConfigValidationFaildFields(store.getState());
    const resultConfigIsOpen1 = getResultConfigIsOpen(store.getState());
    expect(validationFaildFields4.includes(VALIDATION_FAILD_FIELDS.loadHgvs)).toBe(true);
    expect(resultConfigIsOpen1).toEqual(true);

    // after changes again click loadHgvs btn
    fireEvent.click(loadHgvsBtn);
    // const validationFaildFields5 = getResultConfigValidationFaildFields(store.getState());
    // expect(validationFaildFields5.length).toEqual(0);
    // const coding5 = getResultConfigCoding(store.getState());
    // const protein5 = getResultConfigProtein(store.getState());
    // expect(coding5).toBeTruthy();
    // expect(protein5).toBeTruthy();
    // const isHgvsLoaded5 = getResultConfigIsHgvsLoaded(store.getState());
    // expect(isHgvsLoaded5).toBe(true);

    // try click applyResult btn when isHgvsLoaded is equal true and validationFaildFields5.length is equal 0
    fireEvent.click(applyResultBtn);
    // const validationFaildFields6 = getResultConfigValidationFaildFields(store.getState());
    // const resultConfigIsOpen2 = getResultConfigIsOpen(store.getState());
    // expect(validationFaildFields6.length).toEqual(0);
    // expect(resultConfigIsOpen2).toEqual(false);

    // find this item in table data
    // const tableData1 = store.getState().table.data;
    // let seachedItem;
    // for (let key in tableData1) {
    //   if (tableData1.hasOwnProperty(key)) {
    //     let item = tableData1[key];
    //     // and item should be added and has fields that we added recently in this test
    //     if (
    //       item.isAdded
    //       && item.gene === 'asd'
    //       && item.chromosome === CHROMOSOME_OPTIONS[0].value
    //       && item.position === 123
    //       && item.alleleReference === 'A'
    //       && item.alleleAlternative === 'B'
    //     ) {
    //       seachedItem = item;
    //     }
    //   }
    // }
    // expect(seachedItem).toBeDefined();
  });

  it('isOnEdit mode', () => {
    const { store, getByTestId } = initSteps();
    const vafValue = getByTestId('vaf');
    const coverageValue = getByTestId('coverage');
    const codingSimpleResult = getByTestId('coding-simple-result');
    const proteinSimpleResult = getByTestId('protein-simple-result');
    const applyResultBtn = getByTestId('applyResult');
    const slidebarTitle = getByTestId('slidebar-title');

    expect(vafValue).toBeInTheDocument();
    expect(coverageValue).toBeInTheDocument();
    expect(codingSimpleResult).toBeInTheDocument();
    expect(proteinSimpleResult).toBeInTheDocument();
    expect(applyResultBtn.innerHTML).toBe('Add result');
    expect(slidebarTitle.innerHTML).toBe('Add result');
    const isOnEdit1 = getResultConfigIsOnEdit(store.getState());
    expect(isOnEdit1).toBe(false);

    store.dispatch(handleResultConfigIsOnEdit(true));

    expect(vafValue).not.toBeInTheDocument();
    expect(coverageValue).not.toBeInTheDocument();
    expect(codingSimpleResult).not.toBeInTheDocument();
    expect(proteinSimpleResult).not.toBeInTheDocument();
    expect(applyResultBtn.innerHTML).toBe('Edit result');
    expect(slidebarTitle.innerHTML).toBe('Edit result');
    const isOnEdit2 = getResultConfigIsOnEdit(store.getState());
    expect(isOnEdit2).toBe(true);

    const codingToggledInput = getByTestId('coding-toggled-input');
    const proteinToggledInput = getByTestId('protein-toggled-input');
    expect(codingToggledInput).toBeInTheDocument();
    expect(proteinToggledInput).toBeInTheDocument();
  });

  it('handle coding', () => {
    const { store, getByTestId } = initSteps();

    // coding-toggled-input component is available only in isOnEdit mode
    store.dispatch(handleResultConfigIsOnEdit(true));

    const coddingToggledInput = getByTestId('coding-toggled-input');
    const coddingToggledInputHandler = coddingToggledInput.querySelector('button.ti-handler');

    // input in this component is available only after click on coddingToggledInputHandler button
    fireEvent.click(coddingToggledInputHandler);

    const coddingToggledInputInput = coddingToggledInput.querySelector('input');

    const coding1 = getResultConfigCoding(store.getState());
    expect(coding1).toEqual('');

    fireEvent.change(coddingToggledInputInput, { target: { value: 'abc' } });

    const coding2 = getResultConfigCoding(store.getState());
    expect(coding2).toEqual('abc');
  });

  it('handle protein', () => {
    const { store, getByTestId } = initSteps();

    // coding-toggled-input component is available only in isOnEdit mode
    store.dispatch(handleResultConfigIsOnEdit(true));

    const proteinToggledInput = getByTestId('protein-toggled-input');
    const proteinToggledInputHandler = proteinToggledInput.querySelector('button.ti-handler');

    // input in this component is available only after click on proteinToggledInputHandler button
    fireEvent.click(proteinToggledInputHandler);

    const proteinToggledInputInput = proteinToggledInput.querySelector('input');

    const protein1 = getResultConfigProtein(store.getState());
    expect(protein1).toEqual('');

    fireEvent.change(proteinToggledInputInput, { target: { value: 'abc' } });

    const protein2 = getResultConfigProtein(store.getState());
    expect(protein2).toEqual('abc');
  });

});
