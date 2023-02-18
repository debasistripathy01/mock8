import { Grid, HStack } from "@chakra-ui/react";
import React from "react";
import axios from "axios"
import { useEffect } from "react";
import * as Types from "../Redux/products.actionTypes"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import { getProductData } from "../Redux/products.action";
import GenderFilter from "../Filters/GenderFilter"
import Sort from "../Filters/Sort"
import IndiProduct from "./IndiProduct"


const Product = () => {

    const {productsData, productsLoading} = useSelector((store)=>store.proReducer)
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(getProductData());
      }, []);
      console.log(productsData)

      const handleHL = () => {
        dispatch({ type: Types.GET_PRODUCTS_SORTHL });
      };
    
      const handleLH = () => {
        dispatch({ type: Types.GET_PRODUCTS_SORTLH });
      };
    
      const handleWomen = () => {
        dispatch({ type: Types.GET_PRODUCTS_FILTER_WOMEN });
      };
      const handleMen = () => {
        dispatch({ type: Types.GET_PRODUCTS_FILTER_MEN });
      };
    
      const handleRemove = () => {
        dispatch({ type: Types.GET_REMOVE_FILTER });
      };

  return productsLoading ? (<Loader />):
    (<>

    <Navbar />
      <HStack
        w={["90%", "90%", "70%", "50%"]}
        m="auto"
        mt="3"
        justifyContent={"center"}
      >
        <Sort handleHL={handleHL} handleLH={handleLH} />
        <GenderFilter
          handleRemove={handleRemove}
          handleMale={handleMen}
          handleFemale={handleWomen}
        />

      </HStack>
      <Grid
        w={["90%", "90%", "80%", "70%"]}
        m="auto"
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap="3"
        mt="5"
      >
        {productsData?.map((el, i) => {
          return <IndiProduct {...el} key={i} />;
        })}
      </Grid>
    </>)
  
}

export default Product