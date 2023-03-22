import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Button,
  MenuItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Text fontSize="2xl">CRRAVINGS</Text>
      <Flex paddingX={5}>
        <Box marginX={5}>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              City
            </MenuButton>
            <MenuList
              overflow="auto"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              maxHeight={150}
            >
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Ahmedabad</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Jaipur</MenuItem>
              <MenuItem>Delhi</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default NavBar;
