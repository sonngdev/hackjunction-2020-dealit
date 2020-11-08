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

let MY_LIST = [
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
          selected: true,
        },
        {
          id: 2,
          name: 'Front',
          selected: false,
        },
      ],
    },
  },
];

export const getSuggestions = () => Promise.resolve(ensureCamel(SUGGESTIONS));

export const getListProducts = () => Promise.resolve(ensureCamel(MY_LIST));

export const createListProducts = (productIds) => {
  const listProducts = SUGGESTIONS.filter((s) => productIds.includes(s.id)).map(
    (s, i) => ({
      id: i,
      product: s,
    }),
  );

  MY_LIST = listProducts;

  return Promise.resolve(ensureCamel(listProducts));
};

export const updateListProduct = (listProductId, variantIds) => {
  let updatedListProduct;

  const updatedListProducts = MY_LIST.map((lp) => {
    if (lp.id !== listProductId) return lp;

    updatedListProduct = {
      ...lp,
      product: {
        ...lp.product,
        variants: lp.product.variants.map((v) => {
          return {
            ...v,
            selected: variantIds.includes(v.id),
          };
        }),
      },
    };

    return updatedListProduct;
  });

  MY_LIST = updatedListProducts;

  return Promise.resolve(ensureCamel(updatedListProduct));
};
