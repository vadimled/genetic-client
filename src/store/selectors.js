// import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";
import isEmpty from "lodash.isempty";

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

const filteredByVariantClass = createSelector(
  getAppliedFilters,
  appliedFilters => {
    if (appliedFilters.variantClass) {
      // console.log('variantClass: ', appliedFilters.variantClass)
      return appliedFilters.variantClass;
    }
  }
);

export const getFilteredData = createSelector(
  getData,
  getAppliedFilters,
  filteredByVariantClass,
  (data, appliedFilters, variantClass) => {
    console.log("--appliedFilters: ", appliedFilters);

    if (isEmpty(appliedFilters)) {
      console.log("-No filters");
      return data;
    }

    console.log("variantClass: ", variantClass);

    if (variantClass && variantClass.length) {
      const filteredByVariant = data.filter(item => {
        return variantClass.some(variant => item.variantClass === variant);

        // variantClass.map(variant => {
        //   console.log('-item: ', item)
        //   console.log('-variant: ', variant)
        //   if(item.variantClass === undefined || item.variantClass !== variant){
        //     console.log('-no match')
        //     return false
        //   }
        // })
        // return true
      });
      console.log("--filteredByVariant: ", filteredByVariant);
      return filteredByVariant;
    }

    const filteredData = data.filter(item => {
      for (let key in appliedFilters) {
        // if(key === 'variantClass'){
        //   console.log('variant: ', key)
        //
        // }

        if (item[key] === undefined || item[key] !== appliedFilters[key]) {
          console.log("here 1");
          return false;
        }
      }
      return true;
    });

    // console.log("here 2");
    return filteredData;
  }
);
