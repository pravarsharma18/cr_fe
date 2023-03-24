import { useToast } from "@chakra-ui/react";

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
const Toast = ({
  message,
  status = "success",
  position = "top-right",
}: Props) => {
  const toast = useToast();
  return toast({
    title: message,
    position: position,
    status: status,
    isClosable: true,
  });
};

export default Toast;
