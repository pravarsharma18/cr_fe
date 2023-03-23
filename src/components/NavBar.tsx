import { HStack, Text, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { City } from "../hooks/useCity";
import CityMenu from "./CityMenu";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  // let city = localStorage.getItem("city");
  // const [cityInLocal, setCityInLocal] = useState(true);
  // if (!city) {
  //   setCityInLocal(false);
  // }
  const [currentCity, setCurrentCity] = useState("");
  const handelCityClick = (city: City) => {
    console.log(city);
    setCurrentCity(city.name);
    localStorage.setItem("city", city.name);
  };
  return (
    <HStack justifyContent="space-between">
      <Text fontSize="2xl">CRRAVINGS</Text>
      <Flex paddingX={5}>
        <Box marginX={5}>
          <CityMenu
            currentCity={currentCity}
            onClickCity={(city) => handelCityClick(city)}
          />
        </Box>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default NavBar;
