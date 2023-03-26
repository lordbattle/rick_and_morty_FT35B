import React, { useState } from "react";
import validate from "./validate";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [evento.target.name]: evento.target.value,
      })
    );
    console.log(errors);
  };

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="username"
        value={userData.username}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <label htmlFor="password">Password</label>
      <input
        onChange={handleInputChange}
        type="password"
        name="password"
        value={userData.password}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <button>LOGIN</button>
    </form>
  );
};

export default Form;
