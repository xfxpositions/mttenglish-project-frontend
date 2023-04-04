import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  Switch,
  Spacer,
  Container,
  useColorMode,
  ButtonGroup,
  Text,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ArrowRightIcon } from "@chakra-ui/icons";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        p={4}
        shadow={"lg"}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading>Mtt Proje</Heading>
        <ButtonGroup gap={{ base: 0, lg: 1 }} alignItems="center">
          <IconButton
            onClick={toggleColorMode}
            shadow={"dark-lg"}
            icon={colorMode == "light" ? <SunIcon /> : <MoonIcon />}
          />
          <Link href="/divine">
            <Button shadow={"dark-lg"}>
              <Text mr={{ base: 1, lg: 2 }}>İlahi Kısım</Text>
              <ArrowRightIcon />
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
export default Navbar;
