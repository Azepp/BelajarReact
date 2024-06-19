import NavbarBefore from "../Fragments/NavbarBefore";

function LandingLayouts(props) {
  const { children } = props;
  return (
    <>
      <NavbarBefore></NavbarBefore>
      <div className="mx-12">{children}</div>
    </>
  );
}

export default LandingLayouts;
