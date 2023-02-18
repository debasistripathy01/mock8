import { Image, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { useDispatch } from "react-redux";
import { getProductData } from "../Redux/products.action";
import {  useSelector } from "react-redux";
import {Link} from "react-router-dom"
import axios from "axios";

const IndiProduct = ({ id,image, title, brand, category, price }) => {
  const dispatch = useDispatch();
//   const products = useSelector((store)=>store.productsData)
const {productsData, productsLoading} = useSelector((store)=>store.proReducer)

const handleFetch=()=>{
    axios
    .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    .then((res) => res.json())
    .catch((e) => e.message);
}
  return (
    <>
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
    </>
  );
};

export default IndiProduct;
