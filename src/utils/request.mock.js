import { ensureCamel } from './helpers';

const SUGGESTIONS = [
  {
    id: 1,
    name: 'Detergent',
    image_url: 'http://via.placeholder.com/150',
    variants: [
      {
        id: 1,
        name: 'Top',
      },
      {
        id: 2,
        name: 'Front',
      },
    ],
  },
];

export const getSuggestions = () => Promise.resolve(ensureCamel(SUGGESTIONS));

export const getListProducts = () =>
  Promise.resolve(
    ensureCamel([
      {
        id: 1,
        product: {
          id: 1,
          name: 'Detergent',
          image_url: 'http://via.placeholder.com/150',
          variants: [
            {
              id: 1,
              name: 'Top',
            },
            {
              id: 2,
              name: 'Front',
            },
          ],
        },
      },
    ]),
  );

export const createListProducts = (productIds) =>
  Promise.resolve(
    ensureCamel(
      SUGGESTIONS.filter((s) => productIds.includes(s.id)).map((s, i) => ({
        id: i,
        product: s,
      })),
    ),
  );
