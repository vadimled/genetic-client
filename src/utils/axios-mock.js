import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { evidences } from "Utils/variant-page-mock-data";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { generateHistoryTableMockData } from "Utils/mock-history-generator";

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
    activity_log: [
      {
        action: {
          curr_val: "homo",
          field: "zygosity",
          prev_val: ""
        }
      }
    ],
    alt: "A",
    callers: "freebayes,mutect,varscan,vardict",
    chr: "chr1",
    class: "SILENT",
    clinvar_variation_id: "167306.0",
    cosmic: "",
    damaging_score: "T",
    db_snp: "rs4846051",
    dp: "443.0",
    effect: "SYNONYMOUS_CODING",
    effect_impact: "LOW",
    exome_cov_over_20: "0.999",
    fathmm_score: "",
    gene: "MTHFR",
    genome_cov_over_20: "0.905",
    gnom_ad_exomes_af: "",
    gnom_ad_exomes_popmax_af: "",
    gnom_ad_genomes_af: "",
    gnom_ad_genomes_flag: "",
    gnom_ad_genomes_popmax_af: "",
    hgvs_c: "c.1305C>T",
    hgvs_p: "p.Phe435Phe",
    id: "5d5bcc6608589e00124bfd77",
    large_deletion: "False",
    large_insertion: "False",
    mutation_taster_score: "",
    mutation_type: "dna",
    position: "11854457",
    provean_score: "",
    quality: "34.3640488656",
    ref: "G",
    roi: "True",
    snps: "",
    test_id: "5d5bcc6608589e00124bfd76",
    transcript: "NM_005957.4",
    zygosity: "homo",
    germline_class: "lpath",
    somatic_class: "tier2",
    amino_acid_change: "E429A"
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

  mock
    .onGet(/\/tests\/.+\/variants/, { params: { mutation: "dna" } })
    .reply(() => [200, generateDNAVariantTableMockData(50)]);

  mock
    .onGet(/\/variants\/.+\/classification/)
    .reply(() => [200, generateHistoryTableMockData(20)]);

  mock.onGet(/\/tests/).reply(200, [
    {
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
    }
  ]);
}
