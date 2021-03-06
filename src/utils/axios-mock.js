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
    .reply(() => [200, generateDNAVariantTableMockData(5)]);

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

  mock.onPost(/\/tests\/.+\/export/).reply(200);

  mock.onGet(/\/confirmations\/?\w+$/).reply(200, {
    id: "5d511f574651a20020a0ab50",
    variants: [
      {
        variant_id: "1d5bcc6608589e00124bfd76",
        gene: "MTHFR",
        chr: "ch1",
        position: 658729120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
        primers: [
          {
            primer: 10,
            fragment_size: 200,
            instructions:
              "We will build a small game during this tutorial. " +
              "You might be tempted to skip it because you???re not " +
              "building games ??? but give it a chance. "
          }
        ],
        activity_log: [
          {
            action: {
              curr_val: "homo",
              field: "zygosity",
              prev_val: ""
            }
          }
        ]
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T"
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 200
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "2d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 2,
            fragment_size: 250,
            instructions:
              "The techniques you???ll learn in the tutorial are fundamental " +
              "to building any React app, and mastering it will give you " +
              "a deep understanding of React."
          }
        ],
        gene: "KTAR",
        chr: "ch2",
        position: 19823208,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      },
      {
        variant_id: "3d5bcc6608589e00124bfd76",
        primers: [
          {
            primer: 5,
            fragment_size: 800
          }
        ],
        gene: "GFaFR",
        chr: "ch3",
        position: 164529120,
        hgvs_c: "AT > A",
        hgvs_p: "c.1305C>T",
        transcript: "c.1305C>T",
      }
    ]
  });

  // final_report
  mock.onGet(/\/tests\/.+\/final_report$/)
    .reply(200, {
      id: "5d511f574651a20020a0ab50",
      panel_type: "risk",
      tumor_info: {
        type: "pheochromocytoma",
        location: "gallbladder",
        cancer_cell_percentage: 60
      },
      patient: {
        gender: "mail",
        age: 51
      }
    });
  mock.onGet(/\/tests\/.+\/actionablealterations/).reply(
    200,
    [
      {
        id: "5d511f574651a20020a0ab50",
        variant_id: "1d5bcc6608589e00124bfd76",
        mutation_type: "dna",
        gene: "MTHFR",
        vaf: 48,
        protein: "p.Glu429Ala",
        coding: "c.1305C>T" ,
        zygosity: "homo",
        germline_class: "lpath",
        somatic_class: "tier2",
        is_marked: false,
        clinical_trials: true,
        approved_drug_same_indication: "Gedatolisib",
        approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
        is_expanded_interpretation_approved: false,
        is_therapies_approved: false,
        is_clinical_trials_approved: false
      }
    ]
  );
  mock.onGet(/\/tests\/.+\/preferences$/)
    .reply(200, {
      "preferences": {
        "filters": {},
        "sorting": {}
      }
    });}
