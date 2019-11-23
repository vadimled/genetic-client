import axios from "axios";
import axios_based from "./axios-base";
import "Utils/axios-mock";

export function fetchBAMFile({ BAMFileUrl, BAMIndexFileUrl }) {
  return axios.get(
    `http://localhost:60151/load?file=${BAMFileUrl}&index=${BAMIndexFileUrl}`
  );
}

export function goToChrPositionIgv(chrPosition) {
  return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
}

export function loadHgvsApi(data) {
  const { chromosome, position, alleleReference, alleleAlternative } = data;
  // eslint-disable-next-line
  return axios.get(
    `https://myvariant.info/v1/variant/chr${chromosome}:g.${
      position
    }${alleleReference}>${alleleAlternative
    }?fields=snpeff.ann.hgvs_c%2Csnpeff.ann.hgvs_p%2Csnpeff.ann.feature_id&dotfield=true`
  );
}

export function addResultApi(data) {
  const { testId } = data;
  const payload = {
    mutation_type: "dna",
    gene: data.gene,
    chr: data.chromosome,
    position: data.position,
    ref: data.alleleReference,
    alt: data.alleleAlternative,
    hgvs_c: data.coding,
    hgvs_p: data.protein,
    transcript: data.transcript,
    dp: data.coverage,
    percentage_variants: data.vaf
  };

  return axios_based.post(`/tests/${testId}/variants`, {
    ...payload
  });
}

export function editResultApi(data) {
  const { testId, id: variantId } = data;
  const payload = {
    mutation_type: "dna",
    gene: data.gene,
    chr: data.chromosome,
    position: data.position,
    ref: data.alleleReference,
    alt: data.alleleAlternative,
    hgvs_c: data.coding,
    hgvs_p: data.protein,
    transcript: data.transcript,
    dp: data.coverage,
    percentage_variants: data.vaf
  };

  return axios_based.put(`/tests/${testId}/variants/${variantId}`, {
    ...payload
  });
}

export function fetchTestMetadataApi(id) {
  return axios_based.get(`/tests/${id.payload}`);
}

export function setTumorInfoApi(data) {
  const { testId, name, value } = data.payload;
  return axios_based.patch(`/tests/${testId}`, {
    tumor_info: {
      [name]: value
    }
  });
}

export function patchTestApi(params) {
  const { testId, data } = params;
  return axios_based.patch(`/tests/${testId}`, data);
}

export function fetchVariantMetadataDataApi(data) {
  const { testId, variantId } = data.payload;
  return axios_based.get(`/tests/${testId}/variants/${variantId}/`);
}

export function updateVariantApi(data) {
  const { name, value, testId, variantId } = data.payload;
  return axios_based.patch(`/tests/${testId}/variants/${variantId}`, {
    [name]: value
  });
}

export function fetchTestsApi() {
  return axios_based.get(`/tests/`);
}

export function fetchClassificationHistoryApi(action) {
  const { variantId } = action.payload;
  return axios_based.get(`/variants/${variantId}/classification`);
}

export function addEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId },
    data
  } = action.payload;

  return axios_based.post(`/tests/${testId}/variants/${variantId}/evidences`, {
    ...data
  });
}

export function editEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId },
    data
  } = action.payload;

  return axios_based.put(
    `/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`,
    {
      ...data
    }
  );
}

export function deleteEvidenceEntryApi(action) {
  const {
    ids: { variantId, evidenceId }
  } = action.payload;
  return axios_based.delete(`/variants/${variantId}/evidences/${evidenceId}`);
}

export function fetchEvidenceDataApi(action) {
  return axios_based.get(`/variants/${action.payload}/evidences`);
}

export function fetchTableDataApi(action) {
  const { testId, mutation } = action.payload;
  return axios_based.get(`/tests/${testId}/variants`, {
    params: {
      mutation
    }
  });
}

export function exportTableApi(testId) {
  return axios_based
    .post(`/tests/${testId}/export`, { gsId: testId }, { responseType: "blob" })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${testId}.tsv`);
      document.body.appendChild(link);
      link.click();
    });
}

export function updateUserPreferencesApi({ testId, preferences }) {
  return axios_based.put(`/tests/${testId}/preferences`, {
    preferences
  });
}

export function fetchUserPreferencesApi({ testId }) {
  return axios_based.get(`/tests/${testId}/preferences`);
}

export function fetchConfirmationMetadataApi(data) {
  return axios_based.get(`/confirmations/${data.payload}`);
}
export function sendVariantToConfirmation(data) {
  const { variants, testId } = data;
  return axios_based.post(`/tests/${testId}/confirmations`, {
    variants
  });
}

// Actionable Alterations
export function fetchActionableAlterationsApi(data) {
  return axios_based.get(`/tests/${data.payload}/actionablealterations`);
}

export function postAtionableAlterationsApi(data) {
  const {testId, mutation, variants_ids} = data.payload;
  return axios_based.post(`/tests/${testId}/actionablealterations?mutation=${mutation}`, {variants_ids});
}

export function deleteAtionableAlterationsApi(data) {
  const { testId, id } = data.payload;
  return axios_based.delete(
    `/tests/${testId}/actionablealterations/${id}`
  );
}

export function patchActionableAlterationsApi(params) {
  const { testId, actionableAlterationId, body } = params;
  return axios_based.patch(`/tests/${testId}/actionablealterations/${actionableAlterationId}`, body);
}

export function patchActionableAlterationsDrugsApi(params) {
  const { testId, actionableAlterationId, actionablealterationDrugId, body } = params;
  return axios_based.patch(`/tests/${testId}/actionablealterations/${actionableAlterationId}/drugs/${actionablealterationDrugId}`, body);
}





export function fetchFinalReportClinicalDataApi(data) {
  return axios_based.get(`/tests/${data.payload}/clinical`);
}

export function fetchFinalReportMetadataApi(data) {
  return axios_based.get(`/tests/${data.payload}/final_report`);
}

export function fetchFinalReportVariantsApi (action) {
  const { testId, mutation } = action.payload;
  // return axios_based.get(`/tests/${testId}/variants?filter={"zygosity":["homo","hetero","hemi","somatic"],"germline_class":["path","lpath","vus","lben"],"somatic_class":["tier1","tier2","tier3"]}`, {
  //   params: {
  //     mutation
  //   }
  // });

  return axios_based.get(`/tests/${testId}/variants`, {
    params: {
      mutation
    }
  });
}


