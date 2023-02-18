import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const GenderFilter = ({ handleMen, handleWomen, handleKid,handleRemove }) => {
  return (
    <Menu>
      <MenuButton colorScheme="teal" as={Button}>
        Filter by Category
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleRemove}>Remove Filter</MenuItem>
        <MenuItem onClick={handleMen}>Men</MenuItem>
        <MenuItem onClick={handleKid}>Kids</MenuItem>
        <MenuItem onClick={handleWomen}>Women</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GenderFilter;
