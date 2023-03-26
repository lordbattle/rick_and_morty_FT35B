const validate = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (!userData.username) {
    errors.username = "Este campo no puede estar vacio";
  } else if (!regexEmail.test(userData.username)) {
    errors.username = "El email es inválido";
  } else if (userData.username.length > 35) {
    errors.username = "El email no puede superar los 35 caracteres";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un numero";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validate;
