import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Elements/Button/Button";
import CardProduct from "../Components/Fragments/CardProduct";

// Mengubah `products` menjadi array
const products = [
  {
    id: 1,
    name: "Sepatu",
    price: "Rp1.000.000",
    image: "sepatu.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
    detail: "",
  },
  {
    id: 2,
    name: "Sepatu Kemaren",
    price: "Rp2.000.000",
    image: "sepatu.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
    detail: "",
  },
  // Tambahkan produk lain di sini jika diperlukan
];

function Products() {
  const location = useLocation();

  return (
    <div className="mx-12 my-6">
      <div className="title flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {location.pathname !== "/" && (
          <Button variant="bg-red-500" text="white" size="w-1/2" to="/">
            Logout
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <CardProduct key={product.id} detail={product.detail}>
            <CardProduct.Header>{product.image}</CardProduct.Header>
            <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer>{product.price}</CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

export default Products;
