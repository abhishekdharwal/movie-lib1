import React, { useState } from "react";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import LoginCard from "../LoginCard/LoginCard";
import styles from "./LoginPage.module.css";
import api from "../../config/axios";
import { useDispatch } from "react-redux";
import { updateActive, updateAuth } from "../../store/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const data = {
    username: username,
    password: password,
  };

  const handleChange = () => {
    dispatch(updateActive(false));
  };

  const handleSubmit = async () => {
    try {
      await api.post("https://movie--lib.herokuapp.com/api/login", data).then(
        (res) => {
          console.log(res);
          dispatch(updateActive(true));
          dispatch(updateAuth(true));
        },
        (err) => {
          console.log(err.response.status);
          if (err.response.status === 400) {
            dispatch(updateActive(false));
          } else {
            alert("wrong password");
            dispatch(updateActive(true));
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.LoginPage}>
      <LoginCard title="Login to your account" name="Login">
        <InputForm
          type="text"
          title="Email"
          onChange={(e) => setusername(e.target.value)}
        />
        <InputForm
          type="password"
          title="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button title="Login" onClick={handleSubmit} />
        <div className={styles.line}>
          {/* <ColoredLine color="#282846" /> */}
          <span>
            <strong>OR</strong>
          </span>
          {/* <ColoredLine color="#282846" /> */}
        </div>
        <Button title="Sign Up" onClick={handleChange} />
      </LoginCard>
    </div>
  );
};

export default LoginPage;
