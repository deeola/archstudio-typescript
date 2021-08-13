interface ValidateSigns {
  name: string;
  message: string;
  email: string;
}

const ValidateSign = (values: ValidateSigns) => {
  let errors: { [name: string]: any } = {};

  //Form Validations

  if (!values.name) {
    errors.name = "Name Required";
  }

  if (!values.message) {
    errors.message = "message required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
};

export default ValidateSign;
