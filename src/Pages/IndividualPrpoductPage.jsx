import { Image, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { useDispatch } from "react-redux";
import { getProductData } from "../Redux/products.action";
import {  useSelector } from "react-redux";
import {Link} from "react-router-dom"

const IndiProduct = ({ id,image, title, brand, category, price }) => {
  const dispatch = useDispatch();
//   const products = useSelector((store)=>store.productsData)
const {productsData, productsLoading} = useSelector((store)=>store.proReducer)

  return (
    <>
    <Link to={`/product/${id}`} style={{textDecoration:"none"}} storedata={productsData}>

        
      <VStack borderRadius={"5px"} shadow={"xl"} p="2" position={"relative"}>
       
        <Image src={image} />
        <Text>
          Name : <span style={{ fontWeight: "500" }}>{title}</span>{" "}
        </Text>
        <Text color={"red"}>
          Place : <span style={{ fontWeight: "500" }}>{brand}</span>{" "}
        </Text>
        <Text>
          Gnder : <span style={{ fontWeight: "500" }}>{category}</span>{" "}
        </Text>
        <Text color={"red"}>
          Age : <span style={{ fontWeight: "500" }}>{price}</span>{" "}
        </Text>
      </VStack>
      </Link>
    </>
  );
};

export default IndiProduct;
