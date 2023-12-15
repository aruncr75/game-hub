import { Box, HStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit='cover'/>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
