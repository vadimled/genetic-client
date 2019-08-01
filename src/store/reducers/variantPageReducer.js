import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  variantData: {
    gene: "A1CF",
    protein: "p.Leu2303Leu",
    chrPosition: "chr1:45797505",
    alleleChange: "C > GA",
    ref: "C",
    alt: "GA",
    dbSNP: "rs3219489",
    clinvarVariationId: "516652",
    coding: "c.7634+21_7634+22insTCATCATGAGAGAAGGTGAGTGGGGCTCTCAAAGTG",
    transcript: "NM_110509.1",
    COSMIC: ["COSM3997243", "COSM3997245", "COSM3997244"],
    AminoAcidChange: "I1564ISLKN",
    DamagingScore: "TTCATGAGAGAAGGTGAGTGG"
  },
  somatic_variant_class: null,
  germline_variant_class: null,
  externalResources: [],
  selectedZygosityType: null,
  somaticClassHistory: {
    "0gzhbamall3xfe2gzdmlnw9aj": {
      key: 0,
      date: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "1gzhbamall3xfe2gzdmlnw9aj": {
      key: 1,
      date: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Unclassified"
    },
    "2gzhbamall3xfe2gzdmlnw9aj": {
      key: 2,
      date: "10/nov/2017",
      gsid: "GS00115NP050816_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier3"
    },
    "3gzhbamall3xfe2gzdmlnw9aj": {
      key: 3,
      date: "10/nov/2017",
      gsid: "GS00115NP050815_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier4"
    },
    "4gzhbamall3xfe2gzdmlnw9aj": {
      key: 4,
      date: "9/nov/2017",
      gsid: "GS00115NP050814_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "5gzhbamall3xfe2gzdmlnw9aj": {
      key: 5,
      date: "8/nov/2017",
      gsid: "GS00115NP050813_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier2"
    },
    "6gzhbamall3xfe2gzdmlnw9aj": {
      key: 6,
      date: "7/nov/2017",
      gsid: "GS00115NP050812_TS1_01",
      analystName: "Waly Yafe",
      class: "Tier3"
    },
    "7gzhbamall3xfe2gzdmlnw9aj": {
      key: 7,
      date: "6/nov/2017",
      gsid: "GS00115NP050811_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier4"
    },
    "8gzhbamall3xfe2gzdmlnw9aj": {
      key: 8,
      date: "5/nov/2017",
      gsid: "GS00115NP050810_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "9gzhbamall3xfe2gzdmlnw9aj": {
      key: 9,
      date: "4/nov/2017",
      gsid: "GS00115NP050828_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier2"
    },
    "10zhbamall3xfe2gzdmlnw9aj": {
      key: 10,
      date: "3/nov/2017",
      gsid: "GS00115NP050838_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier3"
    }
  },
  germlineClassHistory: {
    "0gzhbamall3xfe2gzdmlnw9aj": {
      date: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "1gzhbamall3xfe2gzdmlnw9aj": {
      date: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "2gzhbamall3xfe2gzdmlnw9aj": {
      date: "10/nov/2017",
      gsid: "GS00115NP050816_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "3gzhbamall3xfe2gzdmlnw9aj": {
      date: "10/nov/2017",
      gsid: "GS00115NP050815_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LBEN"
    },
    "4gzhbamall3xfe2gzdmlnw9aj": {
      date: "9/nov/2017",
      gsid: "GS00115NP050814_TS1_01",
      analystName: "Taly Yafe",
      class: "PATH"
    },
    "5gzhbamall3xfe2gzdmlnw9aj": {
      date: "8/nov/2017",
      gsid: "GS00115NP050813_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "6gzhbamall3xfe2gzdmlnw9aj": {
      date: "7/nov/2017",
      gsid: "GS00115NP050812_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "7gzhbamall3xfe2gzdmlnw9aj": {
      date: "6/nov/2017",
      gsid: "GS00115NP050811_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "8gzhbamall3xfe2gzdmlnw9aj": {
      date: "5/nov/2017",
      gsid: "GS00115NP050810_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "9gzhbamall3xfe2gzdmlnw9aj": {
      date: "4/nov/2017",
      gsid: "GS00115NP050828_TS1_01",
      analystName: "Lior GoldBerg",
      class: "VUS"
    },
    "10zhbamall3xfe2gzdmlnw9aj": {
      date: "3/nov/2017",
      gsid: "GS00115NP050838_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    }
  },

  evidence_somatic: {
    publications: {
      title: "Publications",
      content: [
        {
          id: "asdawefqw",
          date: {
            title: "Date",
            created_at: "17/May/2018"
          },
          user: {
            user_id: "dsfafdasfdas",
            name: "Taly Yafe",
            pic_url: ""
          },

          source: {
            title: "Source and Description",
            url: "http://en.Wikipedia/wiki/DNA",
            text:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the DNA molecule," +
              " minimizing their interaction with the solvation shell."
          },
          level: {
            title: "Level",
            text: "A1"
          }
        },
        {
          date: {
            title: "Date",
            date: "1/Apr/2018"
          },
          doctors_name: "Lior GoldBerg",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/GSID-Genom",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen and base-stacking interactions."
          },
          level: {
            title: "Level",
            data: "A2"
          }
        }
      ]
    },
    frequency: {
      title: "Frequency",
      content: [
        {
          date: {
            title: "Date",
            date: "24/Marc/2018"
          },
          doctors_name: "Taly Yafe",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/RNA-GSID-Genom",
            description:
              "The RNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the RNA molecule"
          },
          level: {
            title: "Level",
            data: "B"
          }
        }
      ]
    },
    variant_DBs: {
      title: "Variant DB’s",
      content: []
    },
    other: {
      title: "Other",
      content: [
        {
          date: {
            title: "Date",
            date: "2/Feb/2018"
          },
          doctors_name: "Taly Yafe",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/DNA",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the DNA molecule," +
              " minimizing their interaction with the solvation shell."
          },
          level: {
            title: "Level",
            data: "C1"
          }
        },
        {
          date: {
            title: "Date",
            date: "1/Jun/2018"
          },
          doctors_name: "Lior GoldBerg",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/GSID-Genom",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen and base-stacking interactions."
          },
          level: {
            title: "Level",
            data: "D"
          }
        }
      ]
    }
  },
  evidence_germline: {
    publications: {
      title: "Publications",
      content: [
        {
          date: {
            title: "Date",
            date: "25/May/2018"
          },
          doctors_name: "Taly Yafe",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/DNA",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the DNA molecule," +
              " minimizing their interaction with the solvation shell."
          },
          level: {
            title: "Level",
            data: "PVS1"
          }
        },
        {
          date: {
            title: "Date",
            date: "3/Apr/2018"
          },
          doctors_name: "Lior GoldBerg",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/GSID-Genom",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen and base-stacking interactions."
          },
          level: {
            title: "Level",
            data: "PS1"
          }
        }
      ]
    },
    frequency: {
      title: "Frequency",
      content: [
        {
          date: {
            title: "Date",
            date: "26/Marc/2018"
          },
          doctors_name: "Taly Yafe",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/RNA-GSID-Genom",
            description:
              "The RNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the RNA molecule"
          },
          level: {
            title: "Level",
            data: "PM1"
          }
        }
      ]
    },
    variant_DBs: {
      title: "Variant DB’s",
      content: []
    },
    other: {
      title: "Other",
      content: [
        {
          date: {
            title: "Date",
            date: "4/Feb/2018"
          },
          doctors_name: "Taly Yafe",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/DNA",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen bonds between nucleotides and base-stacking interactions among aromatic nucleobases. " +
              "In the cytosol of the cell,\n" +
              "the conjugated pi bonds of nucleotide bases align perpendicular to the axis of the DNA molecule," +
              " minimizing their interaction with the solvation shell."
          },
          level: {
            title: "Level",
            data: "PP1"
          }
        },
        {
          date: {
            title: "Date",
            date: "4/Jun/2018"
          },
          doctors_name: "Lior GoldBerg",
          source_description: {
            title: "Source and Description",
            source: "http://en.Wikipedia/wiki/GSID-Genom",
            description:
              "The DNA double helix is stabilized primarily by two forces: " +
              "hydrogen and base-stacking interactions."
          },
          level: {
            title: "Level",
            data: "BP6"
          }
        }
      ]
    }
  }
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_VARIANT_CLASSIFICATION]: (state, { payload }) => {
    const { value, name } = payload;
    return {
      ...state,
      somatic_variant_class:
        name.indexOf(TEXTS.somatic) !== -1
          ? value.toLowerCase()
          : state.somatic_variant_class.toLowerCase(),
      germline_variant_class:
        name.indexOf(TEXTS.germline) !== -1
          ? value.toLowerCase()
          : state.germline_variant_class.toLowerCase()
    };
  },

  [actionsTypes.SET_VARIANT_ZYGOSITY_TYPE]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_EXTERNAL_RESOURCES]: (state, { payload }) => {
    return {
      ...state,
      externalResources: payload
    };
  },

  [actionsTypes.SET_VARIANT_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_TEST_INFORMATION]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  }
});

export default variantPageReducer;
