import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { City } from "../hooks/useCity";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onClickCity: (city: City) => void;
  cities: City[];
}

const CityModal = ({ isOpen, onClose, onClickCity, cities }: Props) => {
  return (
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
  );
};

export default CityModal;
