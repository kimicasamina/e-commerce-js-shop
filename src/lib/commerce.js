import Commerce from "@chec/commerce.js";
const pubKey = import.meta.env.REACT_APP_CHEC_PUBLIC_KEY;
export const commerce = new Commerce(
  "pk_57848ce9f4ead2f2cf057ee835f6de6e05804c155d35b",
  true
);
