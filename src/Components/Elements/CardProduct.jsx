/* eslint-disable react/prop-types */
import Button from "./Button/Button";

function CardProduct(props) {
  const { children } = props;
  return <div className="rounded-md shadow-lg flex flex-col p-3 bg-white tracking-tight">{children}</div>;
}

function Header(props) {
  const { children } = props;
  {
    return <img src={`../image/${children}`} alt="" className="object-contain h-1/2 sm:h-72 rounded-md p-6 bg-blue-200" />;
  }
}

function Body(props) {
  const { name, children } = props;
  return (
    <div className="flex flex-col gap-1 mt-2">
      <h1 className="text-md sm:text-xl font-bold">{name}</h1>
      <p className="truncate text-gray-400 text-sm sm:text-md">{children}</p>
    </div>
  );
}

function Footer(props) {
  const { children, handleAddCart, id } = props;
  return (
    <div className="footer flex justify-between items-center mt-4">
      <h2 className="sm:text-lg font-bold text-sm">{children.toLocaleString("id-ID", { style: "currency", currency: "idr", minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h2>
      <Button variant="bg-blue-500" text="white" size="1/2" textSize="sm" onClick={() => handleAddCart(id)}>
        Add Cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
