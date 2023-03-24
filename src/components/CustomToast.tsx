import { useToast, Box } from "@chakra-ui/react";

interface Props {
  message: string;
  status?: "success" | "info" | "warning" | "error" | "loading";
  position?:
    | "top"
    | "top-right"
    | "top-left"
    | "bottom"
    | "bottom-right"
    | "bottom-left";
}
const CustomToast = ({
  message,
  status = "success",
  position = "top-right",
}: Props) => {
  const toast = useToast();
  return (
    <Box>
      {toast({
        title: message,
        position: position,
        status: status,
        isClosable: true,
      })}
    </Box>
  );
};

export default CustomToast;
