import axios from "axios";

const API_URL = "http://localhost:3001/products";

export async function getProducts() {
    const res = await axios.get(API_URL);
    return res.data;
}

export async function getProductById(id) {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
}

export async function addProduct(product) {
    const res = await axios.post(API_URL, product);
    return res.data;
}

export async function deleteProduct(id) {
    await axios.delete(`${API_URL}/${id}`);
}
