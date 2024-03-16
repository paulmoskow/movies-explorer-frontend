import React from "react";

export function useFormValidation() {

  const [formValues, setFormValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = React.useCallback((e) => {
    const target = e.target;
    const { name, value } = target;

    let errorMessage = '';
    if (name === 'name') {
      if (!/^[A-Za-zА-Яа-я -]+$/.test(value)) {
        errorMessage = 'Имя введено некорректно, попробуйте еще раз';
      }
    } else if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = 'Почта введена некорректно, попробуйте еще раз';
      }
    } else if (name === 'password') {
        if (value.length < 4) {
          errorMessage = 'Пароль должен содержать не менее 4 символов';
        }
    }

    setFormValues(formValues => ({
      ...formValues,
      [name]: value
    }));

    setErrors(errors => ({
      ...errors,
      [name]: errorMessage
    }));

    setIsValid(target.closest('form').checkValidity());
  }, [formValues, errors]);

  const resetForm = React.useCallback(
    (newFormValues={}, newErrors={}, newIsValid = false) => {
      setFormValues(newFormValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValues, setErrors, setIsValid]
  );

  return { formValues, handleChange, errors, isValid, resetForm };
}
