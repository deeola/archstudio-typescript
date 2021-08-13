import React, { FC } from "react";
import useForm from "./useForm";
import validate from "./ValidateSign";
import iconArrow from "../../assets/icons/icon-arrow.svg";

const Connect: FC = () => {
  // Alert Function to be passed as a callback
  const alertSuccess: () => void = () => {};

  // Import Values from useForm Hooks
  const { handleChange, handleSubmit, values, errors, submitted } = useForm(
    alertSuccess,
    validate
  );

  return (
    <section className="connectSection">
      <div className="connectHeader">
        <h3>Connect with us</h3>
      </div>

      <form onSubmit={handleSubmit} noValidate className="formDiv">
        {submitted && (
          <div className="Alertsuccess">
            Thanks for Contacting us! We will get back to you shortly.
          </div>
        )}
        <div className="formControl">
          <div className="labelError">
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={values.name}
            id="name"
            placeholder="Name"
          ></input>
        </div>
        <div className="formControl">
          <div className="labelError">
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={values.email}
            id="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="formControl">
          <div className="labelError">
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <input
            onChange={handleChange}
            type="textarea"
            name="message"
            value={values.message}
            id="message"
            placeholder="Message"
          ></input>
        </div>
        <button type="submit">
          <img alt="enterbutton" src={iconArrow}></img>
        </button>
      </form>
    </section>
  );
};

export default Connect;
