import NextLink from "next/link";
import { Box, HStack, Link } from "@chakra-ui/react";

const NAV_LIST = [
  { title: "Home", href: "/" },
  { title: "Event", href: "/event" },
];

export default function Header() {
  return (
    <Box as="header">
      <HStack as="nav">
        {NAV_LIST.map((item) => (
          <NextLink key={item.title} href={item.href} passHref>
            <Link color="blue.400" fontWeight="medium">
              {item.title}
            </Link>
          </NextLink>
        ))}
      </HStack>
    </Box>
  );
}
