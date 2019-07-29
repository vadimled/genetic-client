import MockAdapter from "axios-mock-adapter";
import axios from "axios";

export const mock =
  process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true" &&
  new MockAdapter(axios, { delayResponse: 1000 });

if (mock) {
  mock.onGet(/http:\/\/localhost:60151\/load\?file=.+/).reply(204, {
    users: [{ id: 1, name: "John Smith" }]
  });

  mock.onGet(/\/api\/tests\/?\w+$/).reply(200, {
    test_id: "GS00115NP050818_TS1_01",
    gsid: "GS00115NP050818_TS1_01",
    panel_type: "risk",
    mutation_types: ["dna", "rna", "agena"],
    tumor_info: {
      type: "pheochromocytoma",
      location: "gallbladder",
      cancer_cell_percentage: 80
    }
  });

  mock.onGet(/\/api\/tests\/.+\/variant\/.+/).reply(200, {
    // /api/tests/GS00115NP050818_TS1_01/variant/1gr3ekk8qbb29u5vljto219bn
    currentZygosity: "Homo",
    germline_variant_class:  "LPATH",
    somatic_variant_class:  "Tier2",
  });
  
  mock.onPost(/\/api\/tests\/.+\/variant\/.+/).reply(200);
}
