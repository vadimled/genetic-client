import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { evidences } from "Utils/variant-page-mock-data";

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

  mock.onPatch(/\/tests\/.+\/variants\/.+/).reply(200);

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
}
