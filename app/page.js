// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "./components/FileUpload.jsx";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";

export default function Page() {
  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm();
  const { colorMode, toggleColorMode } = useColorMode();

  const onSubmit = async (data) => {
    let file = data.avatar;
    console.log("file", file);
    if (!file) {
      setError("avatar", {
        type: "manual",
        message: "Please select a file to upload",
      });
      return;
    }

    const formData = new FormData();
    let dataa = {
      name: data.name,
      number: data.number,
      class: data.class,
    };
    formData.append("userdata", dataa);
    formData.append("file", file[0]);
    console.log(`${JSON.stringify(dataa)} `);

    console.log(`formdata is ${file[0]} `);
    try {
      const response = await axios.post(
        "http://localhost:7373/deneme",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  let [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7373/classes/")
      .then((response) => setClasses(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <Navbar></Navbar>
      <Box p={4}>
        <Box
          rounded={"base"}
          p={10}
          border={"1px"}
          borderColor={"blackAlpha.400"}
          shadow={"dark-lg"}
        >
          <Heading size="xl">İlahi proje uygulamasına, hoşgeldiniz... </Heading>
          <Text mt={4}>
            Aşağıdaki formu doldurarak İngilizce projenizi yükleyebilirsiniz.
          </Text>
          <Divider></Divider>
          <Text mt={4}>
            Not: Güvenlik için lütfen yüklemeden sonraki referans numarasını
            mttproje@gmail.com'a gönderiniz ve kaybetmeyiniz.
          </Text>
          <Divider></Divider>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="name">
              <FormLabel>İsim</FormLabel>
              <Input type="text" placeholder="Emre Durmaz" />
            </FormControl>
            <FormControl id="number">
              <FormLabel>Okul Numarası</FormLabel>
              <Input type="number" placeholder="0" />
            </FormControl>
            <FormControl id="class">
              <FormLabel>Sınıf</FormLabel>
              <Select placeholder="Sınıfınızı Seçiniz">
                {classes.map((element, index) => {
                  return <option key={index}>{element?.name}</option>;
                })}
              </Select>
            </FormControl>

            <FileUpload
              name="avatar"
              acceptedFileTypes=""
              isRequired={true}
              placeholder="Projenizi Seçiniz"
              control={control}
            >
              Projeniz
            </FileUpload>
            <Button mt={4} colorScheme="teal" type="submit">
              Gönder Gitsin
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
