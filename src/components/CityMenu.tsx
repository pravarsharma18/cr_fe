import { Menu, MenuButton, Button, useDisclosure } from "@chakra-ui/react";
import useCity, { City } from "../hooks/useCity";
import { Spinner } from "@chakra-ui/react";
import CityModal from "./CityModal";
import CustomToast from "./CustomToast";

interface Props {
  modalOpen: boolean;
  currentCity: string;
  onClickCity: (city: City) => void;
}

const CityMenu = ({ currentCity, modalOpen, onClickCity }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cities, error, isLoading } = useCity();
  if (error) return <CustomToast message={error} />;
  return (
    <Menu>
      <MenuButton as={Button} onClick={onOpen}>
        {isLoading ? <Spinner /> : currentCity ? currentCity : "Select City"}
      </MenuButton>
      <CityModal
        isOpen={isOpen || modalOpen}
        onClose={onClose}
        onClickCity={onClickCity}
        cities={cities}
      />
    </Menu>
  );
};

export default CityMenu;
