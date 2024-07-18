import Commerce from "@chec/commerce.js";
const pubKey = import.meta.env.REACT_APP_CHEC_PUBLIC_KEY;
export const commerce = new Commerce(pubKey, true);
