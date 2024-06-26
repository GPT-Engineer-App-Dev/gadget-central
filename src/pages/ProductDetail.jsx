import { Box, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$99", description: "Noise-cancelling headphones", image: "https://via.placeholder.com/150" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Text fontWeight="bold" fontSize="2xl" mt={4}>
        {product.name}
      </Text>
      <Text fontSize="xl" color="gray.500">
        {product.price}
      </Text>
      <Text mt={4}>{product.description}</Text>
    </Box>
  );
};

export default ProductDetail;