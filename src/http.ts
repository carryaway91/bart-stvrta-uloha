const axios = require("axios");

export const fetchData = async (isbn: string, api_key: string) => {
  return await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${api_key}`
  );
};
