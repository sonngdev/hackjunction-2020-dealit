export const getSuggestions = () =>
  Promise.resolve([
    {
      id: 1,
      name: "Detergent",
      image_url: "http://via.placeholder.com/150",
      variants: [
        {
          id: 1,
          name: "Top",
        },
        {
          id: 2,
          name: "Front",
        },
      ],
    },
  ]);
