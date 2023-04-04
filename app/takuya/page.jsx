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
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";

export default function () {
  let [classes, setClasses] = useState([
    {
      name: "11/C",
      students: { name: "John Doe", id: 1, projectFile: "a.pdf" },
    },
  ]);
  let [className, setClassName] = useState("");
  function addClass() {
    if (className) {
      setClasses([...classes, className]);
      setClassName("");
    }
  }
  return (
    <Container>
      <Box
        rounded={"base"}
        p={10}
        border={"1px"}
        borderColor={"blackAlpha.400"}
        shadow={"dark-lg"}
      >
        <Heading size="xl">Hoşgeldiniz Kağan</Heading>
        <Text mt={4} size={24}>
          Sınıflar.
        </Text>

        <Accordion allowMultiple>
          {classes.map((className, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {className}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* You can add more details about the class here */}
                <Button size="sm" colorScheme="red" ml="4">
                  Delete
                </Button>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <form>
          <FormControl mb={4} id="name">
            <FormLabel>Sınıf Ekle</FormLabel>
            <Input
              onChange={(e) => {
                setClassName(e.target.value);
              }}
              value={className}
              type="text"
              placeholder="Sınıf ismi."
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={addClass}>
            Ekle
          </Button>
        </form>
        <Divider></Divider>
      </Box>
    </Container>
  );
}
