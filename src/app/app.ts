const { fetchData } = require("../http");

export const isShakespeare = async (
  api_key: string,
  expected: {
    isbn: string;
    author: string;
  }
) => {
  const result = await fetchData(expected.isbn, api_key);
  if (result.data.items[0].volumeInfo.authors.includes(expected.author)) {
    let identifiers = [];
    result.data.items[0].volumeInfo.industryIdentifiers.forEach(
      (i: { type: string; identifier: string }) => {
        identifiers.push(i.identifier);
      }
    );
    if (identifiers.includes(expected.isbn)) {
      return true;
    }
  }
  return false;
};
