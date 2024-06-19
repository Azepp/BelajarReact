import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <AuthLayout title="Login to your account" desc="Welcome Back👋, Please enter your email and password" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
}

export default LoginPage;
