import MockAdapter from "axios-mock-adapter";
import axios from "axios";

export const mock =
  process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true" &&
  new MockAdapter(axios, { delayResponse: 2000 });

// /\/tests(\/)?/
if (mock) {
  mock.onGet(/http:\/\/localhost:60151\/load\?file=.+/).reply(204, {
    users: [{ id: 1, name: "John Smith" }]
  });
  
  mock.onGet(/\/tests(\/)?/).reply(200, {
    "test_id":"GS00115NP050818_TS1_01",
    "gsid":"GS00115NP050818_TS1_01",
    "panel_type":"SOLID",
    "mutation_types":[
      "dna",
      "rna",
      "agena"
    ]
  });
}
