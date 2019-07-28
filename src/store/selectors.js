import { FILTERS, GNOM_AD } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from "lodash.isempty";
import { SORTING_ORDER } from "../utils/constants";

export const getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state =>
           state?.filters?.[FILTERS.variantClassGermline],
  getFilterSomaticClass = state =>
           state?.filters?.[FILTERS.variantClassSomatic],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterVaf = state => state?.filters?.[FILTERS.vaf],
  getFilterCancerDBs = state => state?.filters?.[FILTERS.cancerDBs],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomAD],
  getTableData = state => state?.table?.data, // use getTableDataAsArray instead this

  getUncheckConfirmationData = state =>
           state?.table?.uncheckConfirmationData,
  getOnConfirmation = state => state?.confirmation?.isOnConfirmation,
  getConfirmationData = state => state?.confirmation?.data,
  getMutationType = state => state.variants.mutations,

  getIgvFetchBAMFileStatus = state => state?.igv?.fetchBAMFileStatus,
  getIgvAlertShow = state => state?.igv?.isIgvAlertShow,
  getIgvAlertShowAgaing = state => state?.igv?.isIgvAlertShowAgaing,
  getIgvLastQuery = state => state?.igv?.igvLastQuery,
  getBAMFileUrl = state => state?.igv?.BAMFileUrl,

  getResultConfigIsOpen = state => state?.resultConfig?.isOpen,
  getResultConfigIsHgvsLoaded = state => state?.resultConfig?.isHgvsLoaded,
  getResultConfigIsOnEdit = state => state?.resultConfig?.isOnEdit,
  getResultConfigGene = state => state?.resultConfig?.gene,
  getResultConfigChromosome = state => state?.resultConfig?.chromosome,
  getResultConfigPosition = state => state?.resultConfig?.position,
  getResultConfigAlleleType = state => state?.resultConfig?.alleleType,
  getResultConfigAlleleReference = state => state?.resultConfig?.alleleReference,
  getResultConfigAlleleAlternative = state => state?.resultConfig?.alleleAlternative,
  getResultConfigVaf = state => state?.resultConfig?.vaf,
  getResultConfigCoverage = state => state?.resultConfig?.coverage,
  getResultConfigCoding = state => state?.resultConfig?.coding,
  getResultConfigProtein = state => state?.resultConfig?.protein,
  getResultConfigValidationFaildFields = state => state?.resultConfig?.validationFaildFields,
  getResultConfigid = state => state?.resultConfig?.id,

  getAlertStatus = state => state?.alert?.status,
  getAlertTitle = state => state?.alert?.title,
  getAlertMessage = state => state?.alert?.message,
  getGeneType = state => state.variantPage.type,

  getZygosityType = state => state.variantPage.selectedZygosityType,
  getCurrentZygosityType = state => state.variantPage.currentZygosity,

  getSomaticValue = state => state.variantPage.valueSomatic,
  getGermlineValue = state => state.variantPage.valueGermline,
  getExternalResources = state => state.variantPage.externalResources,
  getVariantData = state => state.variantPage.variantData,
  getHistorySomatic = state => state.variantPage.somaticClassHistory,
  getHistoryGermline = state => state.variantPage.germlineClassHistory,

  getSortParam = state => state?.table?.sortParam,
  getSortOrder = state => state?.table?.sortOrder,
  getClicksCounter = state => state?.table?.clicksCounter,

  getTumorInfoMode = state => state.test.showTumorInfo,
  getTumorInfoType = state => state.test.tumor_info?.type,
  getTumorInfoLocation = state => state.test.tumor_info?.location,
  getTumorInfoPercent = state =>
    parseInt(state.test.tumor_info?.cancer_cell_percentage, 10),
  getTestId = state => state.test.test_id,
  getSelectedMutationType = state => state.variants.selectedMutation,
  getMutationTypesValues = state => state.test.mutation_types;

export const getSearchQuery = state => state?.filters?.searchText;

export const getTableDataAsArray = createSelector(
  getTableData,
  data => {
    let arrayData = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        arrayData.push(data[key]);
      }
    }
    return arrayData;
  }
);

export const getTableDataGenes = createSelector(
  getTableDataAsArray,
  data => {
    let allGenes = data ? data.map(row => row?.gene) : [];
    return [...new Set(allGenes)];
  }
);

export const getSearchResult = createSelector(
  getTableDataAsArray,
  getSearchQuery,
  (data, searchQuery) => {
    return data.filter(item => {
      const searchQueryInLowerCase = searchQuery.toLowerCase();
      return (
        item.gene.toLowerCase().includes(searchQueryInLowerCase) ||
        item.variantClass.toLowerCase().includes(searchQueryInLowerCase) ||
        item.coding.toLowerCase().includes(searchQueryInLowerCase) ||
        item.protein.toLowerCase().includes(searchQueryInLowerCase)
      );
    });
  }
);

