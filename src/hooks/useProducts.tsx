// useProducts.tsx
import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const useProducts = () => {
  return useQuery("products", fetchProducts);
};
