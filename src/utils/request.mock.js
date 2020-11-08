import { ensureCamel } from './helpers';

const SUGGESTIONS = [
  {
    id: 10,
    name: 'Razor',
    image_url: 'http://via.placeholder.com/150',
    variants: [
      {
        id: 1,
        name: 'Electric',
      },
      {
        id: 2,
        name: 'Physical',
      },
    ],
  },
  {
    id: 11,
    name: 'Battery',
    image_url: 'http://via.placeholder.com/150',
    variants: [
      {
        id: 1,
        name: 'AA',
      },
      {
        id: 2,
        name: 'AAA',
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
  {
    id: 2,
    product: {
      id: 1,
      name: 'Toothbrush',
      image_url: 'http://via.placeholder.com/150',
      variants: [
        {
          id: 1,
          name: 'Children',
          selected: false,
        },
        {
          id: 2,
          name: 'Adult',
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
    (s) => ({
      id: MY_LIST[MY_LIST.length - 1].id + 100,
      product: s,
    }),
  );

  MY_LIST = MY_LIST.concat(listProducts);

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
