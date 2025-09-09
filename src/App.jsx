import { Provider } from "./components/ui/provider";
import Banner from "./components/banner";
import { Box, Stack, Text } from "@chakra-ui/react";
import Body from "./components/Body";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Stack width={"100%"} alignItems={"center"}>
          <Banner />
          <Box width={"90%"}>
            <hr />
          </Box>
          <Box width={"85%"} marginTop={50}>
            <Body />
          </Box>
          <Box width={"90%"}>
            <hr />
          </Box>
          <Text height={"30px"} color={"#9c9c9cff"}>
            Royce Akhabhoa
          </Text>
        </Stack>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
