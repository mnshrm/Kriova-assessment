import { TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  btn,
  inputField,
  MyFormBg,
  headingDiv,
  SignUpFormHeading,
  supportingText,
  SignUpFormBg,
} from "./styles.js";

let initialFinalValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = (props) => {
  const [values, setValues] = useState(initialFinalValues);
  const [ifError, setError] = useState({ name: "", isThere: false });
  const [style, setStyle] = useState({
    textDecoration: "none",
    cursor: "hand",
  });

  function formChange(e) {
    let { name, value } = e.target;

    setValues((pv) => {
      return {
        ...pv,
        [name]: value,
      };
    });
  }

  function onBtnClick() {
    if (!values.email.includes("@")) {
      setError({ name: "email", isThere: true });
      setValues(initialFinalValues);
    } else if (values.password != values.confirmPassword) {
      setError({ name: "password", isThere: true });
      setValues(initialFinalValues);
    } else if (
      !values.email.includes("@") &&
      values.password != values.confirmPassword
    ) {
      setError({ name: "both", isThere: true });
      setValues(initialFinalValues);
    } else {
      props.onAuth({
        email: "asysnsrs665@gmail.com",
        password: "dummyPassword",
      }); //This has been put here for assessment only as a placeholder, sign up functionality will be added in future versions.
    }
  }

  return (
    <>
      <Grid item md={6}>
        <MyFormBg>
          <div style={headingDiv}>
            <h1 style={SignUpFormHeading}>Sign Up</h1>
            <br />
            <span style={supportingText}>
              Already a user ?{" "}
              <span
                onMouseOver={() =>
                  setStyle({ textDecoration: "underline", cursor: "pointer" })
                }
                onMouseLeave={() =>
                  setStyle({ textDecoration: "none", cursor: "default" })
                }
                style={style}
                onClick={() => props.onClick(2)}
              >
                Log in here
              </span>
            </span>
          </div>
          <SignUpFormBg>
            <form autoComplete="off">
              <div style={inputField}>
                <TextField
                  fullwidth={"true"}
                  value={values.name}
                  variant="standard"
                  type={"text"}
                  label="Name"
                  onChange={formChange}
                  name="name"
                />
              </div>
              <div style={inputField}>
                <TextField
                  error={
                    ifError.isThere &&
                    (ifError.name === "email" || ifError.name === "both")
                  }
                  variant="standard"
                  value={values.email}
                  type={"email"}
                  label="Email"
                  name="email"
                  onChange={formChange}
                  helperText={
                    ifError.isThere &&
                    (ifError.name === "email" || ifError.name === "both") &&
                    "email must contain '@'"
                  }
                />
              </div>
              <div style={inputField}>
                <TextField
                  variant="standard"
                  error={
                    ifError.isThere &&
                    (ifError.name === "password" || ifError.name === "both")
                  }
                  value={values.password}
                  type={"password"}
                  label="Password"
                  name="password"
                  onChange={formChange}
                  helperText={
                    ifError.isThere &&
                    (ifError.name === "password" || ifError.name === "both") &&
                    "Password must be same"
                  }
                />
              </div>
              <div style={inputField}>
                <TextField
                  variant="standard"
                  error={
                    ifError.isThere &&
                    (ifError.name === "password" || ifError.name === "both")
                  }
                  type={"password"}
                  label="Confirm password"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onChange={formChange}
                  helperText={
                    ifError.isThere &&
                    (ifError.name === "password" || ifError.name === "both") &&
                    "Password must be same"
                  }
                />
              </div>
              <Button style={btn} variant="contained" onClick={onBtnClick}>
                Sign me up
              </Button>
            </form>
          </SignUpFormBg>
        </MyFormBg>
      </Grid>
    </>
  );
};

export default SignUpForm;
