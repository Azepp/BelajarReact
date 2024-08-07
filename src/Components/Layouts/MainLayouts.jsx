import Navbar from "../Fragments/Navbar";

function AfterLayouts(props) {
  const { children } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-8 my-4">{children}</div>
    </>
  );
}

export default AfterLayouts;
