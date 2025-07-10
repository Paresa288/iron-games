import { Login } from "../components/auth";
import { PageLayout } from "../components/layouts";

function LoginPage() {
  return (
    <PageLayout>
      <h3>Login</h3>
      <Login />
    </PageLayout>
  )
}

export default LoginPage;