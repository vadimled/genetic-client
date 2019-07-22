import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock =
  process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true" &&
  new MockAdapter(axios, { delayResponse: 2000 });

// /\/tests(\/)?/
if (mock) {
  mock.onGet(/http:\/\/localhost:60151\/load\?file=.+/).reply(200, {
    users: [{ id: 1, name: "John Smith" }]
  });
}
