import { Link } from "react-router-dom";

function CardProduct(props) {
  const { children, detail } = props;
  return (
    <Link to={detail}>
      <div className="rounded-md shadow-md flex flex-col p-3 bg-white tracking-tight">{children}</div>
    </Link>
  );
}

function Header(props) {
  const { children } = props;
  {
    return <img src={`../public/image/${children}`} alt="" className="object-cover rounded-md" />;
  }
}

function Body(props) {
  const { name, children } = props;
  return (
    <div className="flex flex-col gap-1 mt-2">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="truncate text-gray-400">{children}</p>
    </div>
  );
}

function Footer(props) {
  const { children } = props;
  return (
    <div className="footer flex justify-between items-end mt-4">
      <div className="color gap-1 flex flex-col">
        <p className="text-gray-400">Color</p>
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-green-500 border border-slate-900 rounded-full"></div>
          <div className="w-6 h-6 bg-red-500 border border-slate-900 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-500 border border-slate-900 rounded-full"></div>
        </div>
      </div>
      <h2 className="text-lg font-bold">{children}</h2>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
