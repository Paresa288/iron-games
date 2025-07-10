import { useForm } from "react-hook-form";
import * as AuthAPI from "../../../services/auth-api";
import { useAuth } from "../../../contexts/auth-context";
import { useNavigate } from "react-router";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: "all" });

  
  const handleUserRegister = async (user) => {
    try {
      user = await AuthAPI.register(user)
      login(user);
      navigate("/");
    } catch (error) {
      console.debug(error);
      if (error.response?.status === 400) {
        const { errors } = error.response.data;
        Object.keys(errors)
          .forEach((field) => setError(field, { type: "custom", message: errors[field] }) )
      }
    }
  }
  
  return (
  <form onSubmit={handleSubmit(handleUserRegister)}>
    {/*NAME*/}
    <div className="input-group mb-1">
      <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
      <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="Name" {...register("name", {
        required: "User name is required"
      })} />
      {errors.name && ( <div className="invalid-feedback">{errors.name.message}</div> )}
    </div>
    {/*EMAIL*/}
    <div className="input-group mb-1">
      <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
      <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="user@example.org" {...register("email", {
        required: "User email is required"
      })} />
      {errors.email && ( <div className="invalid-feedback">{errors.email.message}</div> )}
    </div>
    {/*USERNAME*/}
    <div className="input-group mb-1">
      <span className="input-group-text"><i className="fa fa-tag fa-fw"></i></span>
      <input type="text" className={`form-control ${errors.username ? "is-invalid" : ""}`} placeholder="username" {...register("username", {
        required: "User username is required"
      })} />
      {errors.username && ( <div className="invalid-feedback">{errors.username.message}</div> )}
    </div>
    {/*PASSWORD*/}
    <div className="input-group mb-1">
      <span className="input-group-text"><i className="fa fa-tag fa-fw"></i></span>
      <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} placeholder="*****" {...register("password", {
        required: "User password is required"
      })} />
      {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div> )}
    </div>

    <div className="d-grid mt-2">
      <button className="btn btn-primary" type="submit">Register</button>
    </div>
  </form>
  );
}

export default Register;