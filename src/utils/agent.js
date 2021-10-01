export const isMobile = (props) => {
  if (typeof props.isMobile === "boolean") return props.isMobile;
  return window.isMobile;
};
