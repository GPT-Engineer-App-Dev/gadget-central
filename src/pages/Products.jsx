import { Box, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$99", image: "https://via.placeholder.com/150" },
];

const Products = () => (
  <Box p={4}>
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {sampleProducts.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <Box p={6}>
            <Text fontWeight="bold" fontSize="xl">
              {product.name}
            </Text>
            <Text>{product.price}</Text>
            <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500">
              View Details
            </Link>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;