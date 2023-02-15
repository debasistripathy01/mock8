
import { Button, Image, Text, VStack } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Types from "../Redux/products.actionTypes"
import {  useSelector } from "react-redux";
import { useLocation} from "react-router-dom"
import css from "./button.module.css"

  


const DetailsProduct = () => {
const [data, setData] = useState([]);
const dispatch = useDispatch();
const select = useSelector((store)=> store.proReducer.cart);
const location = useLocation()
let Newid = location.pathname.split("/")[2]


const handleFetch=(Newid)=>{

    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${Newid}`)
    .then((res) =>res.json())
    .then((res)=> setData(res.data))
    .catch((e) => e.message);
}

useEffect(()=>{
   handleFetch(Newid)

}, [Newid])


const handleCart=()=>{
    alert("Added TO Cart");
    dispatch({type: Types.GET_CART_DETAILS_SUCCESS, payload: [...select,data]});
    console.log(select);
}



  return (

        <>
            <VStack borderRadius={"5px"} shadow={"xl"} p="2" position={"relative"}>
        
                <Image src={data.image} />
                <Text>
                Title : <span style={{ fontWeight: "500" }}>{data.title}</span>{" "}
                </Text>
                <Text color={"red"}>
                Brand : <span style={{ fontWeight: "500" }}>{data.brand}</span>{" "}
                </Text>
                <Text>
                Category : <span style={{ fontWeight: "500" }}>{data.category}</span>{" "}
                </Text>
                <Text color={"red"}>
                Price : <span style={{ fontWeight: "500" }}>{data.price}</span>{" "}
                </Text>
                <Button onClick={handleCart} className={css.buttonAddToCart}>ADD TO CART</Button>;
            </VStack>

    </>

  )
}

export default DetailsProduct