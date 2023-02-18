import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Button, Container, Flex, Image, VStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <Flex
      w="100%"
      h="100vh"
      justify={"center"}
      align="center"
      position={"relative"}
    >
      <Box
        w="100%"
        height={"100vh"}
        zIndex={-10}
        position={"absolute"}
        top="0%"
        left={"0%"}
        right="0%"
      >
        <Image
          opacity={0.7}
          src="https://blog.contactpigeon.com/wp-content/uploads/2018/08/best-product-pages-2018.jpg"
          width="100%"
          height={"99vh"}
        />
      </Box>
      <VStack gap="2">
        <Button
          w="300px"
          onClick={() => navigate("/product")}
          colorScheme={"teal"}
        >
         Products Page
        </Button>
        <Button
          w="300px"
          onClick={() => navigate("/orders")}
          colorScheme={"facebook"}
        >
          Orders Page
        </Button>
      </VStack>
    </Flex>
    </div>
  )
}

export default Home