import useData from "./useData";

export interface Restaurant {
  id: number;
  name: string;
  open_time: string;
  close_time: string;
}

export interface FetchRestaurantResponse {
  count: number;
  results: Restaurant[];
}

const useRestaurant = () => useData<Restaurant>("restra/");

export default useRestaurant;
