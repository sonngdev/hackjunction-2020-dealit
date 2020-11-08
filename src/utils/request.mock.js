import { ensureCamel } from './helpers';

const SUGGESTIONS = [
  {
    id: 10,
    name: 'Razor',
    image_url: 'https://junction.blob.core.windows.net/icons/razor.svg',
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
    name: 'Face soap',
    image_url: 'https://junction.blob.core.windows.net/icons/face%20soap.svg',
    variants: [
      {
        id: 1,
        name: 'For oily skin',
      },
      {
        id: 2,
        name: 'For dry skin',
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
      image_url:
        'https://junction.blob.core.windows.net/icons/liquid-detergent.svg',
      variants: [
        {
          id: 1,
          name: 'For Top load washer',
          selected: true,
        },
        {
          id: 2,
          name: 'For Front load washer',
          selected: false,
        },
      ],
    },
  },
  {
    id: 2,
    product: {
      id: 1,
      name: 'Shampoo',
      image_url: 'https://junction.blob.core.windows.net/icons/shampoo.svg',
      variants: [
        {
          id: 1,
          name: 'For men',
          selected: false,
        },
        {
          id: 2,
          name: 'For women',
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
