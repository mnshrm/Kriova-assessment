import React, { useState } from "react";
import { Grid } from "@mui/material";
import MyComponent, {
  Banner,
  headingStyle,
  supportStyle,
  Dot,
  VerticalLine,
  HorizontalLine,
} from "./Styles.js";
import LogInForm from "./LogIn/LogInForm.js";
import SignUpForm from "./SignUP/SignUpForm.js";
import ForgotPasswordForm from "./ForgotPassword/ForgotPasswordForm.js";
const Form = (props) => {
  const [form, setForm] = useState(
    <LogInForm onClick={onClick} onAuth={props.onAuthentication} />
  );

  function onClick(a) {
    if (a === 1)
      setForm(<SignUpForm onClick={onClick} onAuth={props.onAuthentication} />);
    else if (a === 2)
      setForm(<LogInForm onLogIn={props.onAuthentication} onClick={onClick} />);
    else if (a === 3)
      setForm(
        <ForgotPasswordForm onClick={onClick} onAuth={props.onAuthentication} />
      );
  }

  return (
    <MyComponent className="bg">
      <Grid container style={{ height: "90%" }}>
        <Grid item md={6}>
          <Banner>
            <div>
              <Dot />
              <Dot style={{ left: "220px" }} />
              <Dot style={{ left: "260px" }} />
              <VerticalLine />
              <HorizontalLine />
              <h1 style={headingStyle}>Kriova</h1>
              <p style={supportStyle}>
                ❝Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto vel quae, aspernatur iste perspiciatis alias
                distinctio❞
              </p>
              <Dot />
            </div>
          </Banner>
        </Grid>
        {form}
      </Grid>
    </MyComponent>
  );
};

export default Form;
