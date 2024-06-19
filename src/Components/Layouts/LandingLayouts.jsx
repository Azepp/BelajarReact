import Navbar from "../Fragments/Navbar";

function LandingLayouts(props) {
  const { children } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-12">{children}</div>
    </>
  );
}

export default LandingLayouts;
