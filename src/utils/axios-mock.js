import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { evidences, classificationHistory } from "Utils/variant-page-mock-data";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";

export const mock =
  process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true" &&
  new MockAdapter(axios, { delayResponse: 1000 });

if (mock) {
  mock.onGet(/http:\/\/localhost:60151\/load\?file=.+/).reply(204, {
    users: [{ id: 1, name: "John Smith" }]
  });

  mock.onGet(/\/tests\/?\w+$/).reply(200, {
    id: "5d511f574651a20020a0ab50",
    gsid: "GS00115",
    panel_type: "risk",
    mutation_types: ["dna", "rna", "agena"],
    tumor_info: {
      type: "pheochromocytoma",
      location: "gallbladder",
      cancer_cell_percentage: 80
    }
  });

  mock.onGet(/\/tests\/.+\/variants\/.+\/$/).reply(200, {
    // /api/tests/GS00115NP050818_TS1_01/variant/1gr3ekk8qbb29u5vljto219bn
    currentZygosity: "Homo",
    germline_variant_class: "LPATH",
    somatic_variant_class: "Tier2"
  });

  mock.onGet(/\/tests\/.+\/variants\/.+\/evidences/).reply(200, {
    evidences
  });

  mock.onPatch(/\/tests\/.+\/variants\/.+/).reply(200, {
    "id": "string",
    "test_id": "string",
    "mutation_type": "dna",
    "roi": "string",
    "chr": "string",
    "position": "string",
    "ref": "string",
    "alt": "string",
    "gene": "string",
    "hgvs_c": "string",
    "hgvs_p": "string",
    "variant": "string",
    "quality": "string",
    "dp": "string",
    "callers": "string",
    "transcript": "string",
    "db_snp": "string",
    "cosmic": "string",
    "snps": "string",
    "clinvar_variation_id": "string",
    "class": "string",
    "effect": "string",
    "effect_impact": "string",
    "genome_cov_over_20": "string",
    "exome_cov_over_20": "string",
    "gnom_ad_exomes_af": "string",
    "gnom_ad_exomes_popmax_af": "string",
    "gnom_ad_genomes_flag": "string",
    "gnom_ad_genomes_af": "string",
    "gnom_ad_genomes_popmax_af": "string",
    "damaging_score": "string",
    "provean_score": "string",
    "fathmm_score": "string",
    "mutation_taster_score": "string",
    "large_insertion": "string",
    "large_deletion": "string",
    "activity_log": [
      {
        "user": {
          "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "name": "string",
          "pic_url": "string"
        },
        "action": {
          "prev_val": "string",
          "curr_val": "string",
          "field": "string"
        },
        "timestamp": "2019-08-20T14:48:00.747Z"
      }
    ],
    "manual": true,
    "variant_id": "string",
    "zygosity": "homo",
    "germline_class": "path",
    "somatic_class": "tier1",
    "status": "string",
    "notes": "string"
  });

  mock.onPost(/\/tests\/.+\/variants\/.+\/evidences/).reply(200, {
    id: "vadimmall3xfe2gzdmlnw067",
    category: "silicoPredictor",
    source: "http://example.com",
    key: 1,
    created_at: "7/August/2019",
    user: {
      user_id: "dsfafdasfdas",
      name: "Vadim Malckin",
      pic_url: ""
    },
    description: "This is the test description for mock add the new entry",
    level: "A3",
    classification: "somatic"
  });

  mock.onPut(/\/tests\/.+\/variants\/.+\/evidences\/.+/).reply(200, {
    id: "1gzhbamall3xfe2gzdmlnw9aj",
    category: "publications",
    source: "http://en.Wikipedia/wiki/DNA",
    key: 0,
    created_at: "7/August/2019",
    user: {
      user_id: "dsfafdasfdas",
      name: "Van Disel",
      pic_url: ""
    },
    description: "This is the test description for mock edit the existed entry",
    level: "BP1",
    classification: "germline"
  });
  
  mock.onDelete(/\/tests\/.+\/variants\/.+\/evidences\/.+/).reply(200);

  mock.onGet(/\/tests\/.+\/variants/,
    { params: {mutation : 'dna' } }).reply(
    () => [200,  generateDNAVariantTableMockData(50)]
  );

  mock.onGet(/\/tests\/.+\/variants\/.+\/classification-history/).reply(200, {
    classificationHistory
  });

  mock.onGet(/\/tests/).reply(200,
    [{
      id: "5d511f574651a20020a0ab50",
      gsid: "GS00115",
      panel_type: "risk",
      mutation_types: ["dna", "rna", "agena"],
      tumor_info: {
        type: "pheochromocytoma",
        location: "gallbladder",
        cancer_cell_percentage: 80
      },
      created_at: Date()
    }]
  );
}
