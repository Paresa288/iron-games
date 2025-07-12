import { useForm } from "react-hook-form";
import * as CheapSharkApi from  "../../../services/cheapshark-api"

function Alerts({ gameId }) {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({ mode: "all" });

  const handleSetAlert = async (data) => {
    const { price, email } = data
    try {
      await CheapSharkApi.setAlert(email, gameId, price)
      console.log("10", data)
    } catch (error){
      console.debug(error);
      if (error.response?.status === 400) {
        const { errors } = error.response.data
        Object.keys(errors)
          .forEach((field) => setError(field, { type: "custom", message: errors[field] }));
      }
    }
    reset();
  }
  
  return (
    <form onSubmit={handleSubmit(handleSetAlert)}>
      {/*PRICE*/}
      <div className="input-group mb-1">
        <span className="input-group-text"><i className="fa fa-dollar fa-fw"></i></span>
        <input type="number" name="price" step=".01" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="$" {...register("price", {
          required: "Set a price"
        })} />
        {errors.email && ( <div className="invalid-feedback">{errors.email.message}</div> )}
      </div>
      {/*EMAIL*/}
      <div className="input-group mb-1">
        <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
        <input type="email" name="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="user@example.org" {...register("email", {
          required: "User email is required"
        })} />
        {errors.email && ( <div className="invalid-feedback">{errors.email.message}</div> )}
      </div>
      <div className="d-grid mt-2">
        <button className="btn btn-primary" type="submit">Set Alert</button>
      </div>
    </form>
  ) 
}

export default Alerts;