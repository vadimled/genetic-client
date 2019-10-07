import { EVIDENCE_CATEGORIES_OPTIONS, FILTERS, GNOM_AD, SORTING_ORDER, TEXTS } from "Utils/constants";
import { createSelector } from "reselect";
// import isEmpty from "lodash.isempty";

export const getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterZygosity = state => state?.filters?.[FILTERS.zygosity],
  getFilterEffect = state => state?.filters?.[FILTERS.effect],
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
  getSearchQuery = state => state?.filters?.[FILTERS.searchText],
  getTableData = state => state?.table?.data, // use getTableDataAsArray instead this
  getUncheckConfirmationData = state => state?.table?.uncheckConfirmationData,
  getCurrentPage = state => state?.table?.currentPage,
  getOnConfirmation = state => state?.confirmation?.isOnConfirmation,
  getConfirmationData = state => state?.confirmation?.data,
  getIgvFetchBAMFileStatus = state => state?.igv?.fetchBAMFileStatus,
  getIgvAlertShow = state => state?.igv?.isIgvAlertShow,
  getIgvAlertShowAgaing = state => state?.igv?.isIgvAlertShowAgaing,
  getIgvLastQuery = state => state?.igv?.igvLastQuery,
  getBAMFileUrl = state => state?.igv?.BAMFileUrl,
  getBAMIndexFileUrl = state => state?.igv?.BAMIndexFileUrl,
  getResultConfigIsOpen = state => state?.resultConfig?.isOpen,
  getResultConfigIsHgvsLoaded = state => state?.resultConfig?.isHgvsLoaded,
  getResultConfigIsOnEdit = state => state?.resultConfig?.isOnEdit,
  getResultConfigGene = state => state?.resultConfig?.gene,
  getResultConfigChromosome = state => state?.resultConfig?.chromosome,
  getResultConfigPosition = state => state?.resultConfig?.position,
  getResultConfigAlleleType = state => state?.resultConfig?.alleleType,
  getResultConfigAlleleReference = state =>
    state?.resultConfig?.alleleReference,
  getResultConfigAlleleAlternative = state =>
    state?.resultConfig?.alleleAlternative,
  getResultConfigVaf = state => state?.resultConfig?.vaf,
  getResultConfigCoverage = state => state?.resultConfig?.coverage,
  getResultConfigCoding = state => state?.resultConfig?.coding,
  getResultConfigProtein = state => state?.resultConfig?.protein,
  getResultConfigTranscript = state => state?.resultConfig?.transcript,
  getResultConfigValidationFaildFields = state => state?.resultConfig?.validationFaildFields,
  getResultConfigid = state => state?.resultConfig?.id,
  getAlertStatus = state => state?.alert?.status,
  getAlertTitle = state => state?.alert?.title,
  getAlertMessage = state => state?.alert?.message,
  getVariantPage = state => state.variantPage.pageData,
  getZygosityType = state => state.variantPage.pageData.selectedZygosityType,
  getCurrentZygosityType = state =>
    state.variantPage.pageData.serverData?.zygosity,
  getCurrentVariantClass = state =>
    state.variantPage.pageData.currentVariantClass,
  getReconfirmStatus = state => state.variantPage.pageData.isReconfirmed,
  getSomaticValue = state =>
    state.variantPage.pageData.variantData?.variantClassSomatic,
  getGermlineValue = state =>
    state.variantPage.pageData.variantData?.variantClassGermline,
  getExternalResources = state => state.variantPage.pageData.externalResources,
  getVariantData = state => state.variantPage.pageData.variantData,
  getHistorySomatic = state => state.variantPage.pageData.somaticClassHistory,
  getHistoryGermline = state => state.variantPage.pageData.germlineClassHistory,
  getVariantId = state => state.variantPage.pageData.variantId,
  getVariantPageTestId = state => state.variantPage.pageData.testId,
  getVariantPageServerData = state => state.variantPage.pageData.serverData,
  getSortParam = state => state?.table?.sortParam,
  getSortOrder = state => state?.table?.sortOrder,
  getTumorInfoMode = state => state.test.showTumorInfo,
  getLoadingStatus = state => state.test.isLoading,
  getTumorInfoType = state => state.test.tumor_info?.type,
  getTumorInfoLocation = state => state.test.tumor_info?.location,
  getTumorInfoPercent = state =>
    parseInt(state.test.tumor_info?.cancer_cell_percentage, 10),
  getTestId = state => state.test.id,
  getGSID = state => state.test.gsid,
  getSelectedMutationType = state => state.variants.selectedMutation,
  getMutationTypesValues = state => state.test.mutation_types,
  getSelectedVariants = state => state.finalReport.selectedVariants,
  getConfirmationPageTableData = state => state.confirmationPage.metaData,
  getTestsList = state => state.tests.tests;

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
      if (!searchQuery) {
        return item;
      } else {
        const searchQueryInLowerCase = searchQuery.toLowerCase();
        return (
          item.gene?.toLowerCase().includes(searchQueryInLowerCase) ||
          item.coding?.toLowerCase().includes(searchQueryInLowerCase) ||
          item.protein?.toLowerCase().includes(searchQueryInLowerCase)
        );
      }
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
  getFilterZygosity,
  getFilterEffect,
  (
    type,
    germlineClass,
    somaticClass,
    hotSpot,
    snp,
    roi,
    vaf,
    cancerDBs,
    gnomFilter,
    zygosity,
    effect
  ) => {
    const variantClass = germlineClass.concat(somaticClass);
    const filters = {
      ...((variantClass.length || somaticClass.length) && {
        variantClass: item =>
          variantClass.some(filter => {
            return (
              (item.variantClassGermline === filter && item.zygosity !== "somatic")  ||
              (item.variantClassSomatic === filter && !["homo", "hetero", "hemi"].includes(item.zygosity))
            );
          })
      }),
      // ...(somaticClass.length && {
      //   somaticClass: item =>
      //     somaticClass.some(filter => item.variantClassSomatic === filter)
      // }),
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
        cancerDBs: item =>
          cancerDBs.some(filter => {
            if (filter === "cosmic") {
              return item[filter].length > 0;
            }
            return item[filter] !== undefined;
          })
      }),
      ...(gnomFilter.length && {
        gnom: ({ gnomAD }) => {
          return gnomFilter.some(value => {
            switch (value) {
              case GNOM_AD.na:
                return gnomAD === GNOM_AD.na;
              case GNOM_AD.veryRare:
                return gnomAD === GNOM_AD.veryRare;
              case GNOM_AD.rare:
                return gnomAD === GNOM_AD.rare;
              case GNOM_AD.common:
                return gnomAD === GNOM_AD.common;
            }
          });
        }
      }),
      ...(zygosity.length && {
        zygosity: item => zygosity.some(filter => item.zygosity === filter)
      }),
      ...(effect.length && {
        effect: item =>
          effect.some(
            filter => item.effect.toLowerCase() === filter.toLowerCase()
          )
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
    const filtersArray = Object.keys(appliedFilters).map(key => {
      return appliedFilters[key];
    });

    const filteredData = data.filter(item => {
      return filtersArray.every(filter => filter(item));
    });

    if (order === SORTING_ORDER.ascending) {
      return filteredData.sort((a, b) => a[sortParam] - b[sortParam]).slice();
    }

    if (order === SORTING_ORDER.descending) {
      return filteredData.sort((a, b) => b[sortParam] - a[sortParam]).slice();
    }

    return filteredData.sort((a, b) => a.priority - b.priority).slice();
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
    return queries.filter(query => {
      if (searchQuery) {
        return query?.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return query;
      }
    });
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
  data => {
    return data.filter(row => row.selected);
  }
);

export const getSelectedIsAddedRows = createSelector(
  getSelectedRows,
  data => {
    return data.filter(row => row.isAdded);
  }
);

export const checkIsAllRowSelected = createSelector(
  getTableDataAsArray,
  getSelectedRows,
  (allData, selectedData) => {
    let nonUncheckMode = 0;
    const notConfirmedData = allData?.filter(item => {
      if (item.status === TEXTS.UNCHECK) {
        return item.selected;
      }
      else{
        nonUncheckMode++;
      }
    });
    return (
      !!selectedData?.length &&
      notConfirmedData?.length === (allData.length - nonUncheckMode)
    );
  }
);

export const getTestType = state => state?.test?.panel_type;

export const getTests = state => {
  return state?.tests?.tests.sort(function(a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });
};

// Variant page: Evidence
export const getSomaticEvidence = state =>
    state.variantPage.pageData.somatic_evidence,
  getGermlineEvidence = state => state.variantPage.pageData.germline_evidence,
  getEvidenceConfigIsOpen = state =>
    state.variantPage.evidenceConfig.actionSlideBarStatus,
  getEvidenceConfigMode = state => state.variantPage.evidenceConfig.mode,
  getEvidenceConfigId = state => state.variantPage.evidenceConfig.id,
  getEvidenceTypeSelect = state =>
    state.variantPage.evidenceConfig.evidenceTypeSelect,
  getEvidenceSourceInput = state =>
    state.variantPage.evidenceConfig.evidenceSourceInput,
  getEvidenceLevelSelect = state =>
    state.variantPage.evidenceConfig.evidenceLevelSelect,
  getEvidenceDescription = state =>
    state.variantPage.evidenceConfig.evidenceDescriptionTextarea,
  getCurrentEvidenceTab = state =>
    state.variantPage.evidenceConfig.currentEvidenceTab,
  getSubmitData = createSelector(
    getEvidenceTypeSelect,
    getEvidenceSourceInput,
    getEvidenceLevelSelect,
    getEvidenceDescription,
    getVariantPageTestId,
    getVariantId,
    getEvidenceConfigId,
    getZygosityType,
    (
      category,
      source,
      level,
      description,
      testId,
      variantId,
      evidenceId,
      zygosity_type
    ) => {
      const sendData = {
        category,
        source,
        level,
        zygosity_type
      };
      return {
        ids: { testId, variantId, evidenceId },
        data: description ? { ...sendData, description } : sendData
      };
    }
  ),
  getCurrentEvidenceData = createSelector(
    getZygosityType,
    getVariantPage,
    (type, data) => {
      const res = Object.keys(data).find(key => {
        const arr = key.toString().split("_");
        return arr.includes(type) && arr.includes(TEXTS.evidence);
      });
      return data[res];
    }
  ),
  getTabPaneHeaders = createSelector(
    getCurrentEvidenceData,
    allData => {
      if (allData) {
        const sortedArray = Object.keys(allData)
            .map(key => allData[key].category)
            .sort(),
          arrLng = sortedArray.length,
          getObj = (title, value, length) => {
            return { title, value, length };
          },
          formattedArray = [];

        let newObj = {};
        for (let i = 0; i < arrLng; i++) {
          const str = sortedArray[i];

          if (newObj.hasOwnProperty(str)) {
            newObj[str]++;
          } else {
            newObj[str] = 1;
          }
        }

        Object.keys(EVIDENCE_CATEGORIES_OPTIONS).map(item => {
          const { label, value } = EVIDENCE_CATEGORIES_OPTIONS[item],
            val = Object.keys(newObj).find(a => a === value);

          formattedArray.push(getObj(label, value, val ? newObj[val] : 0));
        });
        return formattedArray;
      }
    }
  ),
  getDataVariantClassChanged = createSelector(
    getVariantPageServerData,
    obj => {
      const { notes, status, somatic_class, germline_class, zygosity } =
        obj || {};
      return {
        zygosity: zygosity,
        germline_class: germline_class,
        somatic_class: somatic_class,
        status: status,
        notes: notes
      };
    }
  );

export const getIsTumorInfoLoading = state => state?.test?.isTumorInfoLoading;

export const getCoverageTableData = state => {
  const data = state?.coveragePage?.data;
  return data.sort((a, b) => a.minCoverage - b.minCoverage).slice();
};

export const getSelectedCoverageRows = createSelector(
  getCoverageTableData,
  data => {
    return data.filter(row => row.selected);
  }
);

export const checkIsAllCoverageRowsSelected = createSelector(
  getCoverageTableData,
  getSelectedCoverageRows,
  (allData, selectedData) => {
    let nonUncheckMode = 0;
    const notConfirmedData = allData?.filter(item => {
      if (item.status === TEXTS.UNCHECK) {
        return item.selected;
      }
      else{
        nonUncheckMode++;
      }
    });
    return (
      !!selectedData?.length &&
      notConfirmedData?.length === (allData.length - nonUncheckMode)
    );
  }
);


export const getFilteredDnaVariants = state => state.finalReport?.dna_variants;

export const getDnaVariantsAsArray = createSelector(
  getFilteredDnaVariants,
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


