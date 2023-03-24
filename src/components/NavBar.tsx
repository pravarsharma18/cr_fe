import { HStack, Text, Flex, Box } from "@chakra-ui/react";
import CityMenu from "./CityMenu";
import ColorModeSwitch from "./ColorModeSwitch";
import { City } from "../hooks/useCity";
import useSetCity from "../hooks/useSetCity";

const NavBar = () => {
  const { modelOpen, city, setModelOpen, setCity } = useSetCity();

  const handelCityClick = (city: City) => {
    setCity(city.name);
    localStorage.setItem("city", city.name);
    setModelOpen(false);
  };
  return (
    <HStack justifyContent="space-between">
      <Text fontSize="2xl">CRRAVINGS</Text>
      <Flex paddingX={5}>
        <Box marginX={5}>
          <CityMenu
            modalOpen={modelOpen}
            currentCity={city}
            onClickCity={(city) => handelCityClick(city)}
          />
        </Box>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default NavBar;
