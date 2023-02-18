import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Sort = ({ handleHL, handleLH}) => {
  return (
    <Menu>
      <MenuButton colorScheme="teal" as={Button}>
        Sort By Price
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleHL}>Price : High to low</MenuItem>
        <MenuItem onClick={handleLH}>Price : Low to High</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Sort;
