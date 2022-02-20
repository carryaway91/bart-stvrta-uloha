export const fetchData = async () => {
  return await Promise.resolve({
    data: {
      items: [
        {
          volumeInfo: {
            authors: ["William Shakespeare"],
            industryIdentifiers: [
              {
                type: "Some type",
                identifier: "9782842604103",
              },
            ],
          },
        },
      ],
    },
  });
};
