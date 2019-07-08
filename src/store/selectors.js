import { FILTERS, GNOM_AD } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from "lodash.isempty";

export const
  getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterSomaticClass = state => state?.filters?.[FILTERS.somaticClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterVaf = state => state?.filters?.[FILTERS.vaf],
  getFilterCancerDBs = state => state?.filters?.[FILTERS.cancerDBs],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomAD],

  getTableData = state => state?.table?.data, // use getTableDataAsArray instead this
  getSelectedRowKeys = state => state?.table?.selectedRowKeys,
  getMutationType = state => state.variants.mutations,
  getTumorInfoMode = state => state.variants.showTumorInfo,
  getTumorInfoType = state => state.variants.tumorInfo?.type,
  getTumorInfoLocation = state => state.variants.tumorInfo?.location,
  getTumorInfoPercent = state => parseInt(state.variants.tumorInfo?.percent, 10),

  getIgvFetchBAMFileStatus = state => state?.igv?.fetchBAMFileStatus,
  getIgvAlertShow = state => state?.igv?.isIgvAlertShow,
  getIgvAlertShowAgaing = state => state?.igv?.isIgvAlertShowAgaing,
  getIgvLastQuery = state => state?.igv?.igvLastQuery,
  getBAMFileUrl = state => state?.igv?.BAMFileUrl;

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

export const getSearchResult = createSelector(
  getTableDataAsArray,
  getSearchQuery,
  (data, searchQuery) => {
    return data.filter(item => {
      return (
        item.gene.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.variantClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.coding.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.protein.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }
);

export const getNotes = (state, id) => state?.table?.data?.[id].notes;



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
          variantClass.some(filter => item.variantClass === filter)
      }),
      ...(somaticClass.length && {
        somaticClass: item =>
          somaticClass.some(filter => item.somaticClass === filter)
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
  (data, appliedFilters) => {
    if (isEmpty(appliedFilters)) {


      // console.log("--data: ", data)
      const sortedData = data.sort((a, b) => b.priority - a.priority).slice();

      return sortedData;
    }

    const filtersArray = Object.keys(appliedFilters).map(key => {
      return appliedFilters[key];
    });

    const filteredData = data.filter(item => {
      return filtersArray.every(filter => filter(item));
    });


    const sortedData = filteredData.sort((a, b) => b.priority - a.priority).slice();

    return sortedData;
  }
);

export const getSearchQueries = createSelector(
  getFilteredData,
  data => {
    const queriesArr = new Set([]);
    data.map(item => {
      queriesArr.add(item.gene);
      queriesArr.add(item.coding);
      if (item.variantClass) {
        queriesArr.add(item.variantClass);
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


