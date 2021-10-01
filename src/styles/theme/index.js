import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Component style overrides
import components from "./components";

const overrides = {
  components,
  styles,
};

export default extendTheme(overrides);
