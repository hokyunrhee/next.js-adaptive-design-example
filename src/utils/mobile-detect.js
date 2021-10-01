import MobileDetect from "mobile-detect";

export const mobileDetect = (req) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  return (md.mobile() || md.tablet()) !== null;
};
