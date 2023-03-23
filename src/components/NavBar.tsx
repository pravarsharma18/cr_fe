import { HStack, Text, Flex, Box } from "@chakra-ui/react";
import CityMenu from "./CityMenu";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Text fontSize="2xl">CRRAVINGS</Text>
      <Flex paddingX={5}>
        <Box marginX={5}>
          <CityMenu />
        </Box>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default NavBar;
