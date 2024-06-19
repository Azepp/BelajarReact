import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayouts";

function RegisterPage() {
  return (
    <AuthLayout title="Register your account" desc="Hi👋, Please enter your email and password" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
}

export default RegisterPage;
