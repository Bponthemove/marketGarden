export const discounts = {
  "0": {
    id: "none",
    value: 0,
  },
  "10": {
    id: import.meta.env.VITE_APP_DISCOUNT10,
    value: 10,
  },
  "20": {
    id: import.meta.env.VITE_APP_DISCOUNT20,
    value: 20,
  },
};

export const discountsAsArray = Object.values(discounts);