// import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from 'lodash.isempty';


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

    // console.log("++filters: ", filters);
    return filters;
  }
);

export const getFilteredData = createSelector(
  getData,
  getAppliedFilters,
  (data, appliedFilters) => {

    console.log("--appliedFilters: ", appliedFilters);

    if(isEmpty(appliedFilters)){
      console.log('-No filters')
      return data
    }


    const filteredData = data.filter(function(item) {
      for (let key in appliedFilters) {
        if (item[key] === undefined || item[key] !== appliedFilters[key]){
          console.log('here 1');
          return false;
        }
      }
      console.log('here 2');
      return true;
    });



    console.log("---filteredData: ", filteredData);
    // //
    return filteredData;

  }
);
