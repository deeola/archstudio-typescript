import { useEffect, useState } from "react";

interface ValidateSigns {
  name: string;
  message: string;
  email: string;
}

const useForm = (
  callback: () => void,
  validate: (values: ValidateSigns) => {
    [name: string]: any;
  }
) => {
  //Form Input  initial state
  const [values, setValues] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  //ERRORS, isSubmitting and submitted states
  const [errors, setErrors] = useState<{ [name: string]: any }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  //Display success function and remove after 3 seconds
  const showSuccess: () => void = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  //handle change event function
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //handle submit function
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  //useEffect hook for submitting and checking for errors
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();

      showSuccess();
      setValues({
        name: "",
        email: "",
        message: "",
      });
    }

    //eslint-disable-next-line
  }, [errors]);

  return {
    submitted,
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
