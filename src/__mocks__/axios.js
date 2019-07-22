import axs from "axios";

const axios = {
  get: jest.fn().mockResolvedValue({ date: {} }),
  create: () => axs,
  defaults: {
    adapter: {}
  }
};

export default axios;
