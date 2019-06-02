import { FILTERS } from "Utils/constants";
import {createSelector} from 'reselect';

export const
  getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomId]
;


const getData =  state => state?.filters.data;

export const getFilteredData = createSelector(
  getData,
  getFilterType,
  getFilterVariantClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterGnomId,
  (data ,type, variantClass, hotSpot, snp, roi, gnom) => {

    console.log('-data: ', data)
    // console.log('-type: ', type)
    // console.log('-variantClass: ', variantClass)
    // console.log('-hotSpot: ', hotSpot)
    // console.log('-snp: ', snp)
    // console.log('-roi: ', roi)
    // console.log('-gnom: ', gnom)

    const filter = {
      type, variantClass, hotSpot: true, snp, roi, gnom
    }

    console.log('--filter: ', filter)

    // const filteredData = data.map(item => {
    //   for (let key in filter){
    //     console.log(item[key])
    //     if(item[key] && (item[key] === filter[key])){
    //       return item
    //     }
    //   }
    // })

    data = data.filter(function(item) {
      for (let key in filter) {
        if (item[key] && (item[key] === undefined || item[key] !== filter[key]))
          return false;
      }
      return true;
    });


    console.log('---data: ', data)
    //
    return data

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