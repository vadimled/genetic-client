import { FILTERS } from "Utils/constants";
import { createSelector } from "reselect";

const getDb = state => state?.table?.data;
const getFilters = state => state?.filters;

export const getFilterType = state => state?.filters?.[FILTERS.type],
  getFilterVariantClass = state => state?.filters?.[FILTERS.variantClass],
  getFilterHotSpot = state => state?.filters?.[FILTERS.hotSpot],
  getFilterSnp = state => state?.filters?.[FILTERS.snp],
  getFilterRoi = state => state?.filters?.[FILTERS.roi],
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

export const getNotes = (state, id) => state?.table?.data?.[id].notes;

