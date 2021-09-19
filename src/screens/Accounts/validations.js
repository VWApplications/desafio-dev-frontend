export const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "O email é obrigatório.";
  }

  if (!values.password) {
    errors.password = "A senha é obrigatória.";
  }

  return errors;
};
