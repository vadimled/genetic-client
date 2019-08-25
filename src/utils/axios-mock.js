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
    },
    created_at: Date()
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

  mock.onGet(/\/variants\/.+\/evidences/).reply(() => [200, evidences]);

  mock.onPatch(/\/tests\/.+\/variants\/.+/).reply(200, {
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
    id: "vadimmavsyia5xxhcari50od9",
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
    amino_acid_change: "E429A",
    notes: "Mock-data faked notes"
  });

  mock.onPost(/\/tests\/.+\/variants\/.+\/evidences/).reply(200, {
    id: "vadimmall3xfe2gzdmlnw067",
    category: "silicoPredictor",
    created_at: "2019-08-19T10:02:48.537Z",
    source: "http://en.Wikipedia/wiki/DNA",
    zygosity_type: "germline",
    user: {
      user_id: "dsfafdasfdas",
      name: "Vadim Malckin",
      pic_url: ""
    },
    description: "This is the test description for mock add the new entry"
  });

  mock.onPut(/\/tests\/.+\/variants\/.+\/evidences\/.+/).reply(200, {
    id: "1gzhbamall3xfe2gzdmlnw9aj",
    category: "publications",
    source: "http://en.Wikipedia/wiki/DNA",
    key: 0,
    created_at: "Sun Jun 17 2018 03:00:00 GMT+0300 (Israel Daylight Time)",
    user: {
      user_id: "dsfafdasfdas",
      name: "Van Disel",
      pic_url: ""
    },
    description: "This is the test description for mock edit the existed entry",
    level: "BP1",
    zygosity_type: "germline"
  });

  mock.onDelete(/\/variants\/.+\/evidences\/.+/).reply(200);

  mock
    .onGet(/\/tests\/.+\/variants/, { params: { mutation: "dna" } })
    .reply(() => [200, generateDNAVariantTableMockData(20)]);

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
        cancer_cell_percentage: 70
      },
      created_at: Date()
    }
  ]);
  
}
