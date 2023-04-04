"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Flex,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Body,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  IconButton,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ModalBody,
  AccordionIcon,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";

// Example classes list
const classes = [
  {
    name: "Class 1",
    students: [
      { name: "John Doe", id: 1, project: "project1.pdf" },
      { name: "Jane Smith", id: 2, project: "project2.pdf" },
      { name: "Bob Johnson", id: 3, project: "project3.pdf" },
      { name: "Emily Davis", id: 4, project: "project4.pdf" },
      { name: "Sam Wilson", id: 5, project: "project5.pdf" },
      { name: "Alice Brown", id: 6, project: "project6.pdf" },
    ],
  },
  {
    name: "Class 2",
    students: [
      { name: "Sarah Lee", id: 7, project: "project7.pdf" },
      { name: "Tom Green", id: 8, project: "project8.pdf" },
      { name: "Karen Kim", id: 9, project: "project9.pdf" },
      { name: "Mike Park", id: 10, project: "project10.pdf" },
      { name: "Janet Lee", id: 11, project: "project11.pdf" },
      { name: "Timothy Kim", id: 12, project: "project12.pdf" },
    ],
  },
];
function Students({ students }) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6}>
      {students &&
        students.map((student) => (
          <Box
            key={student.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box p={4}>
              <Heading as="h3" size="md">
                {student.name}
              </Heading>
              <Text mt={2}>ID: {student.id}</Text>
              <Divider my={2} />
              <VStack spacing={4}>
                <Text fontWeight="bold">Project:</Text>
                <a href={student.project}>{student.project}</a>
              </VStack>
            </Box>
          </Box>
        ))}
    </SimpleGrid>
  );
}
function AddClassModal({ isOpen, onClose, onSubmit }) {
  const [className, setClassName] = useState("");
  const [classYear, setClassYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name: className, year: classYear });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Class</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="className" mb={4}>
              <FormLabel>Class Name</FormLabel>
              <Input
                type="text"
                placeholder="Class Name"
                value={className}
                onChange={(event) => setClassName(event.target.value)}
              />
            </FormControl>
            <FormControl id="classYear" mb={4}>
              <FormLabel>Year</FormLabel>
              <Select
                placeholder="Select Year"
                value={classYear}
                onChange={(event) => setClassYear(event.target.value)}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function AddStudentModal({ isOpen, onClose, onSubmit }) {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentProject, setStudentProject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name: studentName, id: studentId, project: studentProject });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="studentName">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                required
              />
            </FormControl>
            <FormControl id="studentId" mt={4}>
              <FormLabel>ID</FormLabel>
              <Input
                type="text"
                value={studentId}
                onChange={(event) => setStudentId(event.target.value)}
                required
              />
            </FormControl>
            <FormControl id="studentProject" mt={4}>
              <FormLabel>Project</FormLabel>
              <Input
                type="text"
                value={studentProject}
                onChange={(event) => setStudentProject(event.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4} w="100%">
              Add Student
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default function () {
  const [classes, setClasses] = useState([
    {
      name: "deneme ",
      students: [{ name: "John Doe", id: "qweqwe", project: "qweqwe" }],
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:7373/classes/")
      .then((response) => setClasses(response.data))
      .catch((error) => console.log(error));
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addClass = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  return (
    <Box p={6}>
      <Flex justify="space-between" mb={6}>
        <Heading as="h1" size="xl">
          My Classes
        </Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Add Class
        </Button>
      </Flex>
      <Accordion allowToggle>
        {classes.map((myClass, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {myClass.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Students students={myClass.students} />
              <Button
                mt={6}
                colorScheme="blue"
                rightIcon={<AddIcon />}
                onClick={onOpen}
              >
                Add Student
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <AddClassModal isOpen={isOpen} onClose={onClose} onSubmit={addClass} />
    </Box>
  );
}
