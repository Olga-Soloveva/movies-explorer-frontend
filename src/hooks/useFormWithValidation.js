import { useState } from "react";
import { validate } from "react-email-validator";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidInputs, setIsValidInputs] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    if (name === "email") {
      setIsValidInputs({ ...isValidInputs, [name]: validate(value) });
    } else {
      setIsValidInputs({ ...isValidInputs, [name]: target.validity.valid });
    }
    setIsValidForm(target.closest("form").checkValidity());
  };

  return {
    values,
    handleChange,
    errors,
    isValidInputs,
    isValidForm,
  };
}
