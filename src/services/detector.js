import axios from "axios";

import constants from "../utils/constants";

const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

const evaluate = async (http_url) => {
  console.log(http_url);

  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(`${API}/main`, {
      http_url: http_url,
      customHeader,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export { evaluate };
