import axios from "axios";

const mockAxios = {
  get: jest.fn().mockResolvedValue({ date: {} }),
  create: () => axios
};

export default mockAxios;

module.exports = mockAxios;
