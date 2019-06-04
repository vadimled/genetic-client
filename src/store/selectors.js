import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from "lodash.isempty";

const getDb = state => state?.db;
const getFilters = state => state?.filters;

export const
  getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterSomaticClass = state => state?.filters?.[FILTERS.somaticClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterVaf = state => state?.filters?.[FILTERS.vaf],
  getFilterCancerDBs = state => state?.filters?.[FILTERS.cancerDBs],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomId],

  getTableData = state => state?.table?.data,
  getSelectedRowKeys = state => state?.table?.selectedRowKeys,



  getMutationType = state => state.variants.mutations,
  getTotalEntriesAmount = state => state?.db?.length;

export const getFilteredEntries = createSelector(
  getDb,
  getFilters,
  (db, filters) => console.log(db, filters) // TODO: when real data structure will be created
);

export const getFilteredEntriesAmount = createSelector(
  getFilteredEntries,
  filters => filters?.length
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
  (type, variantClass, somaticClass, hotSpot, snp, roi, filterVaf, filterCancerDBs, gnom) => {
    const filters = {
      // ...(type !== null && { type }),
      ...(variantClass.length && { variantClass }),
      ...(variantClass.length && { variantClass }),
      ...(hotSpot.length && { hotSpot }),
      ...(snp.length && { snp }),
      ...(roi.length && { roi }),
      ...(gnom.length && { gnom })
    };

    return filters;
  }
);


export const getFilteredData = createSelector(
  getTableData,
  getAppliedFilters,
  (data, appliedFilters) => {

    if (isEmpty(appliedFilters)) {
      console.log("-No filters");
      return data;
    }

    const filteredData = data.filter(item => {
      for (let key in appliedFilters) {
        return appliedFilters[key].some(filter => item[key] === filter);
      }
    });

    return filteredData;
  }
);
