import axios from "axios";

export const getProduct = () => {
    return axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data)
        .catch((err) => {
            console.error(err);
            return [];
        });
}
