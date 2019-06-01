import { FILTERS } from "Utils/constants";

export const getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
  getFilterGnomId = state => state?.filters?.[FILTERS.gnomId],
  getFilteredEntries = state => state?.filters?.[FILTERS.gnomId],// TODO
  getTotalEntries = state => state?.filters?.[FILTERS.gnomId];// TODO
