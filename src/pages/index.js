import { Box, Text } from "@chakra-ui/react";
import MobileHome from "../components/mobile/home";
import WebHome from "../components/web/home";

import { isMobile } from "../utils/agent";

export default function Home(props) {
  return (
    <Box>
      <Text>
        <b>Route:</b> Home
      </Text>
      <Text>
        <b>Device:</b> {isMobile(props) ? <MobileHome /> : <WebHome />}
      </Text>
    </Box>
  );
}
