import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface City {
  id: number;
  name: string;
}

const useCity = () => useData<City>("cities/");

export default useCity;
