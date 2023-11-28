import { HStack, Switch, useColorMode ,Text} from '@chakra-ui/react'

export const ColorModeSwitch = () => {
    const {toggleColorMode  ,colorMode} = useColorMode();

  return (
    <HStack> <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
    <Text> Dark Mode</Text></HStack>
  )
}
