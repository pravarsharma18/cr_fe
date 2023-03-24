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
import CityModal from "./CityModal";

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
      <CityModal
        isOpen={isOpen}
        onClose={onClose}
        onClickCity={onClickCity}
        cities={cities}
      />
    </Menu>
  );
};

export default CityMenu;
