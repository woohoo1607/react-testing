const items = {
  id: "1",
  text: "test",
  children: [
    {
      id: "2",
      text: "nested level 2",
      children: [
        // { id: "8123", text: "test item" },
        {
          id: "3",
          text: "nested lvl3",
        },
      ],
    },
    // { id: "8123", text: "test item" },
    {
      id: "4",
      text: "another card with levl2",
      children: [
        {
          id: "5",
          text: "nested level 3",
          children: [
            {
              id: "6",
              text: "nested lvl4",
            },
            {
              id: "7",
              text: "nested lvl4",
            },
            {
              id: "8",
              text: "nested lvl4",
            },
          ],
        },
        {
          id: "10",
          text: "123123",
        },
      ],
    },
  ],
};

export default items;
