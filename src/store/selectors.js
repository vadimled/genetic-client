import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from "lodash.isempty";

const getDb = state => state?.db;
const getFilters = state => state?.filters;

export const getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterSomaticClass = state => state?.filters?.[FILTERS.somaticClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterVaf = state => state?.filters?.[FILTERS.vaf],
  getFilterCancerDBs = state => state?.filters?.[FILTERS.cancerDBs],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomAD],
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
  (
    type,
    variantClass,
    somaticClass,
    hotSpot,
    snp,
    roi,
    vaf,
    cancerDBs,
    gnom
  ) => {
    // const filters = {
    //   // ...(type !== null && { type }),
    //   ...(variantClass.length && { variantClass }),
    //   ...(somaticClass.length && { somaticClass }),
    //   ...(hotSpot.length && { hotSpot }),
    //   ...(snp.length && { snp }),
    //   ...(roi.length && { roi }),
    //   ...(vaf.length && { vaf }),
    //   ...(cancerDBs.length && { cancerDBs }),
    //   ...(gnom.length && { gnom })
    // };



    const filters = {
      ...(variantClass.length && { variantClass: (item) => variantClass.some(filter => item.variantClass === filter) }),
      ...(somaticClass.length && { somaticClass: (item) => somaticClass.some(filter => item.somaticClass === filter) }),
      ...(hotSpot.length && { hotSpot: (item) => hotSpot.some(filter => item.hotSpot === filter) }),
      ...(snp.length && { snp: (item) => snp.some(filter => item.snp === filter) }),
      ...(roi.length && { roi: (item) => roi.some(filter => item.roi === filter) }),
      ...(vaf.length && { vaf: (item) => vaf.some(filter => item.vaf === filter) }),
      ...(cancerDBs.length && { cancerDBs: (item) => cancerDBs.some(filter => item.cancerDBs === filter) }),
      ...(gnom.length && { gnom: (item) => gnom.some(filter => item.gnom === filter) }),
    };

    return filters;
  }
);

const filterByVaf = createSelector(
  getTableData,
  getAppliedFilters,
  (data, filters) => {
    if (filters.vaf && filters.vaf.length) {
      return filters.vaf;
    }
  }
);

export const getFilteredData = createSelector(
  getTableData,
  getAppliedFilters,
  filterByVaf,
  (data, appliedFilters, filterByVaf) => {
    console.log(filterByVaf);
    console.log('--appliedFilters: ', appliedFilters);

    if (isEmpty(appliedFilters)) {
      console.log("-No filters");
      return data;
    }

    const filters = Object.keys(appliedFilters).map(key => {
      // console.log(typeof appliedFilters[filter])
      return appliedFilters[key]
    })

    const filteredData = data.filter((item) => {

      // for (let key in appliedFilters) {
      //
      //   // if (filterByVaf.length) {
      //   //   return item.vaf > filterByVaf[0] && item.vaf < filterByVaf[1];
      //   // }
      //
      //
      //   return appliedFilters[key].some(filter => item[key] === filter);
      // }

      return filters.some(filter => filter(item));
    });

    console.log("-----filteredData: ", filteredData)

    return filteredData;
  }
);
