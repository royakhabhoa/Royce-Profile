import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function Banner() {
  const specialties = [
    { name: "React", image: "react.png" },
    { name: "Java Script", image: "javaScript.png" },
    { name: "Git", image: "git.png" },
    { name: "Html", image: "html.png" },
    { name: "Css", image: "css.jpg" },
    { name: "Tailwind", image: "tailwind.png" },
  ];
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={{ lg: "row", base: "column" }}
      marginBottom={"50px"}
      marginTop={"40px"}
    >
      <Stack width={{ lg: "60%", base: "80%" }}>
        <Stack width={"90%"} height={250} justifyContent={"center"} gap={0}>
          <Text textStyle={{ lg: "7xl", base: "5xl" }} fontWeight={"bold"}>
            Hello Im
          </Text>
          <Text
            textStyle={{ lg: "7xl", base: "5xl" }}
            fontWeight="extrabold"
            bgGradient="to-r"
            gradientFrom="#00f260"
            gradientTo="#00f2d2ff"
            bgClip={"text"}
          >
            Royce Akhabhoa
          </Text>
        </Stack>
        <Box width={"90%"}>
          <Text
            textStyle={"4xl"}
            lineHeight={"70px"}
            fontWeight={"bold"}
            bgGradient="to-r"
            gradientTo="#00f260"
            gradientFrom="#00f2d2ff"
            bgClip={"text"}
          >
            Skills
          </Text>
          <HStack gap={7} flexWrap={"wrap"}>
            {specialties.map((special, index) => (
              <VStack
                key={index}
                width={"54px"}
                height={"100px"}
                textAlign={"center"}
              >
                <Image
                  width={55}
                  height={55}
                  borderRadius={100}
                  src={special.image}
                />
                <Text fontWeight={"bold"}>{special.name}</Text>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Stack>
      <Box
        w="320px"
        h="200px"
        p={6}
        borderRadius="xl"
        bg="rgba(255, 255, 255, 0.04)" // translucent background
        boxShadow="lg"
        backdropFilter="blur(100px)" // frosted glass blur\
      >
        <Text fontWeight={"bold"}>
          I'm a Nigerian Based passionate software developer specializing in
          building clean, user-friendly, and efficient applications. I enjoy
          turning ideas into real digital solutions that make an impact.
        </Text>
      </Box>
    </Stack>
  );
}
