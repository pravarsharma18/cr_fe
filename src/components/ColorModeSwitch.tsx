import { Switch, Flex, Text, useColorMode, HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Flex alignItems="space-between">
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "light" ? false : true}
        />
        <Text marginX={1}>{colorMode === "light" ? "Dark" : "Light"} Mode</Text>
      </Flex>
    </HStack>
  );
};

export default ColorModeSwitch;
