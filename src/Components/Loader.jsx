import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";


const Loader = () => {
  return (
    <>
      <Navbar />
      <Flex h="80vh" w="100%" justify={"center"} align="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </>
  );
};

export default Loader;
