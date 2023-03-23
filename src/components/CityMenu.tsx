import {
  Menu,
  MenuButton,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import useCity, { City } from "../hooks/useCity";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onClickCity: (city: City) => void;
}

const CityMenu = ({ onClickCity }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cities, error, isLoading } = useCity();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} onClick={onOpen}>
        {isLoading ? <Spinner /> : "Select City"}
      </MenuButton>
      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select City</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cities.map((city) => (
              <Button
                key={city.id}
                margin={1}
                onClick={() => onClickCity(city)}
              >
                {city.name}
              </Button>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Menu>
  );
};

export default CityMenu;
