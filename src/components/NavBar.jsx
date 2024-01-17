import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  useColorModeValue,
  SimpleGrid,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans/400.css";
import "../styles/index.css";
import { FaSun, FaMoon } from "react-icons/fa";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue(
    "colors.background.light",
    "colors.background.dark"
  );

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
                  border={`2px solid`}
                  borderColor={"primary"}
                  color={"primary"}
                  bg={background}
                >
                  Log in
                </Button>
                <Button
                  bg={"primary"}
                  borderRadius={"50px"}
                  px={5}
                  _hover={{ bg: "primary" }}
                  size={"md"}
                  color={"white"}
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
