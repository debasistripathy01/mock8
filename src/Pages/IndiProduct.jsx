import { Image, Text, VStack } from "@chakra-ui/react";

import React from "react";


import {  useSelector } from "react-redux";
import {Link} from "react-router-dom"


const IndiProduct = ({ id,image, title, brand, category, price }) => {
const {productsData} = useSelector((store)=>store.proReducer)


  return (

    <>
      <Link to={`/product/${id}`} style={{textDecoration:"none"}} storedata={productsData}>
            <VStack borderRadius={"5px"} shadow={"xl"} p="2" position={"relative"}>
        
                <Image src={image} />
                <Text>
                Title : <span style={{ fontWeight: "500" }}>{title}</span>{" "}
                </Text>
                <Text color={"red"}>
                Brand : <span style={{ fontWeight: "500" }}>{brand}</span>{" "}
                </Text>
                <Text>
                Category : <span style={{ fontWeight: "500" }}>{category}</span>{" "}
                </Text>
                <Text color={"red"}>
                Price : <span style={{ fontWeight: "500" }}>{price}</span>{" "}
                </Text>
                
            </VStack>
      </Link>
    </>
  );
};

export default IndiProduct;
