import { useEffect, useState } from "react";

const useSetCity = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [city, setCity] = useState("");
  useEffect(() => {
    const cityInLocalStorage = localStorage.getItem("city");
    if (cityInLocalStorage) {
      setCity(cityInLocalStorage);
      setModelOpen(false);
    } else {
      setModelOpen(true);
    }
  }, []);
  return { modelOpen, city, setModelOpen, setCity };
};

export default useSetCity;
