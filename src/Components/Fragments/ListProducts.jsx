import React from "react";
import CardProduct from "../Elements/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu",
    price: "Rp1.000.000",
    image: "sepatu.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
  {
    id: 2,
    name: "Sepatu Kemaren",
    price: "Rp2.000.000",
    image: "bw.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
  {
    id: 3,
    name: "Sepatu Hari Ini",
    price: "Rp2.000.000",
    image: "sepatu.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
  {
    id: 4,
    name: "Sepatu Hari Ini",
    price: "Rp2.000.000",
    image: "sepatu.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
];

function ListProducts() {
  return (
    <div className="mb-6">
      <div className="title flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header>{product.image}</CardProduct.Header>
            <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer>{product.price}</CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
