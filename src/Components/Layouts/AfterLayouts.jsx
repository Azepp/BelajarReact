import NavbarAfter from "../Fragments/NavbarAfter";

function AfterLayouts(props) {
  const { children } = props;
  return (
    <>
      <NavbarAfter></NavbarAfter>
      <div className="mx-12 my-4">{children}</div>
    </>
  );
}

export default AfterLayouts;
