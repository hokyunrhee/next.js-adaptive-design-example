import { theme as baseTheme } from "@chakra-ui/react";

const Link = {
  baseStyle: {
    ...baseTheme.components.Link.baseStyle,
    _focus: { boxShadow: "none" },
  },
};

export default Link;
