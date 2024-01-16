import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  SimpleGrid,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans/400.css";
import "../styles/index.css";
import { FaSun, FaMoon } from "react-icons/fa";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box p={5}>
        <Container maxW={1400} fontFamily={"nav"}>
          <SimpleGrid templateColumns={"repeat(3,1fr)"}>
            <Box display={"flex"} alignItems={"center"}>
              <h2>True Health Search</h2>
            </Box>
            <Flex gap={10} placeItems={"center"}>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Home
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,
                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Services
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,

                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  About
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Pricing
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
            </Flex>
            <Box>
              <Flex gap={5} justifyContent={"flex-end"} fontWeight={"600"}>
                <IconButton
                  icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                  size={"md"}
                  isRound={true}
                  onClick={toggleColorMode}
                />
                <Button
                  borderRadius={"50px"}
                  size={"md"}
                  px={5}
                  border={"2px solid #0360D9"}
                  color={"primary"}
                  bg={colorMode === "light" ? "background" : "transparent"}
                >
                  Log in
                </Button>
                <Button
                  bg={"primary"}
                  borderRadius={"50px"}
                  px={5}
                  _hover={{ bg: "#0360F9" }}
                  size={"md"}
                  color={colorMode === "light" ? "background" : "#000"}
                >
                  Sign up
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default NavBar;
0;
