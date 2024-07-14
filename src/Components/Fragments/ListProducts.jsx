import { useState } from "react";
import CardProduct from "../Elements/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu",
    price: 1000000,
    image: "sepatu.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
  {
    id: 2,
    name: "Sepatu Kemaren",
    price: 2000000,
    image: "bw.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
  {
    id: 3,
    name: "Sepatu Hari Ini",
    price: 500000,
    image: "sepatu.png",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deserunt similique laudantium quae, esse amet commodi sunt consequuntur. Id, officiis aliquid? Voluptate temporibus eligendi ad!",
  },
];

function ListProducts() {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddCart = (id) => {
    if (cart.some((item) => item.id === id)) {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="title flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header>{product.image}</CardProduct.Header>
              <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
              <CardProduct.Footer handleAddCart={handleAddCart} id={product.id}>
                {product.price}
              </CardProduct.Footer>
            </CardProduct>
          ))}
        </div>

        <div className="col-span-1">
          <h1 className="text-2xl font-bold mb-2">Cart</h1>

          <table className="table-auto w-full text-sm">
            <thead className="text-start">
              <th className="text-start">Product</th>
              <th className="text-start">Price</th>
              <th className="text-start">Quantity</th>
              <th className="text-start">Total</th>
            </thead>

            <tbody className="">
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "idr", minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                    <td className="text-center">{item.qty}</td>
                    <td>{(product.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "idr", minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListProducts;
