import styled from "@emotion/styled";

const inputField = {
  margin: "10px",
  width: "100%",
};

const btn = {
  marginLeft: "10px",
};

const MyFormBg = styled("div")({
  height: "100%",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  display: "grid",
  gridTemplateRows: "30% 70%",
  backgroundColor: "white",
});

const headingDiv = {
  padding: "10% 10% 0",
  paddingBottom: "0",
  display: "inline-block",
};

const SignUpFormHeading = {
  display: "inline-block",
  marginLeft: "0",
  fontSize: "40px",
  fontFamily: "'Volkhov', serif",
  fontWeight: "400",
  marginBottom: "0",
};

const supportingText = {
  fontSize: "16px",
  color: "Gray",
};

const SignUpFormBg = styled("div")({
  padding: "0 10% 10%",
});

export {
  inputField,
  btn,
  MyFormBg,
  headingDiv,
  SignUpFormHeading,
  supportingText,
  SignUpFormBg,
};
