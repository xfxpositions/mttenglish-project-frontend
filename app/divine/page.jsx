"use client";
import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  Switch,
  Spacer,
  Container,
  Text,
  useColorMode,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

export default function () {
  return (
    <Container>
      <Box p={4}>
        <Box
          rounded={"base"}
          p={10}
          border={"1px"}
          borderColor={"blackAlpha.400"}
          shadow={"dark-lg"}
        >
          <Heading size="xl">Evet, burası orası. </Heading>
          <Text mt={4}>Burası özel bir alan.</Text>
          <Divider></Divider>
          <form>
            <FormControl mb={4} id="name">
              <FormLabel>İsim</FormLabel>
              <Input type="text" placeholder="Onun ismini sen de biliyorsun." />
            </FormControl>
            <FormControl id="password">
              <FormLabel>İlahi şifre...</FormLabel>
              <Input type="number" placeholder="Onu sadece o biliyor." />
            </FormControl>

            <Button mt={4} colorScheme="teal" type="submit">
              Girmeye çalış
            </Button>
            <Link href="/">
              <Button mt="2" colorScheme={"teal"} shadow={"dark-lg"}>
                <ArrowLeftIcon mr={{ base: 1, lg: 2 }} />
                <Text>Pes Edip Geri Dön</Text>
              </Button>
            </Link>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