const getAppliedFilters = createSelector(
  getFilterType,
  getFilterVariantClass,
  getFilterSomaticClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterVaf,
  getFilterCancerDBs,
  getFilterGnomId,
  (
    type,
    variantClass,
    somaticClass,
    hotSpot,
    snp,
    roi,
    vaf,
    cancerDBs,
    gnomFilter
  ) => {
    const filters = {
      ...(variantClass.length && {
        variantClass: item =>
          variantClass.some(filter => item.variantClassGermline === filter)
      }),
      ...(somaticClass.length && {
        somaticClass: item =>
          somaticClass.some(filter => item.variantClassSomatic === filter)
      }),
      ...(hotSpot.length && {
        hotSpot: item => hotSpot.some(filter => item.hotSpot === filter)
      }),
      ...(snp.length && {
        snp: item => snp.some(filter => item.snp === filter)
      }),
      ...(roi.length && {
        roi: item => roi.some(filter => item.roi === filter)
      }),
      ...(vaf.length && {
        vaf: item => item.vaf >= vaf[0] && item.vaf <= vaf[1]
      }),
      ...(cancerDBs.length && {
        cancerDBs: item => cancerDBs.some(filter => item[filter] !== undefined)
      }),
      ...(gnomFilter.length && {
        gnom: item => {
          return gnomFilter.some(value => {
            switch (value) {
              case GNOM_AD.na:
                return item.gnomAD === undefined;
              case GNOM_AD.veryRare:
                return item.gnomAD >= 0 && item.gnomAD < 1;
              case GNOM_AD.rare:
                return item.gnomAD >= 1 && item.gnomAD < 5;
              case GNOM_AD.common:
                return item.gnomAD >= 5;
            }
          });
        }
      })
    };

    return filters;
  }
);

export const getFilteredData = createSelector(
  getSearchResult,
  getAppliedFilters,
  getSortParam,
  getSortOrder,
  (data, appliedFilters, sortParam, order) => {
    if (isEmpty(appliedFilters)) {

      const sortedData = data.sort((a, b) => b.priority - a.priority).slice();
      return sortedData;
    }

    const filtersArray = Object.keys(appliedFilters).map(key => {
      return appliedFilters[key];
    });

    const filteredData = data.filter(item => {
      return filtersArray.some(filter => filter(item));
    });

    if(order === SORTING_ORDER.ascending){
      return filteredData.sort((a, b) => a[sortParam] - b[sortParam]).slice();
    }

    if(order === SORTING_ORDER.descending){
      return filteredData.sort((a, b) => b[sortParam] - a[sortParam]).slice();
    }

    return filteredData.sort((a, b) => b.priority - a.priority).slice();
  }
);

export const getSearchQueries = createSelector(
  getFilteredData,
  data => {
    const queriesArr = new Set([]);
    data.map(item => {
      queriesArr.add(item.gene);
      queriesArr.add(item.coding);
      if (item.variantClassGermline) {
        queriesArr.add(item.variantClassGermline);
      }

      queriesArr.add(item.protein);
    });

    return Array.from(queriesArr);
  }
);

export const getFilteredSearchQueries = createSelector(
  getSearchQueries,
  getSearchQuery,
  (queries, searchQuery) => {
    const filteredSearchQueries = queries.filter(query =>
      query.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredSearchQueries;
  }
);

export const getFilteredEntriesAmount = createSelector(
  getFilteredData,
  filteredData => filteredData?.length
);

export const getTotalEntriesAmount = createSelector(
  getTableDataAsArray,
  data => data?.length
);

export const getSelectedRows = createSelector(
  getFilteredData,
  (data) => {
    return data.filter(row => row.selected);
  }
);

export const getSelectedIsAddedRows = createSelector(
  getSelectedRows,
  (data) => {
    return data.filter(row => row.isAdded);
  }
);

export const checkIsAllRowSelected = createSelector(
  getTableDataAsArray,
  getSelectedRows,
  (allData, selectedData) => {
    const notConfirmedData = allData?.filter((item) => !item.status);
    return !!selectedData?.length && notConfirmedData?.length === selectedData?.length;
  }
);

// activity log
export const getActivityLog = (state, recordId) => {
  const activityLog = state?.table?.activityLog[recordId];

  let activityLogArray = [];

  for (let record in activityLog) {
    activityLogArray = activityLogArray.concat(activityLog[record]);
  }

  activityLogArray.sort((a,b) => {
    return new Date(b.time) - new Date(a.time);
  });

  return activityLogArray;
};

export const getTestType = state => state?.test?.panel_type;
