import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import useRestaurant from "../hooks/useRestaurant";
interface Props {}

const Restaurants = () => {
  const { data, error, isLoading, setData } = useRestaurant();
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {data.map((restra) => (
          <Card key={restra.id}>
            <CardBody>{restra.name}</CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Restaurants;
