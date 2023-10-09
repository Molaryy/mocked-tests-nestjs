const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: [
          {
            login: 'roxxorDev1',
            id: 12345,
          },
        ],
      }),
  })
);

export default fetch;