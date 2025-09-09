import {
  Box,
  For,
  Stack,
  Text,
  Avatar,
  Button,
  Card,
  HStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";

export default function Body() {
  const projects = [
    {
      name: "Email Dashboard",
      link: "https://clever-dashboard-nine.vercel.app/",
      desc: "This is a working dashboard with backend connectivity",
      image: "email.png",
    },
    {
      name: "E-commerce",
      link: "https://webproject-wheat.vercel.app/",
      desc: "Fasco is an e-commerse website developed by me using moder ui designs",
      image: "fasco.png",
    },
    {
      name: "Simple web layout",
      link: "https://assignent-90-north.vercel.app/",
      desc: "A simple layout of elements don in htm css and java script",
      image: "template.png",
    },
  ];
  return (
    <div>
      <Stack width={"100%"} justifyContent={"center"} marginBottom={"50px"}>
        <Text textStyle={"4xl"} fontWeight={"bold"}>
          My
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          bgGradient="to-r"
          gradientFrom="#00f260"
          gradientTo="#00f2d2ff"
          bgClip={"text"}
        >
          Projects
        </Text>
        <Stack gap="10" direction="row" wrap="wrap" width={"100%"}>
          {projects.map((proj, index) => (
            <Card.Root
              w={{ lg: "30%", base: "100%", md: "45%" }}
              overflow="hidden"
            >
              <Image
                src={proj.image}
                alt="Green double couch with wooden legs"
              />
              <Card.Body gap="2">
                <Card.Title>{proj.name}</Card.Title>
                <Card.Description>{proj.desc}</Card.Description>
              </Card.Body>
              <Card.Footer gap="2">
                <Link to={proj.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="solid">View</Button>
                </Link>
              </Card.Footer>
            </Card.Root>
          ))}
        </Stack>
        <Box width={"100%"} marginTop={"20"} height={"100px"}>
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            bgGradient="to-r"
            gradientFrom="#00f260"
            gradientTo="#00f2d2ff"
            bgClip={"text"}
          >
            Contact
          </Text>
          <HStack gap={5} flexWrap={"wrap"}>
            <HStack>
              <MdOutlineEmail />
              <Text>royakhabhoa@gmail.com</Text>
            </HStack>

            <HStack>
              <FiPhone />
              <Text> +234 07030092525</Text>
            </HStack>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
}
