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

  getIgvFetchBAMFileStatus = state => state?.igv?.fetchBAMFileStatus,
  getIgvAlertShow = state => state?.igv?.isIgvAlertShow,
  getIgvAlertShowAgaing = state => state?.igv?.isIgvAlertShowAgaing;

export const getNotes = (state, id) => state?.table?.data?.[id].notes;

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
  getTableDataAsArray,
  getAppliedFilters,
  (data, appliedFilters) => {

    if (isEmpty(appliedFilters)) {
      console.log("-No filters");
      return data;
    }

    const filtersArray = Object.keys(appliedFilters).map(key => {
      return appliedFilters[key];
    });

    const filteredData = data.filter(item => {
      return filtersArray.every(filter => filter(item));
    });


    return filteredData;
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
