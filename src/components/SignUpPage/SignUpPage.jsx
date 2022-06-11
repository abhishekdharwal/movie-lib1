import React, { useState } from "react";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import LoginCard from "../LoginCard/LoginCard";
import styles from "./SignUpPage.module.css";
import api from "../../config/axios";
import { useDispatch } from "react-redux";
import { updateActive, updateAuth } from "../../store/authSlice";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const [fname, setfname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const data = {
    name: fname,
    username: username,
    password: password,
  };

  const handleChange = () => {
    dispatch(updateActive(true));
  };

  const handleSubmit = async () => {
    try {
      await api
        .post("https://movie--lib.herokuapp.com/api/register", data)
        .then(
          (res) => {
            console.log(res);
            dispatch(updateActive(true));
            dispatch(updateAuth(true));
          },
          (err) => {
            console.log(err.response.status);
            if (err.response.status === 400) {
              dispatch(updateActive(false));
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
          title="Your Name"
          onChange={(e) => setfname(e.target.value)}
        />
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
        <Button title="Sign Up" onClick={handleSubmit} />
        <div className={styles.line}>
          {/* <ColoredLine color="#282846" /> */}
          <span>
            <strong>OR</strong>
          </span>
          {/* <ColoredLine color="#282846" /> */}
        </div>
        <Button title="Login" onClick={handleChange} />
      </LoginCard>
    </div>
  );
};

export default SignUpPage;
