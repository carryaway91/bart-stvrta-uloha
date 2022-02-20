jest.mock("../http.ts");
const { isShakespeare } = require("../app/app");

describe("Testing is it Shakespeare suite", () => {
  test("Is author with given ISBN William Shakespeare", async () => {
    const api_key = "AIzaSyBCYvvwKU1m8U2UliDbPZ1v-YqiCY7DB6M";
    const expected = {
      isbn: "9782842604103",
      author: "William Shakespeare",
    };

    const result = await isShakespeare(api_key, expected);
    expect(result).toEqual(true);
  });

  test("Different ISBN is not Shakespeare", async () => {
    const api_key = "AIzaSyBCYvvwKU1m8U2UliDbPZ1v-YqiCY7DB6M";
    const expected = {
      isbn: "1111111111",
      author: "William Shakespeare",
    };
    const result = await isShakespeare(api_key, expected);
    expect(result).toEqual(false);
  });

  test("Different expected author is not Shakespeare", async () => {
    const api_key = "AIzaSyBCYvvwKU1m8U2UliDbPZ1v-YqiCY7DB6M";
    const expected = {
      isbn: "9782842604103",
      author: "Random author",
    };
    const result = await isShakespeare(api_key, expected);
    expect(result).toEqual(false);
  });
});
