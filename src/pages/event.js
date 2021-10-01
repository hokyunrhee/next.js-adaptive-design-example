import { Box, Text } from "@chakra-ui/react";
import MobileHome from "../components/mobile/home";
import WebHome from "../components/web/home";

import { isMobile } from "../utils/agent";

export default function Event(props) {
  return (
    <Box>
      <Text>
        <b>Route:</b> Event
      </Text>
      <Text>
        <b>Device:</b> {isMobile(props) ? <MobileHome /> : <WebHome />}
      </Text>
      <Text>
        <b>Data Fetching Strategy:</b> {props.dataFetchingStrategy}
      </Text>
    </Box>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      dataFetchingStrategy: "getServerSideProps",
    },
  };
}
