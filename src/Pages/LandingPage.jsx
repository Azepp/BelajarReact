import FirstSection from "../Components/Fragments/FirstSection";
import ListProducts from "../Components/Fragments/ListProducts";
import LandingLayouts from "../Components/Layouts/LandingLayouts";

function LandingPage() {
  return (
    <LandingLayouts>
      <FirstSection></FirstSection>
      <ListProducts></ListProducts>
    </LandingLayouts>
  );
}

export default LandingPage;
