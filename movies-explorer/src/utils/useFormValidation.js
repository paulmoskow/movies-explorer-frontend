import React from "react";

export function useFormValidation() {

  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  })

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

    setFormValue({
      ...formValue,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: errorMessage
    });

    setIsValid(target.closest('form').checkValidity());
  }, [formValue, errors]);

  const resetForm = React.useCallback(
    (newFormValue={}, newErrors={}, newIsValid = false) => {
      setFormValue(newFormValue);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValue, setErrors, setIsValid]
  );

  return { formValue, handleChange, errors, isValid, resetForm };
}
