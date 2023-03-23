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
  currentCity: string;
  onClickCity: (city: City) => void;
}

const CityMenu = ({ currentCity, onClickCity }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cities, error, isLoading } = useCity();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} onClick={onOpen}>
        {isLoading ? <Spinner /> : currentCity ? currentCity : "Select City"}
      </MenuButton>
      <Modal isOpen={isOpen} size="6xl" onClose={onClose} motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select City</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cities.map((city) => (
              <Button
                key={city.id}
                margin={1}
                onClick={() => {
                  onClickCity(city);
                  onClose();
                }}
              >
                {city.name}
              </Button>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Menu>
  );
};

export default CityMenu;
