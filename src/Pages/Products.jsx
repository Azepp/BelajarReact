import ListProducts from "../Components/Fragments/ListProducts";
import AfterLayouts from "../Components/Layouts/AfterLayouts";

function Products() {
  return (
    <AfterLayouts>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <ListProducts></ListProducts>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Cart</h1>
        </div>
      </div>
    </AfterLayouts>
  );
}

export default Products;
