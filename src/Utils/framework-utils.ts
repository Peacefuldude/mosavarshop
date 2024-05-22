export const frameworks = [
    "bitcoin",
    "ripple",
    "monero",
    "etherium",
    "stellar",
    "tether",
  ] as const;
  
  export type Framework = (typeof frameworks)[number];