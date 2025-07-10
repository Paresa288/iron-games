import { useForm } from "react-hook-form";
import * as AuthApi from "../../../services/auth-api";
import { useAuth } from "../../../contexts/auth-context";
import { useNavigate } from "react-router"

function Login () {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { register, handleSubmit, setError, formState: { errors }} = useForm({ mode: "all"}) 

  const handleUserLogin = async (user) => {
    try {
      user = await AuthApi.login(user.username, user.password);
      login(user);
      navigate("/profile");
    } catch (error){
      console.error(error)
      if (error.response?.status === 401) {
        const { errors } = error.response.data;
        Object.keys(errors)
          .forEach((field) => setError(field, { type: "custom", message: errors[field] }))
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(handleUserLogin)}>
      {/* USERNAME */}
      <div className="input-group mb-1">
        <span className="input-group-text"><i className="fa fa-tag fa-fw"></i></span>
        <input 
          type="text" 
          className={`form-control ${errors.username ? "is-invalid" : ""}`} 
          placeholder="username" {...register("username", { required: "User username is required"})}
        />
        {errors.username && ( <div className="invalid-feedback">{errors.username.message}</div> )}
      </div>
      {/* PASSWORD */}
      <div className="input-group mb-1">
        <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
        <input 
          type="password" 
          className={`form-control ${errors.password ? "is-invalid" : ""}`} 
          placeholder="******" {...register("password", { required: "User password is required"})}
        />
        {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div> )}
      </div>
      <div className="d-grid mt2">
        <button className="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  );
}


export default Login;