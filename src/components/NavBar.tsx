import { Box, HStack } from '@chakra-ui/react'
import { Image ,Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './SearchInput';



export const NavBar = () => {
  return (
   <HStack justifyContent={'space-between'} padding={"10px"}> 
    <Image src={logo} boxSize="60px" />
    <SearchInput ></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
   </HStack>
  )
}
