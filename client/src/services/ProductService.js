import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts() {
    return apiClient.get("/api/v1/products").then(resp => resp.data);
  },
  getProduct(id) {
    return apiClient.get("/api/v1/products/" + id);
  },
  postProduct(product) {
    return apiClient.post("/api/v1/products", product);
  }
};