import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Flex,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

const LandingPage: React.FC = () => {
  const products: Product[] = [
    {
      name: "Sofa",
      description: "Comfortable",
      price: 10,
      image: "",
    },
    {
      name: "Another Sofa",
      description: "Comfortable",
      price: 10,
      image: "",
    },
    {
      name: "Third Sofa",
      description: "Comfortable",
      price: 10,
      image: "",
    },
    {
      name: "Greenest Sofa",
      description: "Comfortable",
      price: 10,
      image: "",
    },
    {
      name: "Sofa",
      description: "Comfortable",
      price: 10,
      image: "",
    },
  ];

  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      spacing={5}
      justifyContent="center"
      p={8}
      m={3}
      // display={{ base: "flex", md: "grid" }}
      //   maxWidth={{ base: "18rem", md: "18rem" }}
    >
      {products.map((prod) => (
        <Card
          bg="#212529"
          borderRadius="15px 15px"
          fontFamily="Roboto, sans-serif"
          width="18rem"
          maxW="sm"
          mr={6}
          mb={6}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="6">
              <Heading size="md">{prod.name}</Heading>
              <Text>{prod.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default LandingPage;
