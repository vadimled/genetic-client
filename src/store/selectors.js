// import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";

export const getFilterType = state => state?.filters?.type,
  getFilterVariantClass = state => state?.filters?.variantClass,
  getFilterHotSpot = state => state?.filters?.hotSpot,
  getFilterSnp = state => state?.filters?.snp,
  getFilterRoi = state => state?.filters?.roi,
  getFilterGnomId = state => state?.filters?.gnomId;

const getData = state => state?.filters.data;

const getAppliedFilters = createSelector(
  getFilterType,
  getFilterVariantClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterGnomId,
  (type, variantClass, hotSpot, snp, roi, gnom) => {
    const filters = {
      ...(type !== null && { type }),
      ...(variantClass.length && { variantClass }),
      ...(hotSpot !== null && { hotSpot }),
      ...(snp !== null && { snp }),
      ...(roi !== null && { roi }),
      ...(gnom !== null && { gnom })
    };

    console.log("++filters: ", filters);
  }
);

export const getFilteredData = createSelector(
  getData,
  getAppliedFilters,
  (data, appliedFilters) => {
    // console.log("-data: ", data);
    // console.log('-type: ', type)
    // console.log('-variantClass: ', variantClass)
    // console.log('-hotSpot: ', hotSpot)
    // console.log('-snp: ', snp)
    // console.log('-roi: ', roi)
    // console.log('-gnom: ', gnom)

    console.log("--appliedFilters: ", appliedFilters);

    const filteredData = data;

    // console.log("---filteredData: ", filteredData);
    // //
    return filteredData;

    // data.map(item => {
    //   // console.log(item)
    //   for (let key in filter) {
    //     if(item[key] === filter[key]){
    //       console.log('-1--: ', item)
    //     }
    //   }
    // })
  }
);
